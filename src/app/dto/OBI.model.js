export default class OBI {
  constructor(
    id,
    recordType,
    recordNumber,
    accountNumber,
    backOfficeAccountType,
    amount,
    debitOrCreditIndicator,
    currencyCode,
    EffectiveDate,
    reference,
    bankOfficeTransactionType,
    userID,
    correspondingAccount,
    frontEndTransactionType,
    transactionPlace,
    optional1,
    optional2,
    optional3,
    optional4,
    optional5,
    optional6,
    optional7,
    optional8,
    transactionGroupID,
    ISOTerminalID,
    ISOMerchantID,
    retrievalReferenceNumber,
    systemTraceAudit,
    cardContractID,
    debitOrCreditContractIndicator,
    internalCardType,
    acquireBin
  ) {
    this.id = id;
    this.recordType = recordType;
    this.recordNumber = recordNumber;
    this.accountNumber = accountNumber;
    this.backOfficeAccountType = backOfficeAccountType;
    this.amount = amount;
    this.debitOrCreditIndicator = debitOrCreditContractIndicator;
    this.currencyCode = currencyCode;
    this.EffectiveDate = EffectiveDate;
    this.reference = reference;
    this.bankOfficeTransactionType = bankOfficeTransactionType;
    this.userID = userID;
    this.correspondingAccount = correspondingAccount;
    this.frontEndTransactionType = frontEndTransactionType;
    this.transactionPlace = transactionPlace;
    this.optional1 = optional1;
    this.optional2 = optional2;
    this.optional3 = optional3;
    this.optional4 = optional4;
    this.optional5 = optional5;
    this.optional6 = optional6;
    this.optional7 = optional7;
    this.optional8 = optional8;
    this.transactionGroupID = transactionGroupID;
    this.ISOTerminalID = ISOTerminalID;
    this.ISOMerchantID = ISOMerchantID;
    this.retrievalReferenceNumber = retrievalReferenceNumber;
    this.systemTraceAudit = systemTraceAudit;
    this.cardContractID = cardContractID;
    this.debitOrCreditContractIndicator = debitOrCreditContractIndicator;
    this.internalCardType = internalCardType;
    this.acquireBin = acquireBin;
  }
}
