
declare class AccountingAuditTrailModel {
/**
 * Get AccountingAuditTrailModel.
 * @returns (AccountingAuditTrailModel)          *
 */
getAccountingAuditTrail(): AccountingAuditTrailModel

/**
 * Set AccountingAuditTrailModel.
 * @param {AccountingAuditTrailModel} accountingAuditTrail (AccountingAuditTrailModel)
 * @returns (void)          *
 */
setAccountingAuditTrail(accountingAuditTrail:AccountingAuditTrailModel): void

/**
 * Get agency name.
 * @returns (String)          *
 */
getServiceProviderCode(): String

/**
 * Get CapIDModel.
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

/**
 * Get CapIDModel.
 * @returns (CapIDModel)          *
 */
getTransferCapID(): CapIDModel

/**
 * Get account audit sequence number.
 * @returns (number) - (long) 
 */
getAccAuditSeqNbr(): number

/**
 * Get sequence number.
 * @returns (number) - (long) 
 */
getTranSeqNbr(): number

/**
 * Get alt id.
 * @returns (String)          *
 */
getAltID(): String

/**
 * Get account code 1.
 * @returns (String)          *
 */
getAccCodeL1(): String

/**
 * Get account code 2.
 * @returns (String)          *
 */
getAccCodeL2(): String

/**
 * @returns (String)          *
 */
getAccCodeL3(): String

/**
 * Get account code 3.
 * @returns (number) - (long) 
 */
getInvoiceNbr(): number

/**
 * Get receipt number.
 * @returns (number) - (long) 
 */
getReceiptNbr(): number

/**
 * Get payment sequence number.
 * @returns (number) - (long) 
 */
getPaymentSeqNbr(): number

/**
 * Get date time.
 * @returns (ScriptDateTime)          *
 */
getTranDate(): ScriptDateTime

/**
 * Get tran amount.
 * @returns (number) - (double) 
 */
getTranAmount(): number

/**
 * Get receive amount.
 * @returns (number) - (double) 
 */
getReceiptAmount(): number

/**
 * Get action.
 * @returns (String)          *
 */
getAction(): String

/**
 * Get fee code.
 * @returns (String)          *
 */
getFeeCod(): String

/**
 * Get PrintInvNbr.
 * @returns (number) - (long) 
 */
getPrintInvNbr(): number

/**
 * Get payment period.
 * @returns (String)          *
 */
getPaymentPeriod(): String

/**
 * Get fee description.
 * @returns (String)          *
 */
getFeeDescription(): String

/**
 * Get fee sequence number.
 * @returns (number) - (long) 
 */
getFeeSeqNbr(): number

/**
 * Get fee unit.
 * @returns (number) - (double) 
 */
getFeeUnit(): number

/**
 * Get fee.
 * @returns (number) - (double) 
 */
getFee(): number

/**
 * Get payment method.
 * @returns (String)          *
 */
getPaymentMethod(): String

/**
 * Get payment ref number.
 * @returns (String)          *
 */
getPaymentRefNbr(): String

/**
 * Get cashier ID.
 * @returns (String)          *
 */
getCashierID(): String

/**
 * Get register number.
 * @returns (String)          *
 */
getRegisterNbr(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime)          *
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit Id.
 * @returns (String)          *
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * Set agency name.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set cap ID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set transfer cap ID.
 * @param {CapIDModel} transferCapID (CapIDModel)
 * @returns (void)          *
 */
setTransferCapID(transferCapID:CapIDModel): void

/**
 * Set AccAuditSeqNbr.
 * @param {number} accAuditSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setAccAuditSeqNbr(accAuditSeqNbr:number): void

/**
 * Set TranSeqNbr.
 * @param {number} tranSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setTranSeqNbr(tranSeqNbr:number): void

/**
 * Set alt ID.
 * @param {string} altID (string)
 * @returns (void)          *
 */
setAltID(altID:string): void

/**
 * Set accCodeL1.
 * @param {string} accCodeL1 (string)
 * @returns (void)          *
 */
setAccCodeL1(accCodeL1:string): void

/**
 * Set accCodeL2.
 * @param {string} accCodeL2 (string)
 * @returns (void)          *
 */
setAccCodeL2(accCodeL2:string): void

/**
 * Set accCodeL3.
 * @param {string} accCodeL3 (string)
 * @returns (void)          *
 */
setAccCodeL3(accCodeL3:string): void

/**
 * Set invoiceNbr.
 * @param {number} invoiceNbr (number) - (long) 
 * @returns (void)          *
 */
setInvoiceNbr(invoiceNbr:number): void

/**
 * Set receiptNbr.
 * @param {number} receiptNbr (number) - (long) 
 * @returns (void)          *
 */
setReceiptNbr(receiptNbr:number): void

/**
 * Set paymentSeqNbr.
 * @param {number} paymentSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setPaymentSeqNbr(paymentSeqNbr:number): void

/**
 * Set tranDate.
 * @param {ScriptDateTime} tranDate (ScriptDateTime)
 * @returns (void)          *
 */
setTranDate(tranDate:ScriptDateTime): void

/**
 * Set tranAmount.
 * @param {number} tranAmount (number) - (double) 
 * @returns (void)          *
 */
setTranAmount(tranAmount:number): void

/**
 * Set receiptAmount.
 * @param {number} receiptAmount (number) - (double) 
 * @returns (void)          *
 */
setReceiptAmount(receiptAmount:number): void

/**
 * Set action.
 * @param {string} action (string)
 * @returns (void)          *
 */
setAction(action:string): void

/**
 * Set fee code.
 * @param {string} feeCod (string)
 * @returns (void)          *
 */
setFeeCod(feeCod:string): void

/**
 * Set printInvNbr.
 * @param {number} printInvNbr (number) - (long) 
 * @returns (void)          *
 */
setPrintInvNbr(printInvNbr:number): void

/**
 * Set payment period.
 * @param {string} paymentPeriod (string)
 * @returns (void)          *
 */
setPaymentPeriod(paymentPeriod:string): void

/**
 * Set fee description.
 * @param {string} feeDescription (string)
 * @returns (void)          *
 */
setFeeDescription(feeDescription:string): void

/**
 * Set feeSeqNbr.
 * @param {number} feeSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeSeqNbr(feeSeqNbr:number): void

/**
 * Set fee unit.
 * @param {number} feeUnit (number) - (double) 
 * @returns (void)          *
 */
setFeeUnit(feeUnit:number): void

/**
 * Set fee.
 * @param {number} fee (number) - (double) 
 * @returns (void)          *
 */
setFee(fee:number): void

/**
 * Set payment method.
 * @param {string} paymentMethod (string)
 * @returns (void)          *
 */
setPaymentMethod(paymentMethod:string): void

/**
 * Set payment ref number.
 * @param {string} paymentRefNbr (string)
 * @returns (void)          *
 */
setPaymentRefNbr(paymentRefNbr:string): void

/**
 * Set cashier ID.
 * @param {string} cashierID (string)
 * @returns (void)          *
 */
setCashierID(cashierID:string): void

/**
 * Set register number.
 * @param {string} registerNbr (string)
 * @returns (void)          *
 */
setRegisterNbr(registerNbr:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit ID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (String)          *
 */
getTerminalID(): String

/**
 * @returns (String)          *
 */
getWorkstationID(): String

/**
 * @returns (void)          *
 */
setTerminalID(): void

/**
 * @returns (void)          *
 */
setWorkstationID(): void

/**
 * @returns (String) - the feeAllocationType
 */
getFeeAllocationType(): String

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @returns (number) - (Double) the accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class AddressConditionScriptModel {
/**
 * Get sourceNumber.
 * @returns (number) - (long) long
 */
getSourceNumber(): number

/**
 * Get addressNumber.
 * @returns (number) - (long) long
 */
getAddressNumber(): number

/**
 * set AddressNumber.
 * @param {number} addressNumber (number) - (long) 
 * @returns (void)          *
 */
setAddressNumber(addressNumber:number): void

/**
 * Get conditionNumber.
 * @returns (number) - (long) long
 */
getConditionNumber(): number

/**
 * Get conditionType.
 * @returns (String) - String
 */
getConditionType(): String

/**
 * Set conditionType.
 * @param {string} conditionType (string)
 * @returns (void)          *
 */
setConditionType(conditionType:string): void

/**
 * Get conditionDescription.
 * @returns (String) - String
 */
getConditionDescription(): String

/**
 * Set conditionDescription.
 * @param {string} conditionDescription (string)
 * @returns (void)          *
 */
setConditionDescription(conditionDescription:string): void

/**
 * Get conditionComment.
 * @returns (String) - String
 */
getConditionComment(): String

/**
 * Set conditionComment.
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setConditionComment(conditionComment:string): void

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Get issuedDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getIssuedDate(): ScriptDateTime

/**
 * Set issuedDate.
 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:ScriptDateTime): void

/**
 * Get refNumber1.
 * @returns (String) - String
 */
getRefNumber1(): String

/**
 * Get refNumber2.
 * @returns (String) - String
 */
getRefNumber2(): String

/**
 * Get impactCode.
 * @returns (String) - String
 */
getImpactCode(): String

/**
 * Set impactCode.
 * @param {string} impactCode (string)
 * @returns (void)          *
 */
setImpactCode(impactCode:string): void

/**
 * Get issuedByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getIssuedByUser(): SysUserModel

/**
 * Set issuedByUser.
 * @param {SysUserModel} issuedByUser (SysUserModel)
 * @returns (void)          *
 */
setIssuedByUser(issuedByUser:SysUserModel): void

/**
 * Get statusByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getStatusByUser(): SysUserModel

/**
 * Set StatusByUser.
 * @param {SysUserModel} statusByUser (SysUserModel)
 * @returns (void)          *
 */
setStatusByUser(statusByUser:SysUserModel): void

/**
 * Get conditionStatus.
 * @returns (String) - String
 */
getConditionStatus(): String

/**
 * Set conditionStatus.
 * @param {string} conditionStatus (string)
 * @returns (void)          *
 */
setConditionStatus(conditionStatus:string): void

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get conditionModel.
 * @returns (AddressConditionModel) - AddressConditionModel
 */
getAddressConditionModel(): AddressConditionModel

/**
 * Set conditionModel.
 * @param {AddressConditionModel} addressConditionModel (AddressConditionModel)
 * @returns (void)          *
 */
setAddressConditionModel(addressConditionModel:AddressConditionModel): void

/**
 * Method getConditionStatusType
 * @returns (String) - String
 */
getConditionStatusType(): String

/**
 * Method setConditionStatusType
 * @param {string} conditionStatusType (string)
 * @returns (void)          *
 */
setConditionStatusType(conditionStatusType:string): void

/**
 * Method getDisplayConditionNotice
 * @returns (String) - String
 */
getDisplayConditionNotice(): String

/**
 * Method setDisplayConditionNotice
 * @param {string} displayConditionNotice (string)
 * @returns (void)          *
 */
setDisplayConditionNotice(displayConditionNotice:string): void

/**
 * Method getIncludeInConditionName
 * @returns (String) - String
 */
getIncludeInConditionName(): String

/**
 * Method setIncludeInConditionName
 * @param {string} includeInConditionName (string)
 * @returns (void)          *
 */
setIncludeInConditionName(includeInConditionName:string): void

/**
 * Method getIncludeInShortDescription
 * @returns (String) - String
 */
getIncludeInShortDescription(): String

/**
 * Method setIncludeInShortDescription
 * @param {string} includeInShortDescription (string)
 * @returns (void)          *
 */
setIncludeInShortDescription(includeInShortDescription:string): void

/**
 * Method getInheritable
 * @returns (String) - String
 */
getInheritable(): String

/**
 * Method setInheritable
 * @param {string} inheritable (string)
 * @returns (void)          *
 */
setInheritable(inheritable:string): void

/**
 * Method getLongDescripton
 * @returns (String) - String
 */
getLongDescripton(): String

/**
 * Method setLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setLongDescripton(longDescripton:string): void

/**
 * Method getPublicDisplayMessage
 * @returns (String) - String
 */
getPublicDisplayMessage(): String

/**
 * Method setPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResolutionAction
 * @returns (String) - String
 */
getResolutionAction(): String

/**
 * Method setResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResolutionAction(resolutionAction:string): void

/**
 * Method setConditionGroup
 * @param {string} conditionGroup (string)
 * @returns (void)          *
 */
setConditionGroup(conditionGroup:string): void

/**
 * Method getConditionGroup
 * @returns (String) - String
 */
getConditionGroup(): String

/**
 * Method setDisplayNoticeOnACA
 * @param {string} displayNoticeOnACA (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACA(displayNoticeOnACA:string): void

/**
 * Method getDisplayNoticeOnACA
 * @returns (String) - String
 */
getDisplayNoticeOnACA(): String

/**
 * Method setDisplayNoticeOnACAFee
 * @param {string} displayNoticeOnACAFee (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(displayNoticeOnACAFee:string): void

/**
 * Method getDisplayNoticeOnACAFee
 * @returns (String) - String
 */
getDisplayNoticeOnACAFee(): String

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @param {string} additionalInformation (string)
 * @returns (void)          *
 */
setAdditionalInformation(additionalInformation:string): void

}
declare class AddressItemModel {
/**
 * Get AddressItemModel.
 * @returns (AddressItemModel) - AddressItemModel
 */
getAddressItemModel(): AddressItemModel

/**
 * Get address description.
 * @returns (String) - String
 */
getAddressDescription(): String

/**
 * Get address id.
 * @returns (number) - (long) long
 */
getAddressId(): number

/**
 * Get address status.
 * @returns (String) - String
 */
getAddressStatus(): String

/**
 * Get address type flag.
 * @returns (String) - String
 */
getAddressTypeFlag(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - string
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - string
 */
getAuditStatus(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapId(): CapIDModel

/**
 * Get city.
 * @returns (String) - the string of city
 */
getCity(): String

/**
 * Get country.
 * @returns (String) - the string of country
 */
getCountry(): String

/**
 * Get county.
 * @returns (String) - the string of county
 */
getCounty(): String

/**
 * Get distance.
 * @returns (number) - (double) double
 */
getDistance(): number

/**
 * Get event id.
 * @returns (String) - the string of event id
 */
getEventID(): String

/**
 * Get house fraction end.
 * @returns (String) - the string of fraction end
 */
getHouseFractionEnd(): String

/**
 * Get house fraction start.
 * @returns (String) - the string of fraction start
 */
getHouseFractionStart(): String

/**
 * Get house numbetr end.
 * @returns (number) - (int) int
 */
getHouseNumberEnd(): number

/**
 * Get house numbetr start.
 * @returns (number) - (int) int
 */
getHouseNumberStart(): number

/**
 * Get inspection district.
 * @returns (String) - the string of inspection district
 */
getInspectionDistrict(): String

/**
 * Get InspectionDistrictPrefix.
 * @returns (String) - the string of inspection district prefix
 */
getInspectionDistrictPrefix(): String

/**
 * Get neighborhood prefix.
 * @returns (String) - neighborhood prefix
 */
getNeighberhoodPrefix(): String

/**
 * Get neighborhood.
 * @returns (String) - neighborhood
 */
getNeighborhood(): String

/**
 * Get primary flag.
 * @returns (String) - primary flag
 */
getPrimaryFlag(): String

/**
 * Get RefAddressId.
 * @returns (number) - (long) RefAddressId
 */
getRefAddressId(): number

/**
 * Get SecondaryRoad.
 * @returns (String) - String
 */
getSecondaryRoad(): String

/**
 * Get SecondaryRoadNumber.
 * @returns (number) - (int) int
 */
getSecondaryRoadNumber(): number

/**
 * Get agency code.
 * @returns (String) - String
 */
getServerProvideCode(): String

/**
 * Get source flag.
 * @returns (String) - String
 */
getSourceFlag(): String

/**
 * Get state.
 * @returns (String) - String
 */
getState(): String

/**
 * Get street direction.
 * @returns (String) - String
 */
getStreetDirection(): String

/**
 * Get street name.
 * @returns (String) - String
 */
getStreetName(): String

/**
 * Get street prefix.
 * @returns (String) - String
 */
getStreetPrefix(): String

/**
 * Get street suffix.
 * @returns (String) - String
 */
getStreetSuffix(): String

/**
 * Get street suffix direction.
 * @returns (String) - String
 */
getStreetSuffixdirection(): String

/**
 * Get unit end.
 * @returns (String) - String
 */
getUnitEnd(): String

/**
 * Get unit start.
 * @returns (String) - String
 */
getUnitStart(): String

/**
 * Get unit type.
 * @returns (String) - String
 */
getUnitType(): String

/**
 * Get XCoordinator.
 * @returns (number) - (double) double
 */
getXCoordinator(): number

/**
 * Get YCoordinator.
 * @returns (number) - (double) double
 */
getYCoordinator(): number

/**
 * Get zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * Set address description.
 * @param {string} addressDescription (string)
 * @returns (void)          *
 */
setAddressDescription(addressDescription:string): void

/**
 * Set address id.
 * @param {number} addressId (number) - (long) 
 * @returns (void)          *
 */
setAddressId(addressId:number): void

/**
 * Set address status.
 * @param {string} addressStatus (string)
 * @returns (void)          *
 */
setAddressStatus(addressStatus:string): void

/**
 * Set address type flag.
 * @param {string} addressTypeFlag (string)
 * @returns (void)          *
 */
setAddressTypeFlag(addressTypeFlag:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set cap id.
 * @param {CapIDModel} capId (CapIDModel)
 * @returns (void)          *
 */
setCapId(capId:CapIDModel): void

/**
 * Set city.
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * Set country.
 * @param {string} country (string)
 * @returns (void)          *
 */
setCountry(country:string): void

/**
 * Set county.
 * @param {string} county (string)
 * @returns (void)          *
 */
setCounty(county:string): void

/**
 * Set distance.
 * @param {number} distance (number) - (double) 
 * @returns (void)          *
 */
setDistance(distance:number): void

/**
 * Set event id.
 * @param {string} eventID (string)
 * @returns (void)          *
 */
setEventID(eventID:string): void

/**
 * Set house fraction end.
 * @param {string} houseFractionEnd (string)
 * @returns (void)          *
 */
setHouseFractionEnd(houseFractionEnd:string): void

/**
 * Set house fraction start.
 * @param {string} houseFractionStart (string)
 * @returns (void)          *
 */
setHouseFractionStart(houseFractionStart:string): void

/**
 * Set house number end.
 * @param {number} houseNumberEnd (number) - (int) 
 * @returns (void)          *
 */
setHouseNumberEnd(houseNumberEnd:number): void

/**
 * Set house number start.
 * @param {number} houseNumberStart (number) - (int) 
 * @returns (void)          *
 */
setHouseNumberStart(houseNumberStart:number): void

/**
 * Set inspection district.
 * @param {string} inspectionDistrict (string)
 * @returns (void)          *
 */
setInspectionDistrict(inspectionDistrict:string): void

/**
 * Set inspection  district prefix.
 * @param {string} inspectionDistrictPrefix (string)
 * @returns (void)          *
 */
setInspectionDistrictPrefix(inspectionDistrictPrefix:string): void

/**
 * Set neighborhood prefix.
 * @param {string} neighberhoodPrefix (string)
 * @returns (void)          *
 */
setNeighberhoodPrefix(neighberhoodPrefix:string): void

/**
 * Set neighborhood.
 * @param {string} neighborhood (string)
 * @returns (void)          *
 */
setNeighborhood(neighborhood:string): void

/**
 * Set primary flag.
 * @param {string} primaryFlag (string)
 * @returns (void)          *
 */
setPrimaryFlag(primaryFlag:string): void

/**
 * Set refAddressId.
 * @param {number} refAddressId (number) - (long) 
 * @returns (void)          *
 */
setRefAddressId(refAddressId:number): void

/**
 * Set secondaryRoad.
 * @param {string} secondaryRoad (string)
 * @returns (void)          *
 */
setSecondaryRoad(secondaryRoad:string): void

/**
 * Set secondaryRoadNumber.
 * @param {number} secondaryRoadNumber (number) - (int) 
 * @returns (void)          *
 */
setSecondaryRoadNumber(secondaryRoadNumber:number): void

/**
 * Set agency name.
 * @param {string} serverProvideCode (string)
 * @returns (void)          *
 */
setServerProvideCode(serverProvideCode:string): void

/**
 * Set source flag.
 * @param {string} sourceFlag (string)
 * @returns (void)          *
 */
setSourceFlag(sourceFlag:string): void

/**
 * Set state.
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * Set street direction.
 * @param {string} streetDirection (string)
 * @returns (void)          *
 */
setStreetDirection(streetDirection:string): void

/**
 * Set street name.
 * @param {string} streetName (string)
 * @returns (void)          *
 */
setStreetName(streetName:string): void

/**
 * Set street prefix.
 * @param {string} streetPrefix (string)
 * @returns (void)          *
 */
setStreetPrefix(streetPrefix:string): void

/**
 * Set street suffix.
 * @param {string} streetSuffix (string)
 * @returns (void)          *
 */
setStreetSuffix(streetSuffix:string): void

/**
 * Set street suffix direction.
 * @param {string} streetSuffixdirection (string)
 * @returns (void)          *
 */
setStreetSuffixdirection(streetSuffixdirection:string): void

/**
 * Set unit end.
 * @param {string} unitEnd (string)
 * @returns (void)          *
 */
setUnitEnd(unitEnd:string): void

/**
 * Set unit start.
 * @param {string} unitStart (string)
 * @returns (void)          *
 */
setUnitStart(unitStart:string): void

/**
 * Set unit type.
 * @param {string} unitType (string)
 * @returns (void)          *
 */
setUnitType(unitType:string): void

/**
 * Set xCoordinator.
 * @param {number} xCoordinator (number) - (double) 
 * @returns (void)          *
 */
setXCoordinator(xCoordinator:number): void

/**
 * Set yCoordinator.
 * @param {number} yCoordinator (number) - (double) 
 * @returns (void)          *
 */
setYCoordinator(yCoordinator:number): void

/**
 * Set zip.
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * @returns (String) - the houseNumberAlphaStart
 */
getHouseNumberAlphaStart(): String

/**
 * @param {string} houseNumberAlphaStart (string)
 * @returns (void)          *
 */
setHouseNumberAlphaStart(houseNumberAlphaStart:string): void

/**
 * @returns (String) - the houseNumberAlphaEnd
 */
getHouseNumberAlphaEnd(): String

/**
 * @param {string} houseNumberAlphaEnd (string)
 * @returns (void)          *
 */
setHouseNumberAlphaEnd(houseNumberAlphaEnd:string): void

/**
 * @returns (String) - the levelPrefix
 */
getLevelPrefix(): String

/**
 * @param {string} levelPrefix (string)
 * @returns (void)          *
 */
setLevelPrefix(levelPrefix:string): void

/**
 * @returns (String) - the levelNumberStart
 */
getLevelNumberStart(): String

/**
 * @param {string} levelNumberStart (string)
 * @returns (void)          *
 */
setLevelNumberStart(levelNumberStart:string): void

/**
 * @returns (String) - the levelNumberEnd
 */
getLevelNumberEnd(): String

/**
 * @param {string} levelNumberEnd (string)
 * @returns (void)          *
 */
setLevelNumberEnd(levelNumberEnd:string): void

}
declare class AddressModel {
/**
 * Get addressModel.
 * @returns (AddressModel)          *
 */
getAddressModel(): AddressModel

/**
 * Set addressModel.
 * @param {AddressModel} addressModel (AddressModel)
 * @returns (void)          *
 */
setAddressModel(addressModel:AddressModel): void

/**
 * Returns the addressDescription.
 * @returns (String) - String
 */
getAddressDescription(): String

/**
 * Returns the addressId.
 * @returns (number) - (Long) Long
 */
getAddressId(): number

/**
 * Returns the addressStatus.
 * @returns (String) - String
 */
getAddressStatus(): String

/**
 * Returns the addressTypeFlag.
 * @returns (String) - String
 */
getAddressTypeFlag(): String

/**
 * Returns the auditDate.
 * @returns (Date) - java.util.Date
 */
getAuditDate(): Date

/**
 * Returns the auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Returns the auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Returns the capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Returns the city.
 * @returns (String) - String
 */
getCity(): String

/**
 * Returns the country.
 * @returns (String) - String
 */
getCountry(): String

/**
 * Returns the county.
 * @returns (String) - String
 */
getCounty(): String

/**
 * Returns the distance.
 * @returns (number) - (Double) Double
 */
getDistance(): number

/**
 * Returns the eventID.
 * @returns (String) - String
 */
getEventID(): String

/**
 * Returns the houseFractionEnd.
 * @returns (String) - String
 */
getHouseFractionEnd(): String

/**
 * Returns the houseFractionStart.
 * @returns (String) - String
 */
getHouseFractionStart(): String

/**
 * Returns the houseNumberEnd.
 * @returns (number) - (Integer) Integer
 */
getHouseNumberEnd(): number

/**
 * Returns the houseNumberStart.
 * @returns (number) - (Integer) Integer
 */
getHouseNumberStart(): number

/**
 * Returns the inspectionDistrict.
 * @returns (String) - String
 */
getInspectionDistrict(): String

/**
 * Returns the inspectionDistrictPrefix.
 * @returns (String) - String
 */
getInspectionDistrictPrefix(): String

/**
 * Returns the neighberhoodPrefix.
 * @returns (String) - String
 */
getNeighberhoodPrefix(): String

/**
 * Returns the neighborhood.
 * @returns (String) - String
 */
getNeighborhood(): String

/**
 * Returns the primaryFlag.
 * @returns (String) - String
 */
getPrimaryFlag(): String

/**
 * Returns the refAddressId.
 * @returns (number) - (Long) Long
 */
getRefAddressId(): number

/**
 * Returns the secondaryRoad.
 * @returns (String) - String
 */
getSecondaryRoad(): String

/**
 * Returns the secondaryRoadNumber.
 * @returns (number) - (Integer) Integer
 */
getSecondaryRoadNumber(): number

/**
 * Returns the serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Returns the sourceFlag.
 * @returns (String) - String
 */
getSourceFlag(): String

/**
 * Returns the state.
 * @returns (String) - String
 */
getState(): String

/**
 * Returns the streetDirection.
 * @returns (String) - String
 */
getStreetDirection(): String

/**
 * Returns the streetName.
 * @returns (String) - String
 */
getStreetName(): String

/**
 * Returns the streetPrefix.
 * @returns (String) - String
 */
getStreetPrefix(): String

/**
 * Returns the streetSuffix.
 * @returns (String) - String
 */
getStreetSuffix(): String

/**
 * Returns the streetSuffixdirection.
 * @returns (String) - String
 */
getStreetSuffixdirection(): String

/**
 * Returns the unitEnd.
 * @returns (String) - String
 */
getUnitEnd(): String

/**
 * Returns the unitStart.
 * @returns (String) - String
 */
getUnitStart(): String

/**
 * Returns the unitType.
 * @returns (String) - String
 */
getUnitType(): String

/**
 * Returns the xCoordinator.
 * @returns (number) - (Double) Double
 */
getXCoordinator(): number

/**
 * Returns the yCoordinator.
 * @returns (number) - (Double) Double
 */
getYCoordinator(): number

/**
 * Returns the zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * @returns (String)          *
 */
getAddressType(): String

/**
 * @returns (void)          *
 */
setAddressType(): void

/**
 * @returns (String)          *
 */
getRefAddressType(): String

/**
 * Jason Tian add for 08ACC-03318_Support_World_Addresses begin
 * @returns (String)          *
 */
getAddressLine1(): String

/**
 * @returns (String)          *
 */
getAddressLine2(): String

/**
 * @returns (String) - the houseNumberAlphaStart
 */
getHouseNumberAlphaStart(): String

/**
 * @param {string} houseNumberAlphaStart (string)
 * @returns (void)          *
 */
setHouseNumberAlphaStart(houseNumberAlphaStart:string): void

/**
 * @returns (String) - the houseNumberAlphaEnd
 */
getHouseNumberAlphaEnd(): String

/**
 * @param {string} houseNumberAlphaEnd (string)
 * @returns (void)          *
 */
setHouseNumberAlphaEnd(houseNumberAlphaEnd:string): void

/**
 * @returns (String) - the levelPrefix
 */
getLevelPrefix(): String

/**
 * @param {string} levelPrefix (string)
 * @returns (void)          *
 */
setLevelPrefix(levelPrefix:string): void

/**
 * @returns (String) - the levelNumberStart
 */
getLevelNumberStart(): String

/**
 * @param {string} levelNumberStart (string)
 * @returns (void)          *
 */
setLevelNumberStart(levelNumberStart:string): void

/**
 * @returns (String) - the levelNumberEnd
 */
getLevelNumberEnd(): String

/**
 * @param {string} levelNumberEnd (string)
 * @returns (void)          *
 */
setLevelNumberEnd(levelNumberEnd:string): void

/**
 * @returns (String) - the validateFlag
 */
getValidateFlag(): String

/**
 * @param {string} validateFlag (string)
 * @returns (void)          *
 */
setValidateFlag(validateFlag:string): void

}
declare class AppSpecificInfoGroupModel {
/**
 * Get App Specific Info Group.
 * @returns (AppSpecificInfoGroupModel) - AppSpecificInfoGroupModel
 */
getAppSpecificInfoGroup(): AppSpecificInfoGroupModel

/**
 * Get group code.
 * @returns (String) - string
 */
getGroupCode(): String

/**
 * Get group name.
 * @returns (String) - String
 */
getGroupName(): String

/**
 * Set group code.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Set group name.
 * @param {string} groupName (string)
 * @returns (void)          *
 */
setGroupName(groupName:string): void

}
declare class AppSpecificInfoModel {
/**
 * Get AppSpecificInfoModel.
 * @returns (AppSpecificInfoModel) - AppSpecificInfoModel
 */
getAppSpecificInfoModel(): AppSpecificInfoModel

/**
 * Get actStatus.
 * @returns (String) - String
 */
getActStatus(): String

/**
 * Set actStatus.
 * @param {string} actStatus (string)
 * @returns (void)          *
 */
setActStatus(actStatus:string): void

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditid(): String

/**
 * Set audit id.
 * @param {string} auditid (string)
 * @returns (void)          *
 */
setAuditid(auditid:string): void

/**
 * Get checkboxDesc.
 * @returns (String) - String
 */
getCheckboxDesc(): String

/**
 * Set checkboxDesc.
 * @param {string} checkboxDesc (string)
 * @returns (void)          *
 */
setCheckboxDesc(checkboxDesc:string): void

/**
 * Get checkboxInd.
 * @returns (String) - String
 */
getCheckboxInd(): String

/**
 * Set checkboxInd.
 * @param {string} checkboxInd (string)
 * @returns (void)          *
 */
setCheckboxInd(checkboxInd:string): void

/**
 * Get checkboxType.
 * @returns (String) - String
 */
getCheckboxType(): String

/**
 * Set checkboxType.
 * @param {string} checkboxType (string)
 * @returns (void)          *
 */
setCheckboxType(checkboxType:string): void

/**
 * Get checklistComment.
 * @returns (String) - String
 */
getChecklistComment(): String

/**
 * Set checklistComment.
 * @param {string} checklistComment (string)
 * @returns (void)          *
 */
setChecklistComment(checklistComment:string): void

/**
 * Get feeIndicator.
 * @returns (String) - String
 */
getFeeIndicator(): String

/**
 * Set feeIndicator.
 * @param {string} feeIndicator (string)
 * @returns (void)          *
 */
setFeeIndicator(feeIndicator:string): void

/**
 * Get permitID1.
 * @returns (String) - String
 */
getPermitID1(): String

/**
 * Set permitID1.
 * @param {string} permitID1 (string)
 * @returns (void)          *
 */
setPermitID1(permitID1:string): void

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get permitID2.
 * @returns (String) - String
 */
getPermitID2(): String

/**
 * Set permitID2.
 * @param {string} permitID2 (string)
 * @returns (void)          *
 */
setPermitID2(permitID2:string): void

/**
 * Get permitID3.
 * @returns (String) - String
 */
getPermitID3(): String

/**
 * Set permitID3.
 * @param {string} permitID3 (string)
 * @returns (void)          *
 */
setPermitID3(permitID3:string): void

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get end date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEndDate(): ScriptDateTime

/**
 * Set end date.
 * @param {ScriptDateTime} endDate (ScriptDateTime)
 * @returns (void)          *
 */
setEndDate(endDate:ScriptDateTime): void

/**
 * Get start date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getStartDate(): ScriptDateTime

/**
 * Set start date.
 * @param {ScriptDateTime} startDate (ScriptDateTime)
 * @returns (void)          *
 */
setStartDate(startDate:ScriptDateTime): void

/**
 * Get display order.
 * @returns (number) - (long) long
 */
getDisplayOrder(): number

/**
 * Set display order.
 * @param {number} displayOrder (number) - (long) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Get attribute unit type.
 * @returns (String) - String
 */
getAttributeUnitType(): String

/**
 * Get attribute value.
 * @returns (String) - String
 */
getAttributeValue(): String

/**
 * Get attribute value required flag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get ValidationScriptName.
 * @returns (String) - String
 */
getValidationScriptName(): String

/**
 * Set the attributeUnitType.
 * @param {string} attributeUnitType (string)
 * @returns (void)          *
 */
setAttributeUnitType(attributeUnitType:string): void

/**
 * Set the attributeValue.
 * @param {string} attributeValue (string)
 * @returns (void)          *
 */
setAttributeValue(attributeValue:string): void

/**
 * Set the attributeValueReqFlag.
 * @param {string} attributeValueReqFlag (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(attributeValueReqFlag:string): void

/**
 * Set the validationScriptName.
 * @param {string} validationScriptName (string)
 * @returns (void)          *
 */
setValidationScriptName(validationScriptName:string): void

/**
 * Get display length.
 * @returns (number) - (Integer) Integer
 */
getDisplayLength(): number

/**
 * Set display length.
 * @param {number} displayLength (number) - (Integer) 
 * @returns (void)          *
 */
setDisplayLength(displayLength:number): void

/**
 * Get max length.
 * @returns (number) - (Integer) Integer
 */
getMaxLength(): number

/**
 * Set max length.
 * @param {number} maxLength (number) - (Integer) 
 * @returns (void)          *
 */
setMaxLength(maxLength:number): void

/**
 * Get group code.
 * @returns (String) - String
 */
getGroupCode(): String

/**
 * Get group code.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Get alignment.
 * @returns (String) - String
 */
getAlignment(): String

/**
 * Set alignment.
 * @param {string} alignment (string)
 * @returns (void)          *
 */
setAlignment(alignment:string): void

}
declare class AppSpecificTableColumnModel {
/**
 * @returns (AppSpecificTableColumnModel)          *
 */
getColumnModel(): AppSpecificTableColumnModel

/**
 * get servProvCode
 * @returns (String) - m_servProvCode
 */
getServProvCode(): String

/**
 * get b1PerId1
 * @returns (String) - m_b1PerId1
 */
getB1PerId1(): String

/**
 * get b1PerId2
 * @returns (String) - m_b1PerId2
 */
getB1PerId2(): String

/**
 * get b1PerId3
 * @returns (String) - m_b1PerId3
 */
getB1PerId3(): String

/**
 * get groupName
 * @returns (String) - m_groupName
 */
getGroupName(): String

/**
 * get tableName
 * @returns (String) - m_tableName
 */
getTableName(): String

/**
 * get columnName
 * @returns (String) - m_columnName
 */
getColumnName(): String

/**
 * get columnType
 * @returns (String) - m_columnType
 */
getColumnType(): String

/**
 * get b1AttributeValue: default value
 * @returns (String) - m_b1AttributeValue
 */
getDefaultValue(): String

/**
 * get maxLength
 * @returns (String) - m_maxLength
 */
getMaxLength(): String

/**
 * get displayLength
 * @returns (String) - m_displayLength
 */
getDisplayLength(): String

/**
 * get b1AttributeValueReqFlag: Required flag
 * @returns (String) - m_b1AttributeValueReqFlag
 */
getRequiredFlag(): String

/**
 * get b1DisplayOrder
 * @returns (number) - (Long) m_b1DisplayOrder
 */
getDisplayOrder(): number

/**
 * get recDate
 * @returns (ScriptDateTime) - m_recDate
 */
getRecDate(): ScriptDateTime

/**
 * get recFulNam
 * @returns (String) - m_recFulNam
 */
getRecFulNam(): String

/**
 * get recStatus
 * @returns (String) - m_recStatus
 */
getRecStatus(): String

}
declare class AppSpecificTableGroupModel {
/**
 * set groupModel
 * @param {AppSpecificTableGroupModel} groupModel (AppSpecificTableGroupModel)
 * @returns (void)          *
 */
setAppSpecificTableGroupModel(groupModel:AppSpecificTableGroupModel): void

/**
 * set groupModel
 * @returns (AppSpecificTableGroupModel)          *
 */
getAppSpecificTableGroupModel(): AppSpecificTableGroupModel

/**
 * get groupName
 * @returns (String)          *
 */
getGroupName(): String

/**
 * get tables
 * @returns (any[])          *
 */
getTablesArray(): any[]

}
declare class AppSpecificTableModel {
/**
 * @returns (AppSpecificTableModel)          *
 */
getAppSpecificTableModel(): AppSpecificTableModel

/**
 * @returns (void)          *
 */
setAppSpecificTableModel(): void

/**
 * retrun groupName
 * @returns (String)          *
 */
getGroupName(): String

/**
 * retrun tableName
 * @returns (String)          *
 */
getTableName(): String

/**
 * get deifines of table columns.
 * @returns (any[])          *
 */
getColumns(): any[]

/**
 * retrun tableField
 * @returns (any[])          *
 */
getTableField(): any[]

/**
 * get RowIndex list,  the list contains the Integer
 * @returns (any[])          *
 */
getRowIndex(): any[]

}
declare class AppStatusGroupModel {
/**
 * Get AppStatusGroupModel.
 * @returns (AppStatusGroupModel) - AppStatusGroupModel
 */
getAppStatusGroup(): AppStatusGroupModel

/**
 * Set appStatusGroup.
 * @param {AppStatusGroupModel} appStatusGroup (AppStatusGroupModel)
 * @returns (void)          *
 */
setAppStatusGroup(appStatusGroup:AppStatusGroupModel): void

/**
 * Get AppStatusGroupCode.
 * @returns (String) - String
 */
getAppStatusGroupCode(): String

/**
 * Get status.
 * @returns (String) - String
 */
getStatus(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set appStatusGroupCode.
 * @param {string} appStatusGroupCode (string)
 * @returns (void)          *
 */
setAppStatusGroupCode(appStatusGroupCode:string): void

/**
 * Set status.
 * @param {string} status (string)
 * @returns (void)          *
 */
setStatus(status:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class AssetCAModel {
/**
 * Get AssetDataModel.
 * @returns (AssetConditionAssessmentModel) - assetDataModel
 */
getAssetCAModel(): AssetConditionAssessmentModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * get condition assessment
 * @returns (String) - condition assessment
 */
getConditionAssessment(): String

/**
 * set condition assessment
 * @param {string} conditionAssessment (string)
 * @returns (void)          *
 */
setConditionAssessment(conditionAssessment:string): void

/**
 * get scheduledDate
 * @returns (Date) - m_scheduledDate
 */
getScheduledDate(): Date

/**
 * set scheduledDate
 * @param {Date} scheduledDate (Date)
 * @returns (void)          *
 */
setScheduledDate(scheduledDate:Date): void

/**
 * get scheduledTime
 * @returns (String) - m_scheduledTime
 */
getScheduledTime(): String

/**
 * set scheduledTime
 * @param {string} scheduledTime (string)
 * @returns (void)          *
 */
setScheduledTime(scheduledTime:string): void

/**
 * get inspDate
 * @returns (Date) - m_inspDate
 */
getInspDate(): Date

/**
 * set inspDate
 * @param {Date} inspDate (Date)
 * @returns (void)          *
 */
setInspDate(inspDate:Date): void

/**
 * get inspTime
 * @returns (String) - m_inspTime
 */
getInspTime(): String

/**
 * set inspTime
 * @param {string} inspTime (string)
 * @returns (void)          *
 */
setInspTime(inspTime:string): void

/**
 * get inspector
 * @returns (SysUserModel) - m_inspector
 */
getInspector(): SysUserModel

/**
 * set inspector
 * @param {SysUserModel} inspector (SysUserModel)
 * @returns (void)          *
 */
setInspector(inspector:SysUserModel): void

/**
 * get inspector 's depart name (alias name)
 * @returns (String) - m_inspector
 */
getInspectedByDept(): String

/**
 * set inspector 's depart name (alias name)
 * @param {string} deptName (string)
 * @returns (void)          *
 */
setInspectedByDept(deptName:string): void

/**
 * get timeSpent
 * @returns (number) - (Double) m_timeSpent
 */
getTimeSpent(): number

/**
 * set timeSpent
 * @param {number} timeSpent (number) - (Double) 
 * @returns (void)          *
 */
setTimeSpent(timeSpent:number): void

/**
 * get comments
 * @returns (String) - m_comments
 */
getComments(): String

/**
 * set comments
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * get status
 * @returns (String) - m_status
 */
getStatus(): String

/**
 * set status
 * @param {string} status (string)
 * @returns (void)          *
 */
setStatus(status:string): void

/**
 * get recDate
 * @returns (Date) - recDate
 */
getRecDate(): Date

/**
 * set recDate
 * @param {Date} recDate (Date)
 * @returns (void)          *
 */
setRecDate(recDate:Date): void

/**
 * get recFulName
 * @returns (String) - recFulName
 */
getRecFulName(): String

/**
 * set recFulName
 * @param {string} recFulName (string)
 * @returns (void)          *
 */
setRecFulName(recFulName:string): void

/**
 * get recStatus
 * @returns (String) - recStatus
 */
getRecStatus(): String

/**
 * set recStatus
 * @param {string} recStatus (string)
 * @returns (void)          *
 */
setRecStatus(recStatus:string): void

/**
 * @returns (String) - the assetGroup
 */
getAssetGroup(): String

/**
 * @param {string} assetGroup (string)
 * @returns (void)          *
 */
setAssetGroup(assetGroup:string): void

/**
 * @returns (String) - the assetID
 */
getAssetID(): String

/**
 * @param {string} assetID (string)
 * @returns (void)          *
 */
setAssetID(assetID:string): void

/**
 * @returns (number) - (Long) the assetSeq
 */
getAssetSeq(): number

/**
 * @param {number} assetSeq (number) - (Long) 
 * @returns (void)          *
 */
setAssetSeq(assetSeq:number): void

/**
 * @returns (String) - the assetType
 */
getAssetType(): String

/**
 * @param {string} assetType (string)
 * @returns (void)          *
 */
setAssetType(assetType:string): void

/**
 * @returns (String) - the classType
 */
getClassType(): String

/**
 * @param {string} classType (string)
 * @returns (void)          *
 */
setClassType(classType:string): void

/**
 * @returns (Collection) - the asset condition assessment attributes.
 */
getCAAttributes(): Collection

/**
 * set condition assessment attributes
 * @param {any[]} caAttributeList (any[])
 * @returns (void)          *
 */
setCAAttributes(caAttributeList:any[]): void

/**
 * get condition assessment attributes
 * @param {number} ratingValue (number) - (Double) 
 * @returns (void)          *
 */
setRatingValue(ratingValue:number): void

/**
 * get ratingValue
 * @returns (number) - (Double) ratingValue
 */
getRatingValue(): number

/**
 * @param {number} ratingTypeId (number) - (Long) 
 * @returns (void)          *
 */
setRatingTypeId(ratingTypeId:number): void

/**
 * get ratingTypeId
 * @returns (number) - (Long) ratingId
 */
getRatingTypeId(): number

}
declare class AssetConditionModel {
/**
 * Set effectDate
 * @param {Date} effectDate (Date)
 * @returns (void)          *
 */
setEffectDate(effectDate:Date): void

/**
 * Set expireDate
 * @param {Date} expireDate (Date)
 * @returns (void)          *
 */
setExpireDate(expireDate:Date): void

/**
 * Set issuedDate
 * @param {Date} issuedDate (Date)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:Date): void

/**
 * Get assetNumber
 * @returns (number) - (long) long
 */
getAssetNumber(): number

/**
 * Set assetNumber
 * @param {number} assetNumber (number) - (long) 
 * @returns (void)          *
 */
setAssetNumber(assetNumber:number): void

/**
 * @returns (number) - (long) m_agencyNumber
 */
getAgencyNumber(): number

/**
 * Set auditStatus
 * @param {number} agencyNumber (number) - (long) 
 * @returns (void)          *
 */
setAgencyNumber(agencyNumber:number): void

}
declare class AssetModel {
/**
 * Get AssetDataModel.
 * @returns (AssetDataModel) - assetDataModel
 */
getAssetDataModel(): AssetDataModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get Asset Master Model
 * @returns (AssetMasterModel)          *
 */
getAssetMasterModel(): AssetMasterModel

/**
 * Set Asset Master Model
 * @param {AssetMasterModel} assetMasterModel (AssetMasterModel)
 * @returns (void)          *
 */
setAssetMasterModel(assetMasterModel:AssetMasterModel): void

/**
 * Get Asset Type Model
 * @returns (AssetTypeModel) - AssetTypeModel
 */
getAssetTypeModel(): AssetTypeModel

/**
 * Set Asset Type Model
 * @param {AssetTypeModel} assetTypeModel (AssetTypeModel)
 * @returns (void)          *
 */
setAssetTypeModel(assetTypeModel:AssetTypeModel): void

/**
 * Get Data Attributes
 * @returns (Collection)          *
 */
getDataAttributes(): Collection

/**
 * Set Data Attributes
 * @param {any[]} dataAttributes (any[])
 * @returns (void)          *
 */
setDataAttributes(dataAttributes:any[]): void

/**
 * Get Asset Master PK
 * @returns (AssetMasterPK)          *
 */
getAssetPK(): AssetMasterPK

}
declare class AssignTaskItemModel {
/**
 * Get assignTaskItem.
 * @returns (AssignTaskItemModel) - AssignTaskItemModel
 */
getAssignTaskItem(): AssignTaskItemModel

/**
 * Set assignTaskItem.
 * @param {AssignTaskItemModel} assignTaskItem (AssignTaskItemModel)
 * @returns (void)          *
 */
setAssignTaskItem(assignTaskItem:AssignTaskItemModel): void

/**
 * Get agency code.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set agency code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get TaskItemModel.
 * @returns (TaskItemModel) - TaskItemModel
 */
getTaskItemModel(): TaskItemModel

/**
 * Get getStreetNbr.
 * @returns (String) - String
 */
getStreetNbr(): String

/**
 * Get getStreetNbrEnd.
 * @returns (String) - String
 */
getStreetNbrEnd(): String

/**
 * Get getStreetNbrFraction.
 * @returns (String) - String
 */
getStreetNbrFraction(): String

/**
 * Get streetNbrFractionEnd.
 * @returns (String) - String
 */
getStreetNbrFractionEnd(): String

/**
 * Get streetDir.
 * @returns (String) - String
 */
getStreetDir(): String

/**
 * Get street name.
 * @returns (String) - String
 */
getStreetName(): String

/**
 * Get street suffix.
 * @returns (String) - String
 */
getStreetSuffix(): String

/**
 * Get unitType.
 * @returns (String) - String
 */
getUnitType(): String

/**
 * Get unitNbr.
 * @returns (String) - String
 */
getUnitNbr(): String

/**
 * Get UnitNbrEnd.
 * @returns (String) - String
 */
getUnitNbrEnd(): String

/**
 * Get city.
 * @returns (String) - String
 */
getCity(): String

/**
 * Get state.
 * @returns (String) - String
 */
getState(): String

/**
 * Get zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * Get group.
 * @returns (String) - String
 */
getGroup(): String

/**
 * Get type.
 * @returns (String) - String
 */
getType(): String

/**
 * Get subtype.
 * @returns (String) - String
 */
getSubtype(): String

/**
 * Get category.
 * @returns (String) - String
 */
getCategory(): String

/**
 * Get altID.
 * @returns (String) - String
 */
getAltID(): String

/**
 * Get parent task name.
 * @returns (String) - String
 */
getParentTaskName(): String

/**
 * Set TaskItemModel.
 * @param {TaskItemModel} taskItemModel (TaskItemModel)
 * @returns (void)          *
 */
setTaskItemModel(taskItemModel:TaskItemModel): void

/**
 * Set streetNbr.
 * @param {string} streetNbr (string)
 * @returns (void)          *
 */
setStreetNbr(streetNbr:string): void

/**
 * Set streetNbrEnd.
 * @param {string} streetNbrEnd (string)
 * @returns (void)          *
 */
setStreetNbrEnd(streetNbrEnd:string): void

/**
 * Set streetNbrFraction.
 * @param {string} streetNbrFraction (string)
 * @returns (void)          *
 */
setStreetNbrFraction(streetNbrFraction:string): void

/**
 * Set streetNbrFractionEnd.
 * @param {string} streetNbrFractionEnd (string)
 * @returns (void)          *
 */
setStreetNbrFractionEnd(streetNbrFractionEnd:string): void

/**
 * Set streetDir.
 * @param {string} streetDir (string)
 * @returns (void)          *
 */
setStreetDir(streetDir:string): void

/**
 * Set street name.
 * @param {string} streetName (string)
 * @returns (void)          *
 */
setStreetName(streetName:string): void

/**
 * Set streetsuffix.
 * @param {string} streetSuffix (string)
 * @returns (void)          *
 */
setStreetSuffix(streetSuffix:string): void

/**
 * Set  type.
 * @param {string} unitType (string)
 * @returns (void)          *
 */
setUnitType(unitType:string): void

/**
 * Set unitNbr.
 * @param {string} unitNbr (string)
 * @returns (void)          *
 */
setUnitNbr(unitNbr:string): void

/**
 * Set unitNbrEnd.
 * @param {string} unitNbrEnd (string)
 * @returns (void)          *
 */
setUnitNbrEnd(unitNbrEnd:string): void

/**
 * Set city.
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * Set state.
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * Set zip.
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * Set group.
 * @param {string} group (string)
 * @returns (void)          *
 */
setGroup(group:string): void

/**
 * Set type.
 * @param {string} type (string)
 * @returns (void)          *
 */
setType(type:string): void

/**
 * Set  subtype.
 * @param {string} subtype (string)
 * @returns (void)          *
 */
setSubtype(subtype:string): void

/**
 * Set category.
 * @param {string} category (string)
 * @returns (void)          *
 */
setCategory(category:string): void

/**
 * Set altID.
 * @param {string} altID (string)
 * @returns (void)          *
 */
setAltID(altID:string): void

/**
 * Set parentTaskName.
 * @param {string} parentTaskName (string)
 * @returns (void)          *
 */
setParentTaskName(parentTaskName:string): void

}
declare class B1ExpirationModel {
/**
 * Get b1Expiration.
 * @returns (B1ExpirationModel) - B1ExpirationModel
 */
getB1Expiration(): B1ExpirationModel

/**
 * Set b1Expiration.
 * @param {B1ExpirationModel} b1Expiration (B1ExpirationModel)
 * @returns (void)          *
 */
setB1Expiration(b1Expiration:B1ExpirationModel): void

/**
 * Get expiration code.
 * @returns (String) - String
 */
getExpCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get expiration status.
 * @returns (String) - String
 */
getExpStatus(): String

/**
 * Get expiration date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpDate(): ScriptDateTime

/**
 * Get expiration date string.
 * @returns (String) - String
 */
getExpDateString(): String

/**
 * Get ExpInterval
 * @returns (number) - (long) long
 */
getExpInterval(): number

/**
 * Get expiration unit.
 * @returns (String) - String
 */
getExpUnit(): String

/**
 * Get GraceInterval.
 * @returns (number) - (long) long
 */
getGraceInterval(): number

/**
 * Get GraceUnit.
 * @returns (String) - String
 */
getGraceUnit(): String

/**
 * Get PenaltyInterval.
 * @returns (number) - (long) long
 */
getPenaltyInterval(): number

/**
 * Get PenaltyUnit.
 * @returns (String) - String.
 */
getPenaltyUnit(): String

/**
 * Get PenaltyNum.
 * @returns (number) - (long) long
 */
getPenaltyNum(): number

/**
 * Get PenaltyPeriod.
 * @returns (number) - (long) long
 */
getPenaltyPeriod(): number

/**
 * Get renewal function.
 * @returns (String) - String
 */
getRenewalFunction(): String

/**
 * Get renewal code.
 * @returns (String) - String
 */
getRenewalCode(): String

/**
 * Get PenaltyFunction.
 * @returns (String) - String
 */
getPenaltyFunction(): String

/**
 * Get PenaltyCode.
 * @returns (String) - String
 */
getPenaltyCode(): String

/**
 * Get PayPeriodGroup.
 * @returns (String) - String
 */
getPayPeriodGroup(): String

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit ID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set expiration code.
 * @param {string} expCode (string)
 * @returns (void)          *
 */
setExpCode(expCode:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set expiration status.
 * @param {string} expStatus (string)
 * @returns (void)          *
 */
setExpStatus(expStatus:string): void

/**
 * Set expiration date.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpDate(expDate:ScriptDateTime): void

/**
 * Set expiration date String.
 * @param {string} expDateString (string) - String
 * @returns (void)          *
 */
setExpDateString(expDateString:string): void

/**
 * Set expiration interval.
 * @param {number} expInterval (number) - (long) 
 * @returns (void)          *
 */
setExpInterval(expInterval:number): void

/**
 * Set expiration unit.
 * @param {string} expUnit (string)
 * @returns (void)          *
 */
setExpUnit(expUnit:string): void

/**
 * Set grace interval.
 * @param {number} graceInterval (number) - (long) 
 * @returns (void)          *
 */
setGraceInterval(graceInterval:number): void

/**
 * Set grace unit.
 * @param {string} graceUnit (string)
 * @returns (void)          *
 */
setGraceUnit(graceUnit:string): void

/**
 * Set penaltyInterval.
 * @param {number} penaltyInterval (number) - (long) 
 * @returns (void)          *
 */
setPenaltyInterval(penaltyInterval:number): void

/**
 * Set penaltyUnit.
 * @param {string} penaltyUnit (string)
 * @returns (void)          *
 */
setPenaltyUnit(penaltyUnit:string): void

/**
 * Set penaltyNum.
 * @param {number} penaltyNum (number) - (long) 
 * @returns (void)          *
 */
setPenaltyNum(penaltyNum:number): void

/**
 * Set penaltyPeriod.
 * @param {number} penaltyPeriod (number) - (long) 
 * @returns (void)          *
 */
setPenaltyPeriod(penaltyPeriod:number): void

/**
 * Set renewalFunction.
 * @param {string} renewalFunction (string)
 * @returns (void)          *
 */
setRenewalFunction(renewalFunction:string): void

/**
 * Set renewalCode.
 * @param {string} renewalCode (string)
 * @returns (void)          *
 */
setRenewalCode(renewalCode:string): void

/**
 * Set penaltyFunction.
 * @param {string} penaltyFunction (string)
 * @returns (void)          *
 */
setPenaltyFunction(penaltyFunction:string): void

/**
 * Set penaltyCode.
 * @param {string} penaltyCode (string)
 * @returns (void)          *
 */
setPenaltyCode(penaltyCode:string): void

/**
 * Set payPeriodGroup.
 * @param {string} payPeriodGroup (string)
 * @returns (void)          *
 */
setPayPeriodGroup(payPeriodGroup:string): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class B3APOAttributeModel {
/**
 * Get ContactAttributeModel.
 * @returns (B3APOAttributeModel) - ContactAttributeModel
 */
getB3APOAttributeModel(): B3APOAttributeModel

/**
 * Get attributeName.
 * @returns (String) - String
 */
getAttributeName(): String

/**
 * Get attributeUnitType.
 * @returns (String) - String
 */
getAttributeUnitType(): String

/**
 * Get attributeValue.
 * @returns (String) - String
 */
getAttributeValue(): String

/**
 * @returns (String)          *
 */
getAttributeLabel(): String

/**
 * Get.attributeValueDataType.
 * @returns (String) - String
 */
getAttributeValueDataType(): String

/**
 * Get.attributeValueReqFlag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get displayOrder.
 * @returns (number) - (long) long
 */
getDisplayOrder(): number

/**
 * Set attributeName.
 * @param {string} attributeName (string)
 * @returns (void)          *
 */
setAttributeName(attributeName:string): void

/**
 * Set attributeUnitType.
 * @param {string} attributeUnitType (string)
 * @returns (void)          *
 */
setAttributeUnitType(attributeUnitType:string): void

/**
 * Set attributeValue.
 * @param {string} attributeValue (string)
 * @returns (void)          *
 */
setAttributeValue(attributeValue:string): void

/**
 * @returns (void)          *
 */
setAttributeLabel(): void

/**
 * Set attributeValueDataType.
 * @param {string} attributeValueDataType (string)
 * @returns (void)          *
 */
setAttributeValueDataType(attributeValueDataType:string): void

/**
 * Set attributeValueReqFlag.
 * @param {string} attributeValueReqFlag (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(attributeValueReqFlag:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (long) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Get APO type.
 * @returns (String) - String
 */
getAPOType(): String

/**
 * Get APO number.
 * @returns (String) - String
 */
getAPONo(): String

/**
 * Set contactNo.
 * @param {string} apoNo (string)
 * @returns (void)          *
 */
setAPONo(apoNo:string): void

/**
 * Set contactType.
 * @param {string} apoType (string)
 * @returns (void)          *
 */
setAPOType(apoType:string): void

/**
 * @returns (void)          *
 */
setCapID(): void

/**
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

}
declare class BCalcValuatnModel {
/**
 * Get bCalcValuatn.
 * @returns (BCalcValuatnModel) - BCalcValuatnModel
 */
getbCalcValuatn(): BCalcValuatnModel

/**
 * Set bCalcValuatn.
 * @param {BCalcValuatnModel} bCalcValuatn (BCalcValuatnModel)
 * @returns (void)          *
 */
setbCalcValuatn(bCalcValuatn:BCalcValuatnModel): void

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get CalcValueSeqNbr.
 * @returns (number) - (long) long
 */
getCalcValueSeqNbr(): number

/**
 * Get use type.
 * @returns (String) - String
 */
getUseTyp(): String

/**
 * Get conType.
 * @returns (String) - String
 */
getConTyp(): String

/**
 * Get version.
 * @returns (String) - String
 */
getVersion(): String

/**
 * Get totalValue.
 * @returns (number) - (double) double
 */
getTotalValue(): number

/**
 * Get unitType.
 * @returns (String) - String
 */
getUnitTyp(): String

/**
 * Get unitValue.
 * @returns (number) - (double) double
 */
getUnitValue(): number

/**
 * Get FeeIndicator.
 * @returns (String) - String
 */
getFeeIndicator(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set calcValueSeqNbr.
 * @param {number} calcValueSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setCalcValueSeqNbr(calcValueSeqNbr:number): void

/**
 * Set useTyp.
 * @param {string} useTyp (string)
 * @returns (void)          *
 */
setUseTyp(useTyp:string): void

/**
 * Set conTyp.
 * @param {string} conTyp (string)
 * @returns (void)          *
 */
setConTyp(conTyp:string): void

/**
 * Set version.
 * @param {string} version (string)
 * @returns (void)          *
 */
setVersion(version:string): void

/**
 * Set total value.
 * @param {number} totalValue (number) - (double) 
 * @returns (void)          *
 */
setTotalValue(totalValue:number): void

/**
 * Set unitTyp.
 * @param {string} unitTyp (string)
 * @returns (void)          *
 */
setUnitTyp(unitTyp:string): void

/**
 * Set unitValue.
 * @param {number} unitValue (number) - (double) 
 * @returns (void)          *
 */
setUnitValue(unitValue:number): void

/**
 * Set feeIndicator.
 * @param {string} feeIndicator (string)
 * @returns (void)          *
 */
setFeeIndicator(feeIndicator:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get excludeRegionalModifier
 * @returns (String)          *
 */
getExcludeRegionalModifier(): String

/**
 * Set excludeRegionalModifier
 * @param {string} excludeRegionalModifier (string)
 * @returns (void)          *
 */
setExcludeRegionalModifier(excludeRegionalModifier:string): void

}
declare class BizDomainModel {
/**
 * Get bizModel.
 * @returns (BizDomainModel) - BizDomainModel
 */
getBizDomain(): BizDomainModel

/**
 * Get bizdomain.
 * @returns (String) - String
 */
getBizdomain(): String

/**
 * Get description.
 * @returns (String) - String
 */
getDescription(): String

/**
 * Get i18n description.
 * @returns (String) - String
 */
getDispDescription(): String

/**
 * Get bizdomainValue.
 * @returns (String) - String
 */
getBizdomainValue(): String

/**
 * Get i18n bizdomainValue.
 * @returns (String) - String
 */
getDispBizdomainValue(): String

/**
 * Get dispositionID.
 * @returns (number) - (long) long
 */
getDispositionID(): number

/**
 * Get audit staus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get bizdomain.
 * @param {string} bizdomain (string)
 * @returns (void)          *
 */
setBizdomain(bizdomain:string): void

/**
 * Set description.
 * @param {string} description (string)
 * @returns (void)          *
 */
setDescription(description:string): void

/**
 * Set default_value.
 * @param {string} default_value (string)
 * @returns (void)          *
 */
setBizdomainValue(default_value:string): void

/**
 * Set dispositionID.
 * @param {number} dispositionID (number) - (long) 
 * @returns (void)          *
 */
setDispositionID(dispositionID:number): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (number) - (int) Returns the sortOrder.
 */
getSortOrder(): number

/**
 * @param {number} sortOrder (number) - (int) 
 * @returns (void)          *
 */
setSortOrder(sortOrder:number): void

/**
 * Get biz domain by key
 * @param {string} key (string)
 * @returns (BizDomainModel[])          *
 */
getBizDomains(key:string): BizDomainModel[]

/**
 * @returns (void)          *
 */
setBizDomains(): void

}
declare class BValuatnModel {
/**
 * Get bValuatn.
 * @returns (BValuatnModel) - BValuatnModel
 */
getbValuatn(): BValuatnModel

/**
 * Set bValuatn.
 * @param {BValuatnModel} bValuatn (BValuatnModel)
 * @returns (void)          *
 */
setbValuatn(bValuatn:BValuatnModel): void

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get ValuationPeriod.
 * @returns (String) - valuationPeriod
 */
getValuationPeriod(): String

/**
 * Get estimatedValue.
 * @returns (number) - (double) estimatedValue
 */
getEstimatedValue(): number

/**
 * Get planCheckValue.
 * @returns (number) - (double) planCheckValue
 */
getPlanCheckValue(): number

/**
 * Get calculatedValue.
 * @returns (number) - (double) calculatedValue
 */
getCalculatedValue(): number

/**
 * Get feeFactorFlag.
 * @returns (String) - feeFactorFlag
 */
getFeeFactorFlag(): String

/**
 * @returns (ScriptDateTime)          *
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - auditID
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - auditStatus
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set valuationPeriod.
 * @param {string} valuationPeriod (string)
 * @returns (void)          *
 */
setValuationPeriod(valuationPeriod:string): void

/**
 * Set estimatedValue.
 * @param {number} estimatedValue (number) - (double) 
 * @returns (void)          *
 */
setEstimatedValue(estimatedValue:number): void

/**
 * Set planCheckValue.
 * @param {number} planCheckValue (number) - (double) 
 * @returns (void)          *
 */
setPlanCheckValue(planCheckValue:number): void

/**
 * Set calculatedValue.
 * @param {number} calculatedValue (number) - (double) 
 * @returns (void)          *
 */
setCalculatedValue(calculatedValue:number): void

/**
 * Set feeFactorFlag.
 * @param {string} feeFactorFlag (string)
 * @returns (void)          *
 */
setFeeFactorFlag(feeFactorFlag:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class CAEConditionModel {
/**
 * Get conditionModel.
 * @returns (CAEConditionModel) - CAEConditionModel
 */
getcAEConditionModel(): CAEConditionModel

/**
 * Set conditionModel.
 * @param {CAEConditionModel} cAEConditionModel (CAEConditionModel)
 * @returns (void)          *
 */
setcAEConditionModel(cAEConditionModel:CAEConditionModel): void

/**
 * Get sourceNumber.
 * @returns (number) - (long) long
 */
getSourceNumber(): number

/**
 * Get licenseSeqNo.
 * @returns (number) - (long) long
 */
getLicenseSeqNo(): number

/**
 * set License Seq No.
 * @param {number} licenseSeqNo (number) - (long) 
 * @returns (void)          *
 */
setLicenseSeqNo(licenseSeqNo:number): void

/**
 * Get conditionNumber.
 * @returns (number) - (long) long
 */
getConditionNumber(): number

/**
 * Get conditionType.
 * @returns (String) - String
 */
getConditionType(): String

/**
 * Get conditionDescription.
 * @returns (String) - String
 */
getConditionDescription(): String

/**
 * Get conditionComment.
 * @returns (String) - String
 */
getConditionComment(): String

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get issuedDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getIssuedDate(): ScriptDateTime

/**
 * Get refNumber1.
 * @returns (String) - String
 */
getRefNumber1(): String

/**
 * Get refNumber2.
 * @returns (String) - String
 */
getRefNumber2(): String

/**
 * Get impactCode.
 * @returns (String) - String
 */
getImpactCode(): String

/**
 * Get issuedByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getIssuedByUser(): SysUserModel

/**
 * Get statusByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getStatusByUser(): SysUserModel

/**
 * Get conditionStatus.
 * @returns (String) - String
 */
getConditionStatus(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get cAEConditionModel
 * @returns (CAEConditionModel) - CAEConditionModel
 */
getCAEConditionModel(): CAEConditionModel

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set conditionComment.
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setConditionComment(conditionComment:string): void

/**
 * Set conditionDescription.
 * @param {string} conditionDescription (string)
 * @returns (void)          *
 */
setConditionDescription(conditionDescription:string): void

/**
 * Set conditionStatus.
 * @param {string} conditionStatus (string)
 * @returns (void)          *
 */
setConditionStatus(conditionStatus:string): void

/**
 * Set conditionType.
 * @param {string} conditionType (string)
 * @returns (void)          *
 */
setConditionType(conditionType:string): void

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set impactCode.
 * @param {string} impactCode (string)
 * @returns (void)          *
 */
setImpactCode(impactCode:string): void

/**
 * Set issuedDate.
 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:ScriptDateTime): void

/**
 * Set refNumber1.
 * @param {string} refNumber1 (string)
 * @returns (void)          *
 */
setRefNumber1(refNumber1:string): void

/**
 * Set refNumber2.
 * @param {string} refNumber2 (string)
 * @returns (void)          *
 */
setRefNumber2(refNumber2:string): void

/**
 * Set issuedByUser.
 * @param {SysUserModel} issuedByUser (SysUserModel)
 * @returns (void)          *
 */
setIssuedByUser(issuedByUser:SysUserModel): void

/**
 * Set statusByUser.
 * @param {SysUserModel} statusByUser (SysUserModel)
 * @returns (void)          *
 */
setStatusByUser(statusByUser:SysUserModel): void

/**
 * Method getConditionStatusType
 * @returns (String) - String
 */
getConditionStatusType(): String

/**
 * Method setConditionStatusType
 * @param {string} conditionStatusType (string)
 * @returns (void)          *
 */
setConditionStatusType(conditionStatusType:string): void

/**
 * Method getDisplayConditionNotice
 * @returns (String) - String
 */
getDisplayConditionNotice(): String

/**
 * Method setDisplayConditionNotice
 * @param {string} displayConditionNotice (string)
 * @returns (void)          *
 */
setDisplayConditionNotice(displayConditionNotice:string): void

/**
 * Method getIncludeInConditionName
 * @returns (String) - String
 */
getIncludeInConditionName(): String

/**
 * Method setIncludeInConditionName
 * @param {string} includeInConditionName (string)
 * @returns (void)          *
 */
setIncludeInConditionName(includeInConditionName:string): void

/**
 * Method getIncludeInShortDescription
 * @returns (String) - String
 */
getIncludeInShortDescription(): String

/**
 * Method setIncludeInShortDescription
 * @param {string} includeInShortDescription (string)
 * @returns (void)          *
 */
setIncludeInShortDescription(includeInShortDescription:string): void

/**
 * Method getInheritable
 * @returns (String) - String
 */
getInheritable(): String

/**
 * Method setInheritable
 * @param {string} inheritable (string)
 * @returns (void)          *
 */
setInheritable(inheritable:string): void

/**
 * Method getLongDescripton
 * @returns (String) - String
 */
getLongDescripton(): String

/**
 * Method setLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setLongDescripton(longDescripton:string): void

/**
 * Method getPublicDisplayMessage
 * @returns (String) - String
 */
getPublicDisplayMessage(): String

/**
 * Method setPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResolutionAction
 * @returns (String) - String
 */
getResolutionAction(): String

/**
 * Method setResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResolutionAction(resolutionAction:string): void

/**
 * Method setConditionGroup
 * @param {string} conditionGroup (string)
 * @returns (void)          *
 */
setConditionGroup(conditionGroup:string): void

/**
 * Method getConditionGroup
 * @returns (String) - String
 */
getConditionGroup(): String

/**
 * Method setDisplayNoticeOnACA
 * @param {string} displayNoticeOnACA (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACA(displayNoticeOnACA:string): void

/**
 * Method getDisplayNoticeOnACA
 * @returns (String) - String
 */
getDisplayNoticeOnACA(): String

/**
 * Method setDisplayNoticeOnACAFee
 * @param {string} displayNoticeOnACAFee (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(displayNoticeOnACAFee:string): void

/**
 * Method getDisplayNoticeOnACAFee
 * @returns (String) - String
 */
getDisplayNoticeOnACAFee(): String

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @param {string} additionalInformation (string)
 * @returns (void)          *
 */
setAdditionalInformation(additionalInformation:string): void

}
declare class CapCommentModel {
/**
 * Get CapCommentModel.
 * @returns (CapCommentModel) - getCapCommentModel
 */
getCapCommentModel(): CapCommentModel

/**
 * Get capIDModel.
 * @returns (CapIDModel) - CapIDModel
 */
getCapIDModel(): CapIDModel

/**
 * Set capIDModel.
 * @param {CapIDModel} capIDModel (CapIDModel)
 * @returns (void)          *
 */
setCapIDModel(capIDModel:CapIDModel): void

/**
 * Get comment type.
 * @returns (String) - String
 */
getCommentType(): String

/**
 * Set comment type.
 * @param {string} commentType (string)
 * @returns (void)          *
 */
setCommentType(commentType:string): void

/**
 * Get Synopsis.
 * @returns (String) - synopsis
 */
getSynopsis(): String

/**
 * Set synopsis.
 * @param {string} synopsis (string)
 * @returns (void)          *
 */
setSynopsis(synopsis:string): void

/**
 * Get text.
 * @returns (String) - String
 */
getText(): String

/**
 * Set text.
 * @param {string} text (string)
 * @returns (void)          *
 */
setText(text:string): void

/**
 * Get audit user.
 * @returns (String) - String
 */
getAuditUser(): String

/**
 * Set audit user.
 * @param {string} auditUser (string)
 * @returns (void)          *
 */
setAuditUser(auditUser:string): void

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get commandSeqNbr.
 * @returns (number) - (Long) Long
 */
getCommandSeqNbr(): number

/**
 * Set commandSeqNbr.
 * @param {number} commandSeqNbr (number) - (Long) 
 * @returns (void)          *
 */
setCommandSeqNbr(commandSeqNbr:number): void

}
declare class CapConditionModel {
/**
 * Set capConditionModel.
 * @param {CapConditionModel} capConditionModel (CapConditionModel)
 * @returns (void)          *
 */
setCapConditionModel(capConditionModel:CapConditionModel): void

/**
 * Get capConditionModel.
 * @returns (CapConditionModel) - CapConditionModel
 */
getCapConditionModel(): CapConditionModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * set capID.
 * @param {CapIDModel} capIdModel (CapIDModel)
 * @returns (void)          *
 */
setCapID(capIdModel:CapIDModel): void

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get issuedDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getIssuedDate(): ScriptDateTime

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * @returns (void)          *
 */
setConditionSource(): void

/**
 * @returns (String)          *
 */
getConditionSource(): String

/**
 * @returns (void)          *
 */
setReferenceConditionNumber(): void

/**
 * @returns (number) - (long) 
 */
getReferenceConditionNumber(): number

/**
 * @returns (void)          *
 */
setDisplayOrder(): void

/**
 * @returns (number) - (Long) 
 */
getDisplayOrder(): number

/**
 * @returns (void)          *
 */
setNoticeAction(): void

/**
 * @returns (String)          *
 */
getNoticeAction(): String

/**
 * @returns (number) - (Long) 
 */
getStandardConditionNumber(): number

/**
 * @returns (void)          *
 */
setStandardConditionNumber(): void

/**
 * @returns (String)          *
 */
getRightGranted(): String

/**
 * @returns (void)          *
 */
setRightGranted(): void

/**
 * Set effectDate
 * @param {Date} effectDate (Date)
 * @returns (void)          *
 */
setEffectDate(effectDate:Date): void

/**
 * Set expireDate
 * @param {Date} expireDate (Date)
 * @returns (void)          *
 */
setExpireDate(expireDate:Date): void

/**
 * Set issuedDate
 * @param {Date} issuedDate (Date)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:Date): void

/**
 * @returns (String)          *
 */
getConditionOfApproval(): String

/**
 * @returns (void)          *
 */
setConditionOfApproval(): void

/**
 * @returns (number) - (Integer) 
 */
getPriority(): number

/**
 * @returns (void)          *
 */
setPriority(): void

}
declare class CapContactModel {
/**
 * Get capContactModel.
 * @returns (CapContactModel) - CapContactModel
 */
getCapContactModel(): CapContactModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get people.
 * @returns (PeopleModel) - PeopleModel
 */
getPeople(): PeopleModel

/**
 * Set CapID.
 * @param {CapIDModel} model (CapIDModel)
 * @returns (void)          *
 */
setCapID(model:CapIDModel): void

/**
 * Set people.
 * @param {PeopleModel} model (PeopleModel)
 * @returns (void)          *
 */
setPeople(model:PeopleModel): void

/**
 * Get firstName.
 * @returns (String) - String
 */
getFirstName(): String

/**
 * Get lastName.
 * @returns (String)          *
 */
getLastName(): String

/**
 * Get email.
 * @returns (String) - String
 */
getEmail(): String

/**
 * Set firstName.
 * @param {string} aName (string)
 * @returns (void)          *
 */
setFirstName(aName:string): void

/**
 * Set lastName.
 * @param {string} aName (string)
 * @returns (void)          *
 */
setLastName(aName:string): void

/**
 * Set email.
 * @param {string} aName (string)
 * @returns (void)          *
 */
setEmail(aName:string): void

/**
 * Get country.
 * @returns (String) - String
 */
getCountry(): String

/**
 * Set country.
 * @param {string} aCountry (string)
 * @returns (void)          *
 */
setCountry(aCountry:string): void

}
declare class CapDetailModel {
/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get ID1.
 * @returns (String) - String
 */
getID1(): String

/**
 * Get ID2.
 * @returns (String) - String
 */
getID2(): String

/**
 * Get ID3.
 * @returns (String) - String
 */
getID3(): String

/**
 * Get appStatus.
 * @returns (String) - String
 */
getAppStatus(): String

/**
 * Get disposition.
 * @returns (String) - String
 */
getDisposition(): String

/**
 * Get totalFee.
 * @returns (number) - (double) double
 */
getTotalFee(): number

/**
 * Get totalPay.
 * @returns (number) - (double) double
 */
getTotalPay(): number

/**
 * Get balance.
 * @returns (number) - (double) double
 */
getBalance(): number

/**
 * Get appStatusDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAppStatusDate(): ScriptDateTime

/**
 * Get dispositionDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getDispositionDate(): ScriptDateTime

/**
 * Get balanceDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getBalanceDate(): ScriptDateTime

/**
 * Get houseCount.
 * @returns (number) - (long) long
 */
getHouseCount(): number

/**
 * Get buildingCount.
 * @returns (number) - (long) long
 */
getBuildingCount(): number

/**
 * Get publicOwned.
 * @returns (String) - String
 */
getPublicOwned(): String

/**
 * Get constTypeCode.
 * @returns (String) - String
 */
getConstTypeCode(): String

/**
 * Get action.
 * @returns (String) - String
 */
getAction(): String

/**
 * Get gaAgencyCode.
 * @returns (String) - String
 */
getGaAgencyCode(): String

/**
 * Get gaBureauCode.
 * @returns (String) - String
 */
getGaBureauCode(): String

/**
 * Get gaDivisionCode.
 * @returns (String) - String
 */
getGaDivisionCode(): String

/**
 * Get gaOfficeCode.
 * @returns (String) - String
 */
getGaOfficeCode(): String

/**
 * Get gaSectionCode.
 * @returns (String) - String
 */
getGaSectionCode(): String

/**
 * Get gaGroupCode.
 * @returns (String) - String
 */
getGaGroupCode(): String

/**
 * Get gaFname.
 * @returns (String) - String
 */
getGaFname(): String

/**
 * Get gaMname.
 * @returns (String) - String
 */
getGaMname(): String

/**
 * Get gaLname.
 * @returns (String) - String
 */
getGaLname(): String

/**
 * Set audit Date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set appStatus.
 * @param {string} appStatus (string)
 * @returns (void)          *
 */
setAppStatus(appStatus:string): void

/**
 * Set disposition.
 * @param {string} disposition (string)
 * @returns (void)          *
 */
setDisposition(disposition:string): void

/**
 * Set totalFee.
 * @param {number} totalFee (number) - (double) 
 * @returns (void)          *
 */
setTotalFee(totalFee:number): void

/**
 * Set totalPay.
 * @param {number} totalPay (number) - (double) 
 * @returns (void)          *
 */
setTotalPay(totalPay:number): void

/**
 * Set balance.
 * @param {number} balance (number) - (double) 
 * @returns (void)          *
 */
setBalance(balance:number): void

/**
 * Set appStatusDate.
 * @param {ScriptDateTime} appStatusDate (ScriptDateTime)
 * @returns (void)          *
 */
setAppStatusDate(appStatusDate:ScriptDateTime): void

/**
 * Set dispositionDate.
 * @param {ScriptDateTime} dispositionDate (ScriptDateTime)
 * @returns (void)          *
 */
setDispositionDate(dispositionDate:ScriptDateTime): void

/**
 * Set balanceDate.
 * @param {ScriptDateTime} balanceDate (ScriptDateTime)
 * @returns (void)          *
 */
setBalanceDate(balanceDate:ScriptDateTime): void

/**
 * Set houseCount.
 * @param {number} houseCount (number) - (long) 
 * @returns (void)          *
 */
setHouseCount(houseCount:number): void

/**
 * Set buildingCount.
 * @param {number} buildingCount (number) - (long) 
 * @returns (void)          *
 */
setBuildingCount(buildingCount:number): void

/**
 * Set publicOwned.
 * @param {string} publicOwned (string)
 * @returns (void)          *
 */
setPublicOwned(publicOwned:string): void

/**
 * Set constTypeCode.
 * @param {string} constTypeCode (string)
 * @returns (void)          *
 */
setConstTypeCode(constTypeCode:string): void

/**
 * Set action.
 * @param {string} action (string)
 * @returns (void)          *
 */
setAction(action:string): void

/**
 * Set gaAgencyCode.
 * @param {string} gaAgencyCode (string)
 * @returns (void)          *
 */
setGaAgencyCode(gaAgencyCode:string): void

/**
 * Set gaBureauCode.
 * @param {string} gaBureauCode (string)
 * @returns (void)          *
 */
setGaBureauCode(gaBureauCode:string): void

/**
 * Set gaDivisionCode.
 * @param {string} gaDivisionCode (string)
 * @returns (void)          *
 */
setGaDivisionCode(gaDivisionCode:string): void

/**
 * Set gaOfficeCode.
 * @param {string} gaOfficeCode (string)
 * @returns (void)          *
 */
setGaOfficeCode(gaOfficeCode:string): void

/**
 * Set gaSectionCode.
 * @param {string} gaSectionCode (string)
 * @returns (void)          *
 */
setGaSectionCode(gaSectionCode:string): void

/**
 * Set gaGroupCode.
 * @param {string} gaGroupCode (string)
 * @returns (void)          *
 */
setGaGroupCode(gaGroupCode:string): void

/**
 * Set gaFname.
 * @param {string} gaFname (string)
 * @returns (void)          *
 */
setGaFname(gaFname:string): void

/**
 * Set gaMname.
 * @param {string} gaMname (string)
 * @returns (void)          *
 */
setGaMname(gaMname:string): void

/**
 * Set gaLname.
 * @param {string} gaLname (string)
 * @returns (void)          *
 */
setGaLname(gaLname:string): void

/**
 * Set auditUser.
 * @param {string} auditUser (string)
 * @returns (void)          *
 */
setAuditUser(auditUser:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set capDetailModel
 * @returns (CapDetailModel)          *
 */
getCapDetailModel(): CapDetailModel

/**
 * Get capDetailModel
 * @param {CapDetailModel} capDetailModel (CapDetailModel)
 * @returns (void)          *
 */
setCapDetailModel(capDetailModel:CapDetailModel): void

/**
 * @returns (String) - getApplSubStatus
 */
getApplSubStatus(): String

/**
 * @param {string} applSubStatus (string)
 * @returns (void)          *
 */
setApplSubStatus(applSubStatus:string): void

/**
 * @returns (ScriptDateTime) - getAsgnDate
 */
getAsgnDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} asgnDate (ScriptDateTime)
 * @returns (void)          *
 */
setAsgnDate(asgnDate:ScriptDateTime): void

/**
 * @returns (String)          *
 */
getAsgnDept(): String

/**
 * @param {string} asgnDept (string)
 * @returns (void)          *
 */
setAsgnDept(asgnDept:string): void

/**
 * @returns (String)          *
 */
getAsgnStaff(): String

/**
 * @param {string} asgnStaff (string)
 * @returns (void)          *
 */
setAsgnStaff(asgnStaff:string): void

/**
 * @returns (String)          *
 */
getClosedBy(): String

/**
 * @param {string} closedBy (string)
 * @returns (void)          *
 */
setClosedBy(closedBy:string): void

/**
 * @returns (ScriptDateTime)          *
 */
getClosedDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} closedDate (ScriptDateTime)
 * @returns (void)          *
 */
setClosedDate(closedDate:ScriptDateTime): void

/**
 * @returns (String)          *
 */
getPriority(): String

/**
 * @param {string} priority (string)
 * @returns (void)          *
 */
setPriority(priority:string): void

/**
 * @returns (String) - getReportedChannel
 */
getReportedChannel(): String

/**
 * @param {string} reportedChannel (string)
 * @returns (void)          *
 */
setReportedChannel(reportedChannel:string): void

/**
 * @returns (String)          *
 */
getServerity(): String

/**
 * @param {string} serverity (string)
 * @returns (void)          *
 */
setServerity(serverity:string): void

/**
 * @returns (String) - getShortNotes
 */
getShortNotes(): String

/**
 * @param {string} shortNotes (string)
 * @returns (void)          *
 */
setShortNotes(shortNotes:string): void

/**
 * @returns (number) - (Double) getTotalJobCost
 */
getTotalJobCost(): number

/**
 * @param {number} totalJobCost (number) - (Double) 
 * @returns (void)          *
 */
setTotalJobCost(totalJobCost:number): void

/**
 * @returns (ScriptDateTime) - getEndClosedDate
 */
getEndClosedDate(): ScriptDateTime

/**
 * @returns (String)          *
 */
getFullNameOfStaff(): String

/**
 * @returns (String)          *
 */
getClosedDept(): String

/**
 * @param {string} closedDept (string)
 * @returns (void)          *
 */
setClosedDept(closedDept:string): void

/**
 * @returns (ScriptDateTime) - getCompleteDate
 */
getCompleteDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} completeDate (ScriptDateTime)
 * @returns (void)          *
 */
setCompleteDate(completeDate:ScriptDateTime): void

/**
 * @returns (String) - getCompleteDept
 */
getCompleteDept(): String

/**
 * @returns (String) - getCompleteStaff
 */
getCompleteStaff(): String

/**
 * @returns (ScriptDateTime) - getScheduledDate
 */
getScheduledDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} scheduledDate (ScriptDateTime)
 * @returns (void)          *
 */
setScheduledDate(scheduledDate:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - EndAsgnDate
 */
getEndAsgnDate(): ScriptDateTime

/**
 * @returns (ScriptDateTime) - End Complete Date
 */
getEndCompleteDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} endCompleteDate (ScriptDateTime)
 * @returns (void)          *
 */
setEndCompleteDate(endCompleteDate:ScriptDateTime): void

/**
 * @returns (ScriptDateTime)          *
 */
getEndScheduledDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} endScheduledDate (ScriptDateTime)
 * @returns (void)          *
 */
setEndScheduledDate(endScheduledDate:ScriptDateTime): void

/**
 * get creator 's deparment(citizen-user's organization)
 * @returns (String)          *
 */
getCreatorDept(): String

/**
 * set creator 's department (citizen-user's organization)
 * @param {string} creatorDept (string)
 * @returns (void)          *
 */
setCreatorDept(creatorDept:string): void

/**
 * get creator 's deparment alias(citizen-user's organization)
 * @returns (String)          *
 */
getCreatorDeptAlias(): String

/**
 * get the percent complete of the CAP
 * @returns (number) - (double) 
 */
getPercentComplete(): number

/**
 * set the percent complete of the CAP
 * @param {number} percentComplete (number) - (double) 
 * @returns (void)          *
 */
setPercentComplete(percentComplete:number): void

/**
 * get fee schedule
 * @returns (String)          *
 */
getInitialFeeSchedule(): String

/**
 * @returns (number) - (Long) 
 */
getPmScheduleSeq(): number

/**
 * Get CreateBy.
 * @returns (String) - String
 */
getCreateBy(): String

/**
 * @returns (void)          *
 */
setCreateBy(): void

/**
 * @returns (String)          *
 */
getAnonymousFlag(): String

/**
 * @returns (void)          *
 */
setAnonymousFlag(): void

/**
 * @returns (Date)          *
 */
getAppearanceDate(): Date

/**
 * @returns (void)          *
 */
setAppearanceDate(): void

/**
 * @returns (String)          *
 */
getAppearanceDayOfWeek(): String

/**
 * @returns (void)          *
 */
setAppearanceDayOfWeek(): void

/**
 * @returns (String)          *
 */
getBookingFlag(): String

/**
 * @returns (void)          *
 */
setBookingFlag(): void

/**
 * @returns (String)          *
 */
getDfndtSignatureFlag(): String

/**
 * @returns (void)          *
 */
setDfndtSignatureFlag(): void

/**
 * @returns (String)          *
 */
getEnforceOfficerId(): String

/**
 * @returns (void)          *
 */
setEnforceOfficerId(): void

/**
 * @returns (String)          *
 */
getEnforceOfficerName(): String

/**
 * @returns (void)          *
 */
setEnforceOfficerName(): void

/**
 * @returns (String)          *
 */
getInfractionFlag(): String

/**
 * @returns (void)          *
 */
setInfractionFlag(): void

/**
 * @returns (String)          *
 */
getInspectorId(): String

/**
 * @returns (void)          *
 */
setInspectorId(): void

/**
 * @returns (String)          *
 */
getInspectorName(): String

/**
 * @returns (void)          *
 */
setInspectorName(): void

/**
 * @returns (String)          *
 */
getMisdemeanorFlag(): String

/**
 * @returns (void)          *
 */
setMisdemeanorFlag(): void

/**
 * @returns (String)          *
 */
getOffnWitnessedFlag(): String

/**
 * @returns (void)          *
 */
setOffnWitnessedFlag(): void

/**
 * @returns (String)          *
 */
getReferenceType(): String

/**
 * @returns (void)          *
 */
setReferenceType(): void

}
declare class CapIDModel {
/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get ServiceProviderCode.
 * @returns (String) - serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * Get ID1.
 * @returns (String) - permit ID1
 */
getID1(): String

/**
 * Get ID2.
 * @returns (String) - permit ID2
 */
getID2(): String

/**
 * Get ID3.
 * @returns (String) - permit ID3
 */
getID3(): String

/**
 * Get customID.
 * @returns (String) - customID
 */
getCustomID(): String

/**
 * Get trackingID.
 * @returns (number) - (long) trackingID
 */
getTrackingID(): number

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set ID1.
 * @param {string} ID1 (string)
 * @returns (void)          *
 */
setID1(ID1:string): void

/**
 * Set ID2.
 * @param {string} ID2 (string)
 * @returns (void)          *
 */
setID2(ID2:string): void

/**
 * Set ID3.
 * @param {string} ID3 (string)
 * @returns (void)          *
 */
setID3(ID3:string): void

/**
 * Set customID.
 * @param {string} customID (string)
 * @returns (void)          *
 */
setCustomID(customID:string): void

/**
 * Set trackingID.
 * @param {number} trackingID (number) - (long) 
 * @returns (void)          *
 */
setTrackingID(trackingID:number): void

}
declare class CapOwnerModel {
/**
 * @returns (RefOwnerModel)          *
 */
getCapOwnerModel(): RefOwnerModel

/**
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

/**
 * @returns (void)          *
 */
setCapID(): void

/**
 * @returns (String)          *
 */
getPrimaryOwner(): String

/**
 * @returns (void)          *
 */
setPrimaryOwner(): void

/**
 * @returns (String) - address1
 */
getAddress1(): String

/**
 * @returns (String) - address2
 */
getAddress2(): String

/**
 * @returns (String) - address3
 */
getAddress3(): String

/**
 * @returns (String) - city
 */
getCity(): String

/**
 * @returns (String) - country
 */
getCountry(): String

/**
 * @returns (String) - fax
 */
getFax(): String

/**
 * @returns (String) - mailAddress1
 */
getMailAddress1(): String

/**
 * @returns (String) - mailAddress2
 */
getMailAddress2(): String

/**
 * @returns (String) - mailAddress3
 */
getMailAddress3(): String

/**
 * @returns (String) - mailCity
 */
getMailCity(): String

/**
 * @returns (String) - mailCountry
 */
getMailCountry(): String

/**
 * @returns (String) - mailState
 */
getMailState(): String

/**
 * @returns (String) - mailZip
 */
getMailZip(): String

/**
 * @returns (String) - ownerFirstName
 */
getOwnerFirstName(): String

/**
 * @returns (String) - ownerFullName
 */
getOwnerFullName(): String

/**
 * @returns (String) - ownerLastName
 */
getOwnerLastName(): String

/**
 * @returns (String) - ownerMiddleName
 */
getOwnerMiddleName(): String

/**
 * @returns (number) - (double) ownerNumber
 */
getL1OwnerNumber(): number

/**
 * @returns (String) - ownerStatus
 */
getOwnerStatus(): String

/**
 * @returns (String) - ownerTitle
 */
getOwnerTitle(): String

/**
 * @returns (String) - phone
 */
getPhone(): String

/**
 * @returns (String) - state
 */
getState(): String

/**
 * @returns (String) - taxID
 */
getTaxID(): String

/**
 * @returns (String) - zip
 */
getZip(): String

/**
 * @param {string} address1 (string)
 * @returns (void)          *
 */
setAddress1(address1:string): void

/**
 * @param {string} address2 (string)
 * @returns (void)          *
 */
setAddress2(address2:string): void

/**
 * @param {string} address3 (string)
 * @returns (void)          *
 */
setAddress3(address3:string): void

/**
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * @param {string} country (string)
 * @returns (void)          *
 */
setCountry(country:string): void

/**
 * @param {string} fax (string)
 * @returns (void)          *
 */
setFax(fax:string): void

/**
 * @param {string} mailAddress1 (string)
 * @returns (void)          *
 */
setMailAddress1(mailAddress1:string): void

/**
 * @param {string} mailAddress2 (string)
 * @returns (void)          *
 */
setMailAddress2(mailAddress2:string): void

/**
 * @param {string} mailAddress3 (string)
 * @returns (void)          *
 */
setMailAddress3(mailAddress3:string): void

/**
 * @param {string} mailCity (string)
 * @returns (void)          *
 */
setMailCity(mailCity:string): void

/**
 * @param {string} mailCountry (string)
 * @returns (void)          *
 */
setMailCountry(mailCountry:string): void

/**
 * @param {string} mailState (string)
 * @returns (void)          *
 */
setMailState(mailState:string): void

/**
 * @param {string} mailZip (string)
 * @returns (void)          *
 */
setMailZip(mailZip:string): void

/**
 * @param {string} ownerFirstName (string)
 * @returns (void)          *
 */
setOwnerFirstName(ownerFirstName:string): void

/**
 * @param {string} ownerFullName (string)
 * @returns (void)          *
 */
setOwnerFullName(ownerFullName:string): void

/**
 * @param {string} ownerLastName (string)
 * @returns (void)          *
 */
setOwnerLastName(ownerLastName:string): void

/**
 * @param {string} ownerMiddleName (string)
 * @returns (void)          *
 */
setOwnerMiddleName(ownerMiddleName:string): void

/**
 * @param {number} ownerNumber (number) - (double) 
 * @returns (void)          *
 */
setL1OwnerNumber(ownerNumber:number): void

/**
 * @param {string} ownerStatus (string)
 * @returns (void)          *
 */
setOwnerStatus(ownerStatus:string): void

/**
 * @param {string} ownerTitle (string)
 * @returns (void)          *
 */
setOwnerTitle(ownerTitle:string): void

/**
 * @param {string} phone (string)
 * @returns (void)          *
 */
setPhone(phone:string): void

/**
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * @param {string} taxID (string)
 * @returns (void)          *
 */
setTaxID(taxID:string): void

/**
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * Returns the UID.
 * @returns (String) - the UID
 */
getUID(): String

/**
 * Sets the UID,
 * @param {string} uid (string)
 * @returns (void)          *
 */
setUID(uid:string): void

/**
 * Returns the attributes.
 * @returns (B3APOAttributeScriptModel) - the attributes
 */
getAttributes(): B3APOAttributeScriptModel

/**
 * Sets the attributes.
 * @param {B3APOAttributeScriptModel[]} attributes (B3APOAttributeScriptModel[])
 * @returns (B3APOAttributeScriptModel)          *
 */
setAttributes(attributes:B3APOAttributeScriptModel[]): B3APOAttributeScriptModel

/**
 * Get OwnerType
 * @returns (String) - String
 */
getOwnerType(): String

/**
 * Set OwnerType
 * @param {string} ownerType (string)
 * @returns (void)          *
 */
setOwnerType(ownerType:string): void

/**
 * Get cap OwnerNumber
 * @returns (number) - (double) capOwnerNumber
 */
getCapOwnerNumber(): number

/**
 * Set cap OwnerNumber
 * @param {number} capOwnerNumber (number) - (double) 
 * @returns (void)          *
 */
setCapOwnerNumber(capOwnerNumber:number): void

/**
 * Get Email
 * @returns (String) - email
 */
getEmail(): String

/**
 * Set Email.
 * @param {string} email (string)
 * @returns (void)          *
 */
setEmail(email:string): void

}
declare class CapParcelModel {
/**
 * Get capParcelModel.
 * @returns (CapParcelModel) - CapParcelModel
 */
getCapParcelModel(): CapParcelModel

/**
 * Get capIDModel.
 * @returns (CapIDModel) - CapIDModel.
 */
getCapIDModel(): CapIDModel

/**
 * Get L1ParcelNo.
 * @returns (String) - String
 */
getL1ParcelNo(): String

/**
 * Get parcelModel.
 * @returns (ParcelModel) - ParcelModel
 */
getParcelModel(): ParcelModel

/**
 * Get parcelNo.
 * @returns (String) - Sting
 */
getParcelNo(): String

/**
 * Set capIDModel.
 * @param {CapIDModel} capIDModel (CapIDModel)
 * @returns (void)          *
 */
setCapIDModel(capIDModel:CapIDModel): void

/**
 * Set l1ParcelNo.
 * @param {string} l1ParcelNo (string)
 * @returns (void)          *
 */
setL1ParcelNo(l1ParcelNo:string): void

/**
 * Set parcelModel.
 * @param {ParcelModel} parcelModel (ParcelModel)
 * @returns (void)          *
 */
setParcelModel(parcelModel:ParcelModel): void

/**
 * Set parcelNo.
 * @param {string} parcelNo (string)
 * @returns (void)          *
 */
setParcelNo(parcelNo:string): void

}
declare class CapModel {
/**
 * Get capModel.
 * @returns (CapModel) - CapModel
 */
getCapModel(): CapModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get capType.
 * @returns (CapTypeModel) - CapTypeModel
 */
getCapType(): CapTypeModel

/**
 * Get fileDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getFileDate(): ScriptDateTime

/**
 * Get specialText.
 * @returns (String) - String
 */
getSpecialText(): String

/**
 * Get capStatus.
 * @returns (String) - String
 */
getCapStatus(): String

/**
 * Get eventCode.
 * @returns (String) - String
 */
getEventCode(): String

/**
 * Get refID.
 * @returns (String) - String
 */
getRefID(): String

/**
 * Get standardPCClass.
 * @returns (String) - String
 */
getStandardPCClass(): String

/**
 * Get standardPCTime.
 * @returns (number) - (double) double
 */
getStandardPCTime(): number

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set capType.
 * @param {CapTypeModel} capType (CapTypeModel)
 * @returns (void)          *
 */
setCapType(capType:CapTypeModel): void

/**
 * Set file date.
 * @param {ScriptDateTime} fileDate (ScriptDateTime)
 * @returns (void)          *
 */
setFileDate(fileDate:ScriptDateTime): void

/**
 * Set specialText.
 * @param {string} specialText (string)
 * @returns (void)          *
 */
setSpecialText(specialText:string): void

/**
 * Set cap status.
 * @param {string} capStatus (string)
 * @returns (void)          *
 */
setCapStatus(capStatus:string): void

/**
 * Set capStatusDate.
 * @param {ScriptDateTime} capStatusDate (ScriptDateTime)
 * @returns (void)          *
 */
setCapStatusDate(capStatusDate:ScriptDateTime): void

/**
 * Set event code.
 * @param {string} eventCode (string)
 * @returns (void)          *
 */
setEventCode(eventCode:string): void

/**
 * Set refID.
 * @param {string} refID (string)
 * @returns (void)          *
 */
setRefID(refID:string): void

/**
 * Set standardPCClass.
 * @param {string} standardPCClass (string)
 * @returns (void)          *
 */
setStandardPCClass(standardPCClass:string): void

/**
 * Set standardPCTime.
 * @param {number} standardPCTime (number) - (double) 
 * @returns (void)          *
 */
setStandardPCTime(standardPCTime:number): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set the collection of addtionalItems.
 * @param {any[]} addtionalItems (any[])
 * @returns (void)          *
 */
setAddtionalItems(addtionalItems:any[]): void

/**
 * Set the collection of appSpecificInfoGroup.
 * @param {any[]} appSpecificInfoGroups (any[])
 * @returns (void)          *
 */
setAppSpecificInfoGroups(appSpecificInfoGroups:any[]): void

/**
 * Set projectNumber.
 * @param {number} projectNumber (number) - (long) 
 * @returns (void)          *
 */
setProjectNumber(projectNumber:number): void

/**
 * Set auditId.
 * @param {string} auditId (string)
 * @returns (void)          *
 */
setAuditID(auditId:string): void

/**
 * Return projectScriptModel.
 * @returns (ProjectScriptModel)          *
 */
getProjectModel(): ProjectScriptModel

/**
 * Return CAP class.
 * @returns (String)          *
 */
getCapClass(): String

/**
 * Check to see if it is completed CAP.
 * @returns (boolean)          *
 */
isCompleteCap(): boolean

/**
 * Check to see if the cap is created by ACA.
 * @returns (boolean)          *
 */
isCreatedByACA(): boolean

/**
 * return the product name which create this cap.
 * @returns (String)          *
 */
getInitiatedProduct(): String

/**
 * Gets the pending validation.
 * @returns (String) - the pending validation
 */
getPendingValidation(): String

/**
 * Sets the pending validation.
 * @param {string} pendingValidation (string)
 * @returns (void)          *
 */
setPendingValidation(pendingValidation:string): void

}
declare class CapTypeDetailModel {
/**
 * Get capTypeDetail.
 * @returns (CapTypeDetailModel) - CapTypeDetailModel
 */
getCapTypeDetail(): CapTypeDetailModel

/**
 * Get fee code.
 * @returns (String) - String
 */
getFeeCode(): String

/**
 * Get processCode.
 * @returns (String) - String
 */
getProcessCode(): String

/**
 * Get appSpecificInfoCode.
 * @returns (String) - String
 */
getAppSpecificInfoCode(): String

/**
 * Get inspectionCode.
 * @returns (String) - String
 */
getInspectionCode(): String

/**
 * Get expirationCode.
 * @returns (String) - String
 */
getExpirationCode(): String

/**
 * Get udcode3.
 * @returns (String) - String
 */
getUdcode3(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get hrEmail.
 * @returns (String) - String
 */
getHrEmail(): String

/**
 * Get smartchoiceCode.
 * @returns (String) - String
 */
getSmartchoiceCode(): String

/**
 * Get altSeq1.
 * @returns (number) - (Long) Long
 */
getAltSeq1(): number

/**
 * Get altMask1.
 * @returns (String) - String
 */
getAltMask1(): String

/**
 * Get altSeqReset1.
 * @returns (String) - String
 */
getAltSeqReset1(): String

/**
 * Get isRebill.
 * @returns (String) - String
 */
getIsRebill(): String

/**
 * Get docCode.
 * @returns (String) - String
 */
getDocCode(): String

/**
 * Get perUdcode1.
 * @returns (String) - String
 */
getPerUdcode1(): String

/**
 * Get a ltSeq2.
 * @returns (number) - (Long) Long
 */
getAltSeq2(): number

/**
 * Get altMask2.
 * @returns (String) - String
 */
getAltMask2(): String

/**
 * Get altSeqReset2.
 * @returns (String) - String
 */
getAltSeqReset2(): String

/**
 * Get appStatusGroupCode.
 * @returns (String) - String
 */
getAppStatusGroupCode(): String

/**
 * Set feeCode.
 * @param {string} feeCode (string)
 * @returns (void)          *
 */
setFeeCode(feeCode:string): void

/**
 * Set processCode.
 * @param {string} processCode (string)
 * @returns (void)          *
 */
setProcessCode(processCode:string): void

/**
 * Set appSpecificInfoCode.
 * @param {string} appSpecificInfoCode (string)
 * @returns (void)          *
 */
setAppSpecificInfoCode(appSpecificInfoCode:string): void

/**
 * Set inspectionCode.
 * @param {string} inspectionCode (string)
 * @returns (void)          *
 */
setInspectionCode(inspectionCode:string): void

/**
 * Set expirationCode.
 * @param {string} expirationCode (string)
 * @returns (void)          *
 */
setExpirationCode(expirationCode:string): void

/**
 * Set udcode3.
 * @param {string} udcode3 (string)
 * @returns (void)          *
 */
setUdcode3(udcode3:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set hrEmail.
 * @param {string} hrEmail (string)
 * @returns (void)          *
 */
setHrEmail(hrEmail:string): void

/**
 * Set smartchoiceCode.
 * @param {string} smartchoiceCode (string)
 * @returns (void)          *
 */
setSmartchoiceCode(smartchoiceCode:string): void

/**
 * Set altSeq1.
 * @param {number} altSeq1 (number) - (Long) 
 * @returns (void)          *
 */
setAltSeq1(altSeq1:number): void

/**
 * Set altMask1.
 * @param {string} altMask1 (string)
 * @returns (void)          *
 */
setAltMask1(altMask1:string): void

/**
 * Set altSeqReset1.
 * @param {string} altSeqReset1 (string)
 * @returns (void)          *
 */
setAltSeqReset1(altSeqReset1:string): void

/**
 * Set isRebill.
 * @param {string} isRebill (string)
 * @returns (void)          *
 */
setRebill(isRebill:string): void

/**
 * Set docCode.
 * @param {string} docCode (string)
 * @returns (void)          *
 */
setDocCode(docCode:string): void

/**
 * Set perUdcode1.
 * @param {string} perUdcode1 (string)
 * @returns (void)          *
 */
setPerUdcode1(perUdcode1:string): void

/**
 * Set altSeq2.
 * @param {number} altSeq2 (number) - (Long) 
 * @returns (void)          *
 */
setAltSeq2(altSeq2:number): void

/**
 * Set altMask2.
 * @param {string} altMask2 (string)
 * @returns (void)          *
 */
setAltMask2(altMask2:string): void

/**
 * Set altSeqReset2.
 * @param {string} altSeqReset2 (string)
 * @returns (void)          *
 */
setAltSeqReset2(altSeqReset2:string): void

/**
 * Set appStatusGroupCode.
 * @param {string} appStatusGroupCode (string)
 * @returns (void)          *
 */
setAppStatusGroupCode(appStatusGroupCode:string): void

}
declare class CapTypeModel {
/**
 * Get CapTypeModel.
 * @returns (CapTypeModel) - CapTypeModel
 */
getCapType(): CapTypeModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get group.
 * @returns (String) - String
 */
getGroup(): String

/**
 * Get type.
 * @returns (String) - String
 */
getType(): String

/**
 * Get subtype.
 * @returns (String) - String
 */
getSubType(): String

/**
 * Get category.
 * @returns (String) - String
 */
getCategory(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set agency code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set group.
 * @param {string} group (string)
 * @returns (void)          *
 */
setGroup(group:string): void

/**
 * Set type.
 * @param {string} type (string)
 * @returns (void)          *
 */
setType(type:string): void

/**
 * Set subtype.
 * @param {string} subType (string)
 * @returns (void)          *
 */
setSubType(subType:string): void

/**
 * Set category.
 * @param {string} category (string)
 * @returns (void)          *
 */
setCategory(category:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (String)          *
 */
getEnforcementType(): String

/**
 * @returns (void)          *
 */
setEnforcementType(): void

/**
 * @returns (String)          *
 */
getIsRenewal(): String

/**
 * @returns (void)          *
 */
setIsRenewal(): void

/**
 * @returns (String)          *
 */
getIsIssue(): String

/**
 * @returns (void)          *
 */
setIsIssue(): void

}
declare class CapWorkDesModel {
/**
 * Get description.
 * @returns (String) - String
 */
getDescription(): String

/**
 * Set description.
 * @param {string} string (string)
 * @returns (void)          *
 */
setDescription(string:string): void

/**
 * Get CapID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Set CapID.
 * @param {CapIDModel} model (CapIDModel)
 * @returns (void)          *
 */
setCapID(model:CapIDModel): void

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - java.util.Date
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditID(string:string): void

/**
 * Set auditStatus.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditStatus(string:string): void

/**
 * @returns (CapWorkDesModel)          *
 */
getCapWorkDesModel(): CapWorkDesModel

}
declare class CommentModel {
/**
 * Get comment.
 * @returns (CommentModel) - CommentModel
 */
getComment(): CommentModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get activityIDNumber.
 * @returns (number) - (Long) Long
 */
getActivityIDNumber(): number

/**
 * Get commentIDNumber.
 * @returns (number) - (Long) Long
 */
getCommentIDNumber(): number

/**
 * Get commentType.
 * @returns (String) - String
 */
getCommentType(): String

/**
 * Get synopsis.
 * @returns (String) - String
 */
getSynopsis(): String

/**
 * Get text.
 * @returns (String) - String
 */
getText(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditDateString.
 * @returns (String) - String
 */
getAuditDateString(): String

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set activityIDNumber.
 * @param {number} activityIDNumber (number) - (Long) 
 * @returns (void)          *
 */
setActivityIDNumber(activityIDNumber:number): void

/**
 * Set commentIDNumber.
 * @param {number} commentIDNumber (number) - (Long) 
 * @returns (void)          *
 */
setCommentIDNumber(commentIDNumber:number): void

/**
 * Set commentType.
 * @param {string} commentType (string)
 * @returns (void)          *
 */
setCommentType(commentType:string): void

/**
 * Set synopsis.
 * @param {string} synopsis (string)
 * @returns (void)          *
 */
setSynopsis(synopsis:string): void

/**
 * Set text.
 * @param {string} text (string)
 * @returns (void)          *
 */
setText(text:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditDateString.
 * @param {string} auditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(auditDateString:string): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class CommonConditionModel {
/**
 * Get sourceNumber.
 * @returns (number) - (long) long
 */
getSourceNumber(): number

/**
 * Get entityType.
 * @returns (String) - String
 */
getEntityType(): String

/**
 * set Entity Type.
 * @returns (void)          *
 */
setEntityType(): void

/**
 * Get entityID.
 * @returns (String) - String
 */
getEntityID(): String

/**
 * set Entity ID.
 * @param {string} entityID (string)
 * @returns (void)          *
 */
setEntityID(entityID:string): void

/**
 * Get conditionNumber.
 * @returns (number) - (long) long
 */
getConditionNumber(): number

/**
 * Get conditionType.
 * @returns (String) - String
 */
getConditionType(): String

/**
 * Set conditionType.
 * @param {string} conditionType (string)
 * @returns (void)          *
 */
setConditionType(conditionType:string): void

/**
 * Get conditionDescription.
 * @returns (String) - String
 */
getConditionDescription(): String

/**
 * Set conditionDescription.
 * @param {string} conditionDescription (string)
 * @returns (void)          *
 */
setConditionDescription(conditionDescription:string): void

/**
 * Get conditionComment.
 * @returns (String) - String
 */
getConditionComment(): String

/**
 * Set conditionComment.
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setConditionComment(conditionComment:string): void

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Get issuedDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getIssuedDate(): ScriptDateTime

/**
 * Set issuedDate.
 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:ScriptDateTime): void

/**
 * Get refNumber1.
 * @returns (String) - String
 */
getRefNumber1(): String

/**
 * Get refNumber2.
 * @returns (String) - String
 */
getRefNumber2(): String

/**
 * Get impactCode.
 * @returns (String) - String
 */
getImpactCode(): String

/**
 * Set impactCode.
 * @param {string} impactCode (string)
 * @returns (void)          *
 */
setImpactCode(impactCode:string): void

/**
 * Get issuedByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getIssuedByUser(): SysUserModel

/**
 * Set issuedByUser.
 * @param {SysUserModel} issuedByUser (SysUserModel)
 * @returns (void)          *
 */
setIssuedByUser(issuedByUser:SysUserModel): void

/**
 * Get statusByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getStatusByUser(): SysUserModel

/**
 * Set StatusByUser.
 * @param {SysUserModel} statusByUser (SysUserModel)
 * @returns (void)          *
 */
setStatusByUser(statusByUser:SysUserModel): void

/**
 * Get conditionStatus.
 * @returns (String) - String
 */
getConditionStatus(): String

/**
 * Set conditionStatus.
 * @param {string} conditionStatus (string)
 * @returns (void)          *
 */
setConditionStatus(conditionStatus:string): void

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get conditionModel.
 * @returns (CommonConditionModel) - CommonConditionModel
 */
getCommonConditionModel(): CommonConditionModel

/**
 * Set conditionModel.
 * @param {CommonConditionModel} commonConditionModel (CommonConditionModel)
 * @returns (void)          *
 */
setCommonConditionModel(commonConditionModel:CommonConditionModel): void

/**
 * Method getConditionStatusType
 * @returns (String) - String
 */
getConditionStatusType(): String

/**
 * Method setConditionStatusType
 * @param {string} conditionStatusType (string)
 * @returns (void)          *
 */
setConditionStatusType(conditionStatusType:string): void

/**
 * Method getDisplayConditionNotice
 * @returns (String) - String
 */
getDisplayConditionNotice(): String

/**
 * Method setDisplayConditionNotice
 * @param {string} displayConditionNotice (string)
 * @returns (void)          *
 */
setDisplayConditionNotice(displayConditionNotice:string): void

/**
 * Method getIncludeInConditionName
 * @returns (String) - String
 */
getIncludeInConditionName(): String

/**
 * Method setIncludeInConditionName
 * @param {string} includeInConditionName (string)
 * @returns (void)          *
 */
setIncludeInConditionName(includeInConditionName:string): void

/**
 * Method getIncludeInShortDescription
 * @returns (String) - String
 */
getIncludeInShortDescription(): String

/**
 * Method setIncludeInShortDescription
 * @param {string} includeInShortDescription (string)
 * @returns (void)          *
 */
setIncludeInShortDescription(includeInShortDescription:string): void

/**
 * Method getInheritable
 * @returns (String) - String
 */
getInheritable(): String

/**
 * Method setInheritable
 * @param {string} inheritable (string)
 * @returns (void)          *
 */
setInheritable(inheritable:string): void

/**
 * Method getLongDescripton
 * @returns (String) - String
 */
getLongDescripton(): String

/**
 * Method setLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setLongDescripton(longDescripton:string): void

/**
 * Method getPublicDisplayMessage
 * @returns (String) - String
 */
getPublicDisplayMessage(): String

/**
 * Method setPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResolutionAction
 * @returns (String) - String
 */
getResolutionAction(): String

/**
 * Method setResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResolutionAction(resolutionAction:string): void

/**
 * Method setConditionGroup
 * @param {string} conditionGroup (string)
 * @returns (void)          *
 */
setConditionGroup(conditionGroup:string): void

/**
 * Method getConditionGroup
 * @returns (String) - String
 */
getConditionGroup(): String

/**
 * Method setDisplayNoticeOnACA
 * @param {string} displayNoticeOnACA (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACA(displayNoticeOnACA:string): void

/**
 * Method getDisplayNoticeOnACA
 * @returns (String) - String
 */
getDisplayNoticeOnACA(): String

/**
 * Method setDisplayNoticeOnACAFee
 * @param {string} displayNoticeOnACAFee (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(displayNoticeOnACAFee:string): void

/**
 * Method getDisplayNoticeOnACAFee
 * @returns (String) - String
 */
getDisplayNoticeOnACAFee(): String

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @param {string} additionalInformation (string)
 * @returns (void)          *
 */
setAdditionalInformation(additionalInformation:string): void

}
declare class CompactAddressModel {
/**
 * Get compactAddressModel.
 * @returns (CompactAddressModel) - CompactAddressModel
 */
getCompactAddressModel(): CompactAddressModel

/**
 * Get address id.
 * @returns (number) - (Long) Long
 */
getAddressId(): number

/**
 * Get addressLine1.
 * @returns (String) - String
 */
getAddressLine1(): String

/**
 * Get addressLine2.
 * @returns (String) - String
 */
getAddressLine2(): String

/**
 * Get addressLine3.
 * @returns (String) - String
 */
getAddressLine3(): String

/**
 * Get city.
 * @returns (String) - String
 */
getCity(): String

/**
 * Get country.
 * @returns (String) - String
 */
getCountry(): String

/**
 * Get state.
 * @returns (String) - String
 */
getState(): String

/**
 * Get street name.
 * @returns (String) - String
 */
getStreetName(): String

/**
 * Get zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * Set address id.
 * @param {number} addressId (number) - (Long) 
 * @returns (void)          *
 */
setAddressId(addressId:number): void

/**
 * Set addressLine1.
 * @param {string} addressLine1 (string)
 * @returns (void)          *
 */
setAddressLine1(addressLine1:string): void

/**
 * Set addressLine2.
 * @param {string} addressLine2 (string)
 * @returns (void)          *
 */
setAddressLine2(addressLine2:string): void

/**
 * Set addressLine3.
 * @param {string} addressLine3 (string)
 * @returns (void)          *
 */
setAddressLine3(addressLine3:string): void

/**
 * Set city.
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * Set country.
 * @param {string} country (string)
 * @returns (void)          *
 */
setCountry(country:string): void

/**
 * Set state.
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * Set street name.
 * @param {string} streetName (string)
 * @returns (void)          *
 */
setStreetName(streetName:string): void

/**
 * Set zip.
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

}
declare class ConditionModel {
/**
 * Method getConditionModel
 * @returns (ConditionModel) - ConditionModel
 */
getConditionModel(): ConditionModel

/**
 * @returns (void)          *
 */
setConditionModel(): void

/**
 * Method setResConditionDescription
 * @param {string} conditionDesc (string)
 * @returns (void)          *
 */
setResConditionDescription(conditionDesc:string): void

/**
 * Method getResConditionDescription
 * @returns (String) - String
 */
getResConditionDescription(): String

/**
 * Method setResConditionComment
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setResConditionComment(conditionComment:string): void

/**
 * Method getResConditionComment
 * @returns (String) - String
 */
getResConditionComment(): String

/**
 * Method setResLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setResLongDescripton(longDescripton:string): void

/**
 * Method getResLongDescripton
 * @returns (String) - String
 */
getResLongDescripton(): String

/**
 * Method setResResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResResolutionAction(resolutionAction:string): void

/**
 * Method getResResolutionAction
 * @returns (String) - String
 */
getResResolutionAction(): String

/**
 * Method setResPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setResPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResPublicDisplayMessage
 * @returns (String) - String
 */
getResPublicDisplayMessage(): String

/**
 * Method setDispConditionComment
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setDispConditionComment(conditionComment:string): void

/**
 * Method getDispConditionDescription
 * @returns (String) - String
 */
getDispConditionDescription(): String

/**
 * Method setDispConditionDescription
 * @param {string} conditionDesc (string)
 * @returns (void)          *
 */
setDispConditionDescription(conditionDesc:string): void

/**
 * Method getDispConditionComment
 * @returns (String) - String
 */
getDispConditionComment(): String

/**
 * Method setDispLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setDispLongDescripton(longDescripton:string): void

/**
 * Method getDispLongDescripton
 * @returns (String) - String
 */
getDispLongDescripton(): String

/**
 * Method setDispPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setDispPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getDispPublicDisplayMessage
 * @returns (String) - String
 */
getDispPublicDisplayMessage(): String

/**
 * Method setDispResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setDispResolutionAction(resolutionAction:string): void

/**
 * Method getDispResolutionAction
 * @returns (String) - String
 */
getDispResolutionAction(): String

/**
 * Get conditionNumber.
 * @returns (number) - (long) long
 */
getConditionNumber(): number

/**
 * set conditionNumber.
 * @param {number} capConditionNumber (number) - (long) 
 * @returns (void)          *
 */
setConditionNumber(capConditionNumber:number): void

/**
 * Get conditionType.
 * @returns (String) - String
 */
getConditionType(): String

/**
 * Get conditionDescription.
 * @returns (String) - String
 */
getConditionDescription(): String

/**
 * Get conditionComment.
 * @returns (String) - String
 */
getConditionComment(): String

/**
 * Set conditionType.
 * @param {string} conditionType (string)
 * @returns (void)          *
 */
setConditionType(conditionType:string): void

/**
 * Set conditionDescription.
 * @param {string} conditionDescription (string)
 * @returns (void)          *
 */
setConditionDescription(conditionDescription:string): void

/**
 * Set conditionComment.
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setConditionComment(conditionComment:string): void

/**
 * Get effect date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expire date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get issued date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getIssuedDate(): ScriptDateTime

/**
 * Get refNumber1.
 * @returns (String) - String
 */
getRefNumber1(): String

/**
 * Get refNumber2.
 * @returns (String) - String
 */
getRefNumber2(): String

/**
 * Get impactCode.
 * @returns (String) - String
 */
getImpactCode(): String

/**
 * Get issuedByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getIssuedByUser(): SysUserModel

/**
 * Get statusByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getStatusByUser(): SysUserModel

/**
 * Get conditionStatus.
 * @returns (String) - String
 */
getConditionStatus(): String

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set issuedDate.
 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:ScriptDateTime): void

/**
 * Set impactCode.
 * @param {string} impactCode (string)
 * @returns (void)          *
 */
setImpactCode(impactCode:string): void

/**
 * Set issuedByUser.
 * @param {SysUserModel} issuedByUser (SysUserModel)
 * @returns (void)          *
 */
setIssuedByUser(issuedByUser:SysUserModel): void

/**
 * Set statusByUser.
 * @param {SysUserModel} statusByUser (SysUserModel)
 * @returns (void)          *
 */
setStatusByUser(statusByUser:SysUserModel): void

/**
 * Set conditionStatus.
 * @param {string} conditionStatus (string)
 * @returns (void)          *
 */
setConditionStatus(conditionStatus:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Method getConditionStatusType
 * @returns (String) - String
 */
getConditionStatusType(): String

/**
 * Method setConditionStatusType
 * @param {string} conditionStatusType (string)
 * @returns (void)          *
 */
setConditionStatusType(conditionStatusType:string): void

/**
 * Method getDisplayConditionNotice
 * @returns (String) - String
 */
getDisplayConditionNotice(): String

/**
 * Method setDisplayConditionNotice
 * @param {string} displayConditionNotice (string)
 * @returns (void)          *
 */
setDisplayConditionNotice(displayConditionNotice:string): void

/**
 * Method getIncludeInConditionName
 * @returns (String) - String
 */
getIncludeInConditionName(): String

/**
 * Method setIncludeInConditionName
 * @param {string} includeInConditionName (string)
 * @returns (void)          *
 */
setIncludeInConditionName(includeInConditionName:string): void

/**
 * Method getIncludeInShortDescription
 * @returns (String) - String
 */
getIncludeInShortDescription(): String

/**
 * Method setIncludeInShortDescription
 * @param {string} includeInShortDescription (string)
 * @returns (void)          *
 */
setIncludeInShortDescription(includeInShortDescription:string): void

/**
 * Method getInheritable
 * @returns (String) - String
 */
getInheritable(): String

/**
 * Method setInheritable
 * @param {string} inheritable (string)
 * @returns (void)          *
 */
setInheritable(inheritable:string): void

/**
 * Method getLongDescripton
 * @returns (String) - String
 */
getLongDescripton(): String

/**
 * Method setLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setLongDescripton(longDescripton:string): void

/**
 * Method getPublicDisplayMessage
 * @returns (String) - String
 */
getPublicDisplayMessage(): String

/**
 * Method setPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResolutionAction
 * @returns (String) - String
 */
getResolutionAction(): String

/**
 * Method setResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResolutionAction(resolutionAction:string): void

/**
 * Method setConditionGroup
 * @param {string} conditionGroup (string)
 * @returns (void)          *
 */
setConditionGroup(conditionGroup:string): void

/**
 * Method getConditionGroup
 * @returns (String) - String
 */
getConditionGroup(): String

/**
 * Method setDisplayNoticeOnACA
 * @param {string} displayNoticeOnACA (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACA(displayNoticeOnACA:string): void

/**
 * Method getDisplayNoticeOnACA
 * @returns (String) - String
 */
getDisplayNoticeOnACA(): String

/**
 * Method setDisplayNoticeOnACAFee
 * @param {string} displayNoticeOnACAFee (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(displayNoticeOnACAFee:string): void

/**
 * Method getDisplayNoticeOnACAFee
 * @returns (String) - String
 */
getDisplayNoticeOnACAFee(): String

/**
 * Get serviceProviderCode
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set serviceProviderCode
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get sourceNumber
 * @returns (number) - (long) long
 */
getSourceNumber(): number

/**
 * Set sourceNumber
 * @param {number} sourceNumber (number) - (long) 
 * @returns (void)          *
 */
setSourceNumber(sourceNumber:number): void

/**
 * Set RefNumber1
 * @param {string} refNumber1 (string)
 * @returns (void)          *
 */
setRefNumber1(refNumber1:string): void

/**
 * Set refNumber2
 * @param {string} refNumber2 (string)
 * @returns (void)          *
 */
setRefNumber2(refNumber2:string): void

/**
 * Set auditID
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Method setNoticeActionType
 * @param {string} notice (string)
 * @returns (void)          *
 */
setNoticeActionType(notice:string): void

/**
 * Method getNoticeActionType
 * @returns (String) - String
 */
getNoticeActionType(): String

/**
 * @returns (String) - Returns the actionDepartmentName.
 */
getActionDepartmentName(): String

/**
 * @param {string} actionDepartmentName (string)
 * @returns (void)          *
 */
setActionDepartmentName(actionDepartmentName:string): void

/**
 * @returns (String) - Returns the appliedDepartmentName.
 */
getAppliedDepartmentName(): String

/**
 * @param {string} appliedDepartmentName (string)
 * @returns (void)          *
 */
setAppliedDepartmentName(appliedDepartmentName:string): void

/**
 * Method getConditionStatusAndTypeValue
 * @returns (String) - String
 */
getConditionStatusAndTypeValue(): String

/**
 * Method getDisplayConditionStatusAndType
 * @returns (String) - String
 */
getDisplayConditionStatusAndType(): String

/**
 * Method setConditionStatusAndTypeValue
 * @param {string} conditionStatusAndTypeValue (string)
 * @returns (void)          *
 */
setConditionStatusAndTypeValue(conditionStatusAndTypeValue:string): void

/**
 * Method setDisplayConditionStatusAndType
 * @param {string} displayConditionStatusAndType (string)
 * @returns (void)          *
 */
setDisplayConditionStatusAndType(displayConditionStatusAndType:string): void

/**
 * Method getDispValue
 * @param {string} columnName (string) - String
 * @returns (object) - Object
 */
getDispValue(columnName:string): object

/**
 * Method getResColumns
 * @returns (String[]) - List
 */
getResColumns(): String[]

/**
 * Method getDispStringValue
 * @param {string} columnName (string) - String
 * @returns (String) - String
 */
getDispStringValue(columnName:string): String

/**
 * Method setDispValue
 * @param {string} column (string) - String
 * @param {object} value (object)
 * @returns (void)          *
 */
setDispValue(column:string, value:object): void

/**
 * Method getResValue
 * @param {string} columnName (string) - String
 * @returns (object) - Object
 */
getResValue(columnName:string): object

/**
 * Method getResStringValue
 * @param {string} columnName (string) - String
 * @returns (String) - String
 */
getResStringValue(columnName:string): String

/**
 * Method setResValue
 * @param {string} column (string) - String
 * @param {object} value (object)
 * @returns (void)          *
 */
setResValue(column:string, value:object): void

/**
 * Method getResId
 * @returns (number) - (Long) Long
 */
getResId(): number

/**
 * Method setResId
 * @param {number} resId (number) - (Long) 
 * @returns (void)          *
 */
setResId(resId:number): void

/**
 * Method getResLangId
 * @returns (String) - String
 */
getResLangId(): String

/**
 * Method setResLangId
 * @param {string} resLangId (string)
 * @returns (void)          *
 */
setResLangId(resLangId:string): void

/**
 * Method hasResource
 * @returns (boolean) - boolean
 */
hasResource(): boolean

/**
 * The method only is used by list in daily.
 * @param {string} key (string)
 * @returns (object)          *
 */
getOriginalValue(key:string): object

/**
 * The method only is used by list in daily.
 * @param {string} key (string)
 * @param {object} value (object)
 * @returns (void)          *
 */
setOriginalValue(key:string, value:object): void

/**
 * Method getTemplate
 * @returns (TemplateModel) - TemplateModel
 */
getTemplateModel(): TemplateModel

/**
 * Method setTemplate
 * @param {TemplateModel} templateModel (TemplateModel)
 * @returns (void)          *
 */
setTemplateModel(templateModel:TemplateModel): void

/**
 * getEntityPK.
 * @returns (EntityPKModel) - Entity PK Model
 */
getEntityPK(): EntityPKModel

/**
 * Get status date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getStatusDate(): ScriptDateTime

/**
 * Set status date.
 * @param {ScriptDateTime} statusDate (ScriptDateTime)
 * @returns (void)          *
 */
setStatusDate(statusDate:ScriptDateTime): void

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @returns (void)          *
 */
setAdditionalInformation(): void

}
declare class ContactAddressModel {
/**
 * Get the contact address model.
 * @returns (ContactAddressModel) - the contact address model
 */
getContactAddressModel(): ContactAddressModel

/**
 * Set the contact address model.
 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel)
 * @returns (void)          *
 */
setContactAddressModel(contactAddressModel:ContactAddressModel): void

/**
 * Get the service provider code.
 * @returns (String) - the service provider code
 */
getServiceProviderCode(): String

/**
 * Set the service provider code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get the address id.
 * @returns (number) - (Long) the address id
 */
getAddressID(): number

/**
 * Set the address id.
 * @param {number} addressID (number) - (Long) 
 * @returns (void)          *
 */
setAddressID(addressID:number): void

/**
 * Get the entity type.
 * @returns (String) - the entity type
 */
getEntityType(): String

/**
 * Set the entity type.
 * @param {string} entityType (string)
 * @returns (void)          *
 */
setEntityType(entityType:string): void

/**
 * Get the entity id.
 * @returns (number) - (Long) the entity id
 */
getEntityID(): number

/**
 * Set the entity id.
 * @param {number} entityID (number) - (Long) 
 * @returns (void)          *
 */
setEntityID(entityID:number): void

/**
 * Get the address type.
 * @returns (String) - the address type
 */
getAddressType(): String

/**
 * Set the address type.
 * @param {string} addressType (string)
 * @returns (void)          *
 */
setAddressType(addressType:string): void

/**
 * Get the effective date.
 * @returns (ScriptDateTime) - the effective date
 */
getEffectiveDate(): ScriptDateTime

/**
 * Set the effective date.
 * @param {ScriptDateTime} effectiveDate (ScriptDateTime) - the new effective date
 * @returns (void)          *
 */
setEffectiveDate(effectiveDate:ScriptDateTime): void

/**
 * Get the expiration date.
 * @returns (ScriptDateTime) - the expiration date
 */
getExpirationDate(): ScriptDateTime

/**
 * Set the expiration date.
 * @param {ScriptDateTime} expirationDate (ScriptDateTime) - the new expiration date
 * @returns (void)          *
 */
setExpirationDate(expirationDate:ScriptDateTime): void

/**
 * Get the recipient.
 * @returns (String) - the recipient
 */
getRecipient(): String

/**
 * Set the recipient.
 * @param {string} recipient (string)
 * @returns (void)          *
 */
setRecipient(recipient:string): void

/**
 * Get the full address.
 * @returns (String) - the full address
 */
getFullAddress(): String

/**
 * Set the full address.
 * @param {string} fullAddress (string)
 * @returns (void)          *
 */
setFullAddress(fullAddress:string): void

/**
 * Get the address line1.
 * @returns (String) - the address line1
 */
getAddressLine1(): String

/**
 * Set the address line1.
 * @param {string} addressLine1 (string)
 * @returns (void)          *
 */
setAddressLine1(addressLine1:string): void

/**
 * Get the address line2.
 * @returns (String) - the address line2
 */
getAddressLine2(): String

/**
 * Set the address line2.
 * @param {string} addressLine2 (string)
 * @returns (void)          *
 */
setAddressLine2(addressLine2:string): void

/**
 * Get the address line3.
 * @returns (String) - the address line3
 */
getAddressLine3(): String

/**
 * Set the address line3.
 * @param {string} addressLine3 (string)
 * @returns (void)          *
 */
setAddressLine3(addressLine3:string): void

/**
 * Get the house number start.
 * @returns (number) - (Integer) the house number start
 */
getHouseNumberStart(): number

/**
 * Set the house number start.
 * @param {number} houseNumberStart (number) - (Integer) 
 * @returns (void)          *
 */
setHouseNumberStart(houseNumberStart:number): void

/**
 * Get the house number end.
 * @returns (number) - (Integer) the house number end
 */
getHouseNumberEnd(): number

/**
 * Set the house number end.
 * @param {number} houseNumberEnd (number) - (Integer) 
 * @returns (void)          *
 */
setHouseNumberEnd(houseNumberEnd:number): void

/**
 * Get the street direction.
 * @returns (String) - the street direction
 */
getStreetDirection(): String

/**
 * Set the street direction.
 * @param {string} streetDirection (string)
 * @returns (void)          *
 */
setStreetDirection(streetDirection:string): void

/**
 * Get the street prefix.
 * @returns (String) - the street prefix
 */
getStreetPrefix(): String

/**
 * Set the street prefix.
 * @param {string} streetPrefix (string)
 * @returns (void)          *
 */
setStreetPrefix(streetPrefix:string): void

/**
 * Get the street name.
 * @returns (String) - the street name
 */
getStreetName(): String

/**
 * Set the street name.
 * @param {string} streetName (string)
 * @returns (void)          *
 */
setStreetName(streetName:string): void

/**
 * Get the street suffix.
 * @returns (String) - the street suffix
 */
getStreetSuffix(): String

/**
 * Set the street suffix.
 * @param {string} streetSuffix (string)
 * @returns (void)          *
 */
setStreetSuffix(streetSuffix:string): void

/**
 * Get the unit type.
 * @returns (String) - the unit type
 */
getUnitType(): String

/**
 * Set the unit type.
 * @param {string} unitType (string)
 * @returns (void)          *
 */
setUnitType(unitType:string): void

/**
 * Get the unit start.
 * @returns (String) - the unit start
 */
getUnitStart(): String

/**
 * Set the unit start.
 * @param {string} unitStart (string)
 * @returns (void)          *
 */
setUnitStart(unitStart:string): void

/**
 * Get the unit end.
 * @returns (String) - the unit end
 */
getUnitEnd(): String

/**
 * Set the unit end.
 * @param {string} unitEnd (string)
 * @returns (void)          *
 */
setUnitEnd(unitEnd:string): void

/**
 * Get the street suffix direction.
 * @returns (String) - the street suffix direction
 */
getStreetSuffixDirection(): String

/**
 * Set the street suffix direction.
 * @param {string} streetSuffixDirection (string)
 * @returns (void)          *
 */
setStreetSuffixDirection(streetSuffixDirection:string): void

/**
 * Get the country code.
 * @returns (String) - the country code
 */
getCountryCode(): String

/**
 * Set the country code.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setCountryCode(countryCode:string): void

/**
 * Get the city.
 * @returns (String) - the city
 */
getCity(): String

/**
 * Set the city.
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * Get the state.
 * @returns (String) - the state
 */
getState(): String

/**
 * Set the state.
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * Get the zip.
 * @returns (String) - the zip
 */
getZip(): String

/**
 * Set the zip.
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * Get the phone.
 * @returns (String) - the phone
 */
getPhone(): String

/**
 * Set the phone.
 * @param {string} phone (string)
 * @returns (void)          *
 */
setPhone(phone:string): void

/**
 * Get the phone country code.
 * @returns (String) - the phone country code
 */
getPhoneCountryCode(): String

/**
 * Set the phone country code.
 * @param {string} phoneCountryCode (string)
 * @returns (void)          *
 */
setPhoneCountryCode(phoneCountryCode:string): void

/**
 * Get the fax.
 * @returns (String) - the fax
 */
getFax(): String

/**
 * Set the fax.
 * @param {string} fax (string)
 * @returns (void)          *
 */
setFax(fax:string): void

/**
 * Get the fax country code.
 * @returns (String) - the fax country code
 */
getFaxCountryCode(): String

/**
 * Set the fax country code.
 * @param {string} faxCountryCode (string)
 * @returns (void)          *
 */
setFaxCountryCode(faxCountryCode:string): void

/**
 * Get the audit id.
 * @returns (String) - the audit id
 */
getAuditID(): String

/**
 * Set the audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get the audit status.
 * @returns (String) - the audit status
 */
getAuditStatus(): String

/**
 * Set the audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get the audit date.
 * @returns (ScriptDateTime) - the audit date
 */
getAuditDate(): ScriptDateTime

/**
 * Set the audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the new audit date
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * @returns (String) - the houseNumberAlphaStart
 */
getHouseNumberAlphaStart(): String

/**
 * @param {string} houseNumberAlphaStart (string)
 * @returns (void)          *
 */
setHouseNumberAlphaStart(houseNumberAlphaStart:string): void

/**
 * @returns (String) - the houseNumberAlphaEnd
 */
getHouseNumberAlphaEnd(): String

/**
 * @param {string} houseNumberAlphaEnd (string)
 * @returns (void)          *
 */
setHouseNumberAlphaEnd(houseNumberAlphaEnd:string): void

/**
 * @returns (String) - the levelPrefix
 */
getLevelPrefix(): String

/**
 * @param {string} levelPrefix (string)
 * @returns (void)          *
 */
setLevelPrefix(levelPrefix:string): void

/**
 * @returns (String) - the levelNumberStart
 */
getLevelNumberStart(): String

/**
 * @param {string} levelNumberStart (string)
 * @returns (void)          *
 */
setLevelNumberStart(levelNumberStart:string): void

/**
 * @returns (String) - the levelNumberEnd
 */
getLevelNumberEnd(): String

/**
 * @param {string} levelNumberEnd (string)
 * @returns (void)          *
 */
setLevelNumberEnd(levelNumberEnd:string): void

/**
 * @returns (number) - (int) 
 */
hashCode(): number

/**
 * @param {object} obj (object)
 * @returns (boolean)          *
 */
equals(obj:object): boolean

/**
 * @returns (String)          *
 */
toString(): String

}
declare class ContactAttributeModel {
/**
 * Get ContactAttributeModel.
 * @returns (ContactAttributeModel) - ContactAttributeModel
 */
getContactAttributeModel(): ContactAttributeModel

/**
 * Get attributeName.
 * @returns (String) - String
 */
getAttributeName(): String

/**
 * Get attributeUnitType.
 * @returns (String) - String
 */
getAttributeUnitType(): String

/**
 * Get attributeValue.
 * @returns (String) - String
 */
getAttributeValue(): String

/**
 * Get.attributeValueDataType.
 * @returns (String) - String
 */
getAttributeValueDataType(): String

/**
 * Get.attributeValueReqFlag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get displayOrder.
 * @returns (number) - (long) long
 */
getDisplayOrder(): number

/**
 * Get validationScript.
 * @returns (String) - String
 */
getValidationScript(): String

/**
 * Set attributeName.
 * @param {string} attributeName (string)
 * @returns (void)          *
 */
setAttributeName(attributeName:string): void

/**
 * Set attributeUnitType.
 * @param {string} attributeUnitType (string)
 * @returns (void)          *
 */
setAttributeUnitType(attributeUnitType:string): void

/**
 * Set attributeValue.
 * @param {string} attributeValue (string)
 * @returns (void)          *
 */
setAttributeValue(attributeValue:string): void

/**
 * Set attributeValueDataType.
 * @param {string} attributeValueDataType (string)
 * @returns (void)          *
 */
setAttributeValueDataType(attributeValueDataType:string): void

/**
 * Set attributeValueReqFlag.
 * @param {string} attributeValueReqFlag (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(attributeValueReqFlag:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (int) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Set validationScript.
 * @param {string} validationScript (string)
 * @returns (void)          *
 */
setValidationScript(validationScript:string): void

/**
 * Get contactType.
 * @returns (String) - String
 */
getContactType(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get contactNo.
 * @returns (String) - String
 */
getContactNo(): String

/**
 * Set contactNo.
 * @param {string} contactNo (string)
 * @returns (void)          *
 */
setContactNo(contactNo:string): void

/**
 * Set contactType.
 * @param {string} contactType (string)
 * @returns (void)          *
 */
setContactType(contactType:string): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (void)          *
 */
setCapID(): void

/**
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

}
declare class ContinuingEducationModel {
/**
 * @returns (ContinuingEducationModel)          *
 */
getContinuingEducationModel(): ContinuingEducationModel

/**
 * Get continuing education sequence number.
 * @returns (number) - (long) 
 */
getContEduNbr(): number

/**
 * @param {number} contEduNbr (number) - (long) 
 * @returns (void)          *
 */
setContEduNbr(contEduNbr:number): void

/**
 * @returns (String) - return the servProvCode.
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get the class name of continuing education
 * @returns (String) - clsss name
 */
getClassName(): String

/**
 * Set the class name
 * @param {string} className (string)
 * @returns (void)          *
 */
setClassName(className:string): void

/**
 * Get date of class
 * @returns (ScriptDateTime) - date of class
 */
getDateOfClass(): ScriptDateTime

/**
 * Set date of class
 * @param {ScriptDateTime} dateOfClass (ScriptDateTime)
 * @returns (void)          *
 */
setDateOfClass(dateOfClass:ScriptDateTime): void

/**
 * Get the hours completed
 * @returns (number) - (double) hours completed
 */
getHoursCompleted(): number

/**
 * Set hours completed
 * @param {number} hoursComplated (number) - (double) 
 * @returns (void)          *
 */
setHoursCompleted(hoursComplated:number): void

/**
 * Get final score
 * @returns (number) - (double) final score
 */
getFinalScore(): number

/**
 * Set Final Score
 * @param {number} finalScore (number) - (double) 
 * @returns (void)          *
 */
setFinalScore(finalScore:number): void

/**
 * Get passing score
 * @returns (number) - (double) passing score
 */
getPassingScore(): number

/**
 * Set passing score
 * @param {number} passingScore (number) - (double) 
 * @returns (void)          *
 */
setPassingScore(passingScore:number): void

/**
 * Method getB1PerId1
 * @returns (String) - String
 */
getB1PerId1(): String

/**
 * Method setB1PerId1
 * @param {string} b1PerId1 (string)
 * @returns (void)          *
 */
setB1PerId1(b1PerId1:string): void

/**
 * Method getB1PerId2
 * @returns (String) - String
 */
getB1PerId2(): String

/**
 * Method setB1PerId2
 * @param {string} b1PerId2 (string)
 * @returns (void)          *
 */
setB1PerId2(b1PerId2:string): void

/**
 * Method getB1PerId3
 * @returns (String) - String
 */
getB1PerId3(): String

/**
 * Method setB1PerId3
 * @param {string} b1PerId3 (string)
 * @returns (void)          *
 */
setB1PerId3(b1PerId3:string): void

/**
 * @returns (ProviderDetailModel) - the providerDetailModel
 */
getProviderDetailModel(): ProviderDetailModel

/**
 * @param {ProviderDetailModel} providerDetailModel (ProviderDetailModel)
 * @returns (void)          *
 */
setProviderDetailModel(providerDetailModel:ProviderDetailModel): void

/**
 * @returns (String) - the providerName
 */
getProviderName(): String

/**
 * @param {string} providerName (string)
 * @returns (void)          *
 */
setProviderName(providerName:string): void

/**
 * @returns (String) - the prviderNo
 */
getProviderNo(): String

/**
 * @param {string} providerNo (string)
 * @returns (void)          *
 */
setProviderNo(providerNo:string): void

/**
 * @returns (String) - the continuing educationName
 */
getContEduName(): String

/**
 * @param {string} contEduName (string)
 * @returns (void)          *
 */
setContEduName(contEduName:string): void

/**
 * @returns (String) - Returns the comments.
 */
getComments(): String

/**
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * @returns (String) - the requiredFlag
 */
getRequiredFlag(): String

/**
 * @param {string} requiredFlag (string)
 * @returns (void)          *
 */
setRequiredFlag(requiredFlag:string): void

/**
 * @returns (String) - the gradingStyle
 */
getGradingStyle(): String

/**
 * @param {string} gradingStyle (string)
 * @returns (void)          *
 */
setGradingStyle(gradingStyle:string): void

/**
 * Get the audit date.
 * @returns (ScriptDateTime)          *
 */
getAuditDate(): ScriptDateTime

/**
 * set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get audit id.
 * @returns (String)          *
 */
getAuditID(): String

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get audit status.
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (TemplateModel) - the template
 */
getTemplate(): TemplateModel

/**
 * @param {TemplateModel} template (TemplateModel)
 * @returns (void)          *
 */
setTemplate(template:TemplateModel): void

/**
 * @returns (EntityPKModel) - the entityPKModel
 */
getEntityPKModel(): EntityPKModel

}
declare class CustomSSLProtocolSocketFactory {
/**
 * @param {string} host (string)
 * @param {number} port (number) - (int) 
 * @param {InetAddress} clientHost (InetAddress)
 * @param {number} clientPort (number) - (int) 
 * @returns (Socket)          *
 */
createSocket(host:string, port:number, clientHost:InetAddress, clientPort:number): Socket

/**
 * Attempts to get a new socket connection to the given host within the given time limit.    To circumvent the limitations of older JREs that do not support connect timeout a controller thread is executed.  The controller thread attempts to create a new socket within the given limit of time. If socket constructor does  not return until the timeout expires, the controller terminates and throws an ConnectTimeoutException 
 * @param {string} host (string) - the host name/IP
 * @param {number} port (number) - (int) the port on the host
 * @param {InetAddress} localAddress (InetAddress) - the local address
 * @param {number} localPort (number) - (int) the local port
 * @param {HttpConnectionParams} params (HttpConnectionParams) - Http connection parameters
 * @returns (Socket) - Socket a new socket
 */
createSocket(host:string, port:number, localAddress:InetAddress, localPort:number, params:HttpConnectionParams): Socket

/**
 * @param {string} host (string)
 * @param {number} port (number) - (int) 
 * @returns (Socket)          *
 */
createSocket(host:string, port:number): Socket

/**
 * @param {Socket} socket (Socket)
 * @param {string} host (string)
 * @param {number} port (number) - (int) 
 * @param {boolean} autoClose (boolean)
 * @returns (Socket)          *
 */
createSocket(socket:Socket, host:string, port:number, autoClose:boolean): Socket

/**
 * @param {object} obj (object)
 * @returns (boolean)          *
 */
equals(obj:object): boolean

/**
 * @returns (number) - (int) 
 */
hashCode(): number

}
declare class CustomX509TrustManager {
/**
 * @param {X509Certificate[]} certificates (X509Certificate[])
 * @param {string} authType (string)
 * @returns (void)          *
 */
checkClientTrusted(certificates:X509Certificate[], authType:string): void

/**
 * @param {X509Certificate[]} certificates (X509Certificate[])
 * @param {string} authType (string)
 * @returns (void)          *
 */
checkServerTrusted(certificates:X509Certificate[], authType:string): void

/**
 * @returns (X509Certificate[])          *
 */
getAcceptedIssuers(): X509Certificate[]

}
declare class DepartmentModel {
/**
 * Get departmentModel.
 * @returns (DepartmentModel) - DepartmentModel
 */
getDepartmentModel(): DepartmentModel

/**
 * Convert to array.
 * @returns (String[]) - String[]
 */
toArray(): String[]

/**
 * Get agencyCode.
 * @returns (String) - String
 */
getAgencyCode(): String

/**
 * Get bureauCode.
 * @returns (String) - String
 */
getBureauCode(): String

/**
 * Get divisionCode.
 * @returns (String) - String
 */
getDivisionCode(): String

/**
 * Get groupCode.
 * @returns (String) - String
 */
getGroupCode(): String

/**
 * Get officeCode.
 * @returns (String) - String
 */
getOfficeCode(): String

/**
 * Get sectionCode.
 * @returns (String) - String
 */
getSectionCode(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set agencyCode.
 * @param {string} agencyCode (string)
 * @returns (void)          *
 */
setAgencyCode(agencyCode:string): void

/**
 * Set bureauCode.
 * @param {string} bureauCode (string)
 * @returns (void)          *
 */
setBureauCode(bureauCode:string): void

/**
 * Set divisionCode.
 * @param {string} divisionCode (string)
 * @returns (void)          *
 */
setDivisionCode(divisionCode:string): void

/**
 * Set groupCode.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Set officeCode.
 * @param {string} officeCode (string)
 * @returns (void)          *
 */
setOfficeCode(officeCode:string): void

/**
 * Set sectionCode.
 * @param {string} sectionCode (string)
 * @returns (void)          *
 */
setSectionCode(sectionCode:string): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set subGroupCode.
 * @param {string} subGroupCode (string)
 * @returns (void)          *
 */
setSubGroupCode(subGroupCode:string): void

/**
 * Get subGroupCode.
 * @returns (String) - String
 */
getSubGroupCode(): String

/**
 * Set subGroupCodeDesc.
 * @param {string} subGroupCodeDesc (string)
 * @returns (void)          *
 */
setSubGroupCodeDesc(subGroupCodeDesc:string): void

/**
 * Get subGroupCodeDesc.
 * @returns (String) - String
 */
getSubGroupCodeDesc(): String

/**
 * Set deptKey.
 * @param {string} deptKey (string)
 * @returns (void)          *
 */
setDeptKey(deptKey:string): void

/**
 * Get deptKey.
 * @returns (String) - String
 */
getDeptKey(): String

/**
 * Set deptName.
 * @param {string} dept (string)
 * @returns (void)          *
 */
setDeptName(dept:string): void

/**
 * Get DeptName.
 * @returns (String) - String
 */
getDeptName(): String

/**
 * Convert object to String.
 * @returns (String) - String
 */
toString(): String

}
declare class EducationModel {
/**
 * @returns (EducationModel)          *
 */
getEducationModel(): EducationModel

/**
 * Get  education sequence number.
 * @returns (number) - (long) 
 */
getEduNbr(): number

/**
 * @param {number} eduNbr (number) - (long) 
 * @returns (void)          *
 */
setEduNbr(eduNbr:number): void

/**
 * @returns (String) - return the servProvCode.
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Method getB1PerId1
 * @returns (String) - String
 */
getB1PerId1(): String

/**
 * Method setB1PerId1
 * @param {string} b1PerId1 (string)
 * @returns (void)          *
 */
setB1PerId1(b1PerId1:string): void

/**
 * Method getB1PerId2
 * @returns (String) - String
 */
getB1PerId2(): String

/**
 * Method setB1PerId2
 * @param {string} b1PerId2 (string)
 * @returns (void)          *
 */
setB1PerId2(b1PerId2:string): void

/**
 * Method getB1PerId3
 * @returns (String) - String
 */
getB1PerId3(): String

/**
 * Method setB1PerId3
 * @param {string} b1PerId3 (string)
 * @returns (void)          *
 */
setB1PerId3(b1PerId3:string): void

/**
 * @returns (ProviderDetailModel) - the providerDetailModel
 */
getProviderDetailModel(): ProviderDetailModel

/**
 * @param {ProviderDetailModel} providerDetailModel (ProviderDetailModel)
 * @returns (void)          *
 */
setProviderDetailModel(providerDetailModel:ProviderDetailModel): void

/**
 * @returns (String) - the providerName
 */
getProviderName(): String

/**
 * @param {string} providerName (string)
 * @returns (void)          *
 */
setProviderName(providerName:string): void

/**
 * @returns (String) - the prviderNo
 */
getProviderNo(): String

/**
 * @param {string} providerNo (string)
 * @returns (void)          *
 */
setProviderNo(providerNo:string): void

/**
 * @returns (String) - Returns the comments.
 */
getComments(): String

/**
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * @returns (String) - the requiredFlag
 */
getRequiredFlag(): String

/**
 * @param {string} requiredFlag (string)
 * @returns (void)          *
 */
setRequiredFlag(requiredFlag:string): void

/**
 * Get the audit date.
 * @returns (ScriptDateTime)          *
 */
getAuditDate(): ScriptDateTime

/**
 * set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get audit id.
 * @returns (String)          *
 */
getAuditID(): String

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get audit status.
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (String) - the educationName
 */
getEducationName(): String

/**
 * @param {string} educationName (string)
 * @returns (void)          *
 */
setEducationName(educationName:string): void

/**
 * @returns (String) - the degree
 */
getDegree(): String

/**
 * @param {string} degree (string)
 * @returns (void)          *
 */
setDegree(degree:string): void

/**
 * @returns (String) - the yearAttended
 */
getYearAttended(): String

/**
 * @param {string} yearAttended (string)
 * @returns (void)          *
 */
setYearAttended(yearAttended:string): void

/**
 * @returns (String) - the yearGraduated
 */
getYearGraduated(): String

/**
 * @param {string} yearGraduated (string)
 * @returns (void)          *
 */
setYearGraduated(yearGraduated:string): void

/**
 * @returns (TemplateModel) - the template
 */
getTemplate(): TemplateModel

/**
 * @param {TemplateModel} template (TemplateModel)
 * @returns (void)          *
 */
setTemplate(template:TemplateModel): void

/**
 * @returns (EntityPKModel) - the entityPKModel
 */
getEntityPKModel(): EntityPKModel

}
declare class EmailMessageModel {
/**
 * @returns (String) - the serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (String) - the auditID
 */
getAuditID(): String

/**
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * @returns (MessageModel) - the model
 */
getModel(): MessageModel

/**
 * Gets the priority.
 * @returns (String) - the priority
 */
getPriority(): String

/**
 * Sets the priority.
 * @param {string} priority (string)
 * @returns (void)          *
 */
setPriority(priority:string): void

/**
 * Gets the title.
 * @returns (String) - the title
 */
getTitle(): String

/**
 * Sets the title.
 * @param {string} title (string)
 * @returns (void)          *
 */
setTitle(title:string): void

/**
 * Gets the content.
 * @returns (String) - the content
 */
getContent(): String

/**
 * Sets the content.
 * @param {string} content (string)
 * @returns (void)          *
 */
setContent(content:string): void

/**
 * Gets the attachments.
 * @returns (MessageAttachmentModel[]) - the attachments
 */
getAttachments(): MessageAttachmentModel[]

/**
 * Sets the attachments.
 * @param {MessageAttachmentModel[]} attachments (MessageAttachmentModel[])
 * @returns (void)          *
 */
setAttachments(attachments:MessageAttachmentModel[]): void

/**
 * Gets the comments.
 * @returns (String) - the comment
 */
getComments(): String

/**
 * Sets the comments.
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * Gets the send date.
 * @returns (Date) - the sendDate
 */
getSendDate(): Date

/**
 * Sets the send date.
 * @param {Date} sendDate (Date)
 * @returns (void)          *
 */
setSendDate(sendDate:Date): void

/**
 * @returns (String) - the contentType
 */
getContentType(): String

/**
 * @param {string} contentType (string)
 * @returns (void)          *
 */
setContentType(contentType:string): void

/**
 * @returns (String) - the header
 */
getHeader(): String

/**
 * @param {string} header (string)
 * @returns (void)          *
 */
setHeader(header:string): void

/**
 * Gets the trigger event.
 * @returns (String) - the triggerEvent
 */
getTriggerEvent(): String

/**
 * Sets the trigger event.
 * @param {string} triggerEvent (string)
 * @returns (void)          *
 */
setTriggerEvent(triggerEvent:string): void

/**
 * Get from contacts.
 * @returns (MessageContactModel)          *
 */
getFromContact(): MessageContactModel

/**
 * Get Bcc contacts.
 * @returns (MessageContactModel[])          *
 */
getBccContacts(): MessageContactModel[]

/**
 * Get Cc contacts.
 * @returns (MessageContactModel[])          *
 */
getCcContacts(): MessageContactModel[]

/**
 * Get to contacts.
 * @returns (MessageContactModel[])          *
 */
getToContacts(): MessageContactModel[]

/**
 * Gets the audit model.
 * @returns (AuditModel) - the auditModel
 */
getAuditModel(): AuditModel

/**
 * Sets the audit model.
 * @param {AuditModel} auditModel (AuditModel)
 * @returns (void)          *
 */
setAuditModel(auditModel:AuditModel): void

/**
 * Set contancts.
 * @param {MessageContactModel[]} contacts (MessageContactModel[])
 * @returns (void)          *
 */
setContacts(contacts:MessageContactModel[]): void

/**
 * Get communication Id.
 * @returns (number) - (Long) 
 */
getCmId(): number

}
declare class ExaminationModel {
/**
 * @returns (ExaminationModel)          *
 */
getExaminationModel(): ExaminationModel

/**
 * Get examination sequence number.
 * @returns (number) - (long) 
 */
getExamNbr(): number

/**
 * Set examination sequence number..
 * @param {number} examNbr (number) - (long) 
 * @returns (void)          *
 */
setExamNbr(examNbr:number): void

/**
 * @returns (String) - return the servProvCode.
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get examination date.
 * @returns (ScriptDateTime)          *
 */
getExamDate(): ScriptDateTime

/**
 * @returns (void)          *
 */
setExamDate(): void

/**
 * Get final score
 * @returns (number) - (double) final score
 */
getFinalScore(): number

/**
 * Set Final Score
 * @param {number} finalScore (number) - (double) 
 * @returns (void)          *
 */
setFinalScore(finalScore:number): void

/**
 * @returns (String) - the gradingStyle
 */
getGradingStyle(): String

/**
 * @param {string} gradingStyle (string)
 * @returns (void)          *
 */
setGradingStyle(gradingStyle:string): void

/**
 * Get passing score
 * @returns (number) - (double) passing score
 */
getPassingScore(): number

/**
 * Set passing score
 * @param {number} passingScore (number) - (double) 
 * @returns (void)          *
 */
setPassingScore(passingScore:number): void

/**
 * Method getB1PerId1
 * @returns (String) - String
 */
getB1PerId1(): String

/**
 * Method setB1PerId1
 * @param {string} b1PerId1 (string)
 * @returns (void)          *
 */
setB1PerId1(b1PerId1:string): void

/**
 * Method getB1PerId2
 * @returns (String) - String
 */
getB1PerId2(): String

/**
 * Method setB1PerId2
 * @param {string} b1PerId2 (string)
 * @returns (void)          *
 */
setB1PerId2(b1PerId2:string): void

/**
 * Method getB1PerId3
 * @returns (String) - String
 */
getB1PerId3(): String

/**
 * Method setB1PerId3
 * @param {string} b1PerId3 (string)
 * @returns (void)          *
 */
setB1PerId3(b1PerId3:string): void

/**
 * @returns (ExamProviderDetailModel) - the providerDetailModel
 */
getProviderDetailModel(): ExamProviderDetailModel

/**
 * @param {ExamProviderDetailModel} providerDetailModel (ExamProviderDetailModel)
 * @returns (void)          *
 */
setProviderDetailModel(providerDetailModel:ExamProviderDetailModel): void

/**
 * @returns (String) - the providerName
 */
getProviderName(): String

/**
 * @param {string} providerName (string)
 * @returns (void)          *
 */
setProviderName(providerName:string): void

/**
 * @returns (String) - the prviderNo
 */
getProviderNo(): String

/**
 * @param {string} providerNo (string)
 * @returns (void)          *
 */
setProviderNo(providerNo:string): void

/**
 * @returns (String)          *
 */
getExamName(): String

/**
 * @returns (void)          *
 */
setExamName(): void

/**
 * @returns (String) - Returns the comments.
 */
getComments(): String

/**
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * @returns (String) - the requiredFlag
 */
getRequiredFlag(): String

/**
 * @param {string} requiredFlag (string)
 * @returns (void)          *
 */
setRequiredFlag(requiredFlag:string): void

/**
 * Get audit date.
 * @returns (ScriptDateTime)          *
 */
getAuditDate(): ScriptDateTime

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get audit id.
 * @returns (String)          *
 */
getAuditID(): String

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get audit status.
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (TemplateModel) - the template
 */
getTemplate(): TemplateModel

/**
 * @param {TemplateModel} template (TemplateModel)
 * @returns (void)          *
 */
setTemplate(template:TemplateModel): void

/**
 * @returns (EntityPKModel) - the entityPKModel
 */
getEntityPKModel(): EntityPKModel

}
declare class ExpirationModel {
/**
 * Get expiration.
 * @returns (ExpirationModel) - ExpirationModel
 */
getExpiration(): ExpirationModel

/**
 * Get expCode.
 * @returns (String) - String
 */
getExpCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get expStatus.
 * @returns (String) - String
 */
getExpStatus(): String

/**
 * Get expDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpDate(): ScriptDateTime

/**
 * @returns (String)          *
 */
getExpDateString(): String

/**
 * Get expInterval.
 * @returns (number) - (long) long
 */
getExpInterval(): number

/**
 * Get expUnit.
 * @returns (String) - String
 */
getExpUnit(): String

/**
 * Get graceInterval.
 * @returns (number) - (long) String
 */
getGraceInterval(): number

/**
 * Get graceUnit.
 * @returns (String) - String
 */
getGraceUnit(): String

/**
 * Get penaltyInterval.
 * @returns (number) - (long) long
 */
getPenaltyInterval(): number

/**
 * Get penaltyUnit.
 * @returns (String) - String
 */
getPenaltyUnit(): String

/**
 * Get penaltyNum.
 * @returns (number) - (long) long
 */
getPenaltyNum(): number

/**
 * Get penaltyPeriod.
 * @returns (number) - (long) long
 */
getPenaltyPeriod(): number

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set exCode.
 * @param {string} expCode (string)
 * @returns (void)          *
 */
setExpCode(expCode:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set expStatus.
 * @param {string} expStatus (string)
 * @returns (void)          *
 */
setExpStatus(expStatus:string): void

/**
 * Set expDate.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpDate(expDate:ScriptDateTime): void

/**
 * Set expDateString.
 * @param {string} expDateString (string) - String
 * @returns (void)          *
 */
setExpDateString(expDateString:string): void

/**
 * Set expInterval.
 * @param {number} expInterval (number) - (long) 
 * @returns (void)          *
 */
setExpInterval(expInterval:number): void

/**
 * Set expUnit.
 * @param {string} expUnit (string)
 * @returns (void)          *
 */
setExpUnit(expUnit:string): void

/**
 * Set graceInterval.
 * @param {number} graceInterval (number) - (long) 
 * @returns (void)          *
 */
setGraceInterval(graceInterval:number): void

/**
 * Set graceUnit.
 * @param {string} graceUnit (string)
 * @returns (void)          *
 */
setGraceUnit(graceUnit:string): void

/**
 * Set penaltyInterval.
 * @param {number} penaltyInterval (number) - (long) 
 * @returns (void)          *
 */
setPenaltyInterval(penaltyInterval:number): void

/**
 * Set penaltyUnit.
 * @param {string} penaltyUnit (string)
 * @returns (void)          *
 */
setPenaltyUnit(penaltyUnit:string): void

/**
 * Set penalty number.
 * @param {number} penaltyNum (number) - (long) 
 * @returns (void)          *
 */
setPenaltyNum(penaltyNum:number): void

/**
 * Set penalty period.
 * @param {number} penaltyPeriod (number) - (long) 
 * @returns (void)          *
 */
setPenaltyPeriod(penaltyPeriod:number): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class ExpressionScript {
/**
 * Initialize JS engine environment for invoking sub script in a context.  Please don't invoke it, it is only used for EMSE engine.
 * @param {Context} cx (Context)
 * @param {Scriptable} scope (Scriptable)
 * @returns (void)          *
 */
initEnv(cx:Context, scope:Scriptable): void

/**
 * Clean JS engine's context to avoid memory leak.  Please don't invoke it, it is only used for EMSE engine.
 * @returns (void)          *
 */
cleanEvn(): void

/**
 * Allows a user to execute another script within the same context.  It is a real include mode.
 * @param {string} scriptID (string) - the 'code' for the script (not the 'name')
 * @returns (ScriptResult<any>)          *
 */
includeScript(scriptID:string): ScriptResult<any>

/**
 * Add referenced portlet field variables into expression input parameters
 * @param {number} viewID (number) - (Long) 
 * @param {string} querySQL (string)
 * @param {string[]} params (string[])
 * @returns (void)          *
 */
addVariblesFromDB(viewID:number, querySQL:string, params:string[]): void

/**
 * Get a table cell by row index and column name
 * @param {number} rowIndex (number) - (int) - row index
 * @param {string} variableKey (string) - - column name
 * @returns (ExpressionFieldModel) - ExpressionFieldModel
 */
getValue(rowIndex:number, variableKey:string): ExpressionFieldModel

/**
 * Get expression field by variableKey
 * @param {string} variableKey (string) - String
 * @returns (ExpressionFieldModel) - ExpressionFieldModel
 */
getValue(variableKey:string): ExpressionFieldModel

/**
 * Get table total row count
 * @returns (number) - (int) Total Row Count
 */
getTotalRowCount(): number

/**
 * Add the message for page form
 * @param {string} message (string)
 * @returns (void)          *
 */
addMessage(message:string): void

/**
 * Set field as a return field
 * @param {number} rowIndex (number) - (int) table row index
 * @param {ExpressionFieldModel} model (ExpressionFieldModel)
 * @returns (void)          *
 */
setReturn(rowIndex:number, model:ExpressionFieldModel): void

/**
 * Set field as a return field
 * @param {ExpressionFieldModel} model (ExpressionFieldModel)
 * @returns (void)          *
 */
setReturn(model:ExpressionFieldModel): void

/**
 * Get a new HashMap for look up output params; Key is asi field appears in asi portlet Value is corresponding look  up table column var output=expression.getOutputMap(); output.put('field1','code:sub:column2')
 * @returns (HashMap) - <java.lang.String,java.lang.String> 
 */
getOutputMap(): HashMap

/**
 * Create a new lookup table query parameter.
 * @returns (object[]) - List of parameter
 */
createParamList(): object[]

/**
 * Create a new Hashtable use as the parameters Map;   For example, it can be used for EMSE Script input parameters initial
 * @returns (HashMap) - <java.lang.String,java.lang.Object> Parameter Map
 */
createParamMap(): HashMap

/**
 * Call EMSE Script with script name and script parameters
 * @param {Hashtable} calledEMSE (Hashtable) - <java.lang.String,java.util.Hashtable<java.lang.String,java.lang.Object>> 
 * @returns (void)          *
 */
callEMSEScript(calledEMSE:Hashtable): void

/**
 * Execute lookup() function
 * @param {string} sqlStr (string) - String
 * @param {string[]} sqlParams (string[]) - List of String
 * @returns (String) - Lookup Result
 */
lookup(sqlStr:string, sqlParams:string[]): String

/**
 * Calculation the aggregate function for running total column
 * @param {string} functionName (string) - String
 * @param {object[]} values (object[]) - List of Object
 * @returns (String) - execute result
 */
executeAggregateFunction(functionName:string, values:object[]): String

/**
 * Get agency source sequence number by agency code
 * @param {string} serviceProvCode (string)
 * @returns (number) - (long) Source Sequence Number
 */
getSourceSeqNbr(serviceProvCode:string): number

/**
 * Add or subtract date for some days
 * @param {string} startDate (string) - The date to be added. Date format MM/DD/YYYY, for example 04/29/2008
 * @param {number} addDays (number) - (long) How many days to be added
 * @returns (String) - Added date
 */
addDate(startDate:string, addDays:number): String

/**
 * Calculate how many days data1 before data2
 * @param {string} startDate (string) - - Date formate MM/DD/YYYY, for example: 04/29/2008
 * @param {string} endDate (string) - - Date formate MM/DD/YYYY, for example: 04/29/2008
 * @returns (number) - (long) date1 - date2
 */
diffDate(startDate:string, endDate:string): number

/**
 * Check the date string whether is valid date format or not according current language date pattern,  if it's not a valid date format, throw a exception.
 * @param {string} date (string)
 * @param {string} errorMsg (string)
 * @returns (void)          *
 */
checkDateUseLocaleDatePattern(date:string, errorMsg:string): void

/**
 * Parser date string into given formatted string    This method use to convert inputed date string to given formatted string.  It is originally used for bug33067 so that it can be used to compare dates in JavaScript
 * @param {string} dateString (string)
 * @param {string} pattern (string) - format string. It is yyyy/MM/dd for bug 33067
 * @returns (String) - formatted string
 */
formatDate(dateString:string, pattern:string): String

/**
 * Parser date string into java.util.Date    This method use to generate the reference portlet data search SQL statement,  if the field type is HTML_TEXTBOX_OF_DATE, we need parse the field value date   string to a date object with current agency date pattern setting, then parse  the date object format to "MM/dd/yyyy" and use it as the SQL parameter. Because  all I18N language date infomation save to pattern "MM/dd/yyyy".
 * @param {string} dateString (string)
 * @returns (String) - String of entered date
 */
parseDate(dateString:string): String

/**
 * Get current agency date format pattern according the I18N setting
 * @returns (String) - Current Date Pattern
 */
getCurrentDatePattern(): String

/**
 * Print debug information
 * @param {string} info (string)
 * @returns (void)          *
 */
print(info:string): void

/**
 * Get EMSE ScriptRoot to support EMSE
 * @returns (ScriptRoot) - Script Root
 */
getScriptRoot(): ScriptRoot

/**
 * Get current running Expression script text
 * @returns (String) - Script Text
 */
getScriptText(): String

/**
 * Get current running Expression Name
 * @returns (String) - Expression Name
 */
getExpressionName(): String

}
declare class ExpressionModel {
/**
 * Get a table cell by row index and column name  Include two kinds of input parameters: 1.ASI Table input parameters; 2.GTable(Fee) input parameters;    Inside, the ASI Table input parameter container is special, because the Expression work on ASI Table  have two kinds of behivor:   1.Update Row: Loop current table all rows and update the meets Expression criteri rows;  2.Insert Row: Insert a new row for current table;    So, in this process, if we get the ASI Table input parameter, we need avoid to get the template row fields.  The template row use to insert a new row for current table.
 * @param {number} rowIndex (number) - (int) - row index
 * @param {string} variableKey (string) - - column name
 * @returns (ExpressionFieldModel)          *
 */
getValue(rowIndex:number, variableKey:string): ExpressionFieldModel

/**
 * Get expession field by variableKey    If the variable is ASI Table field variable, and expression script get it by only variableKey,   it need check the expression behavior whether is "INSERT_ROW", if it is yes, the process need  add a new row parameters fields into table fields container(asiTableInputparameters), and get  the new row field reference to the variable.    If the variable is common form(GForm) fields, get it from GForm fields container(formInputParameters);
 * @param {string} variableKey (string)
 * @returns (ExpressionFieldModel)          *
 */
getValue(variableKey:string): ExpressionFieldModel

/**
 * Save ASI/T form message
 * @param {ExpressionFieldModel} field (ExpressionFieldModel)
 * @returns (void)          *
 */
setASIASITFormMsg(field:ExpressionFieldModel): void

/**
 * If the expression behavior is "Insert Row", expression will call  this method to add a new row for ASI/Template Table;
 * @param {number} viewId (number) - (Long) 
 * @returns (number) - (int) 
 */
addRow(viewId:number): number

/**
 * Get expression runtime viewID
 * @returns (number) - (Long) 
 */
getViewID(): number

/**
 * Set expression runtime viewID
 * @param {number} viewID (number) - (Long) 
 * @returns (void)          *
 */
setViewID(viewID:number): void

/**
 * Get the expression run reslut  The run result include:  1. Return fields;  2. Portlet Messages;  3. Run exceptions
 * @returns (ExpressionRunResultModel)          *
 */
getRunResult(): ExpressionRunResultModel

/**
 * Remove the newly inserted ASI Table row which not meet criteria.    1. Get the new ASI Table row.  2. Check is there any field value has been changed by invoking field.getIsReturn().  3. If there is a columns has been changed then it means this new row meet criteria.      Else we need to remove it.      (Insert a new row without check criteria then remove it does not make sense.      It's wired that insert ASI Table row occurs in this.getValue(String variableKey)     We should refactor it later)
 * @returns (void)          *
 */
removeNewTemplateTableRowNoMeetCriteria(): void

/**
 * Get current running Expression total row count number
 * @returns (number) - (int) 
 */
getTotalRowCount(): number

/**
 * Get the run time Expression page type
 * @returns (String) - Returns the page type.
 */
getPageType(): String

/**
 * Set page type when business run Expression with this model
 * @param {string} pageType (string)
 * @returns (void)          *
 */
setPageType(pageType:string): void

/**
 * Get the run time Expression viewKey1
 * @returns (String) - Returns the viewKey1.
 */
getViewKey1(): String

/**
 * Set viewKey1 value when business run Expression with this model
 * @param {string} viewKey1 (string)
 * @returns (void)          *
 */
setViewKey1(viewKey1:string): void

/**
 * Get the run time Expression viewKey2
 * @returns (String) - the viewKey2
 */
getViewKey2(): String

/**
 * Set viewKey2 value when business run Expression with this model
 * @param {string} viewKey2 (string)
 * @returns (void)          *
 */
setViewKey2(viewKey2:string): void

/**
 * Get the run time Expression viewKey3
 * @returns (String) - the viewKey3
 */
getViewKey3(): String

/**
 * Set viewKey3 value when business run Expression with this model
 * @param {string} viewKey3 (string)
 * @returns (void)          *
 */
setViewKey3(viewKey3:string): void

/**
 * Add the expression run exception into run result
 * @param {Throwable} e (Throwable)
 * @returns (void)          *
 */
addException(e:Throwable): void

/**
 * Add the portlet message into run result
 * @param {string} message (string)
 * @returns (void)          *
 */
addMessage(message:string): void

/**
 * Get referenced portlet field variables
 * @param {number} portletId (number) - (Long) 
 * @returns (HashMap) - <java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel> 
 */
getPortletVaribles(portletId:number): HashMap

/**
 * @returns (String) - Returns the behavior.
 */
getBehavior(): String

/**
 * @param {string} behavior (string)
 * @returns (void)          *
 */
setBehavior(behavior:string): void

/**
 * @returns (number) - (Integer) Returns the newRowIndex.
 */
getNewRowIndex(): number

/**
 * @param {number} newRowIndex (number) - (Integer) 
 * @returns (void)          *
 */
setNewRowIndex(newRowIndex:number): void

/**
 * Get current caller ID
 * @returns (String)          *
 */
getCallerID(): String

/**
 * Set current caller ID
 * @param {string} callerID (string)
 * @returns (void)          *
 */
setCallerID(callerID:string): void

/**
 * Get current service provider code
 * @returns (String)          *
 */
getServiceProviderCode(): String

/**
 * Set current service provider code
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (String)          *
 */
getExpressionName(): String

/**
 * @returns (void)          *
 */
setExpressionName(): void

/**
 * @returns (String) - the scriptText
 */
getScriptText(): String

/**
 * Set current Expression script text
 * @param {string} scriptText (string)
 * @returns (void)          *
 */
setScriptText(scriptText:string): void

/**
 * @returns (HashMap) - <java.lang.Long,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>> the formInputParameters
 */
getFormInputParameters(): HashMap

/**
 * @param {HashMap} formInputParameters (HashMap) - <java.lang.Long,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>> 
 * @returns (void)          *
 */
setFormInputParameters(formInputParameters:HashMap): void

/**
 * @returns (HashMap) - <java.lang.Long,java.util.Map<java.lang.Integer,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>>> the gTableInputParameters
 */
getGTableInputParameters(): HashMap

/**
 * @param {HashMap} tableInputParameters (HashMap) - <java.lang.Long,java.util.Map<java.lang.Integer,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>>> 
 * @returns (void)          *
 */
setGTableInputParameters(tableInputParameters:HashMap): void

/**
 * @returns (HashMap) - <java.lang.String,java.util.Map<java.lang.Integer,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>>> the templateTableInputparameters
 */
getTempalteTableInputparameters(): HashMap

/**
 * @param {HashMap} templateTableInputparameters (HashMap) - <java.lang.String,java.util.Map<java.lang.Integer,java.util.Map<java.lang.String,com.accela.aa.aamain.expression.ExpressionFieldModel>>> 
 * @returns (void)          *
 */
setTemplateTableInputparameters(templateTableInputparameters:HashMap): void

/**
 * Set the output message of Expression Script call EMSE Script
 * @param {HashMap} outputMsgs (HashMap) - <java.lang.String,com.accela.util.Result> 
 * @returns (void)          *
 */
setEMSEOutput(outputMsgs:HashMap): void

/**
 * Get the ASI Table sub group Max Row Indexes.
 * @returns (HashMap) - <java.lang.String,java.lang.Integer> The max row indexes map.
 */
getMaxRowIndexes(): HashMap

/**
 * Set the ASI Table sub group Max Row Indexes.
 * @param {HashMap} map (HashMap) - <java.lang.String,java.lang.Integer> 
 * @returns (void)          *
 */
setMaxRowIndexes(map:HashMap): void

/**
 * Set the flag value to put the script text into cache or not
 * @param {Boolean} value (Boolean)
 * @returns (void)          *
 */
setIsFromCache(value:Boolean): void

/**
 * Get the flag value to put the script text into cache or not
 * @returns (Boolean) - true or false
 */
getIsFromCache(): Boolean

}
declare class F4FeeItemAuditTrailModel {
/**
 * Get feeAuditSepNbr.
 * @returns (number) - (long) long
 */
getFeeAuditSeqNbr(): number

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get feeSeqNbr.
 * @returns (number) - (long) long
 */
getFeeSeqNbr(): number

/**
 * Get PaymentPeriod.
 * @returns (String) - String
 */
getPaymentPeriod(): String

/**
 * Get feeCod.
 * @returns (String) - String
 */
getFeeCod(): String

/**
 * Get display.
 * @returns (String) - String
 */
getDisplay(): String

/**
 * Get feeDescription.
 * @returns (String) - String
 */
getFeeDescription(): String

/**
 * Get AccCodeL1.
 * @returns (String) - String
 */
getAccCodeL1(): String

/**
 * Get AccCodeL2.
 * @returns (String) - String
 */
getAccCodeL2(): String

/**
 * Get AccCodeL3.
 * @returns (String) - String
 */
getAccCodeL3(): String

/**
 * Get formula.
 * @returns (String) - String
 */
getFormula(): String

/**
 * Get fee unit.
 * @returns (number) - (double) double
 */
getFeeUnit(): number

/**
 * Get udes.
 * @returns (String) - String
 */
getUdes(): String

/**
 * Get fee.
 * @returns (number) - (double) double
 */
getFee(): number

/**
 * Get apply date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getApplyDate(): ScriptDateTime

/**
 * Get effect date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expire date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get subGroup.
 * @returns (String) - String
 */
getSubGroup(): String

/**
 * Get calcFlag.
 * @returns (String) - String
 */
getCalcFlag(): String

/**
 * Get status flag.
 * @returns (String) - String
 */
getStatusFlag(): String

/**
 * Get action type.
 * @returns (String) - String
 */
getActionType(): String

/**
 * Get comment.
 * @returns (String) - String
 */
getComment(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit ID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set feeAuditSeqNbr.
 * @param {number} feeAuditSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeAuditSeqNbr(feeAuditSeqNbr:number): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set feeSeqNbr.
 * @param {number} feeSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeSeqNbr(feeSeqNbr:number): void

/**
 * Set paymentPeriod.
 * @param {string} paymentPeriod (string)
 * @returns (void)          *
 */
setPaymentPeriod(paymentPeriod:string): void

/**
 * Set fee code.
 * @param {string} feeCod (string)
 * @returns (void)          *
 */
setFeeCod(feeCod:string): void

/**
 * Set display.
 * @param {string} display (string)
 * @returns (void)          *
 */
setDisplay(display:string): void

/**
 * Set feeDescription.
 * @param {string} feeDescription (string)
 * @returns (void)          *
 */
setFeeDescription(feeDescription:string): void

/**
 * Set accCodeL1.
 * @param {string} accCodeL1 (string)
 * @returns (void)          *
 */
setAccCodeL1(accCodeL1:string): void

/**
 * Set accCodeL2.
 * @param {string} accCodeL2 (string)
 * @returns (void)          *
 */
setAccCodeL2(accCodeL2:string): void

/**
 * Set accCodeL3.
 * @param {string} accCodeL3 (string)
 * @returns (void)          *
 */
setAccCodeL3(accCodeL3:string): void

/**
 * Set formula.
 * @param {string} formula (string)
 * @returns (void)          *
 */
setFormula(formula:string): void

/**
 * Set fee unit.
 * @param {number} feeUnit (number) - (double) 
 * @returns (void)          *
 */
setFeeUnit(feeUnit:number): void

/**
 * Set udes.
 * @param {string} udes (string)
 * @returns (void)          *
 */
setUdes(udes:string): void

/**
 * Set fee.
 * @param {number} fee (number) - (double) 
 * @returns (void)          *
 */
setFee(fee:number): void

/**
 * Set apply date.
 * @param {ScriptDateTime} applyDate (ScriptDateTime)
 * @returns (void)          *
 */
setApplyDate(applyDate:ScriptDateTime): void

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set subgroup.
 * @param {string} subGroup (string)
 * @returns (void)          *
 */
setSubGroup(subGroup:string): void

/**
 * Set calc flag.
 * @param {string} calcFlag (string)
 * @returns (void)          *
 */
setCalcFlag(calcFlag:string): void

/**
 * Set status flag.
 * @param {string} statusFlag (string)
 * @returns (void)          *
 */
setStatusFlag(statusFlag:string): void

/**
 * Set action type.
 * @param {string} actionType (string)
 * @returns (void)          *
 */
setActionType(actionType:string): void

/**
 * Set comment.
 * @param {string} comment (string)
 * @returns (void)          *
 */
setComment(comment:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit status.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (String) - the feeAllocationType
 */
getFeeAllocationType(): String

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @returns (number) - (Double) the accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class F4FeeItemModel {
/**
 * Get f4FeeItem.
 * @returns (F4FeeItemModel) - F4FeeItemModel
 */
getF4FeeItem(): F4FeeItemModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get feeSeqNbr.
 * @returns (number) - (long) long
 */
getFeeSeqNbr(): number

/**
 * Get paymentPeriod.
 * @returns (String) - String
 */
getPaymentPeriod(): String

/**
 * Get feeCod.
 * @returns (String) - String
 */
getFeeCod(): String

/**
 * Get display.
 * @returns (String) - String
 */
getDisplay(): String

/**
 * Get feeDescription.
 * @returns (String) - String
 */
getFeeDescription(): String

/**
 * @returns (String)          *
 */
c(): String

/**
 * Get accCodeL1.
 * @returns (String) - String
 */
getAccCodeL1(): String

/**
 * Get accCodeL2.
 * @returns (String) - String
 */
getAccCodeL2(): String

/**
 * Get accCodeL3.
 * @returns (String) - String
 */
getAccCodeL3(): String

/**
 * Get formula.
 * @returns (String) - String
 */
getFormula(): String

/**
 * Get feeUnit.
 * @returns (number) - (double) double
 */
getFeeUnit(): number

/**
 * Get udes.
 * @returns (String) - String
 */
getUdes(): String

/**
 * Get fee.
 * @returns (number) - (double) double
 */
getFee(): number

/**
 * Get applyDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getApplyDate(): ScriptDateTime

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get subGroup.
 * @returns (String) - String
 */
getSubGroup(): String

/**
 * Get calcFlag.
 * @returns (String) - String
 */
getCalcFlag(): String

/**
 * Get feeitemStatus.
 * @returns (String) - String
 */
getFeeitemStatus(): String

/**
 * Get feeCalcProc.
 * @returns (String) - String
 */
getFeeCalcProc(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set feeSeqNbr.
 * @param {number} feeSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeSeqNbr(feeSeqNbr:number): void

/**
 * Set paymentPeriod.
 * @param {string} paymentPeriod (string)
 * @returns (void)          *
 */
setPaymentPeriod(paymentPeriod:string): void

/**
 * Set feeCod.
 * @param {string} feeCod (string)
 * @returns (void)          *
 */
setFeeCod(feeCod:string): void

/**
 * Set display.
 * @param {string} display (string)
 * @returns (void)          *
 */
setDisplay(display:string): void

/**
 * Set feeDescription.
 * @param {string} feeDescription (string)
 * @returns (void)          *
 */
setFeeDescription(feeDescription:string): void

/**
 * Set accCodeL1.
 * @param {string} accCodeL1 (string)
 * @returns (void)          *
 */
setAccCodeL1(accCodeL1:string): void

/**
 * Set accCodeL2.
 * @param {string} accCodeL2 (string)
 * @returns (void)          *
 */
setAccCodeL2(accCodeL2:string): void

/**
 * Set accCodeL3.
 * @param {string} accCodeL3 (string)
 * @returns (void)          *
 */
setAccCodeL3(accCodeL3:string): void

/**
 * Set formula.
 * @param {string} formula (string)
 * @returns (void)          *
 */
setFormula(formula:string): void

/**
 * Set feeUnit.
 * @param {number} feeUnit (number) - (double) 
 * @returns (void)          *
 */
setFeeUnit(feeUnit:number): void

/**
 * Set udes.
 * @param {string} udes (string)
 * @returns (void)          *
 */
setUdes(udes:string): void

/**
 * Set fee.
 * @param {number} fee (number) - (double) 
 * @returns (void)          *
 */
setFee(fee:number): void

/**
 * Set applyDate.
 * @param {ScriptDateTime} applyDate (ScriptDateTime)
 * @returns (void)          *
 */
setApplyDate(applyDate:ScriptDateTime): void

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set subGroup.
 * @param {string} subGroup (string)
 * @returns (void)          *
 */
setSubGroup(subGroup:string): void

/**
 * Set calcFlag.
 * @param {string} calcFlag (string)
 * @returns (void)          *
 */
setCalcFlag(calcFlag:string): void

/**
 * Set feeitemStatus.
 * @param {string} feeitemStatus (string)
 * @returns (void)          *
 */
setFeeitemStatus(feeitemStatus:string): void

/**
 * Set feeCalcProc.
 * @param {string} feeCalcProc (string)
 * @returns (void)          *
 */
setFeeCalcProc(feeCalcProc:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * set AutoInvoiceFlag
 * @param {string} autoInvoiceFlag (string)
 * @returns (void)          *
 */
setAutoInvoiceFlag(autoInvoiceFlag:string): void

/**
 * get AutoInvoiceFlag
 * @returns (String) - m_AutoInvoiceFlag
 */
getAutoInvoiceFlag(): String

/**
 * setFeeSchudle
 * @param {string} feeSchudle (string)
 * @returns (void)          *
 */
setFeeSchudle(feeSchudle:string): void

/**
 * getFeeSchudle
 * @returns (String) - feeSchudle
 */
getFeeSchudle(): String

/**
 * @returns (number) - (Long) 
 */
getPriority(): number

/**
 * @returns (void)          *
 */
setPriority(): void

/**
 * @returns (String)          *
 */
getFeeAllocationType(): String

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @returns (number) - (Double) the accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class F4InvoiceModel {
/**
 * Get F4InvoiceModel object.
 * @returns (F4InvoiceModel) - F4InvoiceModel
 */
getInvoiceModel(): F4InvoiceModel

/**
 * Return InvDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getInvDate(): ScriptDateTime

/**
 * Return InvNbr.
 * @returns (number) - (long) long
 */
getInvNbr(): number

/**
 * Return InvLevel.
 * @returns (number) - (long) long
 */
getInvLevel(): number

/**
 * Modify member invLevel of F4Invoice object.
 * @param {number} invLevel (number) - (long) 
 * @returns (void)          *
 */
setInvLevel(invLevel:number): void

/**
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

/**
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * @returns (String)          *
 */
getPrinted(): String

/**
 * @param {string} printed (string)
 * @returns (void)          *
 */
setPrinted(printed:string): void

/**
 * getCustomizedNbr
 * @returns (String)          *
 */
getCustomizedNbr(): String

/**
 * setCustomizedNbr
 * @param {string} customizedNbr (string)
 * @returns (void)          *
 */
setCustomizedNbr(customizedNbr:string): void

}
declare class FeeItemModel {
/**
 * Get agency code.
 * @returns (String) - the string of agency code
 */
getServiceProviderCode(): String

/**
 * Get permitID1.
 * @returns (String) - String
 */
getPermitID1(): String

/**
 * Get permitID2.
 * @returns (String) - String
 */
getPermitID2(): String

/**
 * Get permitID3.
 * @returns (String) - String
 */
getPermitID3(): String

/**
 * Get feeSeqNbr.
 * @returns (number) - (long) long
 */
getFeeSeqNbr(): number

/**
 * Get paymentPeriod.
 * @returns (String) - String
 */
getPaymentPeriod(): String

/**
 * Get feeCod.
 * @returns (String) - String
 */
getFeeCod(): String

/**
 * Get display.
 * @returns (String) - String
 */
getDisplay(): String

/**
 * Get feeDescription.
 * @returns (String) - String
 */
getFeeDescription(): String

/**
 * Get accCodeL1.
 * @returns (String) - String
 */
getAccCodeL1(): String

/**
 * Get accCodeL2.
 * @returns (String) - String
 */
getAccCodeL2(): String

/**
 * Get accCodeL3.
 * @returns (String) - String
 */
getAccCodeL3(): String

/**
 * Get formula.
 * @returns (String) - String
 */
getFormula(): String

/**
 * Get feeUnit.
 * @returns (number) - (double) double
 */
getFeeUnit(): number

/**
 * Get udes.
 * @returns (String) - String
 */
getUdes(): String

/**
 * Get fee.
 * @returns (number) - (double) double
 */
getFee(): number

/**
 * Get applyDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getApplyDate(): ScriptDateTime

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get subGroup.
 * @returns (String) - String
 */
getSubGroup(): String

/**
 * Get calcFlag.
 * @returns (String) - String
 */
getCalcFlag(): String

/**
 * Get feeitemStatus.
 * @returns (String) - String
 */
getFeeitemStatus(): String

/**
 * Get feeCalcProc.
 * @returns (String) - String
 */
getFeeCalcProc(): String

/**
 * Get f4FeeItemModel.
 * @returns (F4FeeItemModel) - F4FeeItemModel
 */
getF4FeeItemModel(): F4FeeItemModel

/**
 * @returns (String) - the m_feeAllocationType
 */
getFeeAllocationType(): String

/**
 * @returns (number) - (Double) the m_accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @returns (number) - (Double) the m_accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @returns (number) - (Double) the m_accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class FeeModel {
/**
 * Get fee item.
 * @returns (FeeModel) - FeeModel
 */
getFeeItem(): FeeModel

/**
 * Get CapID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get seqNumber.
 * @returns (number) - (long) long
 */
getSeqNumber(): number

/**
 * Get feePeriod.
 * @returns (String) - String
 */
getFeePeriod(): String

/**
 * Get feeCode.
 * @returns (String) - String
 */
getFeeCode(): String

/**
 * Get feeSubGroup.
 * @returns (String) - String
 */
getFeeSubGroup(): String

/**
 * Get feeDescription.
 * @returns (String) - String
 */
getFeeDescription(): String

/**
 * Get feeAmount.
 * @returns (number) - (double) double
 */
getFeeAmount(): number

/**
 * Get unit.
 * @returns (String) - String
 */
getUnit(): String

/**
 * Get unitType.
 * @returns (String) - String
 */
getUnitType(): String

/**
 * Get formula.
 * @returns (String) - String
 */
getFormula(): String

/**
 * Get debitCredit.
 * @returns (String) - String
 */
getDebitCredit(): String

/**
 * Get accountCode1.
 * @returns (String) - String
 */
getAccountCode1(): String

/**
 * Get accountCode2.
 * @returns (String) - String
 */
getAccountCode2(): String

/**
 * Get accountCode3.
 * @returns (String) - String
 */
getAccountCode3(): String

/**
 * Get displayOrder.
 * @returns (String) - String
 */
getDisplayOrder(): String

/**
 * Get defaultFlag.
 * @returns (String) - String
 */
getDefaultFlag(): String

/**
 * Get feeApplyDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getFeeApplyDate(): ScriptDateTime

/**
 * Get calculationFlag.
 * @returns (String) - String
 */
getCalculationFlag(): String

/**
 * Get feeItemStatusFlag.
 * @returns (String) - String
 */
getFeeItemStatusFlag(): String

/**
 * @returns (number) - (Double) the m_accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @returns (number) - (Double) the m_accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @returns (number) - (Double) the m_accountCode3Allocation
 */
getAccountCode3Allocation(): number

}
declare class FIDModel {
/**
 * Get FIDModel.
 * @returns (FIDModel) - FIDModel
 */
getFIDModel(): FIDModel

/**
 * getAdd.
 * @returns (String) - String
 */
getAdd(): String

/**
 * Get Delete.
 * @returns (String) - String
 */
getDelete(): String

/**
 * Get Edit.
 * @returns (String) - String
 */
getEdit(): String

/**
 * Get FIDCode.
 * @returns (String) - String
 */
getFIDCode(): String

/**
 * Get FIDName.
 * @returns (String) - String
 */
getFIDName(): String

/**
 * Get Read.
 * @returns (String) - String
 */
getRead(): String

/**
 * Set Add.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAdd(string:string): void

/**
 * Set Delete.
 * @param {string} string (string)
 * @returns (void)          *
 */
setDelete(string:string): void

/**
 * Set Edit.
 * @param {string} string (string)
 * @returns (void)          *
 */
setEdit(string:string): void

/**
 * Set FIDCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setFIDCode(string:string): void

/**
 * Set FIDName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setFIDName(string:string): void

/**
 * Set Read.
 * @param {string} string (string)
 * @returns (void)          *
 */
setRead(string:string): void

/**
 * isReadOnly Check to see whether the permission is read only.
 * @returns (boolean) - true - read only, false not.
 */
isReadOnly(): boolean

/**
 * isFullAccess Check to see whether the permission is full access.
 * @returns (boolean) - true - has full access, false not.
 */
isFullAccess(): boolean

}
declare class GenealogyTransactionModel {
/**
 * Gets the service provider code.
 * @returns (String) - the service provider code
 */
getServiceProviderCode(): String

/**
 * Sets the service provider code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Gets the genealogy transaction.
 * @returns (GenealogyTransactionModel) - the genealogy transaction
 */
getGenealogyTransaction(): GenealogyTransactionModel

/**
 * Sets the genealogy transaction.
 * @param {GenealogyTransactionModel} genealogyTransaction (GenealogyTransactionModel)
 * @returns (void)          *
 */
setGenealogyTransaction(genealogyTransaction:GenealogyTransactionModel): void

/**
 * Gets the audit id.
 * @returns (String) - the audit id
 */
getAuditID(): String

/**
 * Sets the audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

}
declare class GISObjectModel {
/**
 * Get gisObjectModel.
 * @returns (GISObjectModel) - GISObjectModel
 */
getGisObjectModel(): GISObjectModel

/**
 * Get auditId.
 * @returns (String) - String
 */
getAuditId(): String

/**
 * Get gisId.
 * @returns (String) - String
 */
getGisId(): String

/**
 * Get objectId.
 * @returns (String) - String
 */
getObjectId(): String

/**
 * Get attributeNames.
 * @returns (String[]) - String[]
 */
getAttributeNames(): String[]

/**
 * Get attributeValues.
 * @returns (String[]) - String[]
 */
getAttributeValues(): String[]

/**
 * Convert gisObjectModel to string.  Return string
 * @returns (String)          *
 */
toString(): String

}
declare class GISTypeModel {
/**
 * Get gISTypeModel.
 * @returns (GISTypeModel) - GISTypeModel
 */
getgISTypeModel(): GISTypeModel

/**
 * Get gISObjects.
 * @returns (GISObjectScriptModel) - GISObjectScriptModel[]
 */
getGISObjects(): GISObjectScriptModel

/**
 * Get gisServiceId.
 * @returns (String) - String
 */
getGisServiceId(): String

/**
 * Get gisTypeId.
 * @returns (String) - String
 */
getGisTypeId(): String

/**
 * Get the gISTypeModel.
 * @returns (GISTypeModel) - GISTypeModel
 */
getGISTypeModel(): GISTypeModel

/**
 * Convert gISTypeModel to string.
 * @returns (String) - string
 */
toString(): String

/**
 * Add attribute's Name.
 * @param {string} name (string)
 * @returns (void)          *
 */
addAttributeName(name:string): void

/**
 * Get collection of attribute names.
 * @returns (String) - String
 */
getAttributeNames(): String

}
declare class HearingAvailableModel {
/**
 * Method gethearingAvailableModel.
 * @returns (HearingAvailableModel) - m_hearingavModel
 */
gethearingAvailableModel(): HearingAvailableModel

/**
 * Method sethearingAvailableModel.
 * @param {HearingAvailableModel} hearingavModel (HearingAvailableModel)
 * @returns (void)          *
 */
sethearingAvailableModel(hearingavModel:HearingAvailableModel): void

/**
 * Method getServiceProviderCode.
 * @returns (String) - m_hearingavModel.getServiceProviderCode
 */
getServiceProviderCode(): String

/**
 * Method setServiceProviderCode.
 * @param {string} servProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(servProviderCode:string): void

/**
 * Method getHearingBody.
 * @returns (String) - m_hearingavModel.getHearingBody
 */
getHearingBody(): String

/**
 * Method setHearingBody.
 * @param {string} hearingBody (string)
 * @returns (void)          *
 */
setHearingBody(hearingBody:string): void

/**
 * Method getCalendarDate.
 * @returns (Date) - m_hearingavModel.getCalendarDate
 */
getCalendarDate(): Date

/**
 * Method setCalendarDate.
 * @param {Date} calendarDate (Date)
 * @returns (void)          *
 */
setCalendarDate(calendarDate:Date): void

/**
 * Method getStartingTime.
 * @returns (String) - m_hearingavModel.getStartingTime
 */
getStartingTime(): String

/**
 * Method setStartingTime.
 * @param {string} startingTime (string)
 * @returns (void)          *
 */
setStartingTime(startingTime:string): void

/**
 * Method getLocation.
 * @returns (String) - m_hearingavModel.getLocation
 */
getLocation(): String

/**
 * Method setLocation.
 * @param {string} location (string)
 * @returns (void)          *
 */
setLocation(location:string): void

/**
 * Method getSchedMaxItem.
 * @returns (number) - (Long) m_hearingavModel.getSchedMaxItem
 */
getSchedMaxItem(): number

/**
 * Method setSchedMaxItem.
 * @param {number} schedMaxItem (number) - (Long) 
 * @returns (void)          *
 */
setSchedMaxItem(schedMaxItem:number): void

/**
 * Method getSchedMaxTime.
 * @returns (number) - (Long) m_hearingavModel.getSchedMaxTime
 */
getSchedMaxTime(): number

/**
 * Method setSchedMaxTime.
 * @param {number} schedMaxTime (number) - (Long) 
 * @returns (void)          *
 */
setSchedMaxTime(schedMaxTime:number): void

/**
 * Method getNoticeDate.
 * @returns (Date) - m_hearingavModel.getNoticeDate
 */
getNoticeDate(): Date

/**
 * Method setNoticeDate.
 * @param {Date} noticeDate (Date)
 * @returns (void)          *
 */
setNoticeDate(noticeDate:Date): void

/**
 * Method getSeqNbr.
 * @returns (number) - (Long) m_hearingavModel.getSeqNbr
 */
getSeqNbr(): number

/**
 * Method setSeqNbr.
 * @param {number} seqNbr (number) - (Long) 
 * @returns (void)          *
 */
setSeqNbr(seqNbr:number): void

/**
 * Method getSchedDayOfWeek.
 * @returns (String) - m_hearingavModel.getSchedDayOfWeek
 */
getSchedDayOfWeek(): String

/**
 * Method setSchedDayOfWeek.
 * @param {string} schedDayOfWeek (string)
 * @returns (void)          *
 */
setSchedDayOfWeek(schedDayOfWeek:string): void

/**
 * Method getDuration.
 * @returns (number) - (Double) m_hearingavModel.getDuration
 */
getDuration(): number

/**
 * Method setDuration.
 * @param {number} duration (number) - (Double) 
 * @returns (void)          *
 */
setDuration(duration:number): void

/**
 * Method getCount.
 * @returns (number) - (Double) m_hearingavModel.getCount
 */
getCount(): number

/**
 * Method setCount.
 * @param {number} count (number) - (Double) 
 * @returns (void)          *
 */
setCount(count:number): void

}
declare class InspectionModel {
/**
 * Get CapID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get inspector.
 * @returns (SysUserModel) - SysUserModel
 */
getInspector(): SysUserModel

/**
 * Get idNumber.
 * @returns (number) - (long) long
 */
getIdNumber(): number

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get documentDescription.
 * @returns (String) - String
 */
getDocumentDescription(): String

/**
 * Get scheduledDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getScheduledDate(): ScriptDateTime

/**
 * Get scheduledTime.
 * @returns (String) - String
 */
getScheduledTime(): String

/**
 * Get inspectionType.
 * @returns (String) - String
 */
getInspectionType(): String

/**
 * Get inspectionStatus.
 * @returns (String) - String
 */
getInspectionStatus(): String

/**
 * Get inspectionStatusDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getInspectionStatusDate(): ScriptDateTime

/**
 * Get inspectionDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getInspectionDate(): ScriptDateTime

/**
 * Get requestDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getRequestDate(): ScriptDateTime

/**
 * return the inspection. added by carl to test some methods.
 * @returns (InspectionModel) - InspectionModel
 */
getInspection(): InspectionModel

/**
 * Get the inspection comment text.
 * @returns (String) - String
 */
getInspectionComments(): String

/**
 * @returns (String)          *
 */
getAuditID(): String

/**
 * @returns (String)          *
 */
getRequestPhoneNum(): String

/**
 * @returns (String)          *
 */
getRequestPhoneNumIDD(): String

/**
 * @returns (void)          *
 */
setInspectionComments(): void

/**
 * @returns (void)          *
 */
setInspectionStatus(): void

/**
 * @returns (void)          *
 */
setInspectionStatusDate(): void

/**
 * @returns (void)          *
 */
setInspector(): void

/**
 * @returns (void)          *
 */
setRequestDate(): void

/**
 * @returns (void)          *
 */
setScheduledDate(): void

/**
 * @returns (void)          *
 */
setScheduleTime(): void

/**
 * @returns (String)          *
 */
getScheduleTime(): String

/**
 * @returns (void)          *
 */
setCapID(): void

/**
 * @returns (void)          *
 */
setInspectionId(): void

/**
 * @returns (number) - (Double) 
 */
getTimeTotal(): number

/**
 * @returns (void)          *
 */
setTimeTotal(): void

}
declare class LicenseProfessionalModel {
/**
 * Get licenseProfessionalModel.
 * @returns (LicenseProfessionalModel) - LicenseProfessionalModel
 */
getLicenseProfessionalModel(): LicenseProfessionalModel

/**
 * get InfoTableGroupCodeModel
 * @returns (InfoTableGroupCodeModel) - InfoTableGroupCodeModel
 */
getInfoTableGroupCodeModel(): InfoTableGroupCodeModel

/**
 * get InfoTableGroupCodeModel
 * @returns (void)          *
 */
setInfoTableGroupCodeModel(): void

/**
 * Get InfoTableSubgroupModel
 * @returns (InfoTableSubgroupModel) - InfoTableSubgroupModel
 */
getInfoTableSubgroupModel(): InfoTableSubgroupModel

/**
 * Get InfoTableColumnModel
 * @returns (InfoTableColumnModel)          *
 */
getInfoTableColumnModel(): InfoTableColumnModel

/**
 * Get InfoTableValueModel
 * @returns (InfoTableValueModel)          *
 */
getInfoTableValueModel(): InfoTableValueModel

/**
 * Get address1.
 * @returns (String) - string
 */
getAddress1(): String

/**
 * Get address2.
 * @returns (String) - string
 */
getAddress2(): String

/**
 * Get address3.
 * @returns (String) - string
 */
getAddress3(): String

/**
 * Get agencyCode.
 * @returns (String) - string
 */
getAgencyCode(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - string
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - string
 */
getAuditStatus(): String

/**
 * Get businessLicense.
 * @returns (String) - string
 */
getBusinessLicense(): String

/**
 * Get businessName.
 * @returns (String) - string
 */
getBusinessName(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get city.
 * @returns (String) - string
 */
getCity(): String

/**
 * Get cityCode.
 * @returns (String) - string
 */
getCityCode(): String

/**
 * Get classCode.
 * @returns (String) - string
 */
getClassCode(): String

/**
 * Get contactFirstName.
 * @returns (String) - string
 */
getContactFirstName(): String

/**
 * Get contactLastName.
 * @returns (String) - string
 */
getContactLastName(): String

/**
 * Get contactMiddleName.
 * @returns (String) - string
 */
getContactMiddleName(): String

/**
 * Get country.
 * @returns (String) - string
 */
getCountry(): String

/**
 * Get countryCode.
 * @returns (String) - string
 */
getCountryCode(): String

/**
 * Get einSs.
 * @returns (String) - string
 */
getEinSs(): String

/**
 * Get email.
 * @returns (String) - string
 */
getEmail(): String

/**
 * Get fax.
 * @returns (String) - string
 */
getFax(): String

/**
 * Get fax countryCode.
 * @returns (String) - string
 */
getFaxCountryCode(): String

/**
 * Get holdCode.
 * @returns (String) - string
 */
getHoldCode(): String

/**
 * Get holdDesc.
 * @returns (String) - string
 */
getHoldDesc(): String

/**
 * Get lastRenewalDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLastRenewalDate(): ScriptDateTime

/**
 * Get lastUpdateDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLastUpdateDate(): ScriptDateTime

/**
 * Get licenseExpirDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicenseExpirDate(): ScriptDateTime

/**
 * Get license board.
 * @returns (String) - string
 */
getLicenseBoard(): String

/**
 * Get licenseNbr.
 * @returns (String) - string
 */
getLicenseNbr(): String

/**
 * Get licenseType.
 * @returns (String) - string
 */
getLicenseType(): String

/**
 * Get licesnseOrigIssueDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicesnseOrigIssueDate(): ScriptDateTime

/**
 * Get phone1.
 * @returns (String) - string
 */
getPhone1(): String

/**
 * Get phone1 countryCode
 * @returns (String) - string
 */
getPhone1CountryCode(): String

/**
 * Get phone2.
 * @returns (String) - string
 */
getPhone2(): String

/**
 * Get phone2 countryCode.
 * @returns (String) - string
 */
getPhone2CountryCode(): String

/**
 * @returns (String)          *
 */
getPhone3(): String

/**
 * @returns (String)          *
 */
getPhone3CountryCode(): String

/**
 * Get primStatusCode.
 * @returns (String) - string
 */
getPrimStatusCode(): String

/**
 * Get printFlag.
 * @returns (String) - string
 */
getPrintFlag(): String

/**
 * Get selfIns.
 * @returns (String) - string
 */
getSelfIns(): String

/**
 * Get serDes.
 * @returns (String) - string
 */
getSerDes(): String

/**
 * Get state.
 * @returns (String) - string
 */
getState(): String

/**
 * Get suffixName.
 * @returns (String) - string
 */
getSuffixName(): String

/**
 * Get workCompExempt.
 * @returns (String) - string
 */
getWorkCompExempt(): String

/**
 * Get zip.
 * @returns (String) - string
 */
getZip(): String

/**
 * Get salutation.
 * @returns (String) - the salutation
 */
getSalutation(): String

/**
 * Get gender.
 * @returns (String) - the gender
 */
getGender(): String

/**
 * Get postOfficeBox.
 * @returns (String) - the postOfficeBox
 */
getPostOfficeBox(): String

/**
 * Get busName2.
 * @returns (String) - the busName2
 */
getBusName2(): String

/**
 * Get birthDate.
 * @returns (ScriptDateTime) - the birthDate
 */
getBirthDate(): ScriptDateTime

/**
 * Set address1.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress1(string:string): void

/**
 * Set address2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress2(string:string): void

/**
 * Set address3.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress3(string:string): void

/**
 * Set agency code.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAgencyCode(string:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditID(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditStatus(string:string): void

/**
 * Set businessLicense.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusinessLicense(string:string): void

/**
 * Set businessName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusinessName(string:string): void

/**
 * Set capID.
 * @param {CapIDModel} model (CapIDModel)
 * @returns (void)          *
 */
setCapID(model:CapIDModel): void

/**
 * Set city.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCity(string:string): void

/**
 * Set cityCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCityCode(string:string): void

/**
 * Set classCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setClassCode(string:string): void

/**
 * Set contact first name.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactFirstName(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactLastName(string:string): void

/**
 * Set contact middle name.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactMiddleName(string:string): void

/**
 * Set country.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCountry(string:string): void

/**
 * Set countryCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCountryCode(string:string): void

/**
 * Set einss.
 * @param {string} string (string)
 * @returns (void)          *
 */
setEinSs(string:string): void

/**
 * Set email.
 * @param {string} string (string)
 * @returns (void)          *
 */
setEmail(string:string): void

/**
 * Set fax.
 * @param {string} string (string)
 * @returns (void)          *
 */
setFax(string:string): void

/**
 * Set fax countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setFaxCountryCode(countryCode:string): void

/**
 * Set holdCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setHoldCode(string:string): void

/**
 * Set holdDesc.
 * @param {string} string (string)
 * @returns (void)          *
 */
setHoldDesc(string:string): void

/**
 * Set lastRenewalDate.
 * @param {ScriptDateTime} renewalDate (ScriptDateTime)
 * @returns (void)          *
 */
setLastRenewalDate(renewalDate:ScriptDateTime): void

/**
 * Set LastUpdateDate.
 * @param {ScriptDateTime} updateDate (ScriptDateTime)
 * @returns (void)          *
 */
setLastUpdateDate(updateDate:ScriptDateTime): void

/**
 * Set licenseExpirDate.
 * @param {ScriptDateTime} expirDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicenseExpirDate(expirDate:ScriptDateTime): void

/**
 * Set license board.
 * @param {string} licenseBoard (string)
 * @returns (void)          *
 */
setLicenseBoard(licenseBoard:string): void

/**
 * Set licenseNbr.
 * @param {string} string (string)
 * @returns (void)          *
 */
setLicenseNbr(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setLicenseType(string:string): void

/**
 * Set licesnseOrigIssueDate.
 * @param {ScriptDateTime} issueDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicesnseOrigIssueDate(issueDate:ScriptDateTime): void

/**
 * Set phone1.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPhone1(string:string): void

/**
 * Set phone1 countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setPhone1CountryCode(countryCode:string): void

/**
 * Set phone2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPhone2(string:string): void

/**
 * Set phone2 countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setPhone2CountryCode(countryCode:string): void

/**
 * @returns (void)          *
 */
setPhone3(): void

/**
 * @returns (void)          *
 */
setPhone3CountryCode(): void

/**
 * Set primStatusCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPrimStatusCode(string:string): void

/**
 * Set printFlag.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPrintFlag(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSelfIns(string:string): void

/**
 * Set serDes.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSerDes(string:string): void

/**
 * Set state.
 * @param {string} string (string)
 * @returns (void)          *
 */
setState(string:string): void

/**
 * Set suffixName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSuffixName(string:string): void

/**
 * Set workCompExempt.
 * @param {string} string (string)
 * @returns (void)          *
 */
setWorkCompExempt(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setZip(string:string): void

/**
 * Set salutation.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSalutation(string:string): void

/**
 * Set gender.
 * @param {string} string (string)
 * @returns (void)          *
 */
setGender(string:string): void

/**
 * Set postOfficeBox.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPostOfficeBox(string:string): void

/**
 * Set busName2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusName2(string:string): void

/**
 * Set birthDate.
 * @param {ScriptDateTime} birthDate (ScriptDateTime)
 * @returns (void)          *
 */
setBirthDate(birthDate:ScriptDateTime): void

/**
 * Set attributes.
 * @param {ContactAttributeScriptModel[]} attributes (ContactAttributeScriptModel[])
 * @returns (ContactAttributeScriptModel)          *
 */
setAttributes(attributes:ContactAttributeScriptModel[]): ContactAttributeScriptModel

/**
 * get attributes.
 * @returns (ContactAttributeScriptModel)          *
 */
getAttributes(): ContactAttributeScriptModel

/**
 * get contact type flag
 * @returns (String)          *
 */
getTypeFlag(): String

/**
 * set contact type flag
 * @param {string} contactTypeFlag (string)
 * @returns (void)          *
 */
setTypeFlag(contactTypeFlag:string): void

/**
 * get social security number
 * @returns (String)          *
 */
getSocialSecurityNumber(): String

/**
 * set social security number
 * @param {string} ssn (string)
 * @returns (void)          *
 */
setSocialSecurityNumber(ssn:string): void

/**
 * get masked social security number
 * @returns (String)          *
 */
getMaskedSsn(): String

/**
 * set masked social security number
 * @param {string} maskedSsn (string)
 * @returns (void)          *
 */
setMaskedSsn(maskedSsn:string): void

/**
 * get setFein
 * @returns (String)          *
 */
getFein(): String

/**
 * set setFein
 * @param {string} fein (string)
 * @returns (void)          *
 */
setFein(fein:string): void

/**
 * @returns (String)          *
 */
getTitle(): String

/**
 * @returns (void)          *
 */
setTitle(): void

/**
 * @returns (String)          *
 */
getComment(): String

/**
 * @returns (void)          *
 */
setComment(): void

}
declare class LicenseModel {
/**
 * Get licenseModel.
 * @returns (LicenseModel) - LicenseModel
 */
getLicenseModel(): LicenseModel

/**
 * @returns (InfoTableGroupCodeModel) - the infoTable
 */
getInfoTableGroupCodeModel(): InfoTableGroupCodeModel

/**
 * @param {InfoTableGroupCodeModel} infoTableModel (InfoTableGroupCodeModel)
 * @returns (void)          *
 */
setInfoTableGroupCodeModel(infoTableModel:InfoTableGroupCodeModel): void

/**
 * Get address1.
 * @returns (String) - String
 */
getAddress1(): String

/**
 * Get address2.
 * @returns (String) - String
 */
getAddress2(): String

/**
 * Get address3.
 * @returns (String) - String
 */
getAddress3(): String

/**
 * Get agencyCode.
 * @returns (String) - String
 */
getAgencyCode(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get businessLicense.
 * @returns (String) - String
 */
getBusinessLicense(): String

/**
 * Get businessLicExpDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getBusinessLicExpDate(): ScriptDateTime

/**
 * Get businessName.
 * @returns (String) - String
 */
getBusinessName(): String

/**
 * Get businessName2.
 * @returns (String) - String
 */
getBusinessName2(): String

/**
 * Get city.
 * @returns (String) - String
 */
getCity(): String

/**
 * Get cityCode.
 * @returns (String) - String
 */
getCityCode(): String

/**
 * Get comment.
 * @returns (String) - String
 */
getComment(): String

/**
 * Get contactFirstName.
 * @returns (String) - String
 */
getContactFirstName(): String

/**
 * Get contactLastName.
 * @returns (String) - String
 */
getContactLastName(): String

/**
 * Get cntactMiddleName.
 * @returns (String) - String
 */
getContactMiddleName(): String

/**
 * Get contLicBusName.
 * @returns (String) - String
 */
getContLicBusName(): String

/**
 * Get contrLicNo.
 * @returns (number) - (Long) String
 */
getContrLicNo(): number

/**
 * Get contryCode.
 * @returns (String) - String
 */
getContryCode(): String

/**
 * Get country.
 * @returns (String) - String
 */
getCountry(): String

/**
 * Get einSs.
 * @returns (String) - String
 */
getEinSs(): String

/**
 * Get eMailAddress.
 * @returns (String) - String
 */
getEMailAddress(): String

/**
 * Get fax.
 * @returns (String) - String
 */
getFax(): String

/**
 * Get fax countryCode.
 * @returns (String) - String
 */
getFaxCountryCode(): String

/**
 * Get holdCode.
 * @returns (String) - String
 */
getHoldCode(): String

/**
 * Get holdDesc.
 * @returns (String) - String
 */
getHoldDesc(): String

/**
 * Get insuranceAmount.
 * @returns (number) - (Double) String
 */
getInsuranceAmount(): number

/**
 * Get insuranceCo.
 * @returns (String) - String
 */
getInsuranceCo(): String

/**
 * Get insuranceExpDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getInsuranceExpDate(): ScriptDateTime

/**
 * Get licenseExpirationDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicenseExpirationDate(): ScriptDateTime

/**
 * Get licenseIssueDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicenseIssueDate(): ScriptDateTime

/**
 * Get licenseLastRenewalDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicenseLastRenewalDate(): ScriptDateTime

/**
 * Get licenseType.
 * @returns (String) - String
 */
getLicenseType(): String

/**
 * Get licOrigIssDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getLicOrigIssDate(): ScriptDateTime

/**
 * Get licSeqNbr.
 * @returns (number) - (Long) String
 */
getLicSeqNbr(): number

/**
 * Get licState.
 * @returns (String) - String
 */
getLicState(): String

/**
 * Get permStatusCode.
 * @returns (String) - String
 */
getPermStatusCode(): String

/**
 * Get phone1.
 * @returns (String) - String
 */
getPhone1(): String

/**
 * Get phone1 countryCode.
 * @returns (String) - String
 */
getPhone1CountryCode(): String

/**
 * Get phone2.
 * @returns (String) - String
 */
getPhone2(): String

/**
 * Get phone2 countryCode.
 * @returns (String) - String
 */
getPhone2CountryCode(): String

/**
 * @returns (String)          *
 */
getPhone3(): String

/**
 * @returns (String)          *
 */
getPhone3CountryCode(): String

/**
 * @returns (String)          *
 */
getAcaPermission(): String

/**
 * Get policy.
 * @returns (String) - String
 */
getPolicy(): String

/**
 * Get recLocd.
 * @returns (String) - String
 */
getRecLocd(): String

/**
 * Get recSecurity.
 * @returns (String) - String
 */
getRecSecurity(): String

/**
 * Get selfIns.
 * @returns (String) - String
 */
getSelfIns(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get state.
 * @returns (String) - String
 */
getState(): String

/**
 * Get stateLicense.
 * @returns (String) - String
 */
getStateLicense(): String

/**
 * Get suffixName.
 * @returns (String) - String
 */
getSuffixName(): String

/**
 * Get wcCancDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getWcCancDate(): ScriptDateTime

/**
 * Get wcEffDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getWcEffDate(): ScriptDateTime

/**
 * Get wcExempt.
 * @returns (String) - String
 */
getWcExempt(): String

/**
 * Get wcExpDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getWcExpDate(): ScriptDateTime

/**
 * Get wcInsCoCode.
 * @returns (String) - String
 */
getWcInsCoCode(): String

/**
 * Get wcIntentToSuspNtcSentDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getWcIntentToSuspNtcSentDate(): ScriptDateTime

/**
 * Get wcPolicyNo.
 * @returns (String) - String
 */
getWcPolicyNo(): String

/**
 * Get wcSuspendDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getWcSuspendDate(): ScriptDateTime

/**
 * Get zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * Set address1.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress1(string:string): void

/**
 * Set address2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress2(string:string): void

/**
 * Set address3.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAddress3(string:string): void

/**
 * Set agencyCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAgencyCode(string:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditId.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditID(string:string): void

/**
 * Set auditStatus.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditStatus(string:string): void

/**
 * Set businessLicense.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusinessLicense(string:string): void

/**
 * Set businessLicExpDate.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setBusinessLicExpDate(expDate:ScriptDateTime): void

/**
 * Set businessName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusinessName(string:string): void

/**
 * Set businessName2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setBusinessName2(string:string): void

/**
 * Set city.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCity(string:string): void

/**
 * Set cityCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCityCode(string:string): void

/**
 * Set comment.
 * @param {string} string (string)
 * @returns (void)          *
 */
setComment(string:string): void

/**
 * Set contactFirstName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactFirstName(string:string): void

/**
 * Set contactLastName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactLastName(string:string): void

/**
 * Set contactMiddleName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContactMiddleName(string:string): void

/**
 * Set contLicBusName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContLicBusName(string:string): void

/**
 * Set contrLicNo.
 * @param {number} long1 (number) - (Long) 
 * @returns (void)          *
 */
setContrLicNo(long1:number): void

/**
 * Set contryCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setContryCode(string:string): void

/**
 * Set country.
 * @param {string} string (string)
 * @returns (void)          *
 */
setCountry(string:string): void

/**
 * Set einSs.
 * @param {string} string (string)
 * @returns (void)          *
 */
setEinSs(string:string): void

/**
 * Set eMailAddress.
 * @param {string} string (string)
 * @returns (void)          *
 */
setEMailAddress(string:string): void

/**
 * Set fax.
 * @param {string} string (string)
 * @returns (void)          *
 */
setFax(string:string): void

/**
 * Set fax countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setFaxCountryCode(countryCode:string): void

/**
 * Set holdCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setHoldCode(string:string): void

/**
 * Set holdDesc.
 * @param {string} string (string)
 * @returns (void)          *
 */
setHoldDesc(string:string): void

/**
 * Set insuranceAmount.
 * @param {number} double1 (number) - (Double) 
 * @returns (void)          *
 */
setInsuranceAmount(double1:number): void

/**
 * Set insuranceCo.
 * @param {string} string (string)
 * @returns (void)          *
 */
setInsuranceCo(string:string): void

/**
 * Set insuranceExpDate.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setInsuranceExpDate(expDate:ScriptDateTime): void

/**
 * Set licenseExpirationDate.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicenseExpirationDate(expDate:ScriptDateTime): void

/**
 * Set licenseIssueDate.
 * @param {ScriptDateTime} issueDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicenseIssueDate(issueDate:ScriptDateTime): void

/**
 * Set licenseLastRenewalDate(.
 * @param {ScriptDateTime} renewalDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicenseLastRenewalDate(renewalDate:ScriptDateTime): void

/**
 * Set licenseType.
 * @param {string} string (string)
 * @returns (void)          *
 */
setLicenseType(string:string): void

/**
 * Set licOrigIssDate.
 * @param {ScriptDateTime} issDate (ScriptDateTime)
 * @returns (void)          *
 */
setLicOrigIssDate(issDate:ScriptDateTime): void

/**
 * Set licSeqNbr.
 * @param {number} long1 (number) - (Long) 
 * @returns (void)          *
 */
setLicSeqNbr(long1:number): void

/**
 * Set licState.
 * @param {string} string (string)
 * @returns (void)          *
 */
setLicState(string:string): void

/**
 * Set permStatusCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPermStatusCode(string:string): void

/**
 * Set phone1.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPhone1(string:string): void

/**
 * Set phone1 countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setPhone1CountryCode(countryCode:string): void

/**
 * Set phone2.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPhone2(string:string): void

/**
 * Set phone2 countryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setPhone2CountryCode(countryCode:string): void

/**
 * @returns (void)          *
 */
setPhone3(): void

/**
 * @returns (void)          *
 */
setPhone3CountryCode(): void

/**
 * @returns (void)          *
 */
setAcaPermission(): void

/**
 * Set policy.
 * @param {string} string (string)
 * @returns (void)          *
 */
setPolicy(string:string): void

/**
 * Set recLocd.
 * @param {string} string (string)
 * @returns (void)          *
 */
setRecLocd(string:string): void

/**
 * Set recSecurity.
 * @param {string} string (string)
 * @returns (void)          *
 */
setRecSecurity(string:string): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSelfIns(string:string): void

/**
 * Set serviceProviderCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setServiceProviderCode(string:string): void

/**
 * Set state.
 * @param {string} string (string)
 * @returns (void)          *
 */
setState(string:string): void

/**
 * Set stateLicense.
 * @param {string} string (string)
 * @returns (void)          *
 */
setStateLicense(string:string): void

/**
 * Set suffixName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setSuffixName(string:string): void

/**
 * Set wcCancDate.
 * @param {ScriptDateTime} cancDate (ScriptDateTime)
 * @returns (void)          *
 */
setWcCancDate(cancDate:ScriptDateTime): void

/**
 * Set wcEffDate.
 * @param {ScriptDateTime} effDate (ScriptDateTime)
 * @returns (void)          *
 */
setWcEffDate(effDate:ScriptDateTime): void

/**
 * Set wcExempt.
 * @param {string} string (string)
 * @returns (void)          *
 */
setWcExempt(string:string): void

/**
 * Set wcExpDate.
 * @param {ScriptDateTime} expDate (ScriptDateTime)
 * @returns (void)          *
 */
setWcExpDate(expDate:ScriptDateTime): void

/**
 * Set wcInsCoCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setWcInsCoCode(string:string): void

/**
 * Set wcIntentToSuspNtcSentDate.
 * @param {ScriptDateTime} sentDate (ScriptDateTime)
 * @returns (void)          *
 */
setWcIntentToSuspNtcSentDate(sentDate:ScriptDateTime): void

/**
 * Set wcPolicyNo.
 * @param {string} string (string)
 * @returns (void)          *
 */
setWcPolicyNo(string:string): void

/**
 * Set wcSuspendDate.
 * @param {ScriptDateTime} suspendDate (ScriptDateTime)
 * @returns (void)          *
 */
setWcSuspendDate(suspendDate:ScriptDateTime): void

/**
 * Set zip.
 * @param {string} string (string)
 * @returns (void)          *
 */
setZip(string:string): void

/**
 * Get attributes
 * @returns (HashMap) - Map
 */
getAttributes(): HashMap

/**
 * @returns (PeopleAttributeScriptModel)          *
 */
getPeopleAttributeScriptModels(): PeopleAttributeScriptModel

/**
 * Set attributes
 * @param {HashMap} attributes (HashMap)
 * @returns (void)          *
 */
setAttributes(attributes:HashMap): void

/**
 * @returns (PeopleAttributeScriptModel)          *
 */
setAttributes(): PeopleAttributeScriptModel

/**
 * @returns (String) - the licenseBoard
 */
getLicenseBoard(): String

/**
 * @param {string} licenseBoard (string)
 * @returns (void)          *
 */
setLicenseBoard(licenseBoard:string): void

/**
 * get contact type flag
 * @returns (String)          *
 */
getTypeFlag(): String

/**
 * set contact type flag
 * @param {string} contactTypeFlag (string)
 * @returns (void)          *
 */
setTypeFlag(contactTypeFlag:string): void

/**
 * get social security number
 * @returns (String)          *
 */
getSocialSecurityNumber(): String

/**
 * set social security number
 * @param {string} ssn (string)
 * @returns (void)          *
 */
setSocialSecurityNumber(ssn:string): void

/**
 * get masked social security number
 * @returns (String)          *
 */
getMaskedSsn(): String

/**
 * set masked social security number
 * @param {string} maskedSsn (string)
 * @returns (void)          *
 */
setMaskedSsn(maskedSsn:string): void

/**
 * get setFein
 * @returns (String)          *
 */
getFein(): String

/**
 * set setFein
 * @param {string} fein (string)
 * @returns (void)          *
 */
setFein(fein:string): void

/**
 * get country code.
 * @returns (String)          *
 */
getCountryCode(): String

/**
 * set setCountryCode.
 * @param {string} countryCode (string)
 * @returns (void)          *
 */
setCountryCode(countryCode:string): void

}
declare class ObjectArrayModel {
/**
 * Return value.
 * @param {number} index (number) - (int) index.
 * @returns (object)          *
 */
getValue(index:number): object

}
declare class OwnerConditionModel {
/**
 * Set effectDate
 * @param {Date} effectDate (Date)
 * @returns (void)          *
 */
setEffectDate(effectDate:Date): void

/**
 * Set expireDate
 * @param {Date} expireDate (Date)
 * @returns (void)          *
 */
setExpireDate(expireDate:Date): void

/**
 * Set issuedDate
 * @param {Date} issuedDate (Date)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:Date): void

/**
 * @returns (OwnerConditionModel)          *
 */
getOwnerCondition(): OwnerConditionModel

/**
 * Get ownerNumber
 * @returns (number) - (long) long
 */
getOwnerNumber(): number

/**
 * Set ownerNumber
 * @param {number} ownerNumber (number) - (long) 
 * @returns (void)          *
 */
setOwnerNumber(ownerNumber:number): void

/**
 * Returns the UID.
 * @returns (String) - the UID
 */
getUID(): String

/**
 * Sets the UID
 * @param {string} uid (string)
 * @returns (void)          *
 */
setUID(uid:string): void

}
declare class ParcelConditionModel {
/**
 * Get source number.
 * @returns (number) - (long) long
 */
getSourceNumber(): number

/**
 * Get parcel number.
 * @returns (String) - String
 */
getParcelNumber(): String

/**
 * set ParcelNumber.
 * @param {string} parcelNumber (string)
 * @returns (void)          *
 */
setParcelNumber(parcelNumber:string): void

/**
 * Get condition number.
 * @returns (number) - (long) long
 */
getConditionNumber(): number

/**
 * Get condition type.
 * @returns (String) - String
 */
getConditionType(): String

/**
 * Get condition description.
 * @returns (String) - String
 */
getConditionDescription(): String

/**
 * Get condition comment.
 * @returns (String) - String
 */
getConditionComment(): String

/**
 * Get refNumber1.
 * @returns (String) - String
 */
getRefNumber1(): String

/**
 * Get refNumber2.
 * @returns (String) - String
 */
getRefNumber2(): String

/**
 * Get impact code.
 * @returns (String) - String
 */
getImpactCode(): String

/**
 * Get issuedByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getIssuedByUser(): SysUserModel

/**
 * Get statusByUser.
 * @returns (SysUserModel) - SysUserModel
 */
getStatusByUser(): SysUserModel

/**
 * Get condition status.
 * @returns (String) - String
 */
getConditionStatus(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit ID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get conditionModel.
 * @returns (ParcelConditionModel) - ParcelConditionModel ParcelConditionModel
 */
getParcelConditionModel(): ParcelConditionModel

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set condition comment.
 * @param {string} conditionComment (string)
 * @returns (void)          *
 */
setConditionComment(conditionComment:string): void

/**
 * Set condition description.
 * @param {string} conditionDescription (string)
 * @returns (void)          *
 */
setConditionDescription(conditionDescription:string): void

/**
 * Set condition status.
 * @param {string} conditionStatus (string)
 * @returns (void)          *
 */
setConditionStatus(conditionStatus:string): void

/**
 * Set condition type.
 * @param {string} conditionType (string)
 * @returns (void)          *
 */
setConditionType(conditionType:string): void

/**
 * Set effect date.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expire date.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set impact code.
 * @param {string} impactCode (string)
 * @returns (void)          *
 */
setImpactCode(impactCode:string): void

/**
 * Set issued date.
 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
 * @returns (void)          *
 */
setIssuedDate(issuedDate:ScriptDateTime): void

/**
 * Set refNumber1.
 * @param {string} refNumber1 (string)
 * @returns (void)          *
 */
setRefNumber1(refNumber1:string): void

/**
 * Set refNumber2.
 * @param {string} refNumber2 (string)
 * @returns (void)          *
 */
setRefNumber2(refNumber2:string): void

/**
 * Set issuedByUser.
 * @param {SysUserModel} issuedByUser (SysUserModel)
 * @returns (void)          *
 */
setIssuedByUser(issuedByUser:SysUserModel): void

/**
 * Set StatusByUser.
 * @param {SysUserModel} statusByUser (SysUserModel)
 * @returns (void)          *
 */
setStatusByUser(statusByUser:SysUserModel): void

/**
 * Method getConditionStatusType
 * @returns (String) - String
 */
getConditionStatusType(): String

/**
 * Method setConditionStatusType
 * @param {string} conditionStatusType (string)
 * @returns (void)          *
 */
setConditionStatusType(conditionStatusType:string): void

/**
 * Method getDisplayConditionNotice
 * @returns (String) - String
 */
getDisplayConditionNotice(): String

/**
 * Method setDisplayConditionNotice
 * @param {string} displayConditionNotice (string)
 * @returns (void)          *
 */
setDisplayConditionNotice(displayConditionNotice:string): void

/**
 * Method getIncludeInConditionName
 * @returns (String) - String
 */
getIncludeInConditionName(): String

/**
 * Method setIncludeInConditionName
 * @param {string} includeInConditionName (string)
 * @returns (void)          *
 */
setIncludeInConditionName(includeInConditionName:string): void

/**
 * Method getIncludeInShortDescription
 * @returns (String) - String
 */
getIncludeInShortDescription(): String

/**
 * Method setIncludeInShortDescription
 * @param {string} includeInShortDescription (string)
 * @returns (void)          *
 */
setIncludeInShortDescription(includeInShortDescription:string): void

/**
 * Method getInheritable
 * @returns (String) - String
 */
getInheritable(): String

/**
 * Method setInheritable
 * @param {string} inheritable (string)
 * @returns (void)          *
 */
setInheritable(inheritable:string): void

/**
 * Method getLongDescripton
 * @returns (String) - String
 */
getLongDescripton(): String

/**
 * Method setLongDescripton
 * @param {string} longDescripton (string)
 * @returns (void)          *
 */
setLongDescripton(longDescripton:string): void

/**
 * Method getPublicDisplayMessage
 * @returns (String) - String
 */
getPublicDisplayMessage(): String

/**
 * Method setPublicDisplayMessage
 * @param {string} publicDisplayMessage (string)
 * @returns (void)          *
 */
setPublicDisplayMessage(publicDisplayMessage:string): void

/**
 * Method getResolutionAction
 * @returns (String) - String
 */
getResolutionAction(): String

/**
 * Method setResolutionAction
 * @param {string} resolutionAction (string)
 * @returns (void)          *
 */
setResolutionAction(resolutionAction:string): void

/**
 * Method setConditionGroup
 * @param {string} conditionGroup (string)
 * @returns (void)          *
 */
setConditionGroup(conditionGroup:string): void

/**
 * Method getConditionGroup
 * @returns (String) - String
 */
getConditionGroup(): String

/**
 * Method setDisplayNoticeOnACA
 * @param {string} displayNoticeOnACA (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACA(displayNoticeOnACA:string): void

/**
 * Method getDisplayNoticeOnACA
 * @returns (String) - String
 */
getDisplayNoticeOnACA(): String

/**
 * Method setDisplayNoticeOnACAFee
 * @param {string} displayNoticeOnACAFee (string)
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(displayNoticeOnACAFee:string): void

/**
 * Method getDisplayNoticeOnACAFee
 * @returns (String) - String
 */
getDisplayNoticeOnACAFee(): String

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @param {string} additionalInformation (string)
 * @returns (void)          *
 */
setAdditionalInformation(additionalInformation:string): void

}
declare class ParcelGenealogyModel {
/**
 * Gets the genealogy transaction.
 * @returns (GenealogyTransactionModel) - the genealogy transaction
 */
getGenealogyTransaction(): GenealogyTransactionModel

/**
 * Sets the genealogy transaction.
 * @param {GenealogyTransactionModel} genealogyTransaction (GenealogyTransactionModel)
 * @returns (void)          *
 */
setGenealogyTransaction(genealogyTransaction:GenealogyTransactionModel): void

/**
 * Gets the server provider code.
 * @returns (String) - the server provider code
 */
getServerProviderCode(): String

/**
 * Sets the server provider code.
 * @param {string} serverProviderCode (string)
 * @returns (void)          *
 */
setServerProviderCode(serverProviderCode:string): void

/**
 * @returns (number) - (int) 
 */
hashCode(): number

/**
 * @param {object} obj (object)
 * @returns (boolean)          *
 */
equals(obj:object): boolean

}
declare class ParcelModel {
/**
 * Get parcel model.
 * @returns (ParcelModel) - ParcelModel
 */
getParcelModel(): ParcelModel

/**
 * Get b3apoattributeModel.
 * @returns (B3APOAttributeModel) - B3APOAttributeModel
 */
getB3APOAttributeModel(): B3APOAttributeModel

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get block.
 * @returns (String) - String
 */
getBlock(): String

/**
 * Get book.
 * @returns (String) - String
 */
getBook(): String

/**
 * Get censusTract.
 * @returns (String) - String
 */
getCensusTract(): String

/**
 * Get councilDistric.
 * @returns (String) - String
 */
getCouncilDistrict(): String

/**
 * Get exampt value.
 * @returns (number) - (double) double
 */
getExemptValue(): number

/**
 * Get gis sequence no.
 * @returns (number) - (long) long
 */
getGisSeqNo(): number

/**
 * Get improvedValue.
 * @returns (number) - (double) long
 */
getImprovedValue(): number

/**
 * Get inspectionDistrict.
 * @returns (String) - String
 */
getInspectionDistrict(): String

/**
 * Get landValue.
 * @returns (number) - (double) double
 */
getLandValue(): number

/**
 * Get legalDesc.
 * @returns (String) - String
 */
getLegalDesc(): String

/**
 * Get lot.
 * @returns (String) - String
 */
getLot(): String

/**
 * Get mapNo.
 * @returns (String) - String
 */
getMapNo(): String

/**
 * Get mapRef.
 * @returns (String) - String
 */
getMapRef(): String

/**
 * Get page.
 * @returns (String) - String
 */
getPage(): String

/**
 * Get parcel.
 * @returns (String) - String
 */
getParcel(): String

/**
 * Get parcel area.
 * @returns (number) - (double) double
 */
getParcelArea(): number

/**
 * Get parcel status.
 * @returns (String) - String
 */
getParcelStatus(): String

/**
 * Get plan area.
 * @returns (String) - String
 */
getPlanArea(): String

/**
 * Get supervisorDistrict.
 * @returns (String) - String
 */
getSupervisorDistrict(): String

/**
 * Get tract.
 * @returns (String) - String
 */
getTract(): String

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set block.
 * @param {string} block (string)
 * @returns (void)          *
 */
setBlock(block:string): void

/**
 * Set book.
 * @param {string} book (string)
 * @returns (void)          *
 */
setBook(book:string): void

/**
 * Set censusTract.
 * @param {string} censusTract (string)
 * @returns (void)          *
 */
setCensusTract(censusTract:string): void

/**
 * Set councilDistrict.
 * @param {string} councilDistrict (string)
 * @returns (void)          *
 */
setCouncilDistrict(councilDistrict:string): void

/**
 * Set exemptValue.
 * @param {number} exemptValue (number) - (double) 
 * @returns (void)          *
 */
setExemptValue(exemptValue:number): void

/**
 * Set gisSeqNo.
 * @param {number} gisSeqNo (number) - (long) 
 * @returns (void)          *
 */
setGisSeqNo(gisSeqNo:number): void

/**
 * Set improvedValue.
 * @param {number} improvedValue (number) - (double) 
 * @returns (void)          *
 */
setImprovedValue(improvedValue:number): void

/**
 * Set inspectionDistrict.
 * @param {string} inspectionDistrict (string)
 * @returns (void)          *
 */
setInspectionDistrict(inspectionDistrict:string): void

/**
 * Set landValue.
 * @param {number} landValue (number) - (double) 
 * @returns (void)          *
 */
setLandValue(landValue:number): void

/**
 * Set legalDesc.
 * @param {string} legalDesc (string)
 * @returns (void)          *
 */
setLegalDesc(legalDesc:string): void

/**
 * Set lot.
 * @param {string} lot (string)
 * @returns (void)          *
 */
setLot(lot:string): void

/**
 * Set mapNo.
 * @param {string} mapNo (string)
 * @returns (void)          *
 */
setMapNo(mapNo:string): void

/**
 * Set mapRef.
 * @param {string} mapRef (string)
 * @returns (void)          *
 */
setMapRef(mapRef:string): void

/**
 * Set page.
 * @param {string} page (string)
 * @returns (void)          *
 */
setPage(page:string): void

/**
 * Set parcel.
 * @param {string} parcel (string)
 * @returns (void)          *
 */
setParcel(parcel:string): void

/**
 * Set parcel area.
 * @param {number} parcelArea (number) - (double) 
 * @returns (void)          *
 */
setParcelArea(parcelArea:number): void

/**
 * Set parcel status.
 * @param {string} parcelStatus (string)
 * @returns (void)          *
 */
setParcelStatus(parcelStatus:string): void

/**
 * Set plan area.
 * @param {string} planArea (string)
 * @returns (void)          *
 */
setPlanArea(planArea:string): void

/**
 * Set supervisor district.
 * @param {string} supervisorDistrict (string)
 * @returns (void)          *
 */
setSupervisorDistrict(supervisorDistrict:string): void

/**
 * Set tract.
 * @param {string} tract (string)
 * @returns (void)          *
 */
setTract(tract:string): void

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Get parcel number.
 * @returns (String) - String
 */
getParcelNumber(): String

/**
 * Get parcel number.
 * @param {string} parcelNumber (string)
 * @returns (void)          *
 */
setParcelNumber(parcelNumber:string): void

/**
 * Get parcel attributes.
 * @returns (Collection) - Collection
 */
getParcelAttribute(): Collection

/**
 * Set parcel attributes.
 * @param {any[]} parcelAttribute (any[])
 * @returns (void)          *
 */
setParcelAttribute(parcelAttribute:any[]): void

/**
 * Get primary flag.
 * @returns (String) - Collection
 */
getPrimaryParcelFlag(): String

/**
 * Set primary flag.
 * @param {string} primaryParcelFlag (string)
 * @returns (void)          *
 */
setPrimaryParcelFlag(primaryParcelFlag:string): void

}
declare class PartTransactionModel {
/**
 * Get PartTransactionModel.
 * @returns (PartTransactionModel) - PartTransactionModel
 */
getPartTransactionModel(): PartTransactionModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get LocSupplyCol.
 * @returns (Collection) - LocSupplyCol
 */
getLocSupplyCol(): Collection

/**
 * Set LocSupplyCol.
 * @param {any[]} locSupplyCol (any[])
 * @returns (void)          *
 */
setLocSupplyCol(locSupplyCol:any[]): void

/**
 * Get CAP ID.
 * @returns (String) - CAPID
 */
getCapID(): String

/**
 * Set CAP ID.
 * @param {string} capID (string)
 * @returns (void)          *
 */
setCapID(capID:string): void

/**
 * Get Alt ID.
 * @returns (String) - the alt id
 */
getAltID(): String

/**
 * Set Alt ID.
 * @param {string} altID (string)
 * @returns (void)          *
 */
setAltID(altID:string): void

/**
 * Get Transaction cost.
 * @returns (number) - (Double) the transaction cost
 */
getTransactionCost(): number

/**
 * Set Transaction cost.
 * @param {number} transactionCost (number) - (Double) 
 * @returns (void)          *
 */
setTransactionCost(transactionCost:number): void

/**
 * Get transaction sequence number.
 * @returns (number) - (Long) the transaction seq
 */
getTransactionSeq(): number

/**
 * Set transaction sequence number.
 * @param {number} transactionSeq (number) - (Long) 
 * @returns (void)          *
 */
setTransactionSeq(transactionSeq:number): void

/**
 * Get Transaction type.
 * @returns (String) - the transaction type
 */
getTransactionType(): String

/**
 * Set Transaction type.
 * @param {string} transactionType (string)
 * @returns (void)          *
 */
setTransactionType(transactionType:string): void

/**
 * Get Transaction date.
 * @returns (Date) - the transaction date
 */
getTransactionDate(): Date

/**
 * Set Transaction date.
 * @param {Date} transactionDate (Date)
 * @returns (void)          *
 */
setTransactionDate(transactionDate:Date): void

/**
 * Get quantity.
 * @returns (number) - (Double) the quantity
 */
getQuantity(): number

/**
 * Set quantity.
 * @param {number} quantity (number) - (Double) 
 * @returns (void)          *
 */
setQuantity(quantity:number): void

/**
 * Get part sequence.
 * @returns (number) - (Long) the part seq
 */
getPartSeq(): number

/**
 * Set part sequence.
 * @param {number} partSeq (number) - (Long) 
 * @returns (void)          *
 */
setPartSeq(partSeq:number): void

/**
 * Get location sequence.
 * @returns (number) - (Long) the location seq
 */
getLocationSeq(): number

/**
 * Set location sequence.
 * @param {number} locationSeq (number) - (Long) 
 * @returns (void)          *
 */
setLocationSeq(locationSeq:number): void

/**
 * Get part number.
 * @returns (String) - the part number
 */
getPartNumber(): String

/**
 * Set part number.
 * @param {string} partNumber (string)
 * @returns (void)          *
 */
setPartNumber(partNumber:string): void

/**
 * Get part bin.
 * @returns (String) - the part bin
 */
getPartBin(): String

/**
 * Set part bin.
 * @param {string} partBin (string)
 * @returns (void)          *
 */
setPartBin(partBin:string): void

/**
 * Get taxable.
 * @returns (String) - the taxable
 */
getTaxable(): String

/**
 * Set taxable.
 * @param {string} taxable (string)
 * @returns (void)          *
 */
setTaxable(taxable:string): void

/**
 * Get part brand.
 * @returns (String) - the part brand
 */
getPartBrand(): String

/**
 * Set part brand.
 * @param {string} partBrand (string)
 * @returns (void)          *
 */
setPartBrand(partBrand:string): void

/**
 * Get part location.
 * @returns (String) - the part location
 */
getPartLocation(): String

/**
 * Set part location.
 * @param {string} partLocation (string)
 * @returns (void)          *
 */
setPartLocation(partLocation:string): void

/**
 * Get part type.
 * @returns (String) - the part type
 */
getPartType(): String

/**
 * Set part type.
 * @param {string} partType (string)
 * @returns (void)          *
 */
setPartType(partType:string): void

/**
 * Get unit of measurement.
 * @returns (String) - the unit of measurement
 */
getUnitOfMeasurement(): String

/**
 * Get unit of measurement.
 * @param {string} unitOfMeasurement (string)
 * @returns (void)          *
 */
setUnitOfMeasurement(unitOfMeasurement:string): void

/**
 * Get unit cost.
 * @returns (number) - (Double) the unit cost
 */
getUnitCost(): number

/**
 * Set unit cost.
 * @param {number} unitCost (number) - (Double) 
 * @returns (void)          *
 */
setUnitCost(unitCost:number): void

/**
 * Get comments.
 * @returns (String) - the comments
 */
getComments(): String

/**
 * Set comments.
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * Get record date.
 * @returns (Date) - the rec date
 */
getRecDate(): Date

/**
 * Set record date.
 * @param {Date} recDate (Date)
 * @returns (void)          *
 */
setRecDate(recDate:Date): void

/**
 * Get record full name.
 * @returns (String) - the rec ful nam
 */
getRecFulNam(): String

/**
 * Get record full name.
 * @param {string} recFulNam (string)
 * @returns (void)          *
 */
setRecFulNam(recFulNam:string): void

/**
 * Get record status.
 * @returns (String) - the rec status
 */
getRecStatus(): String

/**
 * Set record status.
 * @param {string} recStatus (string)
 * @returns (void)          *
 */
setRecStatus(recStatus:string): void

/**
 * Get part description.
 * @returns (String) - the part description
 */
getPartDescription(): String

/**
 * Set part description.
 * @param {string} partDescription (string)
 * @returns (void)          *
 */
setPartDescription(partDescription:string): void

/**
 * Get work order task code.
 * @returns (String) - the work order task code
 */
getWorkOrderTaskCode(): String

/**
 * Set work order task code.
 * @param {string} workOrderTaskCode (string)
 * @returns (void)          *
 */
setWorkOrderTaskCode(workOrderTaskCode:string): void

/**
 * Gets the work order task code index.
 * @returns (number) - (Integer) the work order task code index
 */
getWorkOrderTaskCodeIndex(): number

/**
 * Sets the work order task code index.
 * @param {number} workOrderTaskCodeIndex (number) - (Integer) 
 * @returns (void)          *
 */
setWorkOrderTaskCodeIndex(workOrderTaskCodeIndex:number): void

/**
 * Get hard reservation.
 * @returns (String) - the hard reservation
 */
getHardReservation(): String

/**
 * Set hard reservation.
 * @param {string} hardReservation (string)
 * @returns (void)          *
 */
setHardReservation(hardReservation:string): void

/**
 * Get reservation number.
 * @returns (number) - (Long) the reservation num
 */
getReservationNum(): number

/**
 * Set reservation number.
 * @param {number} reservationNum (number) - (Long) 
 * @returns (void)          *
 */
setReservationNum(reservationNum:number): void

/**
 * Get reservation status.
 * @returns (String) - the reservation status
 */
getReservationStatus(): String

/**
 * Set reservation status.
 * @param {string} reservationStatus (string)
 * @returns (void)          *
 */
setReservationStatus(reservationStatus:string): void

/**
 * Set reservation label.
 * @param {string} hard (string) - the hard
 * @param {string} soft (string)
 * @returns (void)          *
 */
setReservationLabel(hard:string, soft:string): void

/**
 * Get reservation label.
 * @returns (String) - the reservation label
 */
getReservationLabel(): String

}
declare class PaymentFeeItemModel {
/**
 * Get paymentFeeItemModel.
 * @returns (PaymentFeeItemModel) - PaymentFeeItemModel
 */
getPaymentFeeItem(): PaymentFeeItemModel

/**
 * Set payment fee item.
 * @param {PaymentFeeItemModel} paymentFeeItem (PaymentFeeItemModel)
 * @returns (void)          *
 */
setPaymentFeeItem(paymentFeeItem:PaymentFeeItemModel): void

/**
 * Get agency code.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set agency code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get payment sequence number.
 * @returns (number) - (long) long
 */
getPaymentSeqNbr(): number

/**
 * Get fee sequence number.
 * @returns (number) - (long) long
 */
getFeeSeqNbr(): number

/**
 * Get invoice number.
 * @returns (number) - (long) long
 */
getInvoiceNbr(): number

/**
 * Get fee allocation.
 * @returns (number) - (double) double
 */
getFeeAllocation(): number

/**
 * Get payment fee status.
 * @returns (String) - String
 */
getPaymentFeeStatus(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Set payment sequence number.
 * @param {number} paymentSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setPaymentSeqNbr(paymentSeqNbr:number): void

/**
 * Set fee sequence number.
 * @param {number} feeSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeSeqNbr(feeSeqNbr:number): void

/**
 * Set invoice number.
 * @param {number} invoiceNbr (number) - (long) 
 * @returns (void)          *
 */
setInvoiceNbr(invoiceNbr:number): void

/**
 * Set fee allocation.
 * @param {number} feeAllocation (number) - (double) 
 * @returns (void)          *
 */
setFeeAllocation(feeAllocation:number): void

/**
 * Set payment fee status.
 * @param {string} paymentFeeStatus (string)
 * @returns (void)          *
 */
setPaymentFeeStatus(paymentFeeStatus:string): void

/**
 * Set audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

}
declare class PaymentInvoiceModel {
/**
 * Get paymentInvoice.
 * @returns (PaymentInvoiceModel) - PaymentInvoiceModel
 */
getPaymentInvoice(): PaymentInvoiceModel

/**
 * Get agency code.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get invoiceNbr.
 * @returns (number) - (long) long
 */
getInvoiceNbr(): number

/**
 * @returns (number) - (long) 
 */
getPaymentSeqNbr(): number

/**
 * Get paymentInvStatus.
 * @returns (String) - String
 */
getPaymentInvStatus(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set agency code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set invoiceNbr.
 * @param {number} invoiceNbr (number) - (long) 
 * @returns (void)          *
 */
setInvoiceNbr(invoiceNbr:number): void

/**
 * Set paymentSeqNbr.
 * @param {number} paymentSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setPaymentSeqNbr(paymentSeqNbr:number): void

/**
 * Set paymentInvStatus.
 * @param {string} paymentInvStatus (string)
 * @returns (void)          *
 */
setPaymentInvStatus(paymentInvStatus:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class PaymentModel {
/**
 * @returns (PaymentModel)          *
 */
getPaymentModel(): PaymentModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get transferCapID.
 * @returns (CapIDModel) - CapIDModel
 */
getTransferCapID(): CapIDModel

/**
 * Get paymentSeqNbr.
 * @returns (number) - (long) long
 */
getPaymentSeqNbr(): number

/**
 * Get receiptNbr.
 * @returns (number) - (long) long
 */
getReceiptNbr(): number

/**
 * Get payment method.
 * @returns (String) - String
 */
getPaymentMethod(): String

/**
 * Get paaymentRefNbr.
 * @returns (String) - String
 */
getPaymentRefNbr(): String

/**
 * Get ccType.
 * @returns (String) - String
 */
getCcType(): String

/**
 * Get ccExpDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getCcExpDate(): ScriptDateTime

/**
 * Get payee.
 * @returns (String) - String
 */
getPayee(): String

/**
 * Get payment date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getPaymentDate(): ScriptDateTime

/**
 * Get payment amount.
 * @returns (number) - (double) double
 */
getPaymentAmount(): number

/**
 * Get payment change.
 * @returns (number) - (double) double
 */
getPaymentChange(): number

/**
 * Get amountNotAllocated.
 * @returns (number) - (double) double
 */
getAmountNotAllocated(): number

/**
 * Get payment status.
 * @returns (String) - String
 */
getPaymentStatus(): String

/**
 * Get tranCode.
 * @returns (String) - String
 */
getTranCode(): String

/**
 * Get tranNbr.
 * @returns (String) - String
 */
getTranNbr(): String

/**
 * Get cashierID.
 * @returns (String) - String
 */
getCashierID(): String

/**
 * Get registerNbr.
 * @returns (String) - String
 */
getRegisterNbr(): String

/**
 * Get payment comment.
 * @returns (String) - String
 */
getPaymentComment(): String

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set transferCapID.
 * @param {CapIDModel} transferCapID (CapIDModel)
 * @returns (void)          *
 */
setTransferCapID(transferCapID:CapIDModel): void

/**
 * Set paymentSeqNbr.
 * @param {number} paymentSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setPaymentSeqNbr(paymentSeqNbr:number): void

/**
 * Set receiptNbr.
 * @param {number} receiptNbr (number) - (long) 
 * @returns (void)          *
 */
setReceiptNbr(receiptNbr:number): void

/**
 * Set paymentMethod.
 * @param {string} paymentMethod (string)
 * @returns (void)          *
 */
setPaymentMethod(paymentMethod:string): void

/**
 * Set paymentRefNbr.
 * @param {string} paymentRefNbr (string)
 * @returns (void)          *
 */
setPaymentRefNbr(paymentRefNbr:string): void

/**
 * Set ccType.
 * @param {string} ccType (string)
 * @returns (void)          *
 */
setCcType(ccType:string): void

/**
 * Set ccExpDate.
 * @param {ScriptDateTime} ccExpDate (ScriptDateTime)
 * @returns (void)          *
 */
setCcExpDate(ccExpDate:ScriptDateTime): void

/**
 * Set payee.
 * @param {string} payee (string)
 * @returns (void)          *
 */
setPayee(payee:string): void

/**
 * Set paymentDate.
 * @param {ScriptDateTime} paymentDate (ScriptDateTime)
 * @returns (void)          *
 */
setPaymentDate(paymentDate:ScriptDateTime): void

/**
 * Set paymentAmount.
 * @param {number} paymentAmount (number) - (double) 
 * @returns (void)          *
 */
setPaymentAmount(paymentAmount:number): void

/**
 * Set paymentChange.
 * @param {number} paymentChange (number) - (double) 
 * @returns (void)          *
 */
setPaymentChange(paymentChange:number): void

/**
 * Set amountNotAllocated.
 * @param {number} amountNotAllocated (number) - (double) 
 * @returns (void)          *
 */
setAmountNotAllocated(amountNotAllocated:number): void

/**
 * Set paymentStatus.
 * @param {string} paymentStatus (string)
 * @returns (void)          *
 */
setPaymentStatus(paymentStatus:string): void

/**
 * Set tranCode.
 * @param {string} tranCode (string)
 * @returns (void)          *
 */
setTranCode(tranCode:string): void

/**
 * Set tranNbr.
 * @param {string} tranNbr (string)
 * @returns (void)          *
 */
setTranNbr(tranNbr:string): void

/**
 * Set cashierID.
 * @param {string} cashierID (string)
 * @returns (void)          *
 */
setCashierID(cashierID:string): void

/**
 * Set registerNbr.
 * @param {string} registerNbr (string)
 * @returns (void)          *
 */
setRegisterNbr(registerNbr:string): void

/**
 * Set paymentComment.
 * @param {string} paymentComment (string)
 * @returns (void)          *
 */
setPaymentComment(paymentComment:string): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * @returns (String)          *
 */
getTerminalID(): String

/**
 * @returns (String)          *
 */
getWorkstationID(): String

/**
 * @returns (void)          *
 */
setTerminalID(): void

/**
 * @returns (void)          *
 */
setWorkstationID(): void

/**
 * @returns (void)          *
 */
setAcctID(): void

/**
 * @returns (String)          *
 */
getAcctID(): String

/**
 * @returns (void)          *
 */
setSessionNbr(): void

/**
 * @returns (number) - (long) 
 */
getSessionNbr(): number

/**
 * @returns (number) - (Long) 
 */
getBatchTransCode(): number

/**
 * @returns (void)          *
 */
setBatchTransCode(): void

/**
 * @returns (number) - (double) 
 */
getTotalInvoiceAmount(): number

/**
 * @returns (void)          *
 */
setTotalInvoiceAmount(): void

/**
 * @returns (number) - (double) 
 */
getTotalPaidAmount(): number

/**
 * @returns (void)          *
 */
setTotalPaidAmount(): void

/**
 * @returns (number) - (double) 
 */
getProcessingFee(): number

/**
 * @returns (void)          *
 */
setProcessingFee(): void

/**
 * @returns (String) - the checkNbr
 */
getCheckNbr(): String

/**
 * @param {string} checkNbr (string)
 * @returns (void)          *
 */
setCheckNbr(checkNbr:string): void

/**
 * @returns (String) - the checkType
 */
getCheckType(): String

/**
 * @param {string} checkType (string)
 * @returns (void)          *
 */
setCheckType(checkType:string): void

/**
 * @returns (String) - the licenseNbr
 */
getLicenseNbr(): String

/**
 * @param {string} licenseNbr (string)
 * @returns (void)          *
 */
setLicenseNbr(licenseNbr:string): void

/**
 * @returns (String) - the checkHolderName
 */
getName(): String

/**
 * @param {string} name (string)
 * @returns (void)          *
 */
setName(name:string): void

/**
 * @returns (String) - the checkHolderEmail
 */
getEmail(): String

/**
 * @param {string} email (string)
 * @returns (void)          *
 */
setEmail(email:string): void

/**
 * @returns (String) - the phoneNumber
 */
getPhoneNbr(): String

/**
 * @param {string} phoneNbr (string)
 * @returns (void)          *
 */
setPhoneNbr(phoneNbr:string): void

/**
 * Get the Phone Country Code
 * @returns (String)          *
 */
getPayeePhoneCountryCode(): String

/**
 * @param {string} payeePhoneCountryCode (string)
 * @returns (void)          *
 */
setPayeePhoneCountryCode(payeePhoneCountryCode:string): void

/**
 * @returns (String) - the bankName
 */
getBankName(): String

/**
 * @param {string} bankName (string)
 * @returns (void)          *
 */
setBankName(bankName:string): void

/**
 * @returns (String) - the country
 */
getCountry(): String

/**
 * @param {string} country (string)
 * @returns (void)          *
 */
setCountry(country:string): void

/**
 * @returns (String) - the state
 */
getState(): String

/**
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * @returns (String) - the city
 */
getCity(): String

/**
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * @returns (String) - the street
 */
getStreet(): String

/**
 * @param {string} street (string)
 * @returns (void)          *
 */
setStreet(street:string): void

/**
 * @returns (String) - the postalCode
 */
getZip(): String

/**
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * Gets the received type (PAYMENT_RECEIVED_CHANNEL).
 * @returns (String) - Returns received type.
 */
getReceivedType(): String

/**
 * Sets the received type (PAYMENT_RECEIVED_CHANNEL).
 * @param {string} receivedType (string)
 * @returns (void)          *
 */
setReceivedType(receivedType:string): void

}
declare class PeopleAttributeModel {
/**
 * Get peopleAttributeModel.
 * @returns (PeopleAttributeModel) - PeopleAttributeModel
 */
getPeopleAttributeModel(): PeopleAttributeModel

/**
 * set peopleAttributeModel.
 * @returns (void)          *
 */
setPeopleAttributeModel(): void

/**
 * Get attributeName.
 * @returns (String) - String
 */
getAttributeName(): String

/**
 * Get attributeUnitType.
 * @returns (String) - String
 */
getAttributeUnitType(): String

/**
 * Get attributeValue.
 * @returns (String) - String
 */
getAttributeValue(): String

/**
 * Get.attributeValueDataType.
 * @returns (String) - String
 */
getAttributeValueDataType(): String

/**
 * Get.attributeValueReqFlag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get displayOrder.
 * @returns (number) - (long) long
 */
getDisplayOrder(): number

/**
 * Get validationScript.
 * @returns (String) - String
 */
getValidationScript(): String

/**
 * Set attributeName.
 * @param {string} attributeName (string)
 * @returns (void)          *
 */
setAttributeName(attributeName:string): void

/**
 * Set attributeUnitType.
 * @param {string} attributeUnitType (string)
 * @returns (void)          *
 */
setAttributeUnitType(attributeUnitType:string): void

/**
 * Set attributeValue.
 * @param {string} attributeValue (string)
 * @returns (void)          *
 */
setAttributeValue(attributeValue:string): void

/**
 * Set attributeValueDataType.
 * @param {string} attributeValueDataType (string)
 * @returns (void)          *
 */
setAttributeValueDataType(attributeValueDataType:string): void

/**
 * Set attributeValueReqFlag.
 * @param {string} attributeValueReqFlag (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(attributeValueReqFlag:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (int) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Set validationScript.
 * @param {string} validationScript (string)
 * @returns (void)          *
 */
setValidationScript(validationScript:string): void

/**
 * Get contactType.
 * @returns (String) - String
 */
getContactType(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get contactNo.
 * @returns (String) - String
 */
getContactNo(): String

/**
 * Set contactNo.
 * @param {string} contactNo (string)
 * @returns (void)          *
 */
setContactNo(contactNo:string): void

/**
 * Set contactType.
 * @param {string} contactType (string)
 * @returns (void)          *
 */
setContactType(contactType:string): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

}
declare class PeopleModel {
/**
 * Get peopleModel.
 * @returns (PeopleModel) - PeopleModel
 */
getPeopleModel(): PeopleModel

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get businessName.
 * @returns (String) - String
 */
getBusinessName(): String

/**
 * Get comment.
 * @returns (String) - String
 */
getComment(): String

/**
 * Get compactAddress.
 * @returns (CompactAddressModel) - CompactAddressModel
 */
getCompactAddress(): CompactAddressModel

/**
 * Get contactSeqNumber.
 * @returns (String) - String
 */
getContactSeqNumber(): String

/**
 * Get contactType.
 * @returns (String) - String
 */
getContactType(): String

/**
 * Get email.
 * @returns (String) - String
 */
getEmail(): String

/**
 * Get fax.
 * @returns (String) - String
 */
getFax(): String

/**
 * Get flag.
 * @returns (String) - String
 */
getFlag(): String

/**
 * Get fullName.
 * @returns (String) - String
 */
getFullName(): String

/**
 * Get holdCode.
 * @returns (String) - String
 */
getHoldCode(): String

/**
 * Get holdDescription.
 * @returns (String) - String
 */
getHoldDescription(): String

/**
 * Get id.
 * @returns (String) - String
 */
getId(): String

/**
 * Get phone1.
 * @returns (String) - String
 */
getPhone1(): String

/**
 * Get phone2.
 * @returns (String) - String
 */
getPhone2(): String

/**
 * Get relation.
 * @returns (String) - String
 */
getRelation(): String

/**
 * Set the auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set businessName.
 * @param {string} businessName (string)
 * @returns (void)          *
 */
setBusinessName(businessName:string): void

/**
 * Set comment.
 * @param {string} comment (string)
 * @returns (void)          *
 */
setComment(comment:string): void

/**
 * Set compactAddress.
 * @param {CompactAddressModel} compactAddress (CompactAddressModel)
 * @returns (void)          *
 */
setCompactAddress(compactAddress:CompactAddressModel): void

/**
 * Set contactSeqNumber.
 * @param {string} contactSeqNumber (string)
 * @returns (void)          *
 */
setContactSeqNumber(contactSeqNumber:string): void

/**
 * Set contactType.
 * @param {string} contactType (string)
 * @returns (void)          *
 */
setContactType(contactType:string): void

/**
 * Set email.
 * @param {string} email (string)
 * @returns (void)          *
 */
setEmail(email:string): void

/**
 * Set fax.
 * @param {string} fax (string)
 * @returns (void)          *
 */
setFax(fax:string): void

/**
 * Set flag.
 * @param {string} flag (string)
 * @returns (void)          *
 */
setFlag(flag:string): void

/**
 * Set fullName.
 * @param {string} fullName (string)
 * @returns (void)          *
 */
setFullName(fullName:string): void

/**
 * Set holdCode.
 * @param {string} holdCode (string)
 * @returns (void)          *
 */
setHoldCode(holdCode:string): void

/**
 * Set holdDescription.
 * @param {string} holdDescription (string)
 * @returns (void)          *
 */
setHoldDescription(holdDescription:string): void

/**
 * Set id.
 * @param {string} id (string)
 * @returns (void)          *
 */
setId(id:string): void

/**
 * Set phone1.
 * @param {string} phone1 (string)
 * @returns (void)          *
 */
setPhone1(phone1:string): void

/**
 * Set phone2.
 * @param {string} phone2 (string)
 * @returns (void)          *
 */
setPhone2(phone2:string): void

/**
 * Set relation.
 * @param {string} relation (string)
 * @returns (void)          *
 */
setRelation(relation:string): void

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (String)          *
 */
getPhone3(): String

/**
 * @returns (void)          *
 */
setPhone3(): void

/**
 * @returns (String)          *
 */
getPhone1CountryCode(): String

/**
 * @returns (void)          *
 */
setPhone1CountryCode(): void

/**
 * @returns (String)          *
 */
getPhone2CountryCode(): String

/**
 * @returns (void)          *
 */
setPhone2CountryCode(): void

/**
 * @returns (String)          *
 */
getPhone3CountryCode(): String

/**
 * @returns (void)          *
 */
setPhone3CountryCode(): void

/**
 * @returns (String)          *
 */
getFaxCountryCode(): String

/**
 * @returns (void)          *
 */
setFaxCountryCode(): void

/**
 * @returns (String)          *
 */
getContactTypeFlag(): String

/**
 * @returns (void)          *
 */
setContactTypeFlag(): void

/**
 * @returns (String)          *
 */
getSocialSecurityNumber(): String

/**
 * @returns (void)          *
 */
setSocialSecurityNumber(): void

/**
 * @returns (String)          *
 */
getMaskedSsn(): String

/**
 * @returns (void)          *
 */
setMaskedSsn(): void

/**
 * @returns (String)          *
 */
getFein(): String

/**
 * @returns (void)          *
 */
setFein(): void

/**
 * @returns (String)          *
 */
getTradeName(): String

/**
 * @returns (void)          *
 */
setTradeName(): void

/**
 * Get String info.
 * @returns (String) - String
 */
toString(): String

}
declare class PeopleTemplateAttributeModel {
/**
 * Get peopleTemplateAttributeModel.
 * @returns (PeopleTemplateAttributeModel) - PeopleTemplateAttributeModel
 */
getPeopleTemplateAttributeModel(): PeopleTemplateAttributeModel

/**
 * Get attributeCode.
 * @returns (String) - String
 */
getAttributeCode(): String

/**
 * Get attributeGroup.
 * @returns (String) - String
 */
getAttributeGroup(): String

/**
 * Get attributeLable.
 * @returns (String) - String
 */
getAttributeLable(): String

/**
 * Get attributeName.
 * @returns (String) - String
 */
getAttributeName(): String

/**
 * Get attributeSubGroup.
 * @returns (String) - String
 */
getAttributeSubGroup(): String

/**
 * Get attributeTemplateName.
 * @returns (String) - String
 */
getAttributeTemplateName(): String

/**
 * Get attributeType.
 * @returns (String) - String
 */
getAttributeType(): String

/**
 * Get attributeValueReqFlag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get dataType.
 * @returns (String) - String
 */
getDataType(): String

/**
 * Get description.
 * @returns (String) - String
 */
getDescription(): String

/**
 * Get displayOrder.
 * @returns (number) - (Long) Long
 */
getDisplayOrder(): number

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get unit.
 * @returns (String) - String
 */
getUnit(): String

/**
 * Get validationScript.
 * @returns (String) - String
 */
getValidationScript(): String

/**
 * Set attributeCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeCode(string:string): void

/**
 * Set attributeGroup.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeGroup(string:string): void

/**
 * Set attributeLable.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeLable(string:string): void

/**
 * Set attributeName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeName(string:string): void

/**
 * Set attributeSubGroup.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeSubGroup(string:string): void

/**
 * Set attributeTemplateName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeTemplateName(string:string): void

/**
 * Set attributeType.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeType(string:string): void

/**
 * Set attributeValueReqFlag.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(string:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditID(string:string): void

/**
 * Set auditStatus.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditStatus(string:string): void

/**
 * Set dataType.
 * @param {string} string (string)
 * @returns (void)          *
 */
setDataType(string:string): void

/**
 * Set description.
 * @param {string} string (string)
 * @returns (void)          *
 */
setDescription(string:string): void

/**
 * Set displayOrder.
 * @param {number} long1 (number) - (Long) 
 * @returns (void)          *
 */
setDisplayOrder(long1:number): void

/**
 * Set serviceProviderCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setServiceProviderCode(string:string): void

/**
 * Set unit.
 * @param {string} string (string)
 * @returns (void)          *
 */
setUnit(string:string): void

/**
 * Set validationScript.
 * @param {string} string (string)
 * @returns (void)          *
 */
setValidationScript(string:string): void

}
declare class PeopleTemplateModel {
/**
 * Get peopleTemplateModel.
 * @returns (PeopleTemplateModel) - PeopleTemplateModel
 */
getPeopleTemplateModel(): PeopleTemplateModel

/**
 * Get attributeTemplateName.
 * @returns (String) - String
 */
getAttributeTemplateName(): String

/**
 * Get attributeType.
 * @returns (String) - String
 */
getAttributeType(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get description.
 * @returns (String) - String
 */
getDescription(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Set attributeTemplateName.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeTemplateName(string:string): void

/**
 * Set attributeType.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAttributeType(string:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditID(string:string): void

/**
 * Set auditStatus.
 * @param {string} string (string)
 * @returns (void)          *
 */
setAuditStatus(string:string): void

/**
 * Set description.
 * @param {string} string (string)
 * @returns (void)          *
 */
setDescription(string:string): void

/**
 * Set serviceProviderCode.
 * @param {string} string (string)
 * @returns (void)          *
 */
setServiceProviderCode(string:string): void

}
declare class PersonModel {
/**
 * Get personModel.
 * @returns (PersonModel) - PersonModel
 */
getPersonModel(): PersonModel

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get firstName.
 * @returns (String) - String
 */
getFirstName(): String

/**
 * Get fullName.
 * @returns (String) - String
 */
getFullName(): String

/**
 * Get lastName.
 * @returns (String) - String
 */
getLastName(): String

/**
 * Get middleName.
 * @returns (String) - String
 */
getMiddleName(): String

/**
 * Get namesuffix.
 * @returns (String) - String
 */
getNamesuffix(): String

/**
 * Get title.
 * @returns (String) - String
 */
getTitle(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set firstName.
 * @param {string} firstName (string)
 * @returns (void)          *
 */
setFirstName(firstName:string): void

/**
 * Set lastName.
 * @param {string} lastName (string)
 * @returns (void)          *
 */
setLastName(lastName:string): void

/**
 * Set middleName.
 * @param {string} middleName (string)
 * @returns (void)          *
 */
setMiddleName(middleName:string): void

/**
 * Set namesuffix.
 * @param {string} namesuffix (string)
 * @returns (void)          *
 */
setNamesuffix(namesuffix:string): void

/**
 * Set title.
 * @param {string} title (string)
 * @returns (void)          *
 */
setTitle(title:string): void

/**
 * Set hourly rate.
 * @param {string} rate1 (string)
 * @returns (void)          *
 */
setRate1(rate1:string): void

/**
 * Get hourly rate.
 * @returns (String) - String
 */
getRate1(): String

}
declare class PrivilegeModel {
/**
 * Get privilgeModel.
 * @returns (PrivilegeModel) - PrivilegeModel
 */
getPrivilegeModel(): PrivilegeModel

/**
 * Get addStat.
 * @returns (String) - String
 */
getAddStat(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get delStat.
 * @returns (String) - String
 */
getDelStat(): String

/**
 * Get editStat.
 * @returns (String) - String
 */
getEditStat(): String

/**
 * Get GroupSeqNbr.
 * @returns (number) - (long) long
 */
getGroupSeqNbr(): number

/**
 * Get menuitemCode.
 * @returns (String) - String
 */
getMenuitemCode(): String

/**
 * Get readStat.
 * @returns (String) - String
 */
getReadStat(): String

/**
 * Get recLock.
 * @returns (String) - String
 */
getRecLock(): String

/**
 * Get recSecurity.
 * @returns (String) - String
 */
getRecSecurity(): String

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get status.
 * @returns (String) - String
 */
getStatus(): String

/**
 * Set addStat.
 * @param {string} addStat (string)
 * @returns (void)          *
 */
setAddStat(addStat:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set delStat.
 * @param {string} delStat (string)
 * @returns (void)          *
 */
setDelStat(delStat:string): void

/**
 * Set editStat.
 * @param {string} editStat (string)
 * @returns (void)          *
 */
setEditStat(editStat:string): void

/**
 * Set groupSeqNbr.
 * @param {number} groupSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setGroupSeqNbr(groupSeqNbr:number): void

/**
 * Set menuitemCode.
 * @param {string} menuitemCode (string)
 * @returns (void)          *
 */
setMenuitemCode(menuitemCode:string): void

/**
 * Set readStat.
 * @param {string} readStat (string)
 * @returns (void)          *
 */
setReadStat(readStat:string): void

/**
 * Set recLock.
 * @param {string} recLock (string)
 * @returns (void)          *
 */
setRecLock(recLock:string): void

/**
 * Set recSecurity.
 * @param {string} recSecurity (string)
 * @returns (void)          *
 */
setRecSecurity(recSecurity:string): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set status.
 * @param {string} status (string)
 * @returns (void)          *
 */
setStatus(status:string): void

}
declare class ProcessNoteScriptModel {
/**
 * @returns (ProcessNoteModel) - the processNoteModel
 */
getProcessNoteModel(): ProcessNoteModel

/**
 * @param {ProcessNoteModel} processNoteModel (ProcessNoteModel)
 * @returns (void)          *
 */
setProcessNoteModel(processNoteModel:ProcessNoteModel): void

/**
 * @returns (String) - the iD1
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (String) - the iD1
 */
getID1(): String

/**
 * @param {string} id1 (string)
 * @returns (void)          *
 */
setID1(id1:string): void

/**
 * @returns (String) - the iD2
 */
getID2(): String

/**
 * @param {string} id2 (string)
 * @returns (void)          *
 */
setID2(id2:string): void

/**
 * @returns (String) - the iD3
 */
getID3(): String

/**
 * @param {string} id3 (string)
 * @returns (void)          *
 */
setID3(id3:string): void

/**
 * @returns (String) - the attachTo
 */
getAttachTo(): String

/**
 * @param {string} attachTo (string)
 * @returns (void)          *
 */
setAttachTo(attachTo:string): void

/**
 * @returns (String) - the edmsName
 */
getEdmsName(): String

/**
 * @param {string} edmsName (string)
 * @returns (void)          *
 */
setEdmsName(edmsName:string): void

/**
 * @returns (String) - the docGroup
 */
getDocGroup(): String

/**
 * @param {string} docGroup (string)
 * @returns (void)          *
 */
setDocGroup(docGroup:string): void

/**
 * @returns (String) - the docCategory
 */
getDocCategory(): String

/**
 * @param {string} docCategory (string)
 * @returns (void)          *
 */
setDocCategory(docCategory:string): void

}
declare class ProcessRelationScriptModel {
/**
 * Get processRelation.
 * @returns (ProcessRelationModel) - ProcessRelationModel
 */
getProcessRelation(): ProcessRelationModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get processID.
 * @returns (number) - (long) long
 */
getProcessID(): number

/**
 * Get workflow name.
 * @returns (String) - String
 */
getWorkflowName(): String

/**
 * Get parent processID.
 * @returns (number) - (long) long
 */
getParentProcessID(): number

/**
 * Get step number.
 * @returns (number) - (int) int
 */
getStepNumber(): number

/**
 * Get process code.
 * @returns (String) - String
 */
getProcessCode(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit date string.
 * @returns (String) - String
 */
getAuditDateString(): String

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get parent task name.
 * @returns (String) - String
 */
getParentTaskName(): String

/**
 * Set processRelation.
 * @param {ProcessRelationModel} processRelation (ProcessRelationModel)
 * @returns (void)          *
 */
setProcessRelation(processRelation:ProcessRelationModel): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set process id.
 * @param {number} processID (number) - (long) 
 * @returns (void)          *
 */
setProcessID(processID:number): void

/**
 * Set workflow name.
 * @param {string} workflowName (string)
 * @returns (void)          *
 */
setWorkflowName(workflowName:string): void

/**
 * Set parentProcessID.
 * @param {number} parentProcessID (number) - (long) 
 * @returns (void)          *
 */
setParentProcessID(parentProcessID:number): void

/**
 * Set stepNumber.
 * @param {number} stepNumber (number) - (int) 
 * @returns (void)          *
 */
setStepNumber(stepNumber:number): void

/**
 * Set processCode.
 * @param {string} processCode (string)
 * @returns (void)          *
 */
setProcessCode(processCode:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditDateString.
 * @param {string} auditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(auditDateString:string): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set parentTaskName.
 * @param {string} parentTaskName (string)
 * @returns (void)          *
 */
setParentTaskName(parentTaskName:string): void

}
declare class ProjectScriptModel {
/**
 * Get project.
 * @returns (ProjectModel) - ProjectModel
 */
getProject(): ProjectModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get projectID.
 * @returns (CapIDModel) - CapIDModel
 */
getProjectID(): CapIDModel

/**
 * Get project number.
 * @returns (number) - (long) long
 */
getProjectNumber(): number

/**
 * Get relationship.
 * @returns (String) - String
 */
getRelationShip(): String

/**
 * Get projectDescription.
 * @returns (String) - String
 */
getProjectDescription(): String

/**
 * Get projectUdf1.
 * @returns (String) - String
 */
getProjectUdf1(): String

/**
 * Get projectUdf2.
 * @returns (String) - String
 */
getProjectUdf2(): String

/**
 * Get projectUdf3.
 * @returns (String) - String
 */
getProjectUdf3(): String

/**
 * Get projectUdf4.
 * @returns (String) - String
 */
getProjectUdf4(): String

/**
 * Get status.
 * @returns (String) - String
 */
getStatus(): String

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit date string.
 * @returns (String) - String
 */
getAuditDateString(): String

/**
 * Get audit id string.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status string.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set projectID.
 * @param {CapIDModel} projectID (CapIDModel)
 * @returns (void)          *
 */
setProjectID(projectID:CapIDModel): void

/**
 * Set projectNumber.
 * @param {number} projectNumber (number) - (long) 
 * @returns (void)          *
 */
setProjectNumber(projectNumber:number): void

/**
 * Set relationShip.
 * @param {string} relationShip (string)
 * @returns (void)          *
 */
setRelationShip(relationShip:string): void

/**
 * Set projectDescription.
 * @param {string} projectDescription (string)
 * @returns (void)          *
 */
setProjectDescription(projectDescription:string): void

/**
 * Set projectUdf1.
 * @param {string} projectUdf1 (string)
 * @returns (void)          *
 */
setProjectUdf1(projectUdf1:string): void

/**
 * Set projectUdf2.
 * @param {string} projectUdf2 (string)
 * @returns (void)          *
 */
setProjectUdf2(projectUdf2:string): void

/**
 * Set projectUdf3.
 * @param {string} projectUdf3 (string)
 * @returns (void)          *
 */
setProjectUdf3(projectUdf3:string): void

/**
 * Set projectUdf4.
 * @param {string} projectUdf4 (string)
 * @returns (void)          *
 */
setProjectUdf4(projectUdf4:string): void

/**
 * Set status.
 * @param {string} status (string)
 * @returns (void)          *
 */
setStatus(status:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditDateString.
 * @param {string} auditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(auditDateString:string): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class RandomAuditRuleScriptModel {
/**
 * @returns (RandomAuditRuleModel) - the randomAuditRuleModel
 */
getRandomAuditRuleModel(): RandomAuditRuleModel

/**
 * @returns (String) - the capStatus
 */
getCapStatus(): String

/**
 * @param {string} capStatus (string)
 * @returns (void)          *
 */
setCapStatus(capStatus:string): void

/**
 * @returns (String) - the state
 */
getState(): String

/**
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * @returns (String) - the district
 */
getDistrict(): String

/**
 * @param {string} district (string)
 * @returns (void)          *
 */
setDistrict(district:string): void

/**
 * @returns (String) - the city
 */
getCity(): String

/**
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * @returns (String) - the zipCode
 */
getZipCode(): String

/**
 * @param {string} zipCode (string)
 * @returns (void)          *
 */
setZipCode(zipCode:string): void

/**
 * @returns (String) - the assignToDepartment
 */
getAssignToDepartment(): String

/**
 * @param {string} assignToDepartment (string)
 * @returns (void)          *
 */
setAssignToDepartment(assignToDepartment:string): void

/**
 * @returns (String) - the assignToSatff
 */
getAssignToSatff(): String

/**
 * @param {string} assignToSatff (string)
 * @returns (void)          *
 */
setAssignToSatff(assignToSatff:string): void

/**
 * @returns (ScriptDateTime) - the assignDateFrom
 */
getAssignDateFrom(): ScriptDateTime

/**
 * @param {ScriptDateTime} assignDateFrom (ScriptDateTime)
 * @returns (void)          *
 */
setAssignDateFrom(assignDateFrom:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the assignDateTo
 */
getAssignDateTo(): ScriptDateTime

/**
 * @param {ScriptDateTime} assignDateTo (ScriptDateTime)
 * @returns (void)          *
 */
setAssignDateTo(assignDateTo:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the openDateFrom
 */
getOpenDateFrom(): ScriptDateTime

/**
 * @param {ScriptDateTime} openDateFrom (ScriptDateTime)
 * @returns (void)          *
 */
setOpenDateFrom(openDateFrom:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the openDateTo
 */
getOpenDateTo(): ScriptDateTime

/**
 * @param {ScriptDateTime} openDateTo (ScriptDateTime)
 * @returns (void)          *
 */
setOpenDateTo(openDateTo:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the closeDateFrom
 */
getCloseDateFrom(): ScriptDateTime

/**
 * @param {ScriptDateTime} closeDateFrom (ScriptDateTime)
 * @returns (void)          *
 */
setCloseDateFrom(closeDateFrom:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the closeDateTo
 */
getCloseDateTo(): ScriptDateTime

/**
 * @param {ScriptDateTime} closeDateTo (ScriptDateTime)
 * @returns (void)          *
 */
setCloseDateTo(closeDateTo:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the completeDateFrom
 */
getCompleteDateFrom(): ScriptDateTime

/**
 * @param {ScriptDateTime} completeDateFrom (ScriptDateTime)
 * @returns (void)          *
 */
setCompleteDateFrom(completeDateFrom:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the completeDateTo
 */
getCompleteDateTo(): ScriptDateTime

/**
 * @param {ScriptDateTime} completeDateTo (ScriptDateTime)
 * @returns (void)          *
 */
setCompleteDateTo(completeDateTo:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the expirationDateFrom
 */
getExpirationDateFrom(): ScriptDateTime

/**
 * @param {ScriptDateTime} expirationDateFrom (ScriptDateTime)
 * @returns (void)          *
 */
setExpirationDateFrom(expirationDateFrom:ScriptDateTime): void

/**
 * @returns (ScriptDateTime) - the expirationDateTo
 */
getExpirationDateTo(): ScriptDateTime

/**
 * @param {ScriptDateTime} expirationDateTo (ScriptDateTime)
 * @returns (void)          *
 */
setExpirationDateTo(expirationDateTo:ScriptDateTime): void

/**
 * @returns (String) - the randomType
 */
getRandomType(): String

/**
 * @param {string} randomType (string)
 * @returns (void)          *
 */
setRandomType(randomType:string): void

/**
 * @returns (number) - (Integer) the number
 */
getNumber(): number

/**
 * @param {number} number (number) - (Integer) 
 * @returns (void)          *
 */
setNumber(number:number): void

/**
 * @returns (number) - (Double) the percentage
 */
getPercentage(): number

/**
 * @param {number} percentage (number) - (Double) 
 * @returns (void)          *
 */
setPercentage(percentage:number): void

/**
 * @returns (Boolean) - the balance
 */
getBalance(): Boolean

/**
 * @param {Boolean} balance (Boolean)
 * @returns (void)          *
 */
setBalance(balance:Boolean): void

/**
 * @returns (String) - the renewalSatus
 */
getRenewalSatus(): String

/**
 * @param {string} renewalSatus (string)
 * @returns (void)          *
 */
setRenewalSatus(renewalSatus:string): void

/**
 * @returns (Boolean) - the includePrevious
 */
getIncludePrevious(): Boolean

/**
 * @param {Boolean} includePrevious (Boolean)
 * @returns (void)          *
 */
setIncludePrevious(includePrevious:Boolean): void

/**
 * @returns (number) - (Integer) the previousMonths
 */
getPreviousMonths(): number

/**
 * @param {number} previousMonths (number) - (Integer) 
 * @returns (void)          *
 */
setPreviousMonths(previousMonths:number): void

/**
 * @returns (String) - the auditFlag
 */
getAuditFlag(): String

/**
 * @param {string} auditFlag (string)
 * @returns (void)          *
 */
setAuditFlag(auditFlag:string): void

/**
 * @returns (String) - the auditor
 */
getAuditor(): String

/**
 * @param {string} auditor (string)
 * @returns (void)          *
 */
setAuditor(auditor:string): void

/**
 * @returns (String) - the capTypeList
 */
getCapTypeList(): String

/**
 * @param {string} capTypeList (string)
 * @returns (void)          *
 */
setCapTypeList(capTypeList:string): void

/**
 * @returns (number) - (Integer) the frequency4Agency
 */
getFrequency4Agency(): number

/**
 * @param {number} frequency4Agency (number) - (Integer) 
 * @returns (void)          *
 */
setFrequency4Agency(frequency4Agency:number): void

/**
 * @returns (number) - (long) the countGenerate
 */
getCountGenerate(): number

/**
 * @param {number} countGenerate (number) - (long) 
 * @returns (void)          *
 */
setCountGenerate(countGenerate:number): void

/**
 * @returns (String) - the setId
 */
getSetId(): String

/**
 * @param {string} setId (string)
 * @returns (void)          *
 */
setSetId(setId:string): void

/**
 * @returns (String) - the basisSet
 */
getBasisSet(): String

/**
 * @param {string} basisSet (string)
 * @returns (void)          *
 */
setBasisSet(basisSet:string): void

}
declare class RAppSpecificInfoScriptModel {
/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get checkboxCode.
 * @returns (String) - String
 */
getCheckboxCode(): String

/**
 * Get checkboxType.
 * @returns (String) - String
 */
getCheckboxType(): String

/**
 * Get checkboxDesc.
 * @returns (String) - String
 */
getCheckboxDesc(): String

/**
 * Get checkboxInd.
 * @returns (String) - String
 */
getCheckboxInd(): String

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get displayOrder.
 * @returns (number) - (long) String
 */
getDisplayOrder(): number

/**
 * Get feeIndicator.
 * @returns (String) - String
 */
getFeeIndicator(): String

/**
 * Get attributeValue.
 * @returns (String) - String
 */
getAttributeValue(): String

/**
 * Get attributeUnitType.
 * @returns (String) - String
 */
getAttributeUnitType(): String

/**
 * Get attributeValueReqFlag.
 * @returns (String) - String
 */
getAttributeValueReqFlag(): String

/**
 * Get validationScriptName.
 * @returns (String) - String
 */
getValidationScriptName(): String

/**
 * Get searchableFlag.
 * @returns (String) - String
 */
getSearchableFlag(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set checkboxCode.
 * @param {string} checkboxCode (string)
 * @returns (void)          *
 */
setCheckboxCode(checkboxCode:string): void

/**
 * Set checkboxType.
 * @param {string} checkboxType (string)
 * @returns (void)          *
 */
setCheckboxType(checkboxType:string): void

/**
 * Set checkboxDesc.
 * @param {string} checkboxDesc (string)
 * @returns (void)          *
 */
setCheckboxDesc(checkboxDesc:string): void

/**
 * Set checkboxInd.
 * @param {string} checkboxInd (string)
 * @returns (void)          *
 */
setCheckboxInd(checkboxInd:string): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (long) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Set feeIndicator.
 * @param {string} feeIndicator (string)
 * @returns (void)          *
 */
setFeeIndicator(feeIndicator:string): void

/**
 * Set attributeValue.
 * @param {string} attributeValue (string)
 * @returns (void)          *
 */
setAttributeValue(attributeValue:string): void

/**
 * Set attributeUnitType.
 * @param {string} attributeUnitType (string)
 * @returns (void)          *
 */
setAttributeUnitType(attributeUnitType:string): void

/**
 * Set attributeValueReqFlag.
 * @param {string} attributeValueReqFlag (string)
 * @returns (void)          *
 */
setAttributeValueReqFlag(attributeValueReqFlag:string): void

/**
 * Set validationScriptName.
 * @param {string} validationScriptName (string)
 * @returns (void)          *
 */
setValidationScriptName(validationScriptName:string): void

/**
 * Set searchableFlag.
 * @param {string} searchableFlag (string)
 * @returns (void)          *
 */
setSearchableFlag(searchableFlag:string): void

}
declare class ReceiptScriptModel {
/**
 * Get ReceiptModel.
 * @returns (ReceiptModel) - ReceiptModel
 */
getReceipt(): ReceiptModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get receiptNbr.
 * @returns (number) - (long) long
 */
getReceiptNbr(): number

/**
 * Get receiptDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getReceiptDate(): ScriptDateTime

/**
 * Get cashierID.
 * @returns (String) - String
 */
getCashierID(): String

/**
 * Get registerNbr.
 * @returns (String) - String
 */
getRegisterNbr(): String

/**
 * Get receiptAmount.
 * @returns (number) - (double) double
 */
getReceiptAmount(): number

/**
 * Get receiptComment.
 * @returns (String) - String
 */
getReceiptComment(): String

/**
 * Get receiptBatchNbr.
 * @returns (number) - (long) long
 */
getReceiptBatchNbr(): number

/**
 * Get receiptBatchDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getReceiptBatchDate(): ScriptDateTime

/**
 * Get receiptStatus.
 * @returns (String) - String
 */
getReceiptStatus(): String

/**
 * Get tranCode.
 * @returns (String) - String
 */
getTranCode(): String

/**
 * Get tranNbr.
 * @returns (String) - String
 */
getTranNbr(): String

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * @returns (String)          *
 */
getTerminalID(): String

/**
 * @returns (String)          *
 */
getWorkstationID(): String

/**
 * @returns (void)          *
 */
setTerminalID(): void

/**
 * @returns (void)          *
 */
setWorkstationID(): void

}
declare class RefActivityScriptModel {
/**
 * @returns (RefActivityModel) - the refActivityModel
 */
getRefActivityModel(): RefActivityModel

/**
 * @param {RefActivityModel} refActivityModel (RefActivityModel)
 * @returns (void)          *
 */
setRefActivityModel(refActivityModel:RefActivityModel): void

/**
 * @returns (String) - the activityDescription
 */
getActivityDescription(): String

/**
 * @param {string} activityDescription (string)
 * @returns (void)          *
 */
setActivityDescription(activityDescription:string): void

/**
 * @returns (String) - the activityName
 */
getActivityName(): String

/**
 * @param {string} activityName (string)
 * @returns (void)          *
 */
setActivityName(activityName:string): void

/**
 * @returns (String) - the activityType
 */
getActivityType(): String

/**
 * @param {string} activityType (string)
 * @returns (void)          *
 */
setActivityType(activityType:string): void

/**
 * @returns (Date) - the auditDate
 */
getAuditDate(): Date

/**
 * @param {Date} auditDate (Date)
 * @returns (void)          *
 */
setAuditDate(auditDate:Date): void

/**
 * @returns (String) - the auditid
 */
getAuditid(): String

/**
 * @param {string} auditid (string)
 * @returns (void)          *
 */
setAuditid(auditid:string): void

/**
 * @returns (String) - the auditStatus
 */
getAuditStatus(): String

/**
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (number) - (Long) the refActivityId
 */
getRefActivityId(): number

/**
 * @param {number} refActivityId (number) - (Long) 
 * @returns (void)          *
 */
setRefActivityId(refActivityId:number): void

/**
 * @returns (String) - the referenceId
 */
getReferenceId(): String

/**
 * @param {string} referenceId (string)
 * @returns (void)          *
 */
setReferenceId(referenceId:string): void

/**
 * @returns (String) - the referenceType
 */
getReferenceType(): String

/**
 * @param {string} referenceType (string)
 * @returns (void)          *
 */
setReferenceType(referenceType:string): void

/**
 * @returns (String) - the serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (number) - (Long) the sourceNumber
 */
getSourceNumber(): number

/**
 * @param {number} sourceNumber (number) - (Long) 
 * @returns (void)          *
 */
setSourceNumber(sourceNumber:number): void

}
declare class RefAddressScriptModel {
/**
 * Get refAddressModel.
 * @returns (RefAddressModel) - refAddressModel
 */
getRefAddressModel(): RefAddressModel

/**
 * Get addressDescription.
 * @returns (String) - String
 */
getAddressDescription(): String

/**
 * Get addressStatus.
 * @returns (String) - String
 */
getAddressStatus(): String

/**
 * Get addressTypeFlag.
 * @returns (String) - String
 */
getAddressTypeFlag(): String

/**
 * Get auditDate.
 * @returns (Date) - java.util.Date
 */
getAuditDate(): Date

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get city.
 * @returns (String) - String
 */
getCity(): String

/**
 * Get country.
 * @returns (String) - String
 */
getCountry(): String

/**
 * Get county.
 * @returns (String) - String
 */
getCounty(): String

/**
 * Get distance.
 * @returns (number) - (Double) String
 */
getDistance(): number

/**
 * Get eventID.
 * @returns (String) - String
 */
getEventID(): String

/**
 * Get houseFractionEnd.
 * @returns (String) - String
 */
getHouseFractionEnd(): String

/**
 * Get houseFractionStart.
 * @returns (String) - String
 */
getHouseFractionStart(): String

/**
 * Get houseNumberEnd.
 * @returns (number) - (Integer) Integer
 */
getHouseNumberEnd(): number

/**
 * Get houseNumberStart.
 * @returns (number) - (Integer) Integer
 */
getHouseNumberStart(): number

/**
 * Get inspectionDistrict.
 * @returns (String) - String
 */
getInspectionDistrict(): String

/**
 * Get inspectionDistrictPrefix.
 * @returns (String) - String
 */
getInspectionDistrictPrefix(): String

/**
 * Get neighberhoodPrefix.
 * @returns (String) - String
 */
getNeighberhoodPrefix(): String

/**
 * Get neighborhood.
 * @returns (String) - String
 */
getNeighborhood(): String

/**
 * Get primaryFlag.
 * @returns (String) - String
 */
getPrimaryFlag(): String

/**
 * Get refAddressId.
 * @returns (number) - (Long) Long
 */
getRefAddressId(): number

/**
 * Get secondaryRoad.
 * @returns (String) - String
 */
getSecondaryRoad(): String

/**
 * Get secondaryRoadNumber.
 * @returns (number) - (Integer) Integer
 */
getSecondaryRoadNumber(): number

/**
 * Get sourceFlag.
 * @returns (String) - String
 */
getSourceFlag(): String

/**
 * Get sourceNumber.
 * @returns (number) - (Integer) Integer
 */
getSourceNumber(): number

/**
 * Get state.
 * @returns (String) - String
 */
getState(): String

/**
 * Get streetDirection.
 * @returns (String) - String
 */
getStreetDirection(): String

/**
 * Get streetName.
 * @returns (String) - String
 */
getStreetName(): String

/**
 * Get streetPrefix.
 * @returns (String) - String
 */
getStreetPrefix(): String

/**
 * Get streetSuffix.
 * @returns (String) - String
 */
getStreetSuffix(): String

/**
 * Get streetSuffixdirection.
 * @returns (String) - String
 */
getStreetSuffixdirection(): String

/**
 * Get unitEnd.
 * @returns (String) - String
 */
getUnitEnd(): String

/**
 * Get unitStart.
 * @returns (String) - String
 */
getUnitStart(): String

/**
 * Get unitType.
 * @returns (String) - String
 */
getUnitType(): String

/**
 * Get xCoordinator.
 * @returns (number) - (Double) Double
 */
getXCoordinator(): number

/**
 * Get yCoordinator.
 * @returns (number) - (Double) Double
 */
getYCoordinator(): number

/**
 * Get zip.
 * @returns (String) - String
 */
getZip(): String

/**
 * Set addressDescription.
 * @param {string} addressDescription (string)
 * @returns (void)          *
 */
setAddressDescription(addressDescription:string): void

/**
 * Set addressStatus.
 * @param {string} addressStatus (string)
 * @returns (void)          *
 */
setAddressStatus(addressStatus:string): void

/**
 * Set addressTypeFlag.
 * @param {string} addressTypeFlag (string)
 * @returns (void)          *
 */
setAddressTypeFlag(addressTypeFlag:string): void

/**
 * Set auditDate.
 * @param {Date} auditDate (Date)
 * @returns (void)          *
 */
setAuditDate(auditDate:Date): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set city.
 * @param {string} city (string)
 * @returns (void)          *
 */
setCity(city:string): void

/**
 * Set country.
 * @param {string} country (string)
 * @returns (void)          *
 */
setCountry(country:string): void

/**
 * Set county.
 * @param {string} county (string)
 * @returns (void)          *
 */
setCounty(county:string): void

/**
 * Set distance.
 * @param {number} distance (number) - (Double) 
 * @returns (void)          *
 */
setDistance(distance:number): void

/**
 * Set eventID.
 * @param {string} eventID (string)
 * @returns (void)          *
 */
setEventID(eventID:string): void

/**
 * Set houseFractionEnd.
 * @param {string} houseFractionEnd (string)
 * @returns (void)          *
 */
setHouseFractionEnd(houseFractionEnd:string): void

/**
 * Set houseFractionStart.
 * @param {string} houseFractionStart (string)
 * @returns (void)          *
 */
setHouseFractionStart(houseFractionStart:string): void

/**
 * Set houseNumberEnd.
 * @param {number} houseNumberEnd (number) - (Integer) 
 * @returns (void)          *
 */
setHouseNumberEnd(houseNumberEnd:number): void

/**
 * Set houseNumberStart.
 * @param {number} houseNumberStart (number) - (Integer) 
 * @returns (void)          *
 */
setHouseNumberStart(houseNumberStart:number): void

/**
 * Set inspectionDistrict.
 * @param {string} inspectionDistrict (string)
 * @returns (void)          *
 */
setInspectionDistrict(inspectionDistrict:string): void

/**
 * Set inspectionDistrictPrefix.
 * @param {string} inspectionDistrictPrefix (string)
 * @returns (void)          *
 */
setInspectionDistrictPrefix(inspectionDistrictPrefix:string): void

/**
 * Set neighberhoodPrefix.
 * @param {string} neighberhoodPrefix (string)
 * @returns (void)          *
 */
setNeighberhoodPrefix(neighberhoodPrefix:string): void

/**
 * Set neighborhood.
 * @param {string} neighborhood (string)
 * @returns (void)          *
 */
setNeighborhood(neighborhood:string): void

/**
 * Set primaryFlag.
 * @param {string} primaryFlag (string)
 * @returns (void)          *
 */
setPrimaryFlag(primaryFlag:string): void

/**
 * Set refAddressId.
 * @param {number} refAddressId (number) - (Long) 
 * @returns (void)          *
 */
setRefAddressId(refAddressId:number): void

/**
 * Set secondaryRoad.
 * @param {string} secondaryRoad (string)
 * @returns (void)          *
 */
setSecondaryRoad(secondaryRoad:string): void

/**
 * Set secondaryRoadNumber.
 * @param {number} secondaryRoadNumber (number) - (Integer) 
 * @returns (void)          *
 */
setSecondaryRoadNumber(secondaryRoadNumber:number): void

/**
 * Set sourceFlag.
 * @param {string} sourceFlag (string)
 * @returns (void)          *
 */
setSourceFlag(sourceFlag:string): void

/**
 * Set sourceNumber.
 * @param {number} sourceNumber (number) - (Integer) 
 * @returns (void)          *
 */
setSourceNumber(sourceNumber:number): void

/**
 * Set state.
 * @param {string} state (string)
 * @returns (void)          *
 */
setState(state:string): void

/**
 * Set streetDirection.
 * @param {string} streetDirection (string)
 * @returns (void)          *
 */
setStreetDirection(streetDirection:string): void

/**
 * Set streetName.
 * @param {string} streetName (string)
 * @returns (void)          *
 */
setStreetName(streetName:string): void

/**
 * Set streetPrefix.
 * @param {string} streetPrefix (string)
 * @returns (void)          *
 */
setStreetPrefix(streetPrefix:string): void

/**
 * Set streetSuffix.
 * @param {string} streetSuffix (string)
 * @returns (void)          *
 */
setStreetSuffix(streetSuffix:string): void

/**
 * Set streetSuffixdirection.
 * @param {string} streetSuffixdirection (string)
 * @returns (void)          *
 */
setStreetSuffixdirection(streetSuffixdirection:string): void

/**
 * Set unitEnd.
 * @param {string} unitEnd (string)
 * @returns (void)          *
 */
setUnitEnd(unitEnd:string): void

/**
 * Set unitStart.
 * @param {string} unitStart (string)
 * @returns (void)          *
 */
setUnitStart(unitStart:string): void

/**
 * Set unitType.
 * @param {string} unitType (string)
 * @returns (void)          *
 */
setUnitType(unitType:string): void

/**
 * Set xCoordinator.
 * @param {number} xCoordinator (number) - (Double) 
 * @returns (void)          *
 */
setXCoordinator(xCoordinator:number): void

/**
 * Set yCoordinator.
 * @param {number} yCoordinator (number) - (Double) 
 * @returns (void)          *
 */
setYCoordinator(yCoordinator:number): void

/**
 * Set zip.
 * @param {string} zip (string)
 * @returns (void)          *
 */
setZip(zip:string): void

/**
 * @returns (String) - the houseNumberAlphaStart
 */
getHouseNumberAlphaStart(): String

/**
 * @param {string} houseNumberAlphaStart (string)
 * @returns (void)          *
 */
setHouseNumberAlphaStart(houseNumberAlphaStart:string): void

/**
 * @returns (String) - the houseNumberAlphaEnd
 */
getHouseNumberAlphaEnd(): String

/**
 * @param {string} houseNumberAlphaEnd (string)
 * @returns (void)          *
 */
setHouseNumberAlphaEnd(houseNumberAlphaEnd:string): void

/**
 * @returns (String) - the levelPrefix
 */
getLevelPrefix(): String

/**
 * @param {string} levelPrefix (string)
 * @returns (void)          *
 */
setLevelPrefix(levelPrefix:string): void

/**
 * @returns (String) - the levelNumberStart
 */
getLevelNumberStart(): String

/**
 * @param {string} levelNumberStart (string)
 * @returns (void)          *
 */
setLevelNumberStart(levelNumberStart:string): void

/**
 * @returns (String) - the levelNumberEnd
 */
getLevelNumberEnd(): String

/**
 * @param {string} levelNumberEnd (string)
 * @returns (void)          *
 */
setLevelNumberEnd(levelNumberEnd:string): void

/**
 * @returns (String) - the validateFlag
 */
getValidateFlag(): String

/**
 * @param {string} validateFlag (string)
 * @returns (void)          *
 */
setValidateFlag(validateFlag:string): void

}
declare class RefAppSpecInfoDropDownScriptModel {
/**
 * Get an object of RefAppSpecInfoDropDownModel.
 * @returns (RefAppSpecInfoDropDownModel) - RefAppSpecInfoDropDownModel
 */
getRefAppSpecInfoDropDown(): RefAppSpecInfoDropDownModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get groupCode.
 * @returns (String) - String
 */
getGroupCode(): String

/**
 * Get groupName.
 * @returns (String) - String
 */
getGroupName(): String

/**
 * Get fieldLabel.
 * @returns (String) - String
 */
getFieldLabel(): String

/**
 * Get attrValue.
 * @returns (String) - String
 */
getAttrValue(): String

/**
 * Get DispAttrValue.
 * @returns (String) - String
 */
getDispAttrValue(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get checkboxGroup.
 * @returns (String) - String
 */
getCheckboxGroup(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set groupCode.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Set groupName.
 * @param {string} groupName (string)
 * @returns (void)          *
 */
setGroupName(groupName:string): void

/**
 * Set fieldLabel.
 * @param {string} fieldLabel (string)
 * @returns (void)          *
 */
setFieldLabel(fieldLabel:string): void

/**
 * Set attrValue.
 * @param {string} attrValue (string)
 * @returns (void)          *
 */
setAttrValue(attrValue:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set checkboxGroup.
 * @param {string} checkboxGroup (string)
 * @returns (void)          *
 */
setCheckboxGroup(checkboxGroup:string): void

}
declare class RefAppSpecInfoFieldScriptModel {
/**
 * Get an object of RefAppSpecInfoFieldModel.
 * @returns (RefAppSpecInfoFieldModel) - RefAppSpecInfoFieldModel
 */
getRefAppSpecInfoField(): RefAppSpecInfoFieldModel

/**
 * Get fieldLabel.
 * @returns (String) - String
 */
getFieldLabel(): String

/**
 * Get fieldType.
 * @returns (String) - String
 */
getFieldType(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get displayOrder.
 * @returns (number) - (Integer) String
 */
getDisplayOrder(): number

/**
 * Get feeIndictor.
 * @returns (String) - String
 */
getFeeIndictor(): String

/**
 * Get defaultValue.
 * @returns (String) - String
 */
getDefaultValue(): String

/**
 * Get unit.
 * @returns (String) - String
 */
getUnit(): String

/**
 * Get requiredFlag.
 * @returns (String) - String
 */
getRequiredFlag(): String

/**
 * Get validationScriptName.
 * @returns (String) - String
 */
getValidationScriptName(): String

/**
 * Get searchableFlag.
 * @returns (String) - String
 */
getSearchableFlag(): String

/**
 * Set fieldLabel.
 * @param {string} fieldLabel (string)
 * @returns (void)          *
 */
setFieldLabel(fieldLabel:string): void

/**
 * Set fieldType.
 * @param {string} fieldType (string)
 * @returns (void)          *
 */
setFieldType(fieldType:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (Integer) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Set feeIndictor.
 * @param {string} feeIndictor (string)
 * @returns (void)          *
 */
setFeeIndictor(feeIndictor:string): void

/**
 * Set defaultValue.
 * @param {string} defaultValue (string)
 * @returns (void)          *
 */
setDefaultValue(defaultValue:string): void

/**
 * Set unit.
 * @param {string} unit (string)
 * @returns (void)          *
 */
setUnit(unit:string): void

/**
 * Set requiredFlag.
 * @param {string} requiredFlag (string)
 * @returns (void)          *
 */
setRequiredFlag(requiredFlag:string): void

/**
 * Set validationScriptName.
 * @param {string} validationScriptName (string)
 * @returns (void)          *
 */
setValidationScriptName(validationScriptName:string): void

/**
 * Set searchableFlag.
 * @param {string} searchableFlag (string)
 * @returns (void)          *
 */
setSearchableFlag(searchableFlag:string): void

}
declare class RefAppSpecInfoGroupScriptModel {
/**
 * Get an object of RefAppSpecInfoGroupModel.
 * @returns (RefAppSpecInfoGroupModel) - RefAppSpecInfoGroupModel
 */
getRefAppSpecInfoGroup(): RefAppSpecInfoGroupModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get groupCode.
 * @returns (String) - String
 */
getGroupCode(): String

/**
 * Get groupName.
 * @returns (String) - String
 */
getGroupName(): String

/**
 * Get fieldList.
 * @returns (Collection) - String
 */
getFieldList(): Collection

/**
 * Get checkboxGroup.
 * @returns (String) - String
 */
getCheckboxGroup(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set groupCode.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Set groupName.
 * @param {string} groupName (string)
 * @returns (void)          *
 */
setGroupName(groupName:string): void

/**
 * Set fieldList.
 * @param {any[]} fieldList (any[])
 * @returns (void)          *
 */
setFieldList(fieldList:any[]): void

/**
 * Set chckboxGroup.
 * @param {string} chckboxGroup (string)
 * @returns (void)          *
 */
setCheckboxGroup(chckboxGroup:string): void

}
declare class RefStdConditionScriptModel {
/**
 * @returns (void)          *
 */
setRefStdConditionModel(): void

/**
 * @returns (RefStdConditionModel)          *
 */
getRefStdConditionModel(): RefStdConditionModel

/**
 * @returns (String)          *
 */
getConditionType(): String

/**
 * @returns (number) - (Long) 
 */
getConditionNbr(): number

/**
 * @returns (void)          *
 */
setConditionNbr(): void

/**
 * @returns (String)          *
 */
getConditionDesc(): String

/**
 * @returns (String)          *
 */
getConditionComment(): String

/**
 * @returns (String)          *
 */
getImpactCode(): String

/**
 * @returns (Date)          *
 */
getAuditDate(): Date

/**
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * @returns (String)          *
 */
getAuditID(): String

/**
 * @returns (void)          *
 */
setConditionType(): void

/**
 * @returns (void)          *
 */
setConditionDesc(): void

/**
 * @returns (void)          *
 */
setConditionComment(): void

/**
 * @returns (void)          *
 */
setImpactCode(): void

/**
 * @returns (void)          *
 */
setAuditDate(): void

/**
 * @returns (void)          *
 */
setAuditID(): void

/**
 * @returns (void)          *
 */
setAuditStatus(): void

/**
 * @returns (String)          *
 */
getDisplayConditionNotice(): String

/**
 * @returns (void)          *
 */
setDisplayConditionNotice(): void

/**
 * @returns (String)          *
 */
getIncludeInConditionName(): String

/**
 * @returns (void)          *
 */
setIncludeInConditionName(): void

/**
 * @returns (String)          *
 */
getIncludeInShortDescription(): String

/**
 * @returns (void)          *
 */
setIncludeInShortDescription(): void

/**
 * @returns (String)          *
 */
getInheritable(): String

/**
 * @returns (void)          *
 */
setInheritable(): void

/**
 * @returns (String)          *
 */
getLongDescripton(): String

/**
 * @returns (void)          *
 */
setLongDescripton(): void

/**
 * @returns (String)          *
 */
getPublicDisplayMessage(): String

/**
 * @returns (void)          *
 */
setPublicDisplayMessage(): void

/**
 * @returns (String)          *
 */
getResolutionAction(): String

/**
 * @returns (void)          *
 */
setResolutionAction(): void

/**
 * @returns (void)          *
 */
setConditionGroup(): void

/**
 * @returns (String)          *
 */
getConditionGroup(): String

/**
 * @returns (void)          *
 */
setDisplayNoticeOnACA(): void

/**
 * @returns (String)          *
 */
getDisplayNoticeOnACA(): String

/**
 * @returns (void)          *
 */
setDisplayNoticeOnACAFee(): void

/**
 * @returns (String)          *
 */
getDisplayNoticeOnACAFee(): String

/**
 * Get display condition type.
 * @returns (String)          *
 */
getDispConditionType(): String

/**
 * Get display condition comment.
 * @returns (String)          *
 */
getDispConditionComment(): String

/**
 * Get display condition description.
 * @returns (String)          *
 */
getDispConditionDesc(): String

/**
 * Get display Long description.
 * @returns (String)          *
 */
getDispLongDescripton(): String

/**
 * @returns (String)          *
 */
getConditionOfApproval(): String

/**
 * @returns (void)          *
 */
setConditionOfApproval(): void

/**
 * @returns (number) - (Integer) 
 */
getPriority(): number

/**
 * @returns (void)          *
 */
setPriority(): void

/**
 * @returns (String)          *
 */
getAdditionalInformation(): String

/**
 * @returns (void)          *
 */
setAdditionalInformation(): void

}
declare class ReportInfoScriptModel {
/**
 * @returns (ReportInfoModel)          *
 */
getReportInfoModel(): ReportInfoModel

/**
 * @returns (String)          *
 */
getModule(): String

/**
 * @returns (void)          *
 */
setModule(): void

/**
 * @returns (String)          *
 */
getCapId(): String

/**
 * @returns (void)          *
 */
setCapId(): void

/**
 * @returns (number) - (long) 
 */
getReportId(): number

/**
 * @returns (void)          *
 */
setReportId(): void

/**
 * @returns (String)          *
 */
getReportIdFromOthers(): String

/**
 * @returns (void)          *
 */
setReportIdFromOthers(): void

/**
 * @returns (HashMap)          *
 */
getReportParameters(): HashMap

/**
 * @returns (void)          *
 */
setReportParameters(): void

/**
 * @returns (EDMSEntityIdModel)          *
 */
getEDMSEntityIdModel(): EDMSEntityIdModel

/**
 * @returns (void)          *
 */
setEDMSEntityIdModel(): void

}
declare class ReportResultScriptModel {
/**
 * @returns (ReportResultModel)          *
 */
getReportResultModel(): ReportResultModel

/**
 * @returns (byte[])          *
 */
getContent(): byte[]

/**
 * @returns (void)          *
 */
setContent(): void

/**
 * @returns (String)          *
 */
getFormat(): String

/**
 * @returns (void)          *
 */
setFormat(): void

/**
 * @returns (String)          *
 */
getName(): String

/**
 * @returns (void)          *
 */
setName(): void

}
declare class ReportScriptModel {
/**
 * @returns (void)          *
 */
setEDMS(): void

}
declare class RFeeItemScriptModel {
/**
 * Get an object of RFeeItemModel.
 * @returns (RFeeItemModel) - RFeeItemModel
 */
getrFreeItem(): RFeeItemModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get feeSchedule.
 * @returns (String) - String
 */
getFeeSchedule(): String

/**
 * Get paymentPeriod.
 * @returns (String) - String
 */
getPaymentPeriod(): String

/**
 * Get feeCod.
 * @returns (String) - String
 */
getFeeCod(): String

/**
 * Get display.
 * @returns (String) - String
 */
getDisplay(): String

/**
 * Get feeDes.
 * @returns (String) - String
 */
getFeeDes(): String

/**
 * Get taxFlag.
 * @returns (String) - String
 */
getTaxFlag(): String

/**
 * Get taxPercentage.
 * @returns (number) - (double) double
 */
getTaxPercentage(): number

/**
 * Get accCodeL1.
 * @returns (String) - String
 */
getAccCodeL1(): String

/**
 * Get accCodeL2.
 * @returns (String) - String
 */
getAccCodeL2(): String

/**
 * Get accCodeL3.
 * @returns (String) - String
 */
getAccCodeL3(): String

/**
 * Get rangeLow.
 * @returns (number) - (double) double
 */
getRangeLow(): number

/**
 * Get rangeHigh.
 * @returns (number) - (double) double
 */
getRangeHigh(): number

/**
 * Get rangeIncrement.
 * @returns (number) - (double) double
 */
getRangeIncrement(): number

/**
 * Get fac.
 * @returns (number) - (double) double
 */
getFac(): number

/**
 * Get fix.
 * @returns (number) - (double) double
 */
getFix(): number

/**
 * Get minFee.
 * @returns (number) - (Double) double
 */
getMinFee(): number

/**
 * Get maxFee.
 * @returns (number) - (Double) String
 */
getMaxFee(): number

/**
 * Get defaultFlag.
 * @returns (String) - String
 */
getDefaultFlag(): String

/**
 * Get appendFlag.
 * @returns (String) - String
 */
getAppendFlag(): String

/**
 * Get preProc.
 * @returns (String) - String
 */
getPreProc(): String

/**
 * Get calProc.
 * @returns (String) - String
 */
getCalProc(): String

/**
 * Get formula.
 * @returns (String) - String
 */
getFormula(): String

/**
 * Get feeunit.
 * @returns (number) - (double) String
 */
getFeeunit(): number

/**
 * Get udes.
 * @returns (String) - String
 */
getUdes(): String

/**
 * Get subGroup.
 * @returns (String) - String
 */
getSubGroup(): String

/**
 * Get crDr.
 * @returns (String) - String
 */
getCrDr(): String

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get effectDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getEffectDate(): ScriptDateTime

/**
 * Get expireDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getExpireDate(): ScriptDateTime

/**
 * Get effectDateString.
 * @returns (String) - String
 */
getEffectDateString(): String

/**
 * Get expireDateString.
 * @returns (String) - String
 */
getExpireDateString(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set feeSchedule.
 * @param {string} feeSchedule (string)
 * @returns (void)          *
 */
setFeeSchedule(feeSchedule:string): void

/**
 * Set paymentPeriod.
 * @param {string} paymentPeriod (string)
 * @returns (void)          *
 */
setPaymentPeriod(paymentPeriod:string): void

/**
 * Set feeCod.
 * @param {string} feeCod (string)
 * @returns (void)          *
 */
setFeeCod(feeCod:string): void

/**
 * Set display.
 * @param {string} display (string)
 * @returns (void)          *
 */
setDisplay(display:string): void

/**
 * Set feeDes.
 * @param {string} feeDes (string)
 * @returns (void)          *
 */
setFeeDes(feeDes:string): void

/**
 * Set taxFlag.
 * @param {string} taxFlag (string)
 * @returns (void)          *
 */
setTaxFlag(taxFlag:string): void

/**
 * Set taxPercentage.
 * @param {number} taxPercentage (number) - (double) 
 * @returns (void)          *
 */
setTaxPercentage(taxPercentage:number): void

/**
 * Set accCodeL1.
 * @param {string} accCodeL1 (string)
 * @returns (void)          *
 */
setAccCodeL1(accCodeL1:string): void

/**
 * Set accCodeL2.
 * @param {string} accCodeL2 (string)
 * @returns (void)          *
 */
setAccCodeL2(accCodeL2:string): void

/**
 * Set accCodeL3.
 * @param {string} accCodeL3 (string)
 * @returns (void)          *
 */
setAccCodeL3(accCodeL3:string): void

/**
 * Set rangeLow.
 * @param {number} rangeLow (number) - (double) 
 * @returns (void)          *
 */
setRangeLow(rangeLow:number): void

/**
 * Set rangeHigh.
 * @param {number} rangeHigh (number) - (double) 
 * @returns (void)          *
 */
setRangeHigh(rangeHigh:number): void

/**
 * Set rangeIncrement.
 * @param {number} rangeIncrement (number) - (double) 
 * @returns (void)          *
 */
setRangeIncrement(rangeIncrement:number): void

/**
 * Set fac.
 * @param {number} fac (number) - (double) 
 * @returns (void)          *
 */
setFac(fac:number): void

/**
 * Set fix.
 * @param {number} fix (number) - (double) 
 * @returns (void)          *
 */
setFix(fix:number): void

/**
 * Set minFee.
 * @param {number} minFee (number) - (Double) 
 * @returns (void)          *
 */
setMinFee(minFee:number): void

/**
 * Set maxFee.
 * @param {number} maxFee (number) - (Double) 
 * @returns (void)          *
 */
setMaxFee(maxFee:number): void

/**
 * Set defaultFlag.
 * @param {string} defaultFlag (string)
 * @returns (void)          *
 */
setDefaultFlag(defaultFlag:string): void

/**
 * Set appendFlag.
 * @param {string} appendFlag (string)
 * @returns (void)          *
 */
setAppendFlag(appendFlag:string): void

/**
 * Set preProc.
 * @param {string} preProc (string)
 * @returns (void)          *
 */
setPreProc(preProc:string): void

/**
 * Set calProc.
 * @param {string} calProc (string)
 * @returns (void)          *
 */
setCalProc(calProc:string): void

/**
 * Set formula.
 * @param {string} formula (string)
 * @returns (void)          *
 */
setFormula(formula:string): void

/**
 * Set feeunit.
 * @param {number} feeunit (number) - (double) 
 * @returns (void)          *
 */
setFeeunit(feeunit:number): void

/**
 * Set udes.
 * @param {string} udes (string)
 * @returns (void)          *
 */
setUdes(udes:string): void

/**
 * Set subGroup.
 * @param {string} subGroup (string)
 * @returns (void)          *
 */
setSubGroup(subGroup:string): void

/**
 * Set crDr.
 * @param {string} crDr (string)
 * @returns (void)          *
 */
setCrDr(crDr:string): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * @returns (number) - (Long) 
 */
getPriority(): number

/**
 * @returns (void)          *
 */
setPriority(): void

/**
 * @returns (String)          *
 */
getRoundFeeFlag(): String

/**
 * @returns (void)          *
 */
setRoundFeeFlag(): void

/**
 * @returns (String)          *
 */
getRoundFeeType(): String

/**
 * @returns (void)          *
 */
setRoundFeeType(): void

/**
 * @returns (String)          *
 */
getFeeAllocationType(): String

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @returns (number) - (Double) the accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class RFeeScheduleScriptModel {
/**
 * Get agency code.
 * @returns (String) - the string of agency code
 */
getServiceProviderCode(): String

/**
 * returns fee schedule's Version (RFEE_SCHEDULE.FEE_SCHEDULE_VERSION) as String.
 * @returns (String)          *
 */
getVersion(): String

/**
 * getEffectiveDate
 * @returns (ScriptDateTime)          *
 */
getEffectiveDate(): ScriptDateTime

/**
 * getExpireDate
 * @returns (ScriptDateTime)          *
 */
getExpireDate(): ScriptDateTime

/**
 * Get audit date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audit id.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get audit status.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get Comment
 * @returns (String) - String
 */
getComment(): String

/**
 * Get feeCode
 * @returns (String) - String
 */
getFeeCode(): String

/**
 * Set feeCode
 * @param {string} feeCode (string)
 * @returns (void)          *
 */
setFeeCode(feeCode:string): void

/**
 * Set comment
 * @param {string} comment (string)
 * @returns (void)          *
 */
setComment(comment:string): void

/**
 * Set effectDate.
 * @param {ScriptDateTime} effectDate (ScriptDateTime)
 * @returns (void)          *
 */
setEffectiveDate(effectDate:ScriptDateTime): void

/**
 * Set expireDate.
 * @param {ScriptDateTime} expireDate (ScriptDateTime)
 * @returns (void)          *
 */
setExpireDate(expireDate:ScriptDateTime): void

/**
 * Set version.
 * @param {string} version (string)
 * @returns (void)          *
 */
setVersion(version:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class RowScriptModel {
/**
 * @returns (RowModel)          *
 */
getRow(): RowModel

/**
 * @returns (void)          *
 */
setRow(): void

/**
 * @returns (String)          *
 */
getId(): String

/**
 * @returns (HashMap) - <java.lang.String,java.lang.String> the fields
 */
getFields(): HashMap

/**
 * @param {HashMap} fields (HashMap) - <java.lang.String,java.lang.String> 
 * @returns (void)          *
 */
setFields(fields:HashMap): void

/**
 * @param {string} id (string)
 * @returns (void)          *
 */
setId(id:string): void

}
declare class ScriptContextHelper {
/**
 * @param {Context} cx (Context)
 * @param {string} agencyCode (string)
 * @param {string} scriptName (string)
 * @returns (Script)          *
 */
getScript(cx:Context, agencyCode:string, scriptName:string): Script

}
declare class ScriptResult<Type> {
    /**
     * Get Success.
     * @returns (boolean) - boolean
     */
    getSuccess(): boolean;

    /**
     * Get error type.
     * @returns (String) - String
     */
    getErrorType(): string;

    /**
     * Get error message.
     * @returns (String) - String
     */
    getErrorMessage(): string;

    /**
     * Get Output.
     * @returns (Type|null) - Type or null
     */
    getOutput(): Type | null;
}
declare class ScriptRoot {
/**
 * Initialize JS engine environment for invoking sub script in a context.  Please don't invoke it, it is only used for EMSE engine.
 * @param {Context} cx (Context)
 * @param {Scriptable} scope (Scriptable)
 * @returns (void)          *
 */
initEnv(cx:Context, scope:Scriptable): void

/**
 * Clean JS engine's context to avoid memory leak.  Please don't invoke it, it is only used for EMSE engine.
 * @returns (void)          *
 */
cleanEvn(): void

/**
 * Allows a user to execute another script within the same context.  It is a real include mode.
 * @param {string} scriptID (string) - the 'code' for the script (not the 'name')
 * @returns (ScriptResult<any>)          *
 */
includeScript(scriptID:string): ScriptResult<any>

/**
 * Allows a user to execute another script. The same "env" object that was  in use by the script executing this method will be passed in to the  script executed by this method. When the called script is finished, any  changes made by the called script to the "env" will be visible to the  calling script.
 * @param {string} scriptID (string) - the 'code' for the script (not the 'name')
 * @returns (void)          *
 */
runScript(scriptID:string): void

/**
 * Allows a user to execute another script asynchronously via JMS.  Notice: the script will be fired only when one transaction is commited successfully.
 * @param {string} scriptID (string) - the 'code' for the script (not the 'name')
 * @param {HashMap} envParams (HashMap) - the emse parameters
 * @returns (void)          *
 */
runAsyncScript(scriptID:string, envParams:HashMap): void

/**
 * Run ScriptInNewTransaction.
 * @param {string} scriptID (string) - String
 * @returns (void)          *
 */
runScriptInNewTransaction(scriptID:string): void

/**
 * Appends a line to the debug output of the script.
 * @param {string} debugOutputLine (string)
 * @returns (void)          *
 */
print(debugOutputLine:string): void

/**
 * Log given content to EMSE output and debug it to system logger.
 * @param {string} content (string)
 * @returns (void)          *
 */
log(content:string): void

/**
 * Abort Script.
 * @returns (void)          *
 */
abortScript(): void

/**
 * Gets the potentially multi-line debug output.
 * @returns (String) - String
 */
getDebugOutput(): String

/**
 * Returns the serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Invokes the Ad Hoc Report and send the output file through email.
 * @param {string} reportTitle (string) - the exact text title of the report.
 * @param {Hashtable} reportParam (Hashtable) - The key-value pairs of the parameters of the report.
 * @param {string} fileType (string) - "Tab" or "Excel"
 * @param {string} fileFormat (string) - "Heading" or "No Heading".
 * @param {string} emailAddress (string) - Email address(es) to send the output file to. Separated with
 commas if more than one.
		* @returns (ScriptResult<any>) - An object. The getOutput doesnot return a value. Instead the
getSuccess method should be checked, and if false the
getErrorMessage method should be called to inform the user as to
why sending the email failed.
		*/
runAdHoc(reportTitle:string, reportParam:Hashtable, fileType:string, fileFormat:string, emailAddress:string): ScriptResult<any>

/**
 * Send Mail.
 * @param {string} FROM (string) - the email address that send the email
 * @param {string} TO (string) - the email address to send
 * @param {string} CC (string) - the email address to CC, can be null
 * @param {string} SUBJECT (string) - the mail subject
 * @param {string} CONTENT (string) - the mail contexnt
 * @returns (ScriptResult<any>) - Result the Result object, getSuccess() can identify whether the
 email is sent succefully, if fail, getMessage() can tell why?
		*/
sendMail(FROM:string, TO:string, CC:string, SUBJECT:string, CONTENT:string): ScriptResult<any>

/**
 * Send Email.
 * @param {string} FROM (string) - the email address that send the email
 * @param {string} TO (string) - the email address to send
 * @param {string} CC (string) - the email address to CC, can be null
 * @param {string} SUBJECT (string) - the mail subject
 * @param {string} CONTENT (string) - the mail contexnt
 * @param {string} FILENAME (string) - the fILENAME
 * @returns (ScriptResult<any>) - Result the Result object, getSuccess() can identify whether the
 email is sent succefully, if fail, getMessage() can tell why?
		*/
sendEmail(FROM:string, TO:string, CC:string, SUBJECT:string, CONTENT:string, FILENAME:string): ScriptResult<any>

/**
 * Send Email with multiple attachments.
 * @param {string} from (string) - the email address that send the email
 * @param {string} to (string) - the email address to send
 * @param {string} cc (string) - the email address to CC, can be null
 * @param {string} subject (string) - the mail subject
 * @param {string} content (string) - the mail content
 * @param {string[]} fileNames (string[]) - the fileNames array
 * @returns (ScriptResult<any>) - Result the Result object, getSuccess() can identify whether the
 email is sent successfully, if fail, getMessage() can tell why.
		*/
sendEmailWithAttachedFiles(from:string, to:string, cc:string, subject:string, content:string, fileNames:string[]): ScriptResult<any>

/**
 * Get Hashtable.
 * @param {string} names (string) - String
 * @param {string} values (string) - String
 * @returns (ScriptResult<any>) - ScriptResult
 */
getHashtable(names:string, values:string): ScriptResult<any>

/**
 * Returns the auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Invokes the Oracle Report and send the output file through email.
 * @param {string} desType (string) - String
 * @param {string} reportName (string) - the exact text title of the report.
 * @param {string} desFormat (string) - String
 * @param {Hashtable} reportParam (Hashtable) - The key-value pairs of the parameters of the report.
 * @param {string} emailAddress (string) - Email address(es) to send the output file to. Separated with commas if more than one.
 * @returns (ScriptResult<any>) - An object. The getOutput doesnot return a value. Instead the
 getSuccess method should be checked, and if false the
getErrorMessage method should be called to inform the user as to
why sending the email failed.
		*/
runOracleReport(desType:string, reportName:string, desFormat:string, reportParam:Hashtable, emailAddress:string): ScriptResult<any>

/**
 * To debug the emse script, can set break point here to inspect the object variable.
 * @param {string} tag (string) - tag name
 * @param {object} object (object)
 * @returns (void)          *
 */
debug(tag:string, object:object): void

/**
 * Start time meter.
 * @param {string} tag (string)
 * @returns (void)          *
 */
timerStart(tag:string): void

/**
 * Calculate the time elapsed from last meterStart().
 * @param {string} tag (string)
 * @returns (void)          *
 */
timerEnd(tag:string): void

/**
 * Interrupted the emse script for a while.
 * @param {number} time (number) - (long) 
 * @returns (void)          *
 */
sleep(time:number): void

/**
 * Set the delegate agency code.
 * @param {string} delegateAgencyCode (string)
 * @returns (void)          *
 */
setDelegateAgencyCode(delegateAgencyCode:string): void

/**
 * Reset the delegate agency code.
 * @returns (void)          *
 */
resetDelegateAgencyCode(): void

}
declare class SetDetailsScriptModel {
/**
 * @returns (String) - the serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (SetDetailsModel) - the setDetailsModel
 */
getSetDetailsModel(): SetDetailsModel

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime) - ScriptDateTime
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get ChildSetId
 * @returns (String) - String
 */
getChildSetID(): String

/**
 * Set ChildSetID
 * @param {string} childSetID (string)
 * @returns (void)          *
 */
setChildSetID(childSetID:string): void

/**
 * Get AddressNBR.
 * @returns (number) - (Long) Long
 */
getAddressNBR(): number

/**
 * Set AddressNbr
 * @param {number} addressNBR (number) - (Long) 
 * @returns (void)          *
 */
setAddressNBR(addressNBR:number): void

/**
 * Get LicenseSeqNBR
 * @returns (number) - (Long) Long
 */
getLicenseSeqNBR(): number

/**
 * Set LicenseSeqNBR
 * @param {number} licenseNBR (number) - (Long) 
 * @returns (void)          *
 */
setLicenseSeqNBR(licenseNBR:number): void

/**
 * DefaultOrderBy
 * @returns (String) - String
 */
defaultOrderBy(): String

/**
 * memberToField.
 * @param {string} memberName (string)
 * @returns (String) - String
 */
memberToField(memberName:string): String

/**
 * Get SetSeqNbr.
 * @returns (number) - (Long) Long
 */
getSetSeqNbr(): number

/**
 * Get SetID.
 * @returns (String) - String
 */
getSetID(): String

/**
 * Get ID1.
 * @returns (String) - String
 */
getID1(): String

/**
 * Get ID2
 * @returns (String) - String
 */
getID2(): String

/**
 * Get ID3.
 * @returns (String) - String
 */
getID3(): String

/**
 * Get EntType.
 * @returns (String) - String
 */
getEntType(): String

/**
 * Get EntID.
 * @returns (String) - String
 */
getEntID(): String

/**
 * Set SetSeqNbr.
 * @param {number} setSeqNbr (number) - (Long) 
 * @returns (void)          *
 */
setSetSeqNbr(setSeqNbr:number): void

/**
 * Set SetID.
 * @param {string} setID (string)
 * @returns (void)          *
 */
setSetID(setID:string): void

/**
 * set ID1.
 * @param {string} ID1 (string)
 * @returns (void)          *
 */
setID1(ID1:string): void

/**
 * set ID2.
 * @param {string} ID2 (string)
 * @returns (void)          *
 */
setID2(ID2:string): void

/**
 * set ID3.
 * @param {string} ID3 (string)
 * @returns (void)          *
 */
setID3(ID3:string): void

/**
 * set EntType.
 * @param {string} entType (string)
 * @returns (void)          *
 */
setEntType(entType:string): void

/**
 * set EntID.
 * @param {string} entID (string)
 * @returns (void)          *
 */
setEntID(entID:string): void

/**
 * get ParcelNumber.
 * @returns (String) - String
 */
getParcelNumber(): String

/**
 * set ParcelNumber.
 * @param {string} parcelNumber (string)
 * @returns (void)          *
 */
setParcelNumber(parcelNumber:string): void

/**
 * get SourceSeqNumber.
 * @returns (number) - (Long) Long
 */
getSourceSeqNumber(): number

/**
 * set SourceSeqNumber.
 * @param {number} sourceSeqNumber (number) - (Long) 
 * @returns (void)          *
 */
setSourceSeqNumber(sourceSeqNumber:number): void

/**
 * @returns (String) - the setMemberStatus
 */
getSetMemberStatus(): String

/**
 * @param {string} setMemberStatus (string)
 * @returns (void)          *
 */
setSetMemberStatus(setMemberStatus:string): void

/**
 * @returns (ScriptDateTime) - the setMemberStatusDate ScriptDateTime
 */
getSetMemberStatusDate(): ScriptDateTime

/**
 * @param {ScriptDateTime} setMemberStatusDate (ScriptDateTime)
 * @returns (void)          *
 */
setSetMemberStatusDate(setMemberStatusDate:ScriptDateTime): void

}
declare class SetHeaderScriptModel {
/**
 * @returns (SetHeaderModel) - the setHeaderModel
 */
getSetHeaderModel(): SetHeaderModel

/**
 * @returns (String) - return the servProvCode.
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get setID.
 * @returns (String) - String
 */
getSetID(): String

/**
 * Get setTitle.
 * @returns (String) - String
 */
getSetTitle(): String

/**
 * Get setDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getSetDate(): ScriptDateTime

/**
 * Get setComment.
 * @returns (String) - String
 */
getSetComment(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set setID.
 * @param {string} setID (string)
 * @returns (void)          *
 */
setSetID(setID:string): void

/**
 * Set setTitle.
 * @param {string} setTitle (string)
 * @returns (void)          *
 */
setSetTitle(setTitle:string): void

/**
 * Set setDate.
 * @param {ScriptDateTime} setDate (ScriptDateTime) - ScriptDateTime
 * @returns (void)          *
 */
setSetDate(setDate:ScriptDateTime): void

/**
 * Set setComment.
 * @param {string} setComment (string)
 * @returns (void)          *
 */
setSetComment(setComment:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime) - ScriptDateTime
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get setType.
 * @returns (String) - String
 */
getSetType(): String

/**
 * Set setType.
 * @param {string} setType (string)
 * @returns (void)          *
 */
setSetType(setType:string): void

/**
 * @returns (String) - the setStatus
 */
getSetStatus(): String

/**
 * @param {string} setStatus (string)
 * @returns (void)          *
 */
setSetStatus(setStatus:string): void

/**
 * @returns (Date) - the setStatusDate
 */
getSetStatusDate(): Date

/**
 * @param {Date} setStatusDate (Date)
 * @returns (void)          *
 */
setSetStatusDate(setStatusDate:Date): void

/**
 * @returns (String) - the setStatusComment
 */
getSetStatusComment(): String

/**
 * @param {string} setStatusComment (string)
 * @returns (void)          *
 */
setSetStatusComment(setStatusComment:string): void

/**
 * @returns (String) - the recordSetType
 */
getRecordSetType(): String

/**
 * @param {string} recordSetType (string)
 * @returns (void)          *
 */
setRecordSetType(recordSetType:string): void

}
declare class SmartChoiceGroupScriptModel {
/**
 * Get SmartChoiceGroupModel.
 * @returns (SmartChoiceGroupModel) - SmartChoiceGroupModel
 */
getSmartChoiceGroup(): SmartChoiceGroupModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get groupCode.
 * @returns (String) - String
 */
getGroupCode(): String

/**
 * Get blockName.
 * @returns (String) - String
 */
getBlockName(): String

/**
 * Get displayFlag.
 * @returns (String) - String
 */
getDisplayFlag(): String

/**
 * Get validateFlag.
 * @returns (String) - String
 */
getValidateFlag(): String

/**
 * Get requiredFlag.
 * @returns (String) - String
 */
getRequiredFlag(): String

/**
 * Get displayOrder.
 * @returns (number) - (Integer) Integer
 */
getDisplayOrder(): number

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get defaultValue.
 * @returns (String) - String
 */
getDefaultValue(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set groupCode.
 * @param {string} groupCode (string)
 * @returns (void)          *
 */
setGroupCode(groupCode:string): void

/**
 * Set blockName.
 * @param {string} blockName (string)
 * @returns (void)          *
 */
setBlockName(blockName:string): void

/**
 * Set displayFlag.
 * @param {string} displayFlag (string)
 * @returns (void)          *
 */
setDisplayFlag(displayFlag:string): void

/**
 * Set validateFlag.
 * @param {string} validateFlag (string)
 * @returns (void)          *
 */
setValidateFlag(validateFlag:string): void

/**
 * Set requiredFlag.
 * @param {string} requiredFlag (string)
 * @returns (void)          *
 */
setRequiredFlag(requiredFlag:string): void

/**
 * Set displayOrder.
 * @param {number} displayOrder (number) - (Integer) 
 * @returns (void)          *
 */
setDisplayOrder(displayOrder:number): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set defaultValue.
 * @param {string} defaultValue (string)
 * @returns (void)          *
 */
setDefaultValue(defaultValue:string): void

}
declare class SMSMessageScriptModel {
/**
 * @returns (String) - the serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (String) - the auditID
 */
getAuditID(): String

/**
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * @returns (MessageModel) - the model
 */
getModel(): MessageModel

/**
 * Gets the content.
 * @returns (String) - the content
 */
getContent(): String

/**
 * Sets the content.
 * @param {string} content (string)
 * @returns (void)          *
 */
setContent(content:string): void

/**
 * Gets the comments.
 * @returns (String) - the comment
 */
getComments(): String

/**
 * Sets the comments.
 * @param {string} comments (string)
 * @returns (void)          *
 */
setComments(comments:string): void

/**
 * Gets the send date.
 * @returns (Date) - the sendDate
 */
getSendDate(): Date

/**
 * Sets the send date.
 * @param {Date} sendDate (Date)
 * @returns (void)          *
 */
setSendDate(sendDate:Date): void

/**
 * @returns (String) - the contentType
 */
getContentType(): String

/**
 * @param {string} contentType (string)
 * @returns (void)          *
 */
setContentType(contentType:string): void

/**
 * Gets the trigger event.
 * @returns (String) - the triggerEvent
 */
getTriggerEvent(): String

/**
 * Sets the trigger event.
 * @param {string} triggerEvent (string)
 * @returns (void)          *
 */
setTriggerEvent(triggerEvent:string): void

/**
 * Get from contacts.
 * @returns (MessageContactModel)          *
 */
getFromContact(): MessageContactModel

/**
 * Get to contacts.
 * @returns (MessageContactModel[])          *
 */
getToContacts(): MessageContactModel[]

/**
 * Gets the audit model.
 * @returns (AuditModel) - the auditModel
 */
getAuditModel(): AuditModel

/**
 * Sets the audit model.
 * @param {AuditModel} auditModel (AuditModel)
 * @returns (void)          *
 */
setAuditModel(auditModel:AuditModel): void

/**
 * Set contancts.
 * @param {MessageContactModel[]} contacts (MessageContactModel[])
 * @returns (void)          *
 */
setContacts(contacts:MessageContactModel[]): void

}
declare class StandardCommentScriptModel {
/**
 * Get StandardCommentModel.
 * @returns (StandardCommentModel) - StandardCommentModel
 */
getStandardComment(): StandardCommentModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get commentType.
 * @returns (String) - String
 */
getCommentType(): String

/**
 * Get docID.
 * @returns (String) - String
 */
getDocID(): String

/**
 * Get name.
 * @returns (String) - String
 */
getName(): String

/**
 * Get text.
 * @returns (String) - String
 */
getText(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditDateString.
 * @returns (String) - String
 */
getAuditDateString(): String

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set commentType.
 * @param {string} commentType (string)
 * @returns (void)          *
 */
setCommentType(commentType:string): void

/**
 * Set docID.
 * @param {string} docID (string)
 * @returns (void)          *
 */
setDocID(docID:string): void

/**
 * Set name.
 * @param {string} name (string)
 * @returns (void)          *
 */
setName(name:string): void

/**
 * Set text.
 * @param {string} text (string)
 * @returns (void)          *
 */
setText(text:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditDateString.
 * @param {string} auditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(auditDateString:string): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class StatusHistoryScriptModel {
statusDate: ScriptDateTime
/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get sysUser.
 * @returns (SysUserModel) - SysUserModel
 */
getSysUser(): SysUserModel

/**
 * Get statusHistNbr.
 * @returns (number) - (long) long
 */
getStatusHistNbr(): number

/**
 * Get type.
 * @returns (String) - String
 */
getType(): String

/**
 * Get status.
 * @returns (String) - String
 */
getStatus(): String

/**
 * Get statusDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getStatusDate(): ScriptDateTime

/**
 * @returns (Date)          *
 */
getStatuDateAsDateType(): Date

/**
 * Get statusComment.
 * @returns (String) - String
 */
getStatusComment(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get parentTaskName.
 * @returns (String) - String
 */
getParentTaskName(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set sysUser.
 * @param {SysUserModel} sysUser (SysUserModel)
 * @returns (void)          *
 */
setSysUser(sysUser:SysUserModel): void

/**
 * Set statusHistNbr.
 * @param {number} statusHistNbr (number) - (long) 
 * @returns (void)          *
 */
setStatusHistNbr(statusHistNbr:number): void

/**
 * Set type.
 * @param {string} type (string)
 * @returns (void)          *
 */
setType(type:string): void

/**
 * Set status.
 * @param {string} status (string)
 * @returns (void)          *
 */
setStatus(status:string): void

/**
 * Set statusDate.
 * @param {ScriptDateTime} statusDate (ScriptDateTime)
 * @returns (void)          *
 */
setStatusDate(statusDate:ScriptDateTime): void

/**
 * Set statusComment.
 * @param {string} statusComment (string)
 * @returns (void)          *
 */
setStatusComment(statusComment:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set parentTaskName.
 * @param {string} parentTaskName (string)
 * @returns (void)          *
 */
setParentTaskName(parentTaskName:string): void

}
declare class StructureEstablishmentScriptModel {
/**
 * Get licenseModel.
 * @returns (StructureEstablishmentModel) - LicenseModel
 */
getStrucEstaModel(): StructureEstablishmentModel

/**
 * @returns (Collection) - dataAttributes
 */
getAttributes(): Collection

/**
 * @param {any[]} attributes (any[])
 * @returns (void)          *
 */
setAttributes(attributes:any[]): void

/**
 * set auditID
 * @returns (String)          *
 */
getAuditID(): String

/**
 * set auditID
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * set serviceProviderCode
 * @returns (String)          *
 */
getServiceProviderCode(): String

/**
 * set serviceProviderCode
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * @returns (Date)          *
 */
getAuditDate(): Date

/**
 * @returns (void)          *
 */
setAuditDate(): void

/**
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * @returns (void)          *
 */
setAuditStatus(): void

/**
 * @returns (number) - (Double) 
 */
getBaths(): number

/**
 * @returns (void)          *
 */
setBaths(): void

/**
 * @returns (number) - (Double) 
 */
getBeds(): number

/**
 * @returns (void)          *
 */
setBeds(): void

/**
 * @returns (number) - (Double) 
 */
getCoordinator_X(): number

/**
 * @returns (void)          *
 */
setCoordinator_X(): void

/**
 * @returns (number) - (Double) 
 */
getCoordinator_Y(): number

/**
 * @returns (void)          *
 */
setCoordinator_Y(): void

/**
 * @returns (Date)          *
 */
getDateBuilt(): Date

/**
 * @returns (void)          *
 */
setDateBuilt(): void

/**
 * @returns (String)          *
 */
getDescription(): String

/**
 * @returns (void)          *
 */
setDescription(): void

/**
 * @returns (number) - (Double) 
 */
getFloor(): number

/**
 * @returns (void)          *
 */
setFloor(): void

/**
 * @returns (number) - (Double) 
 */
getFloorArea_1st(): number

/**
 * @returns (void)          *
 */
setFloorArea_1st(): void

/**
 * @returns (number) - (Double) 
 */
getFrontDimension(): number

/**
 * @returns (void)          *
 */
setFrontDimension(): void

/**
 * @returns (String)          *
 */
getGarage(): String

/**
 * @returns (void)          *
 */
setGarage(): void

/**
 * @returns (String)          *
 */
getGroup(): String

/**
 * @returns (void)          *
 */
setGroup(): void

/**
 * @returns (number) - (Double) 
 */
getHeight(): number

/**
 * @returns (void)          *
 */
setHeight(): void

/**
 * @returns (String)          *
 */
getId(): String

/**
 * @returns (void)          *
 */
setId(): void

/**
 * @returns (String)          *
 */
getLandUseValue(): String

/**
 * @returns (void)          *
 */
setLandUseValue(): void

/**
 * @returns (String)          *
 */
getName(): String

/**
 * @returns (void)          *
 */
setName(): void

/**
 * @returns (number) - (Double) 
 */
getNumberRooms(): number

/**
 * @returns (void)          *
 */
setNumberRooms(): void

/**
 * @returns (number) - (Double) 
 */
getParcelsAreas(): number

/**
 * @returns (void)          *
 */
setParcelsAreas(): void

/**
 * @returns (number) - (Double) 
 */
getPercentEmployees(): number

/**
 * @returns (void)          *
 */
setPercentEmployees(): void

/**
 * @returns (number) - (Double) 
 */
getPercentResidentialUnits(): number

/**
 * @returns (void)          *
 */
setPercentResidentialUnits(): void

/**
 * @returns (number) - (Integer) 
 */
getPercentStructure(): number

/**
 * @returns (void)          *
 */
setPercentStructure(): void

/**
 * @returns (number) - (Integer) 
 */
getPercentUsed(): number

/**
 * @returns (void)          *
 */
setPercentUsed(): void

/**
 * @returns (String)          *
 */
getPool(): String

/**
 * @returns (void)          *
 */
setPool(): void

/**
 * @returns (number) - (Double) 
 */
getRearDimension(): number

/**
 * @returns (void)          *
 */
setRearDimension(): void

/**
 * @returns (String)          *
 */
getRecordStatus(): String

/**
 * @returns (void)          *
 */
setRecordStatus(): void

/**
 * @returns (number) - (Integer) 
 */
getResId(): number

/**
 * @returns (void)          *
 */
setResId(): void

/**
 * @returns (number) - (Double) 
 */
getSideDimension1(): number

/**
 * @returns (void)          *
 */
setSideDimension1(): void

/**
 * @returns (number) - (Double) 
 */
getSideDimension2(): number

/**
 * @returns (void)          *
 */
setSideDimension2(): void

/**
 * @returns (number) - (Long) 
 */
getSourceSeqNumber(): number

/**
 * @returns (void)          *
 */
setSourceSeqNumber(): void

/**
 * @returns (String)          *
 */
getStatus(): String

/**
 * @returns (void)          *
 */
setStatus(): void

/**
 * @returns (Date)          *
 */
getStatusDate(): Date

/**
 * @returns (void)          *
 */
setStatusDate(): void

/**
 * @returns (number) - (Long) 
 */
getStrucEstaSeq(): number

/**
 * @returns (void)          *
 */
setStrucEstaSeq(): void

/**
 * @returns (number) - (Double) 
 */
getTotalArea(): number

/**
 * @returns (void)          *
 */
setTotalArea(): void

/**
 * @returns (number) - (Double) 
 */
getTotalFloorArea(): number

/**
 * @returns (void)          *
 */
setTotalFloorArea(): void

/**
 * @returns (number) - (Double) 
 */
getTotalFloors(): number

/**
 * @returns (void)          *
 */
setTotalFloors(): void

/**
 * @returns (String)          *
 */
getType(): String

/**
 * @returns (void)          *
 */
setType(): void

}
declare class TableScriptModel {
/**
 * @returns (TableModel)          *
 */
getTabelModel(): TableModel

/**
 * @returns (void)          *
 */
setTabelModel(): void

/**
 * @returns (String)          *
 */
getSubGroup(): String

/**
 * @param {string} subGroup (string)
 * @returns (void)          *
 */
setSubGroup(subGroup:string): void

/**
 * @returns (RowModel[]) - the rows
 */
getRows(): RowModel[]

/**
 * @param {RowModel[]} rows (RowModel[])
 * @returns (void)          *
 */
setRows(rows:RowModel[]): void

}
declare class TaskItemScriptModel {
/**
 * Get TaskItemModel.
 * @returns (TaskItemModel) - TaskItemModel
 */
getTaskItem(): TaskItemModel

/**
 * Get workflow Id.
 * @returns (String) - String
 */
getWorkflowId(): String

/**
 * Get CapID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get assigned staff.
 * @returns (SysUserModel) - SysUserModel
 */
getAssignedStaff(): SysUserModel

/**
 * Get step number.
 * @returns (number) - (int) int
 */
getStepNumber(): number

/**
 * Get current task ID.
 * @returns (String) - String
 */
getCurrentTaskID(): String

/**
 * Get next task ID.
 * @returns (String) - String
 */
getNextTaskID(): String

/**
 * Get task description.
 * @returns (String) - String
 */
getTaskDescription(): String

/**
 * Get assignment date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAssignmentDate(): ScriptDateTime

/**
 * Get due date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getDueDate(): ScriptDateTime

/**
 * Get days due.
 * @returns (number) - (int) int
 */
getDaysDue(): number

/**
 * Get disposition.
 * @returns (String) - String
 */
getDisposition(): String

/**
 * Get statusDate.
 * @returns (Date) - Date
 */
getStatusDate(): Date

/**
 * Get statusDateString.
 * @returns (String) - String
 */
getStatusDateString(): String

/**
 * Get disposition date.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getDispositionDate(): ScriptDateTime

/**
 * Get dispositionDateString.
 * @returns (String) - String
 */
getDispositionDateString(): String

/**
 * Get disposition note.
 * @returns (String) - String
 */
getDispositionNote(): String

/**
 * Get disposition comment.
 * @returns (String) - String
 */
getDispositionComment(): String

/**
 * Get active flag.
 * @returns (String) - String
 */
getActiveFlag(): String

/**
 * Get complete flag.
 * @returns (String) - String
 */
getCompleteFlag(): String

/**
 * Get process ID.
 * @returns (number) - (long) long
 */
getProcessID(): number

/**
 * Get process code.
 * @returns (String) - String
 */
getProcessCode(): String

/**
 * Set taskItem.
 * @param {TaskItemModel} taskItem (TaskItemModel)
 * @returns (void)          *
 */
setTaskItem(taskItem:TaskItemModel): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set stepNumber.
 * @param {number} stepNumber (number) - (int) 
 * @returns (void)          *
 */
setStepNumber(stepNumber:number): void

/**
 * Set sysUser.
 * @param {SysUserModel} sysUser (SysUserModel)
 * @returns (void)          *
 */
setSysUser(sysUser:SysUserModel): void

/**
 * Set workflowID.
 * @param {string} workflowID (string)
 * @returns (void)          *
 */
setWorkflowID(workflowID:string): void

/**
 * Set currentTaskID.
 * @param {string} currentTaskID (string)
 * @returns (void)          *
 */
setCurrentTaskID(currentTaskID:string): void

/**
 * Set nextTaskID.
 * @param {string} nextTaskID (string)
 * @returns (void)          *
 */
setNextTaskID(nextTaskID:string): void

/**
 * Set taskDescription.
 * @param {string} taskDescription (string)
 * @returns (void)          *
 */
setTaskDescription(taskDescription:string): void

/**
 * Set assignmentDate.
 * @param {Date} assignmentDate (Date)
 * @returns (void)          *
 */
setAssignmentDate(assignmentDate:Date): void

/**
 * Set assignmentDateString.
 * @param {string} assignmentDateString (string)
 * @returns (void)          *
 */
setAssignmentDateString(assignmentDateString:string): void

/**
 * Set dueDate.
 * @param {ScriptDateTime} dueDate (ScriptDateTime)
 * @returns (void)          *
 */
setDueDate(dueDate:ScriptDateTime): void

/**
 * Set dueDateString.
 * @param {string} dueDateString (string)
 * @returns (void)          *
 */
setDueDateString(dueDateString:string): void

/**
 * Set daysDue.
 * @param {number} daysDue (number) - (int) 
 * @returns (void)          *
 */
setDaysDue(daysDue:number): void

/**
 * Set disposition.
 * @param {string} disposition (string)
 * @returns (void)          *
 */
setDisposition(disposition:string): void

/**
 * Set dispositionDate.
 * @param {Date} dispositionDate (Date)
 * @returns (void)          *
 */
setDispositionDate(dispositionDate:Date): void

/**
 * Set dispositionDateString.
 * @param {string} dispositionDateString (string)
 * @returns (void)          *
 */
setDispositionDateString(dispositionDateString:string): void

/**
 * Set dispositionNote.
 * @param {string} dispositionNote (string)
 * @returns (void)          *
 */
setDispositionNote(dispositionNote:string): void

/**
 * Set dispositionComment.
 * @param {string} dispositionComment (string)
 * @returns (void)          *
 */
setDispositionComment(dispositionComment:string): void

/**
 * Set activeFlag.
 * @param {string} activeFlag (string)
 * @returns (void)          *
 */
setActiveFlag(activeFlag:string): void

/**
 * Set completeFlag.
 * @param {string} completeFlag (string)
 * @returns (void)          *
 */
setCompleteFlag(completeFlag:string): void

/**
 * Set loopCount.
 * @param {string} loopCount (string)
 * @returns (void)          *
 */
setLoopCount(loopCount:string): void

/**
 * Set generalFlag.
 * @param {string} generalFlag (string)
 * @returns (void)          *
 */
setGeneralFlag(generalFlag:string): void

/**
 * Set customProcedure.
 * @param {string} customProcedure (string)
 * @returns (void)          *
 */
setCustomProcedure(customProcedure:string): void

/**
 * Set auditDate.
 * @param {Date} auditDate (Date)
 * @returns (void)          *
 */
setAuditDate(auditDate:Date): void

/**
 * Set auditDateString.
 * @param {string} auditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(auditDateString:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set processID.
 * @param {number} processID (number) - (long) 
 * @returns (void)          *
 */
setProcessID(processID:number): void

/**
 * Set processCode.
 * @param {string} processCode (string)
 * @returns (void)          *
 */
setProcessCode(processCode:string): void

/**
 * Set statusDate.
 * @param {ScriptDateTime} statusDate (ScriptDateTime)
 * @returns (void)          *
 */
setStatusDate(statusDate:ScriptDateTime): void

/**
 * Set statusDateString.
 * @param {string} statusDateString (string)
 * @returns (void)          *
 */
setStatusDateString(statusDateString:string): void

/**
 * Set assignedUser.
 * @param {SysUserModel} assignedUser (SysUserModel)
 * @returns (void)          *
 */
setAssignedUser(assignedUser:SysUserModel): void

/**
 * Set parentTaskName.
 * @param {string} parentTaskName (string)
 * @returns (void)          *
 */
setParentTaskName(parentTaskName:string): void

/**
 * Method getHoursSpent.
 * @returns (String) - taskItem.getHoursSpent()
 */
getHoursSpent(): String

/**
 * Method setHoursSpent.
 * @param {string} hoursSpent (string)
 * @returns (void)          *
 */
setHoursSpent(hoursSpent:string): void

/**
 * Method getStartTime
 * @returns (Date) - m_StartTime
 */
getStartTime(): Date

/**
 * Method setStartTime
 * @param {Date} m_StartTime (Date)
 * @returns (void)          *
 */
setStartTime(m_StartTime:Date): void

/**
 * Method getEndTime
 * @returns (Date) - m_EndTime
 */
getEndTime(): Date

/**
 * Method setEndTime
 * @param {Date} m_EndTime (Date)
 * @returns (void)          *
 */
setEndTime(m_EndTime:Date): void

/**
 * Method getBillable
 * @returns (String) - m_Billable
 */
getBillable(): String

/**
 * Method setBillable
 * @param {string} m_Billable (string)
 * @returns (void)          *
 */
setBillable(m_Billable:string): void

/**
 * Method getOverTime
 * @returns (String) - m_OverTime
 */
getOverTime(): String

/**
 * Method setOverTime
 * @param {string} m_OverTime (string)
 * @returns (void)          *
 */
setOverTime(m_OverTime:string): void

/**
 * Method getProcessHistorySeq
 * @returns (number) - (long) _processHistorySeq
 */
getProcessHistorySeq(): number

/**
 * Method setProcessHistorySeq
 * @param {number} processHistorySeq (number) - (long) 
 * @returns (void)          *
 */
setProcessHistorySeq(processHistorySeq:number): void

/**
 * getLangID
 * @returns (String) - taskItem.getLangID()
 */
getResLangID(): String

/**
 * setLangID
 * @param {string} langID (string)
 * @returns (void)          *
 */
setResLangID(langID:string): void

/**
 * getResTaskDescription
 * @returns (String) - taskItem.getResTaskDescription()
 */
getResTaskDescription(): String

/**
 * setResTaskDescription
 * @param {string} resTaskDescription (string)
 * @returns (void)          *
 */
setResTaskDescription(resTaskDescription:string): void

/**
 * getResDispositionComment
 * @returns (String) - taskItem.getResDispositionComment()
 */
getResDispositionComment(): String

/**
 * setResDispositionComment
 * @param {string} dispositionComment (string)
 * @returns (void)          *
 */
setResDispositionComment(dispositionComment:string): void

}
declare class TaskSpecificInfoScriptModel {
/**
 * @returns (TaskSpecificInfoModel)          *
 */
getTaskSpecificInfoModel(): TaskSpecificInfoModel

/**
 * @param {object} obj (object)
 * @returns (boolean)          *
 */
equals(obj:object): boolean

/**
 * @returns (String)          *
 */
getActStatus(): String

/**
 * @returns (String)          *
 */
getAttributeUnitType(): String

/**
 * @returns (String)          *
 */
getAttributeValue(): String

/**
 * @returns (String)          *
 */
getAttributeValueReqFlag(): String

/**
 * @returns (Date)          *
 */
getAuditDate(): Date

/**
 * @returns (String)          *
 */
getAuditid(): String

/**
 * @returns (String)          *
 */
getAuditStatus(): String

/**
 * Misspell getter name bGroupDspOrder, reserve it for backward compatible
 * @returns (number) - (Integer) 
 */
getBGroupDsoOrder(): number

/**
 * @returns (number) - (Integer) 
 */
getBGroupDspOrder(): number

/**
 * @returns (String)          *
 */
getCheckboxDesc(): String

/**
 * @returns (String)          *
 */
getCheckboxInd(): String

/**
 * @returns (String)          *
 */
getCheckboxType(): String

/**
 * @returns (String)          *
 */
getChecklistComment(): String

/**
 * @returns (number) - (Integer) 
 */
getDisplayLength(): number

/**
 * @returns (number) - (long) 
 */
getDisplayOrder(): number

/**
 * @returns (Date)          *
 */
getEndDate(): Date

/**
 * @returns (String)          *
 */
getFeeIndicator(): String

/**
 * @returns (String)          *
 */
getFieldLabel(): String

/**
 * @returns (String)          *
 */
getFieldType(): String

/**
 * @returns (String)          *
 */
getGroupCode(): String

/**
 * @returns (number) - (Integer) 
 */
getMaxLength(): number

/**
 * @returns (String)          *
 */
getPermitID1(): String

/**
 * @returns (String)          *
 */
getPermitID2(): String

/**
 * @returns (String)          *
 */
getPermitID3(): String

/**
 * @returns (number) - (long) 
 */
getProcessID(): number

/**
 * @returns (String)          *
 */
getRequiredFlag(): String

/**
 * @returns (String)          *
 */
getServiceProviderCode(): String

/**
 * @returns (Date)          *
 */
getStartDate(): Date

/**
 * @returns (number) - (int) 
 */
getStepNumber(): number

/**
 * @returns (String)          *
 */
getTaskStatusReqFlag(): String

/**
 * @returns (String)          *
 */
getUnit(): String

/**
 * @returns (String)          *
 */
getValidationScriptName(): String

/**
 * @returns (Collection)          *
 */
getValueList(): Collection

/**
 * @returns (String)          *
 */
getVchDispFlag(): String

/**
 * @returns (number) - (int) 
 */
hashCode(): number

/**
 * @returns (Boolean)          *
 */
isCalculate(): Boolean

/**
 * Add this getter method for WDDXUtil.java2wddx
 * @returns (Boolean)          *
 */
getIsCalculate(): Boolean

/**
 * @returns (void)          *
 */
setActStatus(): void

/**
 * @returns (void)          *
 */
setAttributeUnitType(): void

/**
 * @returns (void)          *
 */
setAttributeValue(): void

/**
 * @returns (void)          *
 */
setAttributeValueReqFlag(): void

/**
 * @returns (void)          *
 */
setAuditDate(): void

/**
 * @returns (void)          *
 */
setAuditid(): void

/**
 * @returns (void)          *
 */
setAuditStatus(): void

/**
 * @returns (void)          *
 */
setBGroupDspOrder(): void

/**
 * @returns (void)          *
 */
setCheckboxDesc(): void

/**
 * @returns (void)          *
 */
setCheckboxInd(): void

/**
 * @returns (void)          *
 */
setCheckboxType(): void

/**
 * @returns (void)          *
 */
setChecklistComment(): void

/**
 * @returns (void)          *
 */
setDisplayLength(): void

/**
 * @returns (void)          *
 */
setDisplayOrder(): void

/**
 * @returns (void)          *
 */
setEndDate(): void

/**
 * @returns (void)          *
 */
setFeeIndicator(): void

/**
 * @returns (void)          *
 */
setGroupCode(): void

/**
 * @returns (void)          *
 */
setIsCalculate(): void

/**
 * @returns (void)          *
 */
setMaxLength(): void

/**
 * @returns (void)          *
 */
setPermitID1(): void

/**
 * @returns (void)          *
 */
setPermitID2(): void

/**
 * @returns (void)          *
 */
setPermitID3(): void

/**
 * @returns (void)          *
 */
setProcessID(): void

/**
 * @returns (void)          *
 */
setServiceProviderCode(): void

/**
 * @returns (void)          *
 */
setStartDate(): void

/**
 * @returns (void)          *
 */
setStepNumber(): void

/**
 * @returns (void)          *
 */
setTaskStatusReqFlag(): void

/**
 * @returns (void)          *
 */
setValidationScriptName(): void

/**
 * @returns (void)          *
 */
setValueList(): void

/**
 * @returns (void)          *
 */
setVchDispFlag(): void

/**
 * @returns (String)          *
 */
toString(): String

}
declare class TaskStatusScriptModel {
/**
 * Get TaskStatusModel.
 * @returns (TaskStatusModel) - this.taskStatus.TaskStatusModel
 */
getTaskStatus(): TaskStatusModel

/**
 * method getApplicationStatus
 * @returns (String) - this.taskStatus.String
 */
getApplicationStatus(): String

/**
 * method getAppTypeCode
 * @returns (String) - this.taskStatus.String
 */
getAppTypeCode(): String

/**
 * method getAuditDate
 * @returns (ScriptDateTime) - this.taskStatus.Date
 */
getAuditDate(): ScriptDateTime

/**
 * method getAuditFullName
 * @returns (String) - this.taskStatus.String
 */
getAuditFullName(): String

/**
 * method getAuditStatus
 * @returns (String) - this.taskStatus.String
 */
getAuditStatus(): String

/**
 * method getParentStatus
 * @returns (String) - this.taskStatus.String
 */
getParentStatus(): String

/**
 * method getProcessCode
 * @returns (String) - this.taskStatus.String
 */
getProcessCode(): String

/**
 * method getResultAction
 * @returns (String) - this.taskStatus.String
 */
getResultAction(): String

/**
 * method getRole
 * @returns (String) - this.taskStatus.String
 */
getRole(): String

/**
 * method getStatusDescription
 * @returns (String) - this.taskStatus.String
 */
getStatusDescription(): String

/**
 * method getTaskDescription
 * @returns (String) - this.taskStatus.String
 */
getTaskDescription(): String

/**
 * method getTaskStatusCode
 * @returns (String) - this.taskStatus.String
 */
getTaskStatusCode(): String

/**
 * method setApplicationStatus
 * @param {string} pApplicationStatus (string)
 * @returns (void)          *
 */
setApplicationStatus(pApplicationStatus:string): void

/**
 * method setAppTypeCode
 * @param {string} pAppTypeCode (string)
 * @returns (void)          *
 */
setAppTypeCode(pAppTypeCode:string): void

/**
 * method setAuditDate
 * @param {Date} pAuditDate (Date)
 * @returns (void)          *
 */
setAuditDate(pAuditDate:Date): void

/**
 * method setAuditFullName
 * @param {string} pAuditFullName (string)
 * @returns (void)          *
 */
setAuditFullName(pAuditFullName:string): void

/**
 * method setAuditStatus
 * @param {string} pAuditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(pAuditStatus:string): void

/**
 * method setParentStatus
 * @param {string} pParentStatus (string)
 * @returns (void)          *
 */
setParentStatus(pParentStatus:string): void

/**
 * method setProcessCode
 * @param {string} pProcessCode (string)
 * @returns (void)          *
 */
setProcessCode(pProcessCode:string): void

/**
 * method setResultAction
 * @param {string} pResultAction (string)
 * @returns (void)          *
 */
setResultAction(pResultAction:string): void

/**
 * method setRole
 * @param {string} pRole (string)
 * @returns (void)          *
 */
setRole(pRole:string): void

/**
 * method setStatusDescription
 * @param {string} pStatusDescription (string)
 * @returns (void)          *
 */
setStatusDescription(pStatusDescription:string): void

/**
 * method setTaskDescription
 * @param {string} pTaskDescription (string)
 * @returns (void)          *
 */
setTaskDescription(pTaskDescription:string): void

/**
 * method setTaskStatusCode
 * @param {string} pTaskStatusCode (string)
 * @returns (void)          *
 */
setTaskStatusCode(pTaskStatusCode:string): void

/**
 * method getAuditDateString
 * @returns (String) - this.taskStatus.String
 */
getAuditDateString(): String

/**
 * method setAuditDateString
 * @param {string} pAuditDateString (string)
 * @returns (void)          *
 */
setAuditDateString(pAuditDateString:string): void

/**
 * method getMouClockAction
 * @returns (String) - this.taskStatus.String
 */
getMouClockAction(): String

/**
 * method mouClockAction
 * @param {string} mouClckAction (string)
 * @returns (void)          *
 */
setMouClockAction(mouClckAction:string): void

/**
 * Set taskStatus.
 * @param {TaskStatusModel} taskStatus (TaskStatusModel)
 * @returns (void)          *
 */
setTaskItem(taskStatus:TaskStatusModel): void

/**
 * method setServiceProviderCode
 * @param {string} pServiceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(pServiceProviderCode:string): void

/**
 * method getResStatusDescription
 * @returns (String) - this.taskStatus.String
 */
getResStatusDescription(): String

/**
 * method setResStatusDescription
 * @param {string} pStatusDescription (string)
 * @returns (void)          *
 */
setResStatusDescription(pStatusDescription:string): void

/**
 * method getResLangID
 * @returns (String) - this.taskStatus.String
 */
getResLangID(): String

/**
 * method setResLangID
 * @param {string} resLangID (string)
 * @returns (void)          *
 */
setResLangID(resLangID:string): void

/**
 * method getResLangID
 * @returns (String) - this.taskStatus.String
 */
getResApplicationStatus(): String

/**
 * method setResLangID
 * @param {string} resApplicationStatus (string)
 * @returns (void)          *
 */
setResApplicationStatus(resApplicationStatus:string): void

}
declare class TimeAccountingScriptModel {
/**
 * @returns (TimeLogModel)          *
 */
getTimeLogModel(): TimeLogModel

/**
 * @returns (String)          *
 */
getServiceProviderCode(): String

/**
 * @returns (String)          *
 */
getAuditId(): String

/**
 * @returns (CapIDModel)          *
 */
getCapIDModel(): CapIDModel

/**
 * @returns (void)          *
 */
setCapIDModel(): void

/**
 * @returns (number) - (Long) 
 */
getTimeGroupSeq(): number

/**
 * @returns (void)          *
 */
setTimeGroupSeq(): void

/**
 * @returns (ScriptDateTime)          *
 */
getCreatedDate(): ScriptDateTime

/**
 * @returns (void)          *
 */
setCreatedDate(): void

/**
 * @returns (String)          *
 */
getCreatedBy(): String

/**
 * @returns (void)          *
 */
setCreatedBy(): void

/**
 * @returns (String)          *
 */
getServProvCode(): String

/**
 * @returns (void)          *
 */
setServProvCode(): void

/**
 * @returns (number) - (Long) 
 */
getTimeLogSeq(): number

/**
 * @returns (void)          *
 */
setTimeLogSeq(): void

/**
 * @returns (number) - (Long) 
 */
getTimeTypeSeq(): number

/**
 * @returns (void)          *
 */
setTimeTypeSeq(): void

/**
 * @returns (String)          *
 */
getAccessModel(): String

/**
 * @returns (void)          *
 */
setAccessModel(): void

/**
 * @returns (ScriptDateTime)          *
 */
getDateLogged(): ScriptDateTime

/**
 * @returns (void)          *
 */
setDateLogged(): void

/**
 * @returns (ScriptDateTime)          *
 */
getStartTime(): ScriptDateTime

/**
 * @returns (void)          *
 */
setStartTime(): void

/**
 * @returns (ScriptDateTime)          *
 */
getEndTime(): ScriptDateTime

/**
 * @returns (void)          *
 */
setEndTime(): void

/**
 * @returns (ScriptDateTime)          *
 */
getTimeElapsed(): ScriptDateTime

/**
 * @returns (void)          *
 */
setTimeElapsed(): void

/**
 * @returns (String)          *
 */
getReference(): String

/**
 * @returns (void)          *
 */
setReference(): void

/**
 * @returns (TimeTypeModel)          *
 */
getTimeTypeModel(): TimeTypeModel

/**
 * @returns (void)          *
 */
setTimeTypeModel(): void

/**
 * @returns (String)          *
 */
getBillable(): String

/**
 * @returns (void)          *
 */
setBillable(): void

/**
 * @returns (ScriptDateTime)          *
 */
getLastChangeDate(): ScriptDateTime

/**
 * @returns (void)          *
 */
setLastChangeDate(): void

/**
 * @returns (String)          *
 */
getLastChangeUser(): String

/**
 * @returns (void)          *
 */
setLastChangeUser(): void

/**
 * @returns (String)          *
 */
getVehicleId(): String

/**
 * @returns (void)          *
 */
setVehicleId(): void

/**
 * @returns (number) - (Integer) 
 */
getTotalMinutes(): number

/**
 * @returns (void)          *
 */
setTotalMinutes(): void

/**
 * @returns (String)          *
 */
getMaterials(): String

/**
 * @returns (void)          *
 */
setMaterials(): void

/**
 * @returns (number) - (Double) 
 */
getMaterialsCost(): number

/**
 * @returns (void)          *
 */
setMaterialsCost(): void

/**
 * @returns (number) - (Double) 
 */
getMileageStart(): number

/**
 * @returns (void)          *
 */
setMileageStart(): void

/**
 * @returns (number) - (Double) 
 */
getMileageEnd(): number

/**
 * @returns (void)          *
 */
setMileageEnd(): void

/**
 * @returns (number) - (Double) 
 */
getMilageTotal(): number

/**
 * @returns (void)          *
 */
setMilageTotal(): void

/**
 * @returns (number) - (Double) 
 */
getEntryRate(): number

/**
 * @returns (void)          *
 */
setEntryRate(): void

/**
 * @returns (number) - (Double) 
 */
getEntryPct(): number

/**
 * @returns (void)          *
 */
setEntryPct(): void

/**
 * @returns (number) - (Double) 
 */
getEntryCost(): number

/**
 * @returns (void)          *
 */
setEntryCost(): void

/**
 * @returns (String)          *
 */
getNotation(): String

/**
 * @returns (void)          *
 */
setNotation(): void

/**
 * @returns (number) - (Long) 
 */
getUserGroupSeqNbr(): number

/**
 * @returns (void)          *
 */
setUserGroupSeqNbr(): void

/**
 * get time log status L/U
 * @returns (String)          *
 */
getTimeLogStatus(): String

/**
 * set time log status
 * @param {string} timeLogStatus (string)
 * @returns (void)          *
 */
setTimeLogStatus(timeLogStatus:string): void

}
declare class TimeGroupTypeScriptModel {
/**
 * @returns (String) - the serviceProviderCode
 */
getServiceProviderCode(): String

/**
 * @returns (number) - (Long) the timeGroupSeq
 */
getTimeGroupSeq(): number

/**
 * @param {number} timeGroupSeq (number) - (Long) 
 * @returns (void)          *
 */
setTimeGroupSeq(timeGroupSeq:number): void

/**
 * @returns (String) - the timeGroupName
 */
getTimeGroupName(): String

/**
 * @param {string} timeGroupName (string)
 * @returns (void)          *
 */
setTimeGroupName(timeGroupName:string): void

/**
 * @returns (String) - the timeGroupDesc
 */
getTimeGroupDesc(): String

/**
 * @param {string} timeGroupDesc (string)
 * @returns (void)          *
 */
setTimeGroupDesc(timeGroupDesc:string): void

/**
 * @returns (number) - (Long) the timeTypeSeq
 */
getTimeTypeSeq(): number

/**
 * @param {number} timeTypeSeq (number) - (Long) 
 * @returns (void)          *
 */
setTimeTypeSeq(timeTypeSeq:number): void

/**
 * @returns (String) - the recordType
 */
getRecordType(): String

/**
 * @param {string} recordType (string)
 * @returns (void)          *
 */
setRecordType(recordType:string): void

/**
 * @returns (String) - the timeTypeName
 */
getTimeTypeName(): String

/**
 * @param {string} timeTypeName (string)
 * @returns (void)          *
 */
setTimeTypeName(timeTypeName:string): void

/**
 * @returns (String) - the billableFlag
 */
getBillableFlag(): String

/**
 * @param {string} billableFlag (string)
 * @returns (void)          *
 */
setBillableFlag(billableFlag:string): void

/**
 * @returns (number) - (Double) the defaultRate
 */
getDefaultRate(): number

/**
 * @param {number} defaultRate (number) - (Double) 
 * @returns (void)          *
 */
setDefaultRate(defaultRate:number): void

/**
 * @returns (number) - (Double) the m_defaultPctAdj
 */
getDefaultPctAdj(): number

/**
 * @param {number} pctAdj (number) - (Double) 
 * @returns (void)          *
 */
setDefaultPctAdj(pctAdj:number): void

/**
 * @returns (CapTypeModel) - the capTypeModel
 */
getCapTypeModel(): CapTypeModel

/**
 * @param {CapTypeModel} capTypeModel (CapTypeModel)
 * @returns (void)          *
 */
setCapTypeModel(capTypeModel:CapTypeModel): void

/**
 * @returns (String) - the auditID
 */
getAuditID(): String

/**
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * @returns (TimeTypeModel) - the timeTypeModel
 */
getTimeTypeModel(): TimeTypeModel

/**
 * @param {TimeTypeModel} timeTypeModel (TimeTypeModel)
 * @returns (void)          *
 */
setTimeTypeModel(timeTypeModel:TimeTypeModel): void

}
declare class TrustAccountPeopleScriptModel {
/**
 * getTrustAccountPeopleModel
 * @returns (TrustAccountPeopleModel)          *
 */
getTrustAccountPeopleModel(): TrustAccountPeopleModel

/**
 * setTrustAccountPeopleModel
 * @param {TrustAccountPeopleModel} trustAccountPeopleModel (TrustAccountPeopleModel)
 * @returns (void)          *
 */
setTrustAccountPeopleModel(trustAccountPeopleModel:TrustAccountPeopleModel): void

/**
 * getAcctID
 * @returns (String)          *
 */
getAcctID(): String

/**
 * getAcctNBR
 * @returns (number) - (Long) 
 */
getAcctNBR(): number

/**
 * getFirstName
 * @returns (String)          *
 */
getFirstName(): String

/**
 * getLastName
 * @returns (String)          *
 */
getLastName(): String

/**
 * getMiddleName
 * @returns (String)          *
 */
getMiddleName(): String

/**
 * getPeopleNBR
 * @returns (number) - (Long) 
 */
getPeopleNBR(): number

/**
 * getPeopleType
 * @returns (String)          *
 */
getPeopleType(): String

/**
 * getRecDate
 * @returns (Date)          *
 */
getRecDate(): Date

/**
 * getRecFulName
 * @returns (String)          *
 */
getRecFulName(): String

/**
 * getRecStatus
 * @returns (String)          *
 */
getRecStatus(): String

/**
 * getServProvCode
 * @returns (String)          *
 */
getServProvCode(): String

/**
 * getAddress1
 * @returns (String)          *
 */
getAddress1(): String

/**
 * getAddress2
 * @returns (String)          *
 */
getAddress2(): String

/**
 * getAddress3
 * @returns (String)          *
 */
getAddress3(): String

/**
 * getPhone1
 * @returns (String)          *
 */
getPhone1(): String

/**
 * getPhone2
 * @returns (String)          *
 */
getPhone2(): String

/**
 * @returns (String)          *
 */
getPhone3(): String

/**
 * getFax
 * @returns (String)          *
 */
getFax(): String

/**
 * getEmail
 * @returns (String)          *
 */
getEmail(): String

/**
 * getLicNbr
 * @returns (String)          *
 */
getLicNbr(): String

/**
 * getExpirationDate
 * @returns (Date)          *
 */
getExpirationDate(): Date

}
declare class TrustAccountModel {
/**
 * getAddressModel
 * @returns (TrustAccountModel)          *
 */
getTrustAccountModel(): TrustAccountModel

/**
 * setAddressModel
 * @param {TrustAccountModel} trustAccountModel (TrustAccountModel)
 * @returns (void)          *
 */
setTrustAccountModel(trustAccountModel:TrustAccountModel): void

/**
 * getAcctID
 * @returns (String)          *
 */
getAcctID(): String

/**
 * getAcctSeq
 * @returns (number) - (Long) 
 */
getAcctSeq(): number

/**
 * getAcctStatus
 * @returns (String)          *
 */
getAcctStatus(): String

/**
 * getAcctBalance
 * @returns (number) - (Double) 
 */
getAcctBalance(): number

/**
 * getDescription
 * @returns (String)          *
 */
getDescription(): String

/**
 * getOverdraft
 * @returns (String)          *
 */
getOverdraft(): String

/**
 * getRecDate
 * @returns (Date)          *
 */
getRecDate(): Date

/**
 * getRecFulName
 * @returns (String)          *
 */
getRecFulName(): String

/**
 * getRecStatus
 * @returns (String)          *
 */
getRecStatus(): String

/**
 * getServProvCode
 * @returns (String)          *
 */
getServProvCode(): String

/**
 * getOverdraftLimit
 * @returns (number) - (Double) 
 */
getOverdraftLimit(): number

/**
 * getLedgerAccount
 * @returns (String)          *
 */
getLedgerAccount(): String

/**
 * getTransactions
 * @returns (Collection)          *
 */
getTransactions(): Collection

/**
 * get Threshold Amount.
 * @returns (number) - (Double) 
 */
getThresholdAmount(): number

/**
 * get Primary.
 * @returns (String)          *
 */
getPrimary(): String

}
declare class TrustAccountTransactionModel {
/**
 * getTransactionModel
 * @returns (TransactionModel)          *
 */
getTransactionModel(): TransactionModel

/**
 * setTransactionModel
 * @param {TransactionModel} transactionModel (TransactionModel)
 * @returns (void)          *
 */
setTransactionModel(transactionModel:TransactionModel): void

/**
 * getServProvCode
 * @returns (String)          *
 */
getServProvCode(): String

/**
 * getTransSeq
 * @returns (number) - (Long) 
 */
getTransSeq(): number

/**
 * getAcctSeq
 * @returns (number) - (Long) 
 */
getAcctSeq(): number

/**
 * getAcctID
 * @returns (String)          *
 */
getAcctID(): String

/**
 * getTransAmount
 * @returns (number) - (Double) 
 */
getTransAmount(): number

/**
 * getTransType
 * @returns (String)          *
 */
getTransType(): String

/**
 * getTargetAcctID
 * @returns (String)          *
 */
getTargetAcctID(): String

/**
 * getCapID
 * @returns (CapIDModel)          *
 */
getCapID(): CapIDModel

/**
 * getClientTransNbr
 * @returns (number) - (Long) 
 */
getClientTransNbr(): number

/**
 * getClientReceiptNbr
 * @returns (number) - (Long) 
 */
getClientReceiptNbr(): number

/**
 * getOfficeCode
 * @returns (String)          *
 */
getOfficeCode(): String

/**
 * getPaymentSeqNbr
 * @returns (number) - (Long) 
 */
getPaymentSeqNbr(): number

/**
 * getRecDate
 * @returns (Date)          *
 */
getRecDate(): Date

/**
 * getRecStatus
 * @returns (String)          *
 */
getRecStatus(): String

/**
 * getRecFulNam
 * @returns (String)          *
 */
getRecFulNam(): String

/**
 * getEndRecDate
 * @returns (Date)          *
 */
getEndRecDate(): Date

/**
 * getAltID
 * @returns (String)          *
 */
getAltID(): String

}
declare class UserTempDataModel {
/**
 * Get UserTempDataModel.
 * @returns (UserTempDataModel) - UserTempDataModel
 */
getUserTempData(): UserTempDataModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get ID.
 * @returns (number) - (Long) Long
 */
getID(): number

/**
 * Get userID.
 * @returns (String) - String
 */
getUserID(): String

/**
 * Get functionName.
 * @returns (String) - String
 */
getFunctionName(): String

/**
 * Get functionContent.
 * @returns (String) - String
 */
getFunctionContent(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get audited.
 * @returns (String) - String
 */
getAudited(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set ID.
 * @param {number} ID (number) - (Long) 
 * @returns (void)          *
 */
setID(ID:number): void

/**
 * Set userID.
 * @param {string} userID (string)
 * @returns (void)          *
 */
setUserID(userID:string): void

/**
 * Set functionName.
 * @param {string} functionName (string)
 * @returns (void)          *
 */
setFunctionName(functionName:string): void

/**
 * Set functionContent.
 * @param {string} functionContent (string)
 * @returns (void)          *
 */
setFunctionContent(functionContent:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set audited.
 * @param {string} audited (string)
 * @returns (void)          *
 */
setAudited(audited:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class WorkflowAuditTrailModel {
/**
 * Get WorkflowAuditTrailModel.
 * @returns (WorkflowAuditTrailModel) - WorkflowAuditTrailModel
 */
getWorkflowAuditTrail(): WorkflowAuditTrailModel

/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get staff.
 * @returns (SysUserModel) - SysUserModel
 */
getStaff(): SysUserModel

/**
 * Get activityName.
 * @returns (String) - String
 */
getActivityName(): String

/**
 * Get activityStatus.
 * @returns (String) - String
 */
getActivityStatus(): String

/**
 * Get activityDate.
 * @returns (Date) - java.util.Date
 */
getActivityDate(): Date

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Set workflowAuditTrail.
 * @param {WorkflowAuditTrailModel} workflowAuditTrail (WorkflowAuditTrailModel)
 * @returns (void)          *
 */
setWorkflowAuditTrail(workflowAuditTrail:WorkflowAuditTrailModel): void

/**
 * Set serviceProviderCode.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set staff.
 * @param {SysUserModel} staff (SysUserModel)
 * @returns (void)          *
 */
setStaff(staff:SysUserModel): void

/**
 * Set activityName.
 * @param {string} activityName (string)
 * @returns (void)          *
 */
setActivityName(activityName:string): void

/**
 * Set activityStatus.
 * @param {string} activityStatus (string)
 * @returns (void)          *
 */
setActivityStatus(activityStatus:string): void

/**
 * Set activityDate.
 * @param {ScriptDateTime} activityDate (ScriptDateTime)
 * @returns (void)          *
 */
setActivityDate(activityDate:ScriptDateTime): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

}
declare class WorkOrderAssetModel {
/**
 * Get serviceProviderCode.
 * @returns (String) - String
 */
getServiceProviderCode(): String

/**
 * Get workOrderAssetModel.
 * @returns (WorkOrderAssetModel) - workOrderAssetModel
 */
getWorkOrderAssetModel(): WorkOrderAssetModel

/**
 * Set workOrderAssetModel
 * @returns (void)          *
 */
setWorkOrderAssetModel(): void

/**
 * method getCapID.
 * @returns (CapIDModel) - capIDModel
 */
getCapID(): CapIDModel

/**
 * method setCapID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * method getAssetPK.
 * @returns (AssetMasterPK) - AssetMasterPK
 */
getAssetPK(): AssetMasterPK

/**
 * method setAssetPK.
 * @param {AssetMasterPK} assetPK (AssetMasterPK)
 * @returns (void)          *
 */
setAssetPK(assetPK:AssetMasterPK): void

}
declare class X4FeeItemInvoiceModel {
/**
 * Get X4FeeItemInvoiceModel.
 * @returns (X4FeeItemInvoiceModel) - X4FeeItemInvoiceModel
 */
getX4FeeItemInvoice(): X4FeeItemInvoiceModel

/**
 * Get capID.
 * @returns (CapIDModel) - CapIDModel
 */
getCapID(): CapIDModel

/**
 * Get fee sequence number.
 * @returns (number) - (long) long
 */
getFeeSeqNbr(): number

/**
 * Get invoice number.
 * @returns (number) - (long) long
 */
getInvoiceNbr(): number

/**
 * Get paymentPeriod.
 * @returns (String) - String
 */
getPaymentPeriod(): String

/**
 * Get fee.
 * @returns (number) - (double) double
 */
getFee(): number

/**
 * Get feeDescription.
 * @returns (String) - String
 */
getFeeDescription(): String

/**
 * Get unit.
 * @returns (number) - (double) double
 */
getUnit(): number

/**
 * Get userDescription.
 * @returns (String) - String
 */
getUserDescription(): String

/**
 * Get applyDate.
 * @returns (Date) - Date
 */
getApplyDate(): Date

/**
 * Get accCodeL1.
 * @returns (String) - String
 */
getAccCodeL1(): String

/**
 * Get accCodeL2.
 * @returns (String) - String
 */
getAccCodeL2(): String

/**
 * Get accCodeL3.
 * @returns (String) - String
 */
getAccCodeL3(): String

/**
 * Get udf1.
 * @returns (String) - String
 */
getUdf1(): String

/**
 * Get udf2.
 * @returns (String) - String
 */
getUdf2(): String

/**
 * Get udf3.
 * @returns (String) - String
 */
getUdf3(): String

/**
 * Get udf4.
 * @returns (String) - String
 */
getUdf4(): String

/**
 * Get feeitemStatus.
 * @returns (String) - String
 */
getFeeitemStatus(): String

/**
 * Get auditDate.
 * @returns (ScriptDateTime) - ScriptDateTime
 */
getAuditDate(): ScriptDateTime

/**
 * Get auditID.
 * @returns (String) - String
 */
getAuditID(): String

/**
 * Get auditStatus.
 * @returns (String) - String
 */
getAuditStatus(): String

/**
 * Get feeCode.
 * @returns (String) - String
 */
getFeeCode(): String

/**
 * Set capID.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Set feeSeqNbr.
 * @param {number} feeSeqNbr (number) - (long) 
 * @returns (void)          *
 */
setFeeSeqNbr(feeSeqNbr:number): void

/**
 * Set invoiceNbr.
 * @param {number} invoiceNbr (number) - (long) 
 * @returns (void)          *
 */
setInvoiceNbr(invoiceNbr:number): void

/**
 * Set paymentPeriod.
 * @param {string} paymentPeriod (string)
 * @returns (void)          *
 */
setPaymentPeriod(paymentPeriod:string): void

/**
 * Set fee.
 * @param {number} fee (number) - (double) 
 * @returns (void)          *
 */
setFee(fee:number): void

/**
 * Set feeDescription.
 * @param {string} feeDescription (string)
 * @returns (void)          *
 */
setFeeDescription(feeDescription:string): void

/**
 * Set unit.
 * @param {number} unit (number) - (double) 
 * @returns (void)          *
 */
setUnit(unit:number): void

/**
 * Set userDescription.
 * @param {string} userDescription (string)
 * @returns (void)          *
 */
setUserDescription(userDescription:string): void

/**
 * Set applyDate.
 * @param {Date} applyDate (Date)
 * @returns (void)          *
 */
setApplyDate(applyDate:Date): void

/**
 * Set accCodeL1.
 * @param {string} accCodeL1 (string)
 * @returns (void)          *
 */
setAccCodeL1(accCodeL1:string): void

/**
 * Set accCodeL2.
 * @param {string} accCodeL2 (string)
 * @returns (void)          *
 */
setAccCodeL2(accCodeL2:string): void

/**
 * Set accCodeL3.
 * @param {string} accCodeL3 (string)
 * @returns (void)          *
 */
setAccCodeL3(accCodeL3:string): void

/**
 * Set udf1.
 * @param {string} udf1 (string)
 * @returns (void)          *
 */
setUdf1(udf1:string): void

/**
 * Set udf2.
 * @param {string} udf2 (string)
 * @returns (void)          *
 */
setUdf2(udf2:string): void

/**
 * Set udf3.
 * @param {string} udf3 (string)
 * @returns (void)          *
 */
setUdf3(udf3:string): void

/**
 * Set udf4.
 * @param {string} udf4 (string)
 * @returns (void)          *
 */
setUdf4(udf4:string): void

/**
 * Set feeitemStatus.
 * @param {string} feeitemStatus (string)
 * @returns (void)          *
 */
setFeeitemStatus(feeitemStatus:string): void

/**
 * Set auditDate.
 * @param {ScriptDateTime} auditDate (ScriptDateTime)
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * Set auditID.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Set auditStatus.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Set feeCode.
 * @param {string} feeCode (string)
 * @returns (void)          *
 */
setFeeCode(feeCode:string): void

/**
 * Set method of the attribute.
 * @param {string} feeSchedule (string)
 * @returns (void)          *
 */
setFeeSchedule(feeSchedule:string): void

/**
 * Get method of the attribute.
 * @returns (String)          *
 */
getFeeSchedule(): String

/**
 * Set method of the attribute.
 * @param {string} version (string)
 * @returns (void)          *
 */
setVersion(version:string): void

/**
 * Get method of the attribute.
 * @returns (String)          *
 */
getVersion(): String

/**
 * @returns (String)          *
 */
getStrCAPID(): String

/**
 * @param {string} strCAPID (string)
 * @returns (void)          *
 */
setStrCAPID(strCAPID:string): void

/**
 * @returns (number) - (Long) 
 */
getPriority(): number

/**
 * @param {number} priority (number) - (Long) 
 * @returns (void)          *
 */
setPriority(priority:number): void

/**
 * @returns (String) - the feeAllocationType
 */
getFeeAllocationType(): String

/**
 * @param {string} feeAllocationType (string)
 * @returns (void)          *
 */
setFeeAllocationType(feeAllocationType:string): void

/**
 * @returns (number) - (Double) the accountCode1Allocation
 */
getAccountCode1Allocation(): number

/**
 * @param {number} accountCode1Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode1Allocation(accountCode1Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode2Allocation
 */
getAccountCode2Allocation(): number

/**
 * @param {number} accountCode2Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode2Allocation(accountCode2Allocation:number): void

/**
 * @returns (number) - (Double) the accountCode3Allocation
 */
getAccountCode3Allocation(): number

/**
 * @param {number} accountCode3Allocation (number) - (Double) 
 * @returns (void)          *
 */
setAccountCode3Allocation(accountCode3Allocation:number): void

}
declare class XRefContactAddressModel {
/**
 * Get the cross reference contact address model.
 * @returns (XRefContactAddressModel) - the cross reference contact address model
 */
getXRefContactAddressModel(): XRefContactAddressModel

/**
 * Set the cross reference contact address model.
 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel)
 * @returns (void)          *
 */
setXRefContactAddressModel(xRefContactAddressModel:XRefContactAddressModel): void

/**
 * Get the service provider code.
 * @returns (String) - the service provider code
 */
getServiceProviderCode(): String

/**
 * Set the service provider code.
 * @param {string} serviceProviderCode (string)
 * @returns (void)          *
 */
setServiceProviderCode(serviceProviderCode:string): void

/**
 * Get the cap ID model.
 * @returns (CapIDModel) - the cap ID model
 */
getCapID(): CapIDModel

/**
 * Set the cap ID model.
 * @param {CapIDModel} capID (CapIDModel)
 * @returns (void)          *
 */
setCapID(capID:CapIDModel): void

/**
 * Get the entity type.
 * @returns (String) - the entity type
 */
getEntityType(): String

/**
 * Set the entity type.
 * @param {string} entityType (string)
 * @returns (void)          *
 */
setEntityType(entityType:string): void

/**
 * Get the entity id.
 * @returns (number) - (Long) the entity id
 */
getEntityID(): number

/**
 * Set the entity id.
 * @param {number} entityID (number) - (Long) 
 * @returns (void)          *
 */
setEntityID(entityID:number): void

/**
 * Get the address id.
 * @returns (number) - (Long) the address id
 */
getAddressID(): number

/**
 * Set the address id.
 * @param {number} addressID (number) - (Long) 
 * @returns (void)          *
 */
setAddressID(addressID:number): void

/**
 * Get the contact address model.
 * @returns (ContactAddressModel) - the contact address model
 */
getContactAddressModel(): ContactAddressModel

/**
 * Set the contact address model.
 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel)
 * @returns (void)          *
 */
setContactAddressModel(contactAddressModel:ContactAddressModel): void

/**
 * Get the audit id.
 * @returns (String) - the audit id
 */
getAuditID(): String

/**
 * Set the audit id.
 * @param {string} auditID (string)
 * @returns (void)          *
 */
setAuditID(auditID:string): void

/**
 * Get the audit status.
 * @returns (String) - the audit status
 */
getAuditStatus(): String

/**
 * Set the audit status.
 * @param {string} auditStatus (string)
 * @returns (void)          *
 */
setAuditStatus(auditStatus:string): void

/**
 * Get the audit date.
 * @returns (ScriptDateTime) - the audit date
 */
getAuditDate(): ScriptDateTime

/**
 * Set the audit date.
 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the new audit date
 * @returns (void)          *
 */
setAuditDate(auditDate:ScriptDateTime): void

/**
 * @returns (number) - (int) 
 */
hashCode(): number

/**
 * @param {object} obj (object)
 * @returns (boolean)          *
 */
equals(obj:object): boolean

/**
 * @returns (String)          *
 */
toString(): String

}
declare class ScriptDateTime {
year: number
second: number
epochMilliseconds: number
minute: number
month: number
dayOfMonth: number
hourOfDay: number
}
declare class ActivityModel {
}
declare class RefActivityModel {
}
declare class QueryFormat {
}
declare class SysUserModel {
}
declare class AddressConditionModel {
}
declare class RefAddressModel {
}
declare class CapIDScriptModel {
}
declare class TableModel {
}
declare class ASITableDrillDownModel {
}
declare class ConditionScriptModel {
}
declare class EntityPKModel {
}
declare class GenericTemplateFieldPK {
}
declare class TemplateModel {
}
declare class ContinuingEducationScriptModel {
}
declare class TaskItemModel {
}
declare class ContractorLicenseModel {
}
declare class Socket {
}
declare class InetAddress {
}
declare class DocumentModel {
}
declare class DocumentEntityAssociationModel {
}
declare class X509Certificate {
}
declare class HttpConnectionParams {
}
declare class Collection {
}
declare class CalendarTaskModel {
}
declare class CapScriptModel {
}
declare class CommonCOnditionScriptModel {
}
declare class PaymentScriptModel {
}
declare class ACAModel {
}
declare class CommonConditionScriptModel {
}
declare class CapDetailScriptModel {
}
declare class ASITableDrillDSeriesModel {
}
declare class AssetConditionAssessmentModel {
}
declare class AssetCAWorkOrderModel {
}
declare class GenericCostingModel {
}
declare class AssetDataModel {
}
declare class AssetMasterPK {
}
declare class AssetMasterModel {
}
declare class AssetTypeModel {
}
declare class StructureModel {
}
declare class AttributeModel {
}
declare class CAEConditionScriptModel {
}
declare class XGStructureCalendarModel {
}
declare class WorkingDayQueryModel {
}
declare class CapConditionScriptModel {
}
declare class RefOwnerModel {
}
declare class B3APOAttributeScriptModel {
}
declare class GISObjects {
}
declare class StringBuffer {
}
declare class StatusHistoryModel {
}
declare class CommentScriptModel {
}
declare class CapCommentScriptModel {
}
declare class BValuatnScriptModel {
}
declare class EmailMessageScriptModel {
}
declare class Hashtable {
}
declare class EducationScriptModel {
}
declare class MessageModel {
}
declare class MessageAttachmentModel {
}
declare class MessageContactModel {
}
declare class AuditModel {
}
declare class ExaminationScriptModel {
}
declare class ProviderDetailModel {
}
declare class ProviderRosterModel {
}
declare class ExamProviderDetailModel {
}
declare class Context {
}
declare class Scriptable {
}
declare class ExpressionFieldModel {
}
declare class HashMap {
}
declare class ExpressionRunResultModel {
}
declare class Throwable {
}
declare class FeeItemScriptModel {
}
declare class F4FeeItemScriptModel {
}
declare class BCalcValuatnScriptModel {
}
declare class TransactionModel {
}
declare class ParameterModel {
}
declare class GenericTemplateAttribute {
}
declare class GenericTemplateTableValue {
}
declare class TemplateRow {
}
declare class GISTypeScriptModel {
}
declare class GISObjectScriptModel {
}
declare class LicenseProfessionalScriptModel {
}
declare class PublicUserModel {
}
declare class StructureOwnerModel {
}
declare class StructureLocationModel {
}
declare class UserDistrictModel {
}
declare class RandomAuditRuleModel {
}
declare class InspectionScriptModel {
}
declare class GGuideSheetItemModel {
}
declare class CalendarEventModel {
}
declare class InspectionIDModel {
}
declare class GInspProcessModel {
}
declare class InfoTableGroupCodeModel {
}
declare class InfoTableSubgroupModel {
}
declare class InfoTableColumnModel {
}
declare class InfoTableValueModel {
}
declare class GGuideSheetModel {
}
declare class TrustAccountPeopleModel {
}
declare class ContactAttributeScriptModel {
}
declare class LicenseScriptModel {
}
declare class PeopleAttributeScriptModel {
}
declare class MeetingAttendeeModel {
}
declare class CapOwnerScriptModel {
}
declare class OwnerConditionScriptModel {
}
declare class RatingFormulaFieldModel {
}
declare class ReceiptModel {
}
declare class GenericSearchModel {
}
declare class MeetingNotificationModel {
}
declare class TimeTypeModel {
}
declare class ParcelScriptModel {
}
declare class PeopleScriptModel {
}
declare class ProcessNoteModel {
}
declare class ProjectModel {
}
declare class UserDisciplineModel {
}
declare class UserModel {
}
declare class XPublicUserSSOModel {
}
declare class RefAppSpecInfoDropDownModel {
}
declare class RefAppSpecInfoFieldModel {
}
declare class RefStdConditionModel {
}
declare class ReportInfoModel {
}
declare class EDMSEntityIdModel {
}
declare class ReportResultModel {
}
declare class byte {
}
declare class RowModel {
}
declare class Script {
}
declare class ReportDetailModel {
}
declare class SetHeaderModel {
}
declare class SmartChoiceGroupModel {
}
declare class SetDetailsModel {
}
declare class StandardCommentModel {
}
declare class TaskSpecificInfoModel {
}
declare class TaskStatusModel {
}
declare class TimeLogModel {
}
declare class TrustAccountScriptModel {
}
declare class TrustAccountTransactionScriptModel {
}
declare class StructureEstablishmentModel {
}
declare class Calendar {
}
declare class AVLogger {
}
declare class CostingModel {
}   
declare class CapTypeScriptModel {
}
declare class WSConsumerService {
}
declare class RefAppSpecInfoGroupModel {
}
declare class RFeeItemModel {
}
declare class TrustAccountAssociationModel {
}
declare class ParcelConditionScriptModel {
}
declare class PartTransactionPK {
}
declare class XRefContactEntityModel {
}
declare class ProcessRelationModel {
}
declare class BizDomainScriptModel {
}
declare class UserGroupModel{
}