export const enumUtil = {
    enumtoaster: {
      success: "success",
      info: "info",
      error: "error",
      warning: "warning",
      basic: "basic",
      error: "error",
      dark: "dark",
    },
    enumSearchApilinks: {
      icd: "/Search/FindICDCodesAsync?icdCode=",
      icdwithdesc: "&descriptionSearch=true",
      icdwithoutdesc: "&descriptionSearch=false",
      icd9: "/Search/FindICD9Code?code=",
      cpt: "/Search/FindCPTCodesAsync?cptCode=",
      cptwithdesc: "&descriptionSearch=true",
      cptwithoutdesc: "&descriptionSearch=false",
      snomed: "/Search/snomedSearch?searchText=",
      generalcode: "/Search/GetGeneralCodes?Type=",
      loincsearch: "/Lab/LoincSearch?searchText=",
    },
    // enumIfram:{
  
    // }
    enumValidationType: {
      Required: "requried",
      Enter: "enter",
      Sequence: "sequence",
      Unique: "unique",
      EnterICD: "Enter_ICD",
      NullCheck: "nullcheck",
      DateFromLessAndEqualToDateTo: "date1<=date2",
      SelectDate: "select_date",
      FutureData: "future_date",
      Length: "length",
      Selection: "select_valid",
      isZero: "isZero",
      Checked: "checked",
    },
    enumAuditLogOpertaion: {
      View: "view",
      Add: "add",
      Delete: "delete",
      Update: "update",
      Emergency: "emergency",
    },

    enumAlertType: {
      warning: "warning",
      success: "success",
      error: "danger",
      info: "info",
    },

  };
  