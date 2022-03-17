import React, { useState, useEffect } from 'react'
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useExpanded,
} from 'react-table'
import './customize.css'
import TableLoader from '../Loaders/TableLoader'
// import { SwalAlert } from '../../../utils/swalAlertAndConfirm'

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  },
)

export const Table = React.memo(
  (props) => {
    //Here you define state to handle pageIndex
    const [pageChange, setpageChange] = useState(1)
    const [singleRowSelectId, setSingleRowSelectId] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const pagination = props.pagination
    const handlePageChange = props.handlePageChange
    const handlePerRowChange = props.handlePerRowsChange
    const handleRowClicked = props.handleRowClicked
    const column = props.columns
    const data = props.data
    // const totalPages = props.totalPages;
    const totalCount = props.totalCount
    const paginationindex = [10, 20, 30, 40, 50, 100, 500, 1000]
    // const fixedHeaderFooter = props.fixedHeaderFooter;
    const rowSelection = props.rowSelection
    const footer = props.footer
    const headColors = props.headerColors
    const header = props.header

    const columns = column

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      prepareRow,
      visibleColumns,
      rows,
      page,
      setPageSize,
      state: { pageSize },
      selectedFlatRows,
      state: { expanded },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      useSortBy,
      useExpanded,
      usePagination,
      useRowSelect,

      (hooks) => {
        if (rowSelection) {
          hooks.visibleColumns.push((columns) => [
            {
              id: 'selection',
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              Cell: ({ row }) => (
                <div>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
            ...columns,
          ])
        }
      },
    )

    let totalPage =
      totalCount === 0
        ? 1
        : (totalCount / pageSize) % 1 === 0
        ? totalCount / pageSize
        : parseInt(totalCount / pageSize) + 1

    const Pages = (e, status) => {
      e.preventDefault()
      if (status === 'previous') {
        // previousPage();
        setpageChange(pageChange - 1)
        if (handlePageChange) {
          handlePageChange(pageChange - 1)
        } else {
          // SwalAlert('Please Contact BellMedex', '', 'info')
        }
      } else if (status === 'forward') {
        // nextPage();

        setpageChange(pageChange + 1)
        if (handlePageChange) {
          handlePageChange(pageChange + 1)
        } else {
          // SwalAlert('Please Contact BellMedex', '', 'info')
        }
      } else if (status === 'gotonext') {
        // gotoPage(0);
        let totalPage =
          (totalCount / pageSize) % 1 === 0
            ? totalCount / pageSize
            : parseInt(totalCount / pageSize) + 1
        setpageChange(totalPage)
        if (handlePageChange) {
          handlePageChange(totalPage)
        } else {
          // SwalAlert('Please Contact BellMedex', '', 'info')
        }
      } else if (status === 'gotopre') {
        // gotoPage(pageCount - 1);
        setpageChange(1)
        if (handlePageChange) {
          handlePageChange(1)
        } else {
          // SwalAlert('Please Contact BellMedex', '', 'info')
        }
      } else {
      }
    }

    useEffect(() => {
      if (handleRowClicked) {
        rowSelected()
      }

      // table loader will hide after data is receieved
      //  if not data is there it will hide loader after 10 seconds
      if (isLoading === true && (page.length > 0 || rows.length > 0)) {
        setIsLoading(false)
      } else if (page.length === 0 || rows.length === 0) {
        setIsLoading(true)

        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }, [selectedFlatRows])

    useEffect(() => {
      controlPagination()
    }, [props.toRestTable])

    const rowSelected = () => {
      handleRowClicked(selectedFlatRows)
    }

    const handleRowSingleRowSelect = (value, cell) => {
      
      if (value.id === singleRowSelectId) {
        setSingleRowSelectId('')
      } else {
        setSingleRowSelectId(value.id)
        if (props.handleSingleRowClicked) {
          props.handleSingleRowClicked(value, cell.value, cell.column.Header)
        }
      }
      if(props.rowClicked){
        props.rowClicked(value)
      }
     
    }
    // to handle the pagination..
    const controlPagination = () => {
      setpageChange(1)
      setPageSize(10)
    }

    let rowBody = pagination ? page : rows

    return (
      <>
        <div
          className={
            props.dynamicClass ? props.dynamicClass : 'tableheighpatientinner'
          }
          
        >
          <div className="table-scroll">
            <table className="table border" {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup, i) => {
                  return (
                    <tr
                      key={i}
                      {...headerGroup.getHeaderGroupProps()}
                      style={{ textAlign: 'left' }}
                    >
                      {headerGroup.headers.map((column, i) => {
                        return (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps(),
                            )}
                            style={{
                              backgroundColor:
                                headColors && headColors.length > 0
                                  ? headColors[i].color === ''
                                    ? ''
                                    : headColors[i].color
                                  : null,

                              width:
                                column.width !== undefined
                                  ? column.width
                                  : '100%',
                            }}
                          >
                            {headerGroup.headers.length - 1 === i ? (
                              column.render('Header')
                            ) : (
                              <>
                                {column.render('Header')}
                                <span>
                                  {column.isSorted
                                    ? column.isSortedDesc
                                      ? ' 🔽'
                                      : ' 🔼'
                                    : null}
                                </span>
                              </>
                            )}
                          </th>
                        )
                      })}
                    </tr>
                  )
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {isLoading || rowBody.length === 0 ? (
                  <tr>
                    <td colSpan="9">
                      <TableLoader
                        isLoading={
                          props.isLoading ? props.isLoading : isLoading
                        }
                        dataLength={rowBody.length}
                        moduleName={header}
                        customMessage={props.customMessage}
                      />
                    </td>
                  </tr>
                ) : (
                  rowBody.map((row, k) => {
                    prepareRow(row)

                    return (
                      <React.Fragment
                        key={k}
                        // {...row.getRowProps()}
                      >
                        <tr
                          {...row.getRowProps()}
                          style={{
                            textAlign: 'left',
                            backgroundColor:k===0 && singleRowSelectId === "" ? 'rgba(245, 240, 240, 0.884)':
                              singleRowSelectId === row.id 
                                ? 'rgba(245, 240, 240, 0.884)'
                                : null,
                            cursor: 'pointer',
                          }}
                        >
                          {row.cells.map((cell, i) => {
                            if(props.lineBreakFromCDSRules){
                              return (
                                <td
                                  key={i}
                                  {...cell.getCellProps()}
                                  style={{
                                    backgroundColor:
                                      headColors && headColors.length > 0
                                        ? headColors[i].color === ''
                                          ? ''
                                          : headColors[i].color
                                        : null,
                                  }}
                                  className={
                                    props.lineBreakFromCDSRules
                                      ? props.lineBreakFromCDSRules
                                      : ''
                                  }
                                  onClick={() =>
                                    handleRowSingleRowSelect(row, cell)
                                  }
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            }else{
                              return (
                                <td
                                  key={i}
                                  {...cell.getCellProps()}
                                  style={{
                                    backgroundColor:
                                      headColors && headColors.length > 0
                                        ? headColors[i].color === ''
                                          ? ''
                                          : headColors[i].color
                                        : null,
                                  }}
                                 
                                  onClick={() =>
                                    handleRowSingleRowSelect(row, cell)
                                  }
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            }
                         
                          })}
                        </tr>
                        {row.isExpanded ? (
                          <>
                            <tr className='innerboxshadow'>
                              <td colSpan={visibleColumns.length}>
                                {props.subTableComp(
                            
                                  row.original.dignosisCodeAndDescription,
                                  row.original.testCodeAndDescription,
                                  row.original,
                                )}
                              </td>
                            </tr>
                          </>
                        ) : null}
                      </React.Fragment>
                    )
                  })
                )}
              </tbody>
              {data.length > 0 && footer ? (
                <tfoot>
                  {footerGroups.map((group) => (
                    <tr {...group.getFooterGroupProps()}>
                      {group.headers.map((column) => (
                        <td {...column.getFooterProps()}>
                          {column.render('Footer')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              ) : null}
            </table>
          </div>
        </div>
        {data.length > 0 && pagination ? (
          <div className="row mt-2">
            {/* <div className="col-md-6"></div> */}
            <div className="col-md-6 text-left">
              <span className="p-2">
                Showing {pageChange} to {totalPage} of Pages
              </span>
            </div>
            <div className="col-md-6 text-right">
              <ul className="pagination">
                <li
                  className={
                    pageChange === 1
                      ? 'paginate_button page-item previous disabled'
                      : 'paginate_button page-item previous'
                  }
                  id="DataTables_Table_0_previous"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    className="page-link"
                    onClick={(e) => Pages(e, 'previous')}
                  >
                    Previous
                  </a>
                </li>
                {props.listOfpages &&
                  props.listOfpages.slice(0, 10).map((info, index) => {
                    return (
                      <>
                        <li className="paginate_button page-item ">
                          <a
                            aria-controls="DataTables_Table_0"
                            className="page-link"
                            onClick={(e) => handlePageChange(info)}
                          >
                            {info}
                          </a>
                        </li>
                      </>
                    )
                  })}

                <li
                  className={
                    totalCount == 0
                      ? 'paginate_button page-item next disabled'
                      : pageChange == totalPage
                      ? 'paginate_button page-item next disabled'
                      : 'paginate_button page-item next '
                  }
                  id="DataTables_Table_0_next"
                >
                  <a
                    aria-controls="DataTables_Table_0"
                    className="page-link"
                    onClick={(e) => Pages(e, 'forward')}
                  >
                    Next
                  </a>
                </li>
                <li className="paginate_button page-item next">
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value))
                      if (handlePerRowChange) {
                        handlePerRowChange(Number(e.target.value), 1)
                      } else {
                        // SwalAlert('Please Contact BellMedex', '', 'info')
                      }

                      setpageChange(1)
                    }}
                    className="tablePaginationDropDown"
                  >
                    {paginationindex.map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </>
    )
  },
  (prevProps, nextProps) => {
    if (nextProps.forNormalRendering) {
      return false
    } else {
      if (
        prevProps.data === nextProps.data &&
        prevProps.pagination === nextProps.pagination &&
        prevProps.rowSelection === nextProps.rowSelection
      ) {
        // var onlyInA = prevProps.columns.filter(comparer(nextProps.columns))
        // var onlyInB = nextProps.columns.filter(comparer(prevProps.columns))

        // var result = onlyInA.concat(onlyInB)

        // if (isNull(result)) {
        //   console.log('false in if', prevProps, nextProps)
        //   return true
        // } else {

        //   return false

        // }

        return true
      } else {
        return false
      }
    }
  },
)
