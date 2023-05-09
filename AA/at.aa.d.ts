/// <reference path="at.objects.d.ts" />
/// <reference path="at.java.d.ts" />

declare namespace aa {
	
	/**
	 * Aborts the script. Commonly used in script testing.
	 * @returns {void}
	 */
	function abortScript(): void

	/**
	 * Returns the Service Provider Code a.k.a. the agency name.
	 */
	function getServiceProviderCode(): string

	/**
	 * Displays a text string in the log. Commonly used in script testing.
	 * @param message The message to be displayed in the log.
	 */
	function print(message: string): any

	namespace date {

		function getAgencyTimezoneDate(): ScriptDateTime
		function getCurrentDate(): ScriptDateTime
		function parseDate(strDate: string): ScriptDateTime
		function parseISODate(str: string): ScriptDateTime
		/**
		 * Adds a number of days to a date.
		 * @param existingDate A string representing a date in the format MM/DD/YYYY
		 * @param numberToAdd The number of days to add to the existing date
		 * @returns A string representing the new date in the format MM/DD/YYYY
		 */
		function addDate(existingDate: string, numberToAdd: number): string
		function transToJavaUtilDate(milliseconds: number): Date
		function diffDate(firstDate: string, secondDate: string): number
	}

	namespace env {
		var paramValues: Hashtable
		function setValue(key: string, value: any): void
		function getValue(key: string): any
		function setParamValues(values: Hashtable): void
		function getParamValues(): Hashtable
	}

	namespace acaPageFlow {
		/**
		 * Gets the page components.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} stepIndex (string) - the step index
		 * @param {string} pageIndex (string) - the page index
		 * @returns (ScriptResult<any>) - the page components
		 */
		function getPageComponents(capID:CapIDModel, stepIndex:string, pageIndex:string): ScriptResult<any>

		/**
		 * Hide cap page for ACA.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} stepIndex (string) - the step index
		 * @param {string} pageIndex (string) - the page index
		 * @returns (ScriptResult<any>) - the script result
		 */
		function hideCapPage4ACA(capID:CapIDModel, stepIndex:string, pageIndex:string): ScriptResult<any>

	}
	namespace activity {
		/**
		 * get ActivityModel by activity ID
		 * @param {number} actNbr (number) - (Long) 
		 * @returns (ScriptResult<any>)          *
		 */
		function getActivityByID(actNbr:number): ScriptResult<any>

		/**
		 * update activity external ID(create by external outlook)
		 * @param {ActivityModel} activityModel (ActivityModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateActivity(activityModel:ActivityModel): ScriptResult<any>

		/**
		 * Create Activity
		 * @param {ActivityModel} activityModel (ActivityModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createActivity(activityModel:ActivityModel): ScriptResult<any>

		/**
		 * Delete Activity by IDs
		 * @param {number[]} activityIDs (number[]) - (Long[]) 
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteActivities(activityIDs:number[]): ScriptResult<any>

		/**
		 * Get a new activity model
		 * @returns (ScriptResult<any>)          *
		 */
		function getNewActivityModel(): ScriptResult<any>

	}
	namespace activitySpecInfo {
		/**
		 * Creates a new reference activity containing basic information.
		 * @param {RefActivityModel} refActivityModel (RefActivityModel) - Reference Activity Model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefActivity(refActivityModel:RefActivityModel): ScriptResult<any>

		/**
		 * Edits existing reference activity basic information.
		 * @param {RefActivityModel} refActivityModel (RefActivityModel) - Reference Activity Model no containing ASIGs.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editRefActivity(refActivityModel:RefActivityModel): ScriptResult<any>

		/**
		 * Deletes existing reference activity containing ASIGs.
		 * @param {string} serviceProviderCode (string) - Service Provider Code.
		 * @param {string} referenceType (string) - The type of people or property.
		 * @param {number[]} refActivityIds (number[]) - (Long[]) Reference Activity Id Array.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteRefActivity(serviceProviderCode:string, referenceType:string, refActivityIds:number[]): ScriptResult<any>

	}
	namespace additionalInfo {
		/**
		 * Return checkbox according to primary key.
		 * @param {CapIDModel} capID (CapIDModel) - cap ID
		 * @param {string} perType (string) - permit type
		 * @param {string} perSubType (string) - permit sub type
		 * @param {string} checkboxType (string) - checkbox type
		 * @param {string} checkboxDesc (string) - checkbox desc
		 * @param {string} callerID (string) - the caller ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCheckboxByPK(capID:CapIDModel, perType:string, perSubType:string, checkboxType:string, checkboxDesc:string, callerID:string): ScriptResult<any>

		/**
		 * Return app specific info group according to Cap ID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult.
		 */
		function getAppSpecificInfoGroupByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add a new app status group.
		 * @param {AppStatusGroupModel} appStatusGroupModel (AppStatusGroupModel) - app status group model
		 * @returns (ScriptResult<any>) - ScriptResult.
		 */
		function createAppStatusGroup(appStatusGroupModel:AppStatusGroupModel): ScriptResult<any>

		/**
		 * Edit a new app status group.
		 * @param {AppStatusGroupModel} appStatusGroupModel (AppStatusGroupModel) - app status group model
		 * @returns (ScriptResult<any>) - ScriptResult.
		 */
		function editAppStatusGroup(appStatusGroupModel:AppStatusGroupModel): ScriptResult<any>

		/**
		 * Return app status group according to primary key.
		 * @param {string} appStatusGroupCode (string) - app status group code
		 * @param {string} status (string) - status
		 * @returns (ScriptResult<any>) - ScriptResult.
		 */
		function getAppStatusGroupByPK(appStatusGroupCode:string, status:string): ScriptResult<any>

		/**
		 * Return app status group according to group.
		 * @param {string} appStatusGroupCode (string) - agency name
		 * @param {QueryFormat | null} format (QueryFormat) - the format mask
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAppStatusGroupByGroup(appStatusGroupCode:string, format:QueryFormat | null): ScriptResult<any>

	}
	namespace addressCondition {
		/**
		 * Add one address condition.
		 * @param {number} addressNumber (number) - (long) address number
		 * @param {string} conditionType (string) - condition type
		 * @param {string} conditionDescription (string) - condition description
		 * @param {string} conditionComment (string) - condition comment
		 * @param {string} refNumber1 (string) - ref number1
		 * @param {string} refNumber2 (string) - ref number2
		 * @param {string} impactCode (string) - impact code
		 * @param {string} conditionStatus (string) - condition status
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - issue date
		 * @param {ScriptDateTime} statusDate (ScriptDateTime) - status date
		 * @param {SysUserModel} issuedByUser (SysUserModel) - issued user
		 * @param {SysUserModel} statusByUser (SysUserModel) - status user
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAddressCondition(addressNumber:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel): ScriptResult<any>

		/**
		 * create Address Condition.
		 * @param {AddressConditionScriptModel} condition (AddressConditionScriptModel) - AddressConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAddressCondition(condition:AddressConditionScriptModel): ScriptResult<any>

		/**
		 * Add one address condition (Added in V6.5).
		 * @param {number} addressNumber (number) - (long) 
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {string} conditionStatus (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {ScriptDateTime} statusDate (ScriptDateTime)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAddressCondition(addressNumber:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string): ScriptResult<any>

		/**
		 * Add condition group (Added in V6.6).
		 * @param {number} addressNumber (number) - (long) 
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {string} conditionStatus (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {ScriptDateTime} statusDate (ScriptDateTime)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @param {string} conditionGroup (string)
		 * @param {string} displayNoticeOnACA (string)
		 * @param {string} displayNoticeOnACAFee (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAddressCondition(addressNumber:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string, conditionGroup:string, displayNoticeOnACA:string, displayNoticeOnACAFee:string): ScriptResult<any>

		/**
		 * Update on address condition by address condition primary key.
		 * @param {AddressConditionScriptModel} addressCondition (AddressConditionScriptModel) - AddressConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult Object - see documentation for this type
		 */
		function editAddressCondition(addressCondition:AddressConditionScriptModel): ScriptResult<any>

		/**
		 * Delete one address condition by address condition primary key.
		 * @param {number} addressNumber (number) - (long) address number
		 * @param {number} conditionNumber (number) - (long) condition number
		 * @returns (ScriptResult<any>) - ScriptResult Object - see documentation for this type.
		 */
		function removeAddressCondition(addressNumber:number, conditionNumber:number): ScriptResult<any>

		/**
		 * Return one address condition by address condition primary key.
		 * @param {string} refAddressID (string) - the ref address id
		 * @param {number} conditionNumber (number) - (long) the condition number
		 * @returns (ScriptResult<any>) - ScriptResult Object - see documentation for this type.
		 */
		function getAddressCondition(refAddressID:string, conditionNumber:number): ScriptResult<any>

		/**
		 * Fetch address conditions for an address.
		 * @param {string} refAddressID (string) - the ref address id
		 * @returns (ScriptResult<any>) - ScriptResult Object - see documentation for this type.
		 */
		function getAddressConditions(refAddressID:string): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

		/**
		 * Create address condition from standard condition
		 * @param {string} addressID (string) - Address ID
		 * @param {string} stdConditionNnumber (string) - standard condition ID
		 * @returns (ScriptResult<any>)          *
		 */
		function createAddressConditionFromStdCondition(addressID:string, stdConditionNnumber:string): ScriptResult<any>

	}
	namespace address {
		/**
		 * Add a RefAddressScriptModel.
		 * @returns (RefAddressScriptModel) - RefAddressScriptModel
		 */
		function createRefAddressScriptModel(): RefAddressScriptModel

		/**
		 * Add a ContactAddressModel.
		 * @returns (ScriptResult<any>)          *
		 */
		function createContactAddressModel(): ScriptResult<any>

		/**
		 * Add a XRefContactAddressModel.
		 * @returns (ScriptResult<any>)          *
		 */
		function createXRefContactAddressModel(): ScriptResult<any>

		/**
		 * Get cap id according to address.
		 * @param {AddressModel} address (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIdByAddress(address:AddressModel): ScriptResult<any>

		/**
		 * Get address according to cap id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressByCapId(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get address and APO attributes by cap id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressWithAttributeByCapId(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get address according to primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} addressID (number) - (Long) address id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressByPK(capID:CapIDModel, addressID:number): ScriptResult<any>

		/**
		 * Add a new add address.
		 * @param {AddressModel} objAddressModel (AddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAddress(objAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Add a new add address.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {RefAddressModel} objRefAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAddressWithRefAddressModel(objCapIDModel:CapIDModel, objRefAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Fetch all of addresses.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {RefAddressModel} objRefAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getAddressByRefAddressModel(objCapIDModel:CapIDModel, objRefAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Check if address is existed.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {RefAddressModel} objRefAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isExisted(objCapIDModel:CapIDModel, objRefAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Check if address is existed.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {AddressModel} objAddressModel (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isExisted(objCapIDModel:CapIDModel, objAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Edit address
		 * @param {AddressModel} objAddressModel (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAddress(objAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Fetch all of addresses.
		 * @param {number} addressId (number) - (long) address Id
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getAddressByAddressId(addressId:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Fetch all of addresses.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getAddressByCapId(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Fetch all of addresses.
		 * @param {string} streetName (string) - street name
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getAddressByStreetName(streetName:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Fetch all of compact addresses.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getCompactAddress(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Fetch all of address according to search conditions.
		 * @param {number} houseStart (number) - (long) 
		 * @param {number} houseEnd (number) - (long) 
		 * @param {string} streetName (string)
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getAddressByHouseRangeStreetName(houseStart:number, houseEnd:number, streetName:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get primary address according to permit id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} primaryFlag (string) - primary flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPrimaryAddressByCapID(capID:CapIDModel, primaryFlag:string): ScriptResult<any>

		/**
		 * Remove address.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} addressID (number) - (long) address id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAddress(capID:CapIDModel, addressID:number): ScriptResult<any>

		/**
		 * Fetch all of cities.
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getCityList(qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Add an new Address.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {AddressModel} am (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAddressWithLogic(objCapIDModel:CapIDModel, am:AddressModel): ScriptResult<any>

		/**
		 * Add an new Address and APO attributes.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {AddressModel} am (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAddressWithAPOAttribute(objCapIDModel:CapIDModel, am:AddressModel): ScriptResult<any>

		/**
		 * Edit address.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {AddressModel} objRefAddressModel (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAddressWithLogic(objCapIDModel:CapIDModel, objRefAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Edit Address With APO Attribute.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {AddressModel} objRefAddressModel (AddressModel) - AddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAddressWithAPOAttribute(objCapIDModel:CapIDModel, objRefAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Copy daily Address model including APO attributes.
		 * @param {AddressModel} sourceAddressModel (AddressModel)
		 * @param {AddressModel} targetAddressModel (AddressModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyAddressModel(sourceAddressModel:AddressModel, targetAddressModel:AddressModel): ScriptResult<any>

		/**
		 * Remove address.
		 * @param {CapIDModel} objCapID (CapIDModel) - CapIDModel
		 * @param {string} strAddressID (string) - address id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAddressWithLogic(objCapID:CapIDModel, strAddressID:string): ScriptResult<any>

		/**
		 * Edit address.
		 * @param {CapIDModel} objCapIDModel (CapIDModel) - CapIDModel
		 * @param {RefAddressModel} objRefAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAddressWithRefAddressModelWithLogic(objCapIDModel:CapIDModel, objRefAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Fetch RefAddress according to refAddress ID.
		 * @param {string} refAddressIDOrUID (string) - the ref address id or uid
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefAddressByPK(refAddressIDOrUID:string): ScriptResult<any>

		/**
		 * Fetch all of RefAddress according to search conditions.
		 * @param {string} streetName (string) - street name
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getRefAddressByStreetName(streetName:string): ScriptResult<any>

		/**
		 * Fetch all of RefAddress according to search conditions.
		 * @param {number} houseStart (number) - (long) house start
		 * @param {number} houseEnd (number) - (long) house end
		 * @param {string} streetName (string) - street name
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getRefAddressByHouseRangeStreetName(houseStart:number, houseEnd:number, streetName:string): ScriptResult<any>

		/**
		 * Fetch all of RefAddress according to search conditions.
		 * @param {number} houseStart (number) - (long) house start
		 * @param {number} houseEnd (number) - (long) house end
		 * @param {string} streetName (string) - street name
		 * @param {string} streetDir (string) - street dir
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getRefAddressByHouseNoDirStreetNameSuffix(houseStart:number, houseEnd:number, streetName:string, streetDir:string): ScriptResult<any>

		/**
		 * Fetch all of RefAddress according to search conditions.
		 * @param {number} houseStart (number) - (long) house start
		 * @param {number} houseEnd (number) - (long) house end
		 * @param {string} streetName (string) - street name
		 * @param {string} streetSuffix (string) - street suffix
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getRefAddressByHouseNoRangeStreetNameSuffix(houseStart:number, houseEnd:number, streetName:string, streetSuffix:string): ScriptResult<any>

		/**
		 * Check address if it is existed.
		 * @param {RefAddressModel} objRefAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isExisted(objRefAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Fetch collect of RefAddress according to RefAddressModel.
		 * @param {RefAddressModel} refAddressModel (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult note use RefAddressModel,need to change to
		 RefAddressScriptModel later
		 */
		function getRefAddressByServiceProviderRefAddressModel(refAddressModel:RefAddressModel): ScriptResult<any>

		/**
		 * Create RefAddress.
		 * @param {RefAddressModel} objRefAddress (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefAddress(objRefAddress:RefAddressModel): ScriptResult<any>

		/**
		 * Remove RefAddress.
		 * @param {number} lRefAddressId (number) - (long) address id
		 * @param {number} iSourceNumber (number) - (int) source number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeRefAddress(lRefAddressId:number, iSourceNumber:number): ScriptResult<any>

		/**
		 * Remove RefAddress.
		 * @param {number} lRefAddressId (number) - (long) address id
		 * @param {string} strAgency (string) - agency code
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeRefAddress(lRefAddressId:number, strAgency:string): ScriptResult<any>

		/**
		 * Edit RefAddress.
		 * @param {RefAddressModel} objRefAddress (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editRefAddress(objRefAddress:RefAddressModel): ScriptResult<any>

		/**
		 * Create RefAddress.
		 * @param {string} strAgencyID (string) - agency code
		 * @param {RefAddressModel} objRefAddress (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefAddressWithLogic(strAgencyID:string, objRefAddress:RefAddressModel): ScriptResult<any>

		/**
		 * Edit RefAddress.
		 * @param {string} strAgencyID (string) - agency code
		 * @param {RefAddressModel} objRefAddr (RefAddressModel) - RefAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editRefAddressWithLogic(strAgencyID:string, objRefAddr:RefAddressModel): ScriptResult<any>

		/**
		 * Get RefAddressModel List by RefAddressValidateModel
		 * @param {string} parcel (string) - the parcel number
		 * @param {string} ownerName (string) - the ownerFullName
		 * @param {string} streetStart (string) - the streetStart number
		 * @param {string} streetEnd (string) - the streetEnd number
		 * @param {string} streetDirection (string) - the StreetDirection
		 * @param {string} streetName (string) - the streetName
		 * @param {string} streetSuffix (string) - the StreetSuffix
		 * @param {string} unitStart (string) - the UnitStart
		 * @param {string} unitEnd (string) - the UnitEnd
		 * @param {string} city (string) - the city
		 * @param {string} state (string) - the state
		 * @param {string} zipCode (string) - the zipCode
		 * @param {string} county (string) - the county
		 * @param {string} country (string) - the country
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressListForAdmin(parcel:string, ownerName:string, streetStart:string, streetEnd:string, streetDirection:string, streetName:string, streetSuffix:string, unitStart:string, unitEnd:string, city:string, state:string, zipCode:string, county:string, country:string): ScriptResult<any>

		/**
		 * TODO.
		 * @param {string} parcel (string)
		 * @param {string} ownerName (string)
		 * @param {string} streetStart (string)
		 * @param {string} streetEnd (string)
		 * @param {string} streetDirection (string)
		 * @param {string} streetName (string)
		 * @param {string} streetSuffix (string)
		 * @param {string} unitStart (string)
		 * @param {string} unitEnd (string)
		 * @param {string} city (string)
		 * @param {string} state (string)
		 * @param {string} zipCode (string)
		 * @param {string} county (string)
		 * @param {string} country (string)
		 * @param {string} houseNumberAlphaStart (string)
		 * @param {string} houseNumberAlphaEnd (string)
		 * @param {string} levelPrefix (string)
		 * @param {string} levelNumberStart (string)
		 * @param {string} levelNumberEnd (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getAddressListForAdmin(parcel:string, ownerName:string, streetStart:string, streetEnd:string, streetDirection:string, streetName:string, streetSuffix:string, unitStart:string, unitEnd:string, city:string, state:string, zipCode:string, county:string, country:string, houseNumberAlphaStart:string, houseNumberAlphaEnd:string, levelPrefix:string, levelNumberStart:string, levelNumberEnd:string): ScriptResult<any>

		/**
		 * Gets the assigned address district for admin.
		 * @param {number} addressNbr (number) - (long) the address nbr
		 * @returns (ScriptResult<any>) - the assigned address district for admin
		 */
		function getAssignedAddressDistrictForAdmin(addressNbr:number): ScriptResult<any>

		/**
		 * Get AddressDistcict by RefAddressDistrictModel
		 * @param {number} addressNbr (number) - (long) the addressNumber
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressDistrictForAdmin(addressNbr:number): ScriptResult<any>

		/**
		 * Gets the assigned address district for daily.
		 * @param {string} capId1 (string) - the cap id1
		 * @param {string} capId2 (string) - the cap id2
		 * @param {string} capId3 (string) - the cap id3
		 * @param {number} addressNbr (number) - (long) the address nbr
		 * @returns (ScriptResult<any>) - the assigned address district for daily
		 */
		function getAssignedAddressDistrictForDaily(capId1:string, capId2:string, capId3:string, addressNbr:number): ScriptResult<any>

		/**
		 * Get AddressDistrict by AddressDistrictModel
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @param {number} addressNbr (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressDistrictForDaily(capId1:string, capId2:string, capId3:string, addressNbr:number): ScriptResult<any>

		/**
		 * Add AddressDistrict by Collection
		 * @param {number} addressNbr (number) - (long) 
		 * @param {string} districtName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAddressDistrictForAdmin(addressNbr:number, districtName:string): ScriptResult<any>

		/**
		 * Add AddressDistrict by Collection
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @param {number} addressNbr (number) - (long) 
		 * @param {string} districtName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAddressDistrictForDaily(capId1:string, capId2:string, capId3:string, addressNbr:number, districtName:string): ScriptResult<any>

		/**
		 * Delete AddressDistrictModel
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @param {number} addressNbr (number) - (long) 
		 * @param {string} districtName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAddressDistrictForDaily(capId1:string, capId2:string, capId3:string, addressNbr:number, districtName:string): ScriptResult<any>

		/**
		 * Delete RefAddressDistrictModel
		 * @param {number} addressNbr (number) - (long) 
		 * @param {string} districtName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAddressDistrictForAdmin(addressNbr:number, districtName:string): ScriptResult<any>

		/**
		 * Get DailyAddress by CapIDModel
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getDailyAddressByCapId(capId1:string, capId2:string, capId3:string): ScriptResult<any>

		/**
		 * Get address and address type according to Cap ID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressWithTypeByCapId(capID:CapIDModel, callerID:string): ScriptResult<any>

		/**
		 * Get address and address type according to primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} addressID (number) - (Long) address id
		 * @param {string} addressType (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAddressWithTypeByPK(capID:CapIDModel, addressID:number, addressType:string): ScriptResult<any>

		/**
		 * Remove address and address type.
		 * @param {AddressModel} addressModel (AddressModel) - the address model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAddressWithType(addressModel:AddressModel): ScriptResult<any>

		/**
		 * Create contact address.
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel) - Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Created Contact Address Model.
		 */
		function createContactAddress(contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * edit contact address.
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel) - Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Whether to edit successfully.
		 */
		function editContactAddress(contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Delete contact address.
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel) - Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Whether to delete successfully.
		 */
		function deleteContactAddress(contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Get contact address list.
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel) - Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Contact Address Model List.
		 */
		function getContactAddressList(contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Gets the contact address model.
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @param {string} contactNbr (string) - the contact nbr
		 * @returns (ScriptResult<any>) - the contact address model
		 */
		function getContactAddressModel(capIDModel:CapIDModel, contactNbr:string): ScriptResult<any>

		/**
		 * Get contact address by PK.
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel) - Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Contact Address Model.
		 */
		function getContactAddressByPK(contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Gets the contact address list by cap contact.
		 * @param {CapContactModel} capContactModel (CapContactModel) - the cap contact model
		 * @returns (ScriptResult<any>) - the contact address list by cap contact
		 */
		function getContactAddressListByCapContact(capContactModel:CapContactModel): ScriptResult<any>

		/**
		 * Create cross reference contact address.
		 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel) - Cross Reference Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Created Cross Reference Contact Address Model.
		 */
		function createXRefContactAddress(xRefContactAddressModel:XRefContactAddressModel): ScriptResult<any>

		/**
		 * edit cross reference contact address.
		 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel) - Cross Reference Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Whether to edit successfully.
		 */
		function editXRefContactAddress(xRefContactAddressModel:XRefContactAddressModel): ScriptResult<any>

		/**
		 * Delete cross reference contact address.
		 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel) - Cross Reference Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Whether to delete successfully.
		 */
		function deleteXRefContactAddress(xRefContactAddressModel:XRefContactAddressModel): ScriptResult<any>

		/**
		 * Get cross reference contact address list.
		 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel) - Cross Reference Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Cross Reference Contact Address Model List.
		 */
		function getXRefContactAddressList(xRefContactAddressModel:XRefContactAddressModel): ScriptResult<any>

		/**
		 * Get cross reference contact address by PK.
		 * @param {XRefContactAddressModel} xRefContactAddressModel (XRefContactAddressModel) - Ccross Reference Contact Address Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Return Ccross Reference Contact Address Model.
		 */
		function getXRefContactAddressByPK(xRefContactAddressModel:XRefContactAddressModel): ScriptResult<any>

		/**
		 * Create CAP contact address.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createCapContactAddress(capID:CapIDModel, contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Edit CAP contact address.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {ContactAddressModel} contactAddressModel (ContactAddressModel)
		 * @returns (ScriptResult<any>) - ScriptResult script result, whether to edit successfully.
		 */
		function editCapContactAddress(capID:CapIDModel, contactAddressModel:ContactAddressModel): ScriptResult<any>

		/**
		 * Delete CAP contact address.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {number} contactID (number) - (long) 
		 * @param {number} addressID (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult script result, whether to delete successfully.
		 */
		function deleteCapContactAddress(capID:CapIDModel, contactID:number, addressID:number): ScriptResult<any>

		/**
		 * Get CAP contact address list.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {number} contactNbr (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult script result, return CAP Contact Address Model list.
		 */
		function getCapContactAddressList(capID:CapIDModel, contactNbr:number): ScriptResult<any>

		/**
		 * Gets the cap address by validated flag.
		 * @param {string} validatedFlag (string) - the validated flag
		 * @returns (ScriptResult<any>) - the cap address by validated flag
		 */
		function getCapAddressByValidatedFlag(validatedFlag:string): ScriptResult<any>

	}
	namespace alert {
		/**
		 * Create a new alert message to relative user.
		 * @param {string} subject (string)
		 * @param {string} content (string)
		 * @param {string} userID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function createAlertMessage(subject:string, content:string, userID:string): ScriptResult<any>

	}
	namespace appSpecificInfo {
		/**
		 * Get by type.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} checkboxDesc (string) - checkboxDesc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getByType(capID:CapIDModel, checkboxDesc:string): ScriptResult<any>

		/**
		 * Get by list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} checkboxDescList (string) - checkboxDesc list
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getByList(capID:CapIDModel, checkboxDescList:string): ScriptResult<any>

		/**
		 * Gets the application specific infos by capID and itemName. if itemName is null. it will return all application  specifics by capID.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} fieldName (string) - the specific item name
		 * @returns (ScriptResult<any>) - the application specific infos
		 */
		function getAppSpecificInfos(capID:CapIDModel, fieldName:string): ScriptResult<any>

		/**
		 * Gets the application specific infos by capID, subGroupName and itemName.   if itemName is null, it will return all application specifics by capID.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} subGroupName (string)
		 * @param {string} fieldName (string) - the specific item name
		 * @returns (ScriptResult<any>) - the application specific infos
		 */
		function getAppSpecificInfos(capID:CapIDModel, subGroupName:string, fieldName:string): ScriptResult<any>

		/**
		 * Edits the single application specific itemValue by capID/itemName/checkboxType. When checkboxType is null. it  will change the first application specific itemValue by capID/itemName
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} fieldName (string) - the item name
		 * @param {string} newValue (string) - the item value
		 * @param {string} subGroupName (string) - the check box type
		 * @returns (ScriptResult<any>) - the script result
		 */
		function editSingleAppSpecific(capID:CapIDModel, fieldName:string, newValue:string, subGroupName:string): ScriptResult<any>

		/**
		 * Not used the transcation to edits the single application specific itemValue by capID/itemName/checkboxType. When checkboxType is null. it
 will change the first application specific itemValue by capID/itemName
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} fieldName (string) - the field name
		 * @param {string} newValue (string) - the field new value
		 * @param {string} subGroupName (string) - the subGroup name
		 * @param {string} oldValue (string) - the field old value
		 * @returns (ScriptResult<any>) - the script result, if failed and the error type is "2", means the value has been changed by others
		 */
		function editSingleAppSpecificNoTransaction(capID:CapIDModel, fieldName:string, newValue:string, subGroupName:string, oldValue:string): ScriptResult<any>

		/**
		 * Get by CapID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get by FeeIndicator.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeIndicator (string) - fee indicator
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getByFeeIndicator(capID:CapIDModel, feeIndicator:string): ScriptResult<any>

		/**
		 * Edit AppSpecificInfo with array of AppSpecificInfoModel.
		 * @param {AppSpecificInfoModel[]} bchckboxs (AppSpecificInfoModel[]) - the array of AppSpecificInfoModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAppSpecificInfo(bchckboxs:AppSpecificInfoModel[]): ScriptResult<any>

		/**
		 * Retrieve application specific info group and field detail according to
 the service provider code, group code and group name.
		 * @param {string} groupCode (string) - group code
		 * @param {string} groupName (string) - group name
		 * @param {string} CheckboxGroup (string) - Checkbox Group
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefAppSpecInfoWithFieldList(groupCode:string, groupName:string, CheckboxGroup:string): ScriptResult<any>

		/**
		 * Retrieve dropdown list valuesdropdown list values used by the given application specific info field.
		 * @param {string} groupCode (string) - group code
		 * @param {string} groupName (string) - group name
		 * @param {string} checkboxGroup (string)
		 * @param {string} fieldLabel (string) - field label
		 * @returns (ScriptResult<any>) - Collection return the dropdown list valuesdropdown list values
		 used by the given application specific info field.
		 */
		function getRefAppSpecDropDownList(groupCode:string, groupName:string, checkboxGroup:string, fieldLabel:string): ScriptResult<any>

		/**
		 * Add a refRefAppSpec dropdownlist value.
		 * @param {string} groupCode (string) - App Specific Info Group Code
		 * @param {string} groupName (string) - App Specific Info Group Name
		 * @param {string} chckboxGroup (string) - App Specific Info Group checkbox group
		 * @param {string} fieldLabel (string) - field label
		 * @param {string} attrValue (string) - field value
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefAppSpecDropDown(groupCode:string, groupName:string, chckboxGroup:string, fieldLabel:string, attrValue:string): ScriptResult<any>

		/**
		 * Fetch all of the task specific info items for a task.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) process id
		 * @param {number} stepNumber (number) - (int) step number
		 * @param {string} checkboxGroup (string) - checkboxGroup
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCheckboxByCapIDAndGroup(capID:CapIDModel, processID:number, stepNumber:number, checkboxGroup:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Edit task and application specific info.
		 * @param {AppSpecificInfoModel[]} bchckboxs (AppSpecificInfoModel[]) - the array of AppSpecificInfoModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAppSpecInfos(bchckboxs:AppSpecificInfoModel[]): ScriptResult<any>

		/**
		 * Edit or create ASI value.
		 * @param {AppSpecificInfoModel} bchckboxs (AppSpecificInfoModel) - AppSpecificInfoModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAppSpecInfoValue(bchckboxs:AppSpecificInfoModel): ScriptResult<any>

		/**
		 * Get ASI subgroup names of the specified ASI group from reference end.
		 * @param {string} groupCode (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getRefASISubgroups(groupCode:string): ScriptResult<any>

		/**
		 * Get the subgroup names only from the daily side for the specified cap.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getCAPASISubgroups(capID:CapIDModel): ScriptResult<any>

		/**
		 * Add ref ASI subgroup items to target cap.
		 * @param {string} groupCode (string)
		 * @param {string[]} subgroups (string[])
		 * @param {CapIDModel} targetCAPID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function addRefASISubgroupsToCAP(groupCode:string, subgroups:string[], targetCAPID:CapIDModel): ScriptResult<any>

		/**
		 * Remove ASI subgroup items from cap.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string[]} subgroups (string[])
		 * @returns (ScriptResult<any>)          *
		 */
		function removeASISubgroupsFromCAP(capID:CapIDModel, subgroups:string[]): ScriptResult<any>

		/**
		 * get AppSpecificInfo By cap id.
		 * @param {CapModel} capModel (CapModel) - cap model.
		 * @returns (ScriptResult<any>) - the app specific info by cap
		 */
		function getAppSpecificInfoByCap(capModel:CapModel): ScriptResult<any>

		/**
		 * Copy ASI subgroup items from source cap to target cap.
		 * @param {CapIDModel} sourceCAPID (CapIDModel)
		 * @param {CapIDModel} targetCAPID (CapIDModel)
		 * @param {string[]} subgroups (string[])
		 * @returns (ScriptResult<any>)          *
		 */
		function copyASISubGroups(sourceCAPID:CapIDModel, targetCAPID:CapIDModel, subgroups:string[]): ScriptResult<any>

	}
	namespace appSpecificTableScript {
		/**
		 * get one table model
		 * @param {CapIDModel} cap (CapIDModel)
		 * @param {string} tableName (string)
		 * @param {string} recStatus (string)
		 * @returns (ScriptResult<any>) - ScriptResult AppSpecificTableScriptModel
		 */
		function getAppSpecificTableModel(cap:CapIDModel, tableName:string, recStatus:string): ScriptResult<any>

		/**
		 * get one table model
		 * @param {CapIDModel} cap (CapIDModel)
		 * @param {string} tableName (string)
		 * @returns (ScriptResult<any>) - ScriptResult AppSpecificTableScriptModel
		 */
		function getAppSpecificTableModel(cap:CapIDModel, tableName:string): ScriptResult<any>

		/**
		 * get table Names
		 * @param {CapIDModel} cap (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult App Specific Group Table Name Array
		 */
		function getAppSpecificGroupTableNames(cap:CapIDModel): ScriptResult<any>

		/**
		 * Method to get All table columns define and values by Cap ID and groupName
		 * @param {CapIDModel} cap (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult AppSpecificTableGroupScriptModel
		 */
		function getAppSpecificTableGroupModel(cap:CapIDModel): ScriptResult<any>

		/**
		 * Method to save AppSpecificTable Information(s).
		 * @param {AppSpecificTableModel} tableModel (AppSpecificTableModel)
		 * @param {CapIDModel} cap (CapIDModel)
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function editAppSpecificTableInfos(tableModel:AppSpecificTableModel, cap:CapIDModel, callerID:string): ScriptResult<any>

		/**
		 * Method to remove AppSpecificTable Information(s).
		 * @param {string} tableName (string)
		 * @param {CapIDModel} cap (CapIDModel)
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function removeAppSpecificTableInfos(tableName:string, cap:CapIDModel, callerID:string): ScriptResult<any>

		/**
		 * create TrustAccountPeopleScriptModel
		 * @returns (CapIDScriptModel) - TrustAccountPeopleScriptModel
		 */
		function createCapIDScriptModel(): CapIDScriptModel

		/**
		 * Creates the table script model.
		 * @returns (TableScriptModel) - the table script model
		 */
		function createTableScriptModel(): TableScriptModel

		/**
		 * Creates the row script model.
		 * @returns (RowScriptModel) - the row script model
		 */
		function createRowScriptModel(): RowScriptModel

		/**
		 * Adds the app specific table infors.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {TableModel} tableModel (TableModel) - the table model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addAppSpecificTableInfors(capID:CapIDModel, tableModel:TableModel): ScriptResult<any>

		/**
		 * Deleted app specific table infors.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {TableModel} deltedTableModel (TableModel) - the delted table model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deletedAppSpecificTableInfors(capID:CapIDModel, deltedTableModel:TableModel): ScriptResult<any>

		/**
		 * Update app specific table infors.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {TableModel} updateTableModel (TableModel) - the update table model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateAppSpecificTableInfors(capID:CapIDModel, updateTableModel:TableModel): ScriptResult<any>

		/**
		 * Gets the app specific table info.
		 * @param {CapIDModel} cap (CapIDModel) - the cap
		 * @param {string} tableName (string) - the table name
		 * @param {string[]} fieldMap (string[]) - the field map
		 * @returns (ScriptResult<any>) - the app specific table info
		 */
		function getAppSpecificTableInfo(cap:CapIDModel, tableName:string, fieldMap:string[]): ScriptResult<any>

		/**
		 * Gets the max row id of app specific table.
		 * @param {CapIDModel} cap (CapIDModel) - the cap
		 * @param {string} tableName (string) - the table name
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - the max row id of app specific table
		 */
		function getMaxRowIdOfAppSpecificTable(cap:CapIDModel, tableName:string, callerID:string): ScriptResult<any>

	}
	namespace asiDrillDown {
		/**
		 * get ASI table drill down model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getASITableDrillDownModel(): ScriptResult<any>

		/**
		 * Create ASI/ASI Table drill down
		 * @param {ASITableDrillDownModel} asiTableDrillDownModel (ASITableDrillDownModel) - asi Table Drill Down Model
		 * @returns (ScriptResult<any>)          *
		 */
		function createASIDrillDown(asiTableDrillDownModel:ASITableDrillDownModel): ScriptResult<any>

		/**
		 * Update ASI/ASI Table drill down
		 * @param {ASITableDrillDownModel} asiTableDrillDownModel (ASITableDrillDownModel) - asi Table Drill Down Model
		 * @returns (ScriptResult<any>)          *
		 */
		function updateASIDrillDown(asiTableDrillDownModel:ASITableDrillDownModel): ScriptResult<any>

		/**
		 * Get the ASI drill down list
		 * @param {ASITableDrillDownModel} asiTableDrillDownModel (ASITableDrillDownModel) - asi Table Drill Down Model
		 * @returns (ScriptResult<any>)          *
		 */
		function getASIDrillDown(asiTableDrillDownModel:ASITableDrillDownModel): ScriptResult<any>

		/**
		 * Delete ASI drill down
		 * @param {string[]} drillId (string[]) - Drill Id
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteASIDrillDown(drillId:string[]): ScriptResult<any>

		/**
		 * Create ASI Drill Down Series
		 * @param {ASITableDrillDSeriesModel[]} asiTableDrillDSeriesModels (ASITableDrillDSeriesModel[]) - ASI Table Drill Down Series Model
		 * @returns (ScriptResult<any>)          *
		 */
		function createASIDrillDownSeries(asiTableDrillDSeriesModels:ASITableDrillDSeriesModel[]): ScriptResult<any>

		/**
		 * Update ASI Drill Down Series
		 * @param {ASITableDrillDSeriesModel[]} asiTableDrillDSeriesModels (ASITableDrillDSeriesModel[]) - ASI Table Drill Down Series Model
		 * @returns (ScriptResult<any>)          *
		 */
		function updateASIDrillDownSeries(asiTableDrillDSeriesModels:ASITableDrillDSeriesModel[]): ScriptResult<any>

		/**
		 * Delete asi drill down series by pk
		 * @param {number} drillDId (number) - (Long) drill down id
		 * @param {number} drillDSeriesId (number) - (Long) drill down series id
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteASIDrillDownSeries(drillDId:number, drillDSeriesId:number): ScriptResult<any>

		/**
		 * Get ASI Drill Down Series by Drill down id
		 * @param {string} drillDId (string) - Drill Down Id
		 * @returns (ScriptResult<any>)          *
		 */
		function getASIDrillDownSeries(drillDId:string): ScriptResult<any>

		/**
		 * Get ASI table drill down series model
		 * @returns (ScriptResult<any>)          *
		 */
		function getASITableDrillDSeriesModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getASITableDrillDValMapModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function createASITableDrillDValMap(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteASITableDrillDValMap(): ScriptResult<any>

	}
	namespace assetCA {
		/**
		 * get AssetCA by Asset CA Id
		 * @param {number} assetCAId (number) - (Long) Asset CA Id
		 * @returns (ScriptResult<any>) - ScriptResult include the AsseteConditionAssessmentModel
		 */
		function getAssetCAByPK(assetCAId:number): ScriptResult<any>

		/**
		 * get AssetCA list for an Asset
		 * @param {number} assetSeq (number) - (Long) Asset Sequence Number
		 * @returns (ScriptResult<any>) - ScriptResult include the AsseteConditionAssessmentModel
		 */
		function getAssetCAList(assetSeq:number): ScriptResult<any>

		/**
		 * Edit Asset Condition Assessment information.
		 * @param {AssetConditionAssessmentModel} assetCA (AssetConditionAssessmentModel) - AssetConditionAssessmentModel
		 * @returns (ScriptResult<any>) - ScriptResult Includes the messages
		 */
		function updateAssetCA(assetCA:AssetConditionAssessmentModel): ScriptResult<any>

		/**
		 * create Asset Condition Assessment for Work Order.
		 * @param {AssetCAWorkOrderModel} assetCAWorkOrderModel (AssetCAWorkOrderModel) - AssetCAWorkOrderModel
		 * @returns (ScriptResult<any>) - ScriptResult Includes the messages
		 */
		function createAssetCAWorkOrder(assetCAWorkOrderModel:AssetCAWorkOrderModel): ScriptResult<any>

		/**
		 * Create Asset Condition Assessment information.
		 * @param {AssetConditionAssessmentModel} assetCA (AssetConditionAssessmentModel) - AssetConditionAssessmentModel
		 * @returns (ScriptResult<any>) - ScriptResult Includes the Asset CA Id
		 */
		function createAssetCA(assetCA:AssetConditionAssessmentModel): ScriptResult<any>

		/**
		 * Create Asset Condition Assessment information.
		 * @param {number} assetCAId (number) - (Long) the asset CA ID
		 * @returns (ScriptResult<any>) - ScriptResult Includes the Asset CA Id
		 */
		function removeAssetCA(assetCAId:number): ScriptResult<any>

		/**
		 * Creates the ca costing.
		 * @param {GenericCostingModel} costing (GenericCostingModel) - the costing
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createCACosting(costing:GenericCostingModel): ScriptResult<any>

		/**
		 * Update ca costing.
		 * @param {GenericCostingModel} costing (GenericCostingModel) - the costing
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateCACosting(costing:GenericCostingModel): ScriptResult<any>

		/**
		 * Delete ca costing.
		 * @param {GenericCostingModel} costing (GenericCostingModel) - the costing
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deleteCACosting(costing:GenericCostingModel): ScriptResult<any>

	}
	namespace asset {
		/**
		 * get asset by asset sequence number.
		 * @param {string} assetSequenceNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAssetData(assetSequenceNumber:string): ScriptResult<any>

		/**
		 * Create asset.
		 * @param {AssetDataModel} assetData (AssetDataModel) - AssetDataModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAsset(assetData:AssetDataModel): ScriptResult<any>

		/**
		 * Edit asset data information.
		 * @param {AssetDataModel} assetData (AssetDataModel) - AssetDataModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAsset(assetData:AssetDataModel): ScriptResult<any>

		/**
		 * Remove asset
		 * @param {AssetMasterPK} assetMasterPK (AssetMasterPK) - Asset master primary key
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAssetData(assetMasterPK:AssetMasterPK): ScriptResult<any>

		/**
		 * Return AssetScriptModel collection.
		 * @param {AssetMasterModel} assetMasterModel (AssetMasterModel) - AssetMasterModel
		 * @param {any[]} attributeList (any[]) - Collection
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAssetDataList(assetMasterModel:AssetMasterModel, attributeList:any[], qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Add an new work order asset.
		 * @param {WorkOrderAssetModel} workOrderAssetModel (WorkOrderAssetModel) - WorkOrderAssetModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createWorkOrderAsset(workOrderAssetModel:WorkOrderAssetModel): ScriptResult<any>

		/**
		 * Remove work order asset.
		 * @param {WorkOrderAssetModel} workOrderAssetModel (WorkOrderAssetModel) - WorkOrderAssetModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeWorkOrderAssetByPK(workOrderAssetModel:WorkOrderAssetModel): ScriptResult<any>

		/**
		 * Get work order list by asset pk.
		 * @param {AssetMasterPK} assetPK (AssetMasterPK) - AssetMasterPK
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getWorkOrderListByAsset(assetPK:AssetMasterPK, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Get Asset list by work order id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAssetListByWorkOrder(capID:CapIDModel, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Clone Assets from source cap to target cap.
		 * @param {CapModel} sourceCap (CapModel) - CapModel
		 * @param {CapIDModel} targetCapID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function cloneAssets(sourceCap:CapModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * create new AssetScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult AssetScriptModel
		 */
		function newAssetScriptModel(): ScriptResult<any>

		/**
		 * create new WorkOrderAssetScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult WorkOrderAssetScriptModel
		 */
		function newWorkOrderAssetScriptModel(): ScriptResult<any>

		/**
		 * Gets the record assets by record id.
		 * @param {CapIDModel} capId (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the record assets by record id
		 */
		function getRecordAssetsByRecordId(capId:CapIDModel): ScriptResult<any>

		/**
		 * Batch create record asset.
		 * @param {WorkOrderAssetModel[]} recordAssetArray (WorkOrderAssetModel[]) - the record asset array
		 * @returns (ScriptResult<any>) - the script result
		 */
		function batchCreateRecordAsset(recordAssetArray:WorkOrderAssetModel[]): ScriptResult<any>

		/**
		 * Batch update record asset.
		 * @param {WorkOrderAssetModel[]} recordAssetArray (WorkOrderAssetModel[]) - the record asset array
		 * @returns (ScriptResult<any>) - the script result
		 */
		function batchUpdateRecordAsset(recordAssetArray:WorkOrderAssetModel[]): ScriptResult<any>

	}
	namespace batchJob {
		/**
		 * Get job id.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getJobID(): ScriptResult<any>

		/**
		 * Edit batch job status.
		 * @param {string} batchJobName (string) - batchJob Name
		 * @param {string} status (string) - status of batchJob
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBatchJobStatus(batchJobName:string, status:string): ScriptResult<any>

		/**
		 * Begin Transaction. Create a new transaction and associate it with the current thread.
		 * @param {number} seconds (number) - (int) The value of the timeout in seconds. If seconds is less 300 seconds will set default 7200 seconds.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function beginTransaction(seconds:number): ScriptResult<any>

		/**
		 * Commit Transaction. Complete the transaction associated with the current thread.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function commitTransaction(): ScriptResult<any>

		/**
		 * Roll back Transaction. Roll back the transaction associated with the current thread.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function rollbackTransaction(): ScriptResult<any>

	}
	namespace bizDomain {
		/**
		 * Edit a BizDomain.
		 * @param {BizDomainModel} dp (BizDomainModel) - BizDomainModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBizDomain(dp:BizDomainModel): ScriptResult<any>

		/**
		 * Edit a BizDomain for language.
		 * @param {BizDomainModel} dp (BizDomainModel) - BizDomainModel
		 * @param {string} language (string) - language
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBizDomain(dp:BizDomainModel, language:string): ScriptResult<any>

		/**
		 * Get a record of BIZDOMAIN on bizDomain, bizDomainValue.
		 * @param {string} bizDomain (string) - BizDomain name
		 * @param {string} bizDomainValue (string) - BizDomain value
		 * @returns (ScriptResult<any>)          *
		 */
		function getBizDomainByValue(bizDomain:string, bizDomainValue:string): ScriptResult<any>

		/**
		 * Get a record of BIZDOMAIN on bizDomain, bizDomainValue and language.
		 * @param {string} bizDomain (string) - BizDomain name
		 * @param {string} bizDomainValue (string) - BizDomain value
		 * @param {string} language (string) - Language
		 * @returns (ScriptResult<any>) - the biz domain by value
		 */
		function getBizDomainByValue(bizDomain:string, bizDomainValue:string, language:string): ScriptResult<any>

		/**
		 * Get a record of BIZDOMAIN on bizDomain.
		 * @param {string} bizDomain (string) - BizDomain name
		 * @returns (ScriptResult<any>)          *
		 */
		function getBizDomain(bizDomain:string): ScriptResult<any>

		/**
		 * Create a record of BIZDOMAIN.
		 * @param {BizDomainModel} bizModel (BizDomainModel) - BizDomainModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createBizDomain(bizModel:BizDomainModel): ScriptResult<any>

		/**
		 * Create a record of BIZDOMAIN.
		 * @param {string} bizDomain (string) - bizDomain name
		 * @param {string} bizDomainValue (string) - bizDomain value
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} description (string) - description
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createBizDomain(bizDomain:string, bizDomainValue:string, auditStatus:string, description:string): ScriptResult<any>

		/**
		 * retrieve the BizDomainModel by the description
		 * @param {string} serviceProvideCode (string) - agency code
		 * @param {string} bizDomain (string) - name
		 * @param {string} valueDesc (string) - value description
		 * @returns (ScriptResult<any>) - the result of standard choice
		 */
		function getBizDomainByDescription(serviceProvideCode:string, bizDomain:string, valueDesc:string): ScriptResult<any>

		/**
		 * Get all records of BIZDOMAIN by super agency.
		 * @param {string} bizDomain (string) - bizDomain name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getBizDomainsBySuperAgency(bizDomain:string): ScriptResult<any>

		/**
		 * gets biz domain by value
		 * @param {string} bizDomain (string)
		 * @param {string} bizDomainValue (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getBizDomainByValueWithSD(bizDomain:string, bizDomainValue:string): ScriptResult<any>

	}
	namespace bStructure {
		/**
		 * Retrieve data based on the BSTRUCTURE primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructure(capID:CapIDModel, structureNumber:number): ScriptResult<any>

		/**
		 * Retrieve data based on the BSTRUCTURE.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructures(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add a structure to a permit in BSTRUCTURE table.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(capID:CapIDModel, structureROC:StructureModel): ScriptResult<any>

		/**
		 * Remove a structure to a permit in BSTRUCTURE table.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeStructure(capID:CapIDModel, structureROC:StructureModel): ScriptResult<any>

		/**
		 * Update a structure to a permit in BSTRUCTURE table.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructure(capID:CapIDModel, structureROC:StructureModel): ScriptResult<any>

		/**
		 * Retrieve data based on the BSTRUCTURE primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} structureAttributeNumber (number) - (long) structure attribute number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttribute(capID:CapIDModel, structureNumber:number, structureAttributeNumber:number): ScriptResult<any>

		/**
		 * Get an attribute by structureROC.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttributes(capID:CapIDModel, structureROC:StructureModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add an attribute to a structure in BSTRUCTURE_ATTRIBUTE.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAttribute(capID:CapIDModel, structureROC:StructureModel, attributeROC:AttributeModel): ScriptResult<any>

		/**
		 * delete an attribute to a structure in BSTRUCTURE_ATTRIBUTE.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAttribute(capID:CapIDModel, structureROC:StructureModel, attributeROC:AttributeModel): ScriptResult<any>

		/**
		 * Update an attribute to a structure in BSTRUCTURE_ATTRIBUTE.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAttribute(capID:CapIDModel, structureROC:StructureModel, attributeROC:AttributeModel): ScriptResult<any>

		/**
		 * Retrieve data based on the parent StructureModel.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} parentStructureModel (StructureModel) - StructureModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParentStructures(capID:CapIDModel, parentStructureModel:StructureModel): ScriptResult<any>

		/**
		 * Retrieve data based on the child StructureModel.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} childStructureModel (StructureModel) - StructureModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildStructures(capID:CapIDModel, childStructureModel:StructureModel): ScriptResult<any>

		/**
		 * Insert a structure relationship record in the BSTRUCTURE_STRUCTURE table.
		 * @param {string} auditID (string) - the caller id
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC1 (StructureModel) - StructureModel
		 * @param {StructureModel} structureROC2 (StructureModel) - StructureModel
		 * @param {string} relationship (string) - relationship
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureRelation(auditID:string, capID:CapIDModel, structureROC1:StructureModel, structureROC2:StructureModel, relationship:string): ScriptResult<any>

		/**
		 * Remove a structure relationship record in the BSTRUCTURE_STRUCTURE table.
		 * @param {string} auditID (string) - the caller id
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {StructureModel} structureROC1 (StructureModel) - StructureModel
		 * @param {StructureModel} structureROC2 (StructureModel) - StructureModel
		 * @param {string} relationship (string) - relationship
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeStrucutureRelation(auditID:string, capID:CapIDModel, structureROC1:StructureModel, structureROC2:StructureModel, relationship:string): ScriptResult<any>

		/**
		 * Retrieve all permits associated with a given structure .
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByStructure(structureROC:StructureModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Retrieve all permits associated with a given structure which have the
 given component group.
		 * @param {string} componentGroup (string) - component hroup
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByComponentGroup(componentGroup:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Retrieve all permits associated with a given structure which have the
 given component type.
		 * @param {string} componentGroup (string) - component group
		 * @param {string} componentType (string) - component type
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByComponentType(componentGroup:string, componentType:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add a structure to a permit in BSTRUCTURE table by individual parameters
 Return: ScriptResult
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {ScriptDateTime} structureStatusDate (ScriptDateTime) - structure status date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(capID:CapIDModel, structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, structureStatusDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Remove a structure to a permit in BSTRUCTURE table by individual
 parameters
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeStructure(capID:CapIDModel, structureNumber:number): ScriptResult<any>

		/**
		 * Update a structure in BSTRUCTURE table by individual parameters.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {ScriptDateTime} structureStatusDate (ScriptDateTime) - structure status date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructure(capID:CapIDModel, structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, structureStatusDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Add an attribute to a structure in BSTRUCTURE_ATTRIBUTE by individual
 parameters.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @param {string} componentGroup (string) - component group
		 * @param {string} componentType (string) - component type
		 * @param {string} attributeName (string) - attribute name
		 * @param {string} attributeLabel (string) - attribute label
		 * @param {string} attributeCode (string) - attribute code
		 * @param {string} attributeDescription (string) - attribute description
		 * @param {string} attributeValueDataType (string) - attribute value data type
		 * @param {string} attributeValueReqFlag (string) - attribute value reqired flag
		 * @param {string} attributeValue (string) - attribute value
		 * @param {string} attributeUnitType (string) - attributeUnitType
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAttribute(capID:CapIDModel, structureNumber:number, attributeNumber:number, componentGroup:string, componentType:string, attributeName:string, attributeLabel:string, attributeCode:string, attributeDescription:string, attributeValueDataType:string, attributeValueReqFlag:string, attributeValue:string, attributeUnitType:string): ScriptResult<any>

		/**
		 * Remove an attribute from a structure in BSTRUCTURE_ATTRIBUTE by
 individual parameters.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAttribute(capID:CapIDModel, structureNumber:number, attributeNumber:number): ScriptResult<any>

		/**
		 * Update an attribute for a structure in BSTRUCTURE_ATTRIBUTE by individual
 parameters.
		 * @param {string} auditID (string) - auditID
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @param {string} componentGroup (string) - component group
		 * @param {string} componentType (string) - component type
		 * @param {string} attributeName (string) - attribute name
		 * @param {string} attributeLabel (string) - attribute label
		 * @param {string} attributeCode (string) - attribute code
		 * @param {string} attributeDescription (string) - attribute description
		 * @param {string} attributeValueDataType (string) - attribute value data type
		 * @param {string} attributeValueReqFlag (string) - attribute value reqired flag
		 * @param {string} attributeValue (string) - attribute value
		 * @param {string} attributeUnitType (string) - attributeUnitType
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAttribute(auditID:string, capID:CapIDModel, structureNumber:number, attributeNumber:number, componentGroup:string, componentType:string, attributeName:string, attributeLabel:string, attributeCode:string, attributeDescription:string, attributeValueDataType:string, attributeValueReqFlag:string, attributeValue:string, attributeUnitType:string): ScriptResult<any>

		/**
		 * Insert a structure relationship record in the BSTRUCTURE_STRUCTURE table
 by individual parameters.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @param {string} relationship (string) - relationship
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureRelation(capID:CapIDModel, parentStructureNumber:number, childStructureNumber:number, relationship:string): ScriptResult<any>

		/**
		 * Remove a structure relationship record from the BSTRUCTURE_STRUCTURE
 table by individual parameters.
		 * @param {string} auditID (string) - auditID
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @param {string} relationship (string) - relationship
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeStrucutureRelation(auditID:string, capID:CapIDModel, parentStructureNumber:number, childStructureNumber:number, relationship:string): ScriptResult<any>

		/**
		 * Get an attribute by structureROC.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttributes(capID:CapIDModel, structureNumber:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Retrieve data based on the parent StructureModel.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParentStructures(capID:CapIDModel, parentStructureNumber:number): ScriptResult<any>

		/**
		 * Retrieve data based on the child StructureModel.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildStructures(capID:CapIDModel, childStructureNumber:number): ScriptResult<any>

		/**
		 * Retrieve all permits associated with a given structure .
		 * @param {string} structureType (string) - structure type
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByStructure(structureType:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Copy BStructure
		 * @param {CapModel} sourceCap (CapModel)
		 * @param {CapIDModel} targetCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function cloneStructure(sourceCap:CapModel, targetCapID:CapIDModel): ScriptResult<any>

	}
	namespace caeCondition {
		/**
		 * Get CAEConditions by licenseSeqNo.
		 * @param {number} licenseSeqNo (number) - (long) license sequence no
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCAEConditions(licenseSeqNo:number): ScriptResult<any>

		/**
		 * Get CAECondition by conditionID and licenseSeqNo.
		 * @param {number} conditionID (number) - (long) condition id
		 * @param {number} licenseSeqNo (number) - (long) license sequence no
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCAECondition(conditionID:number, licenseSeqNo:number): ScriptResult<any>

		/**
		 * Add one CAECondition.
		 * @param {number} licenseSeqNo (number) - (long) license sequence no
		 * @param {string} conditionType (string) - condition type
		 * @param {string} conditionDescription (string) - condition description
		 * @param {string} conditionComment (string) - condition comment
		 * @param {string} refNumber1 (string) - refNumber1
		 * @param {string} refNumber2 (string) - refNumber2
		 * @param {string} impactCode (string) - impact code
		 * @param {string} conditionStatus (string) - condition status
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - issued date
		 * @param {ScriptDateTime} statusDate (ScriptDateTime) - status date
		 * @param {SysUserModel} issuedByUser (SysUserModel) - issued by user
		 * @param {SysUserModel} statusByUser (SysUserModel) - status by user
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCAECondition(licenseSeqNo:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel): ScriptResult<any>

		/**
		 * create CAECondition.
		 * @param {CAEConditionScriptModel} pm (CAEConditionScriptModel) - CAEConditionScriptModel
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createCAECondition(pm:CAEConditionScriptModel): ScriptResult<any>

		/**
		 * Add one CAECondition (new added in V6.5).
		 * @param {number} licenseSeqNo (number) - (long) the license seq no
		 * @param {string} conditionType (string) - the condition type
		 * @param {string} conditionDescription (string) - the condition description
		 * @param {string} conditionComment (string) - the condition comment
		 * @param {string} refNumber1 (string) - the ref number1
		 * @param {string} refNumber2 (string) - the ref number2
		 * @param {string} impactCode (string) - the impact code
		 * @param {string} conditionStatus (string) - the condition status
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - the effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - the expire date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - the issued date
		 * @param {ScriptDateTime} statusDate (ScriptDateTime) - the status date
		 * @param {SysUserModel} issuedByUser (SysUserModel) - the issued by user
		 * @param {SysUserModel} statusByUser (SysUserModel) - the status by user
		 * @param {string} conditionStatusType (string) - the condition status type
		 * @param {string} displayConditionNotice (string) - the display condition notice
		 * @param {string} includeInConditionName (string) - the include in condition name
		 * @param {string} includeInShortDescription (string) - the include in short description
		 * @param {string} inheritable (string) - the inheritable
		 * @param {string} longDescripton (string) - the long descripton
		 * @param {string} publicDisplayMessage (string) - the public display message
		 * @param {string} resolutionAction (string) - the resolution action
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addCAECondition(licenseSeqNo:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string): ScriptResult<any>

		/**
		 * Add condition group (Added in V6.6).
		 * @param {number} licenseSeqNo (number) - (long) the license seq no
		 * @param {string} conditionType (string) - the condition type
		 * @param {string} conditionDescription (string) - the condition description
		 * @param {string} conditionComment (string) - the condition comment
		 * @param {string} refNumber1 (string) - the ref number1
		 * @param {string} refNumber2 (string) - the ref number2
		 * @param {string} impactCode (string) - the impact code
		 * @param {string} conditionStatus (string) - the condition status
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - the effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - the expire date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - the issued date
		 * @param {ScriptDateTime} statusDate (ScriptDateTime) - the status date
		 * @param {SysUserModel} issuedByUser (SysUserModel) - the issued by user
		 * @param {SysUserModel} statusByUser (SysUserModel) - the status by user
		 * @param {string} conditionStatusType (string) - the condition status type
		 * @param {string} displayConditionNotice (string) - the display condition notice
		 * @param {string} includeInConditionName (string) - the include in condition name
		 * @param {string} includeInShortDescription (string) - the include in short description
		 * @param {string} inheritable (string) - the inheritable
		 * @param {string} longDescripton (string) - the long descripton
		 * @param {string} publicDisplayMessage (string) - the public display message
		 * @param {string} resolutionAction (string) - the resolution action
		 * @param {string} conditionGroup (string) - the condition group
		 * @param {string} displayNoticeOnACA (string) - the display notice on aca
		 * @param {string} displayNoticeOnACAFee (string) - the display notice on aca fee
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addCAECondition(licenseSeqNo:number, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string, conditionGroup:string, displayNoticeOnACA:string, displayNoticeOnACAFee:string): ScriptResult<any>

		/**
		 * Edit CAECondition with CAEConditionScriptModel.
		 * @param {CAEConditionScriptModel} licCondition (CAEConditionScriptModel) - CAEConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCAECondition(licCondition:CAEConditionScriptModel): ScriptResult<any>

		/**
		 * Remove CAECondition by conditionID,licenseSeqNo.
		 * @param {number} conditionID (number) - (long) condition id
		 * @param {number} licenseSeqNo (number) - (long) license sequence no
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeCAECondition(conditionID:number, licenseSeqNo:number): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

		/**
		 * Create CAE condition from standard condition
		 * @param {string} licenseSeqNo (string) - CAE license ID
		 * @param {string} stdConditionNnumber (string) - standard condition ID
		 * @returns (ScriptResult<any>)          *
		 */
		function createCAEConditionFromStdCondition(licenseSeqNo:string, stdConditionNnumber:string): ScriptResult<any>

	}
	namespace calendar {
		/**
		 * Add one calendar.
		 * @param {number} calendarID (number) - (long) calendar id
		 * @param {string} calendarName (string) - calendar name
		 * @param {XGStructureCalendarModel} xGStructureCalendarModel (XGStructureCalendarModel) - xGStructureCalendarModel
		 * @param {string} calendarType (string) - calendar type
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCalendar(calendarID:number, calendarName:string, xGStructureCalendarModel:XGStructureCalendarModel, calendarType:string): ScriptResult<any>

		/**
		 * Get one calendar by calendarID.
		 * @param {number} calendarID (number) - (long) calendar id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCalendar(calendarID:number): ScriptResult<any>

		/**
		 * Get one collection of Calendar names.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCalendarNames(): ScriptResult<any>

		/**
		 * Get available hearing.
		 * @param {string} hearingBody (string) - hearing body
		 * @param {number} duration (number) - (double) duration
		 * @param {string} startTime (string) - start time
		 * @param {ScriptDateTime} dateFrom (ScriptDateTime) - the from date
		 * @param {ScriptDateTime} dateTo (ScriptDateTime) - the to date
		 * @param {string} dayOfWeek (string) - day of week
		 * @param {string} location (string) - location
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAvailableHearing(hearingBody:string, duration:number, startTime:string, dateFrom:ScriptDateTime, dateTo:ScriptDateTime, dayOfWeek:string, location:string): ScriptResult<any>

		/**
		 * Get available hearing item.
		 * @param {string} hearingBody (string)
		 * @param {number} duration (number) - (double) 
		 * @param {string} calendarName (string)
		 * @param {ScriptDateTime} dateFrom (ScriptDateTime)
		 * @param {ScriptDateTime} dateTo (ScriptDateTime)
		 * @param {string} dayOfWeek (string)
		 * @param {string} location (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getAvailableHearingItem(hearingBody:string, duration:number, calendarName:string, dateFrom:ScriptDateTime, dateTo:ScriptDateTime, dayOfWeek:string, location:string): ScriptResult<any>

		/**
		 * Method scheduleHearing.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} hearingID (string) - hearing id
		 * @param {string} duration (string) - duration
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function scheduleHearing(capID:CapIDModel, hearingID:string, duration:string): ScriptResult<any>

		/**
		 * Find out all calendars according to a certain condition
		 * @param {string} calendarName (string) - Calendar Name
		 * @param {string} calendarType (string) - Calendar Type
		 * @returns (ScriptResult<any>) - ScriptResult  output object is collection of calendar records
		 */
		function getCalendars(calendarName:string, calendarType:string): ScriptResult<any>

		/**
		 * Added calendar
		 * @param {string} calendarName (string) - Calendar Name
		 * @param {XGStructureCalendarModel} xGStructureCalendarModel (XGStructureCalendarModel) - This parameter for structure calendar
		 * @param {string} calendarType (string) - Calendar Type
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function addCalendar(calendarName:string, xGStructureCalendarModel:XGStructureCalendarModel, calendarType:string): ScriptResult<any>

		/**
		 * Add inspector calendar
		 * @param {number} calendarID (number) - (long) Calendar ID
		 * @param {string} calendarLevel (string) - Calendar level ,The value is User or User Group
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function getInspectorCalendars(calendarID:number, calendarLevel:string): ScriptResult<any>

		/**
		 * Get inspector calendar
		 * @param {number} calendarID (number) - (long) Calendar ID
		 * @param {number} groupID (number) - (long) 
		 * @param {string} userID (string)
		 * @param {string} calendarLevel (string) - Calendar level ,The value is User or User Group
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function addInspectorCalendar(calendarID:number, groupID:number, userID:string, calendarLevel:string): ScriptResult<any>

		/**
		 * Delete inspector calendar by inspector calendar nbr
		 * @param {number} inspectorCalendarNbr (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function deleteInspectorCalendar(inspectorCalendarNbr:number): ScriptResult<any>

		/**
		 * Add event for inspector calendar
		 * @param {number} calendarID (number) - (long) 
		 * @param {string} eventName (string)
		 * @param {string} eventType (string)
		 * @param {string} eventDate (string)
		 * @returns (ScriptResult<any>) - ScriptResult  output object is Collection fo event ID
		 */
		function addEvent(calendarID:number, eventName:string, eventType:string, eventDate:string): ScriptResult<any>

		/**
		 * Delete event by event ID
		 * @param {number} calendarID (number) - (long) 
		 * @param {number} eventID (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function deleteEventByEventID(calendarID:number, eventID:number): ScriptResult<any>

		/**
		 * Get event by event ID
		 * @param {number} calendarID (number) - (long) 
		 * @param {number} eventID (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function getEventByEventID(calendarID:number, eventID:number): ScriptResult<any>

		/**
		 * Get event by calendarID
		 * @param {number} calendarID (number) - (long) 
		 * @param {number} year (number) - (int) 
		 * @param {number} month (number) - (int) 
		 * @returns (ScriptResult<any>) - ScriptResult  output object is Collection of  event list
		 */
		function getEventSeriesByCalendarID(calendarID:number, year:number, month:number): ScriptResult<any>

		/**
		 * Add event for inspector calendar
		 * @param {number} calendarID (number) - (long) 
		 * @param {number} eventID (number) - (long) 
		 * @param {string} eventName (string)
		 * @param {string} eventType (string)
		 * @param {string} eventDate (string)
		 * @returns (ScriptResult<any>) - ScriptResult  output object is Collection fo event ID
		 */
		function updateEvent(calendarID:number, eventID:number, eventName:string, eventType:string, eventDate:string): ScriptResult<any>

		/**
		 * Get the next working date from today based on Inspection Blockout Calendar
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNextWorkDay(): ScriptResult<any>

		/**
		 * Get the next working date from the specified date based on Inspection Blockout Calendar
		 * @param {ScriptDateTime} date (ScriptDateTime) - the specified date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNextWorkDay(date:ScriptDateTime): ScriptResult<any>

		/**
		 * Get the previous working date from the specified date based on Inspection Blockout Calendar
		 * @param {ScriptDateTime} date (ScriptDateTime) - the specified date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPreviousWorkDay(date:ScriptDateTime): ScriptResult<any>

		/**
		 * Schedule hearing for V360,This hearing will be stored into table "XAPP_EVENT"
		 * @param {CapIDModel} capID (CapIDModel) - the cap ID model
		 * @param {string} calendarID (string) - the calendar ID
		 * @param {string} eventID (string) - the event ID
		 * @param {string} duration (string) - the duration
		 * @param {string} reason (string) - the hearing reason
		 * @param {string} comments (string) - the hearing comments
		 * @returns (ScriptResult<any>)          *
		 */
		function scheduleHearing4V360(capID:CapIDModel, calendarID:string, eventID:string, duration:string, reason:string, comments:string): ScriptResult<any>

		/**
		 * Gets the next work day.
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @param {WorkingDayQueryModel} workingDayQuery (WorkingDayQueryModel) - the working day query
		 * @param {Boolean} isValidateCutOffTime (Boolean) - the is validate cut off time
		 * @param {Boolean} isValidateScheduleNumOfDays (Boolean) - the is validate schedule num of days
		 * @param {Boolean} isGettingDataFromACA (Boolean) - the is getting data from aca
		 * @param {Boolean} isIncludeGivenDay (Boolean) - the is include given day
		 * @param {Boolean} isValidateEventScheduleAllocatedUnits (Boolean) - the is validate event schedule allocated units
		 * @returns (ScriptResult<any>) - the next work day
		 */
		function getNextWorkDay(capIDModel:CapIDModel, workingDayQuery:WorkingDayQueryModel, isValidateCutOffTime:Boolean, isValidateScheduleNumOfDays:Boolean, isGettingDataFromACA:Boolean, isIncludeGivenDay:Boolean, isValidateEventScheduleAllocatedUnits:Boolean): ScriptResult<any>

	}
	namespace capCondition {
		/**
		 * Retrieve all conditions associated with current Cap
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapConditions(capID:CapIDModel): ScriptResult<any>

		/**
		 * Retrieve all conditions associated with current Cap.
		 * @param {string} Id1 (string) - permit id1
		 * @param {string} Id2 (string) - permit id2
		 * @param {string} Id3 (string) - permit id3
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapConditions(Id1:string, Id2:string, Id3:string): ScriptResult<any>

		/**
		 * Return all tasks in the workflow of current Cap.
		 * @param {string} customId (string) - custom Id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapConditions(customId:string): ScriptResult<any>

		/**
		 * Lookup one Cap condition by Cap condition primary key.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {number} conditionNumber (number) - (long) condition number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapCondition(capId:CapIDModel, conditionNumber:number): ScriptResult<any>

		/**
		 * Deprecated.�
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} conditionType (string) - condition type
		 * @param {string} conditionDescription (string) - condition description
		 * @param {string} conditionComment (string) - condition comment
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expiree date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - issued date
		 * @param {string} refNumber1 (string) - refNumber1
		 * @param {string} refNumber2 (string) - refNumber2
		 * @param {string} impactCode (string) - impact code
		 * @param {SysUserModel} issuedByUser (SysUserModel) - issued by user
		 * @param {SysUserModel} statusByUser (SysUserModel) - status by user
		 * @param {string} conditionStatus (string) - condition status
		 * @param {string} auditID (string) - audit ID
		 * @param {string} auditStatus (string) - audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCapCondition(capID:CapIDModel, conditionType:string, conditionDescription:string, conditionComment:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, refNumber1:string, refNumber2:string, impactCode:string, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatus:string, auditID:string, auditStatus:string): ScriptResult<any>

		/**
		 * Deprecated.�
		 * @returns (ScriptResult<any>)          *
		 */
		function addCapCondition(): ScriptResult<any>

		/**
		 * Deprecated.�
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatus (string)
		 * @param {string} auditID (string)
		 * @param {string} auditStatus (string)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @param {string} conditionSource (string)
		 * @param {string} referenceAPONumber (string)
		 * @param {number} referenceConditionNumber (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCapCondition(capID:CapIDModel, conditionType:string, conditionDescription:string, conditionComment:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, refNumber1:string, refNumber2:string, impactCode:string, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatus:string, auditID:string, auditStatus:string, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string, conditionSource:string, referenceAPONumber:string, referenceConditionNumber:number): ScriptResult<any>

		/**
		 * Deprecated.�
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatus (string)
		 * @param {string} auditID (string)
		 * @param {string} auditStatus (string)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @param {string} conditionSource (string)
		 * @param {string} referenceAPONumber (string)
		 * @param {number} referenceConditionNumber (number) - (long) 
		 * @param {string} conditionGroup (string)
		 * @param {string} displayNoticeOnACA (string)
		 * @param {string} displayNoticeOnACAFee (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCapCondition(capID:CapIDModel, conditionType:string, conditionDescription:string, conditionComment:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, refNumber1:string, refNumber2:string, impactCode:string, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatus:string, auditID:string, auditStatus:string, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string, conditionSource:string, referenceAPONumber:string, referenceConditionNumber:number, conditionGroup:string, displayNoticeOnACA:string, displayNoticeOnACAFee:string): ScriptResult<any>

		/**
		 * Deprecated.�
		 * @returns (ScriptResult<any>)          *
		 */
		function addCapCondition(): ScriptResult<any>

		/**
		 * Checks if is cap locked.
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function isCapLocked(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Lookup Cap condition by Cap condition type.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {string} conditionType (string) - condition type
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapConditions(capId:CapIDModel, conditionType:string): ScriptResult<any>

		/**
		 * Delete CapCondtion,added by joey.lv at Tuesday,December 17,2002.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {number} conditionID (number) - (long) condition id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteCapCondition(capId:CapIDModel, conditionID:number): ScriptResult<any>

		/**
		 * Edit/Update CapCondtion,added by joey.lv at Tuesday,December 17,2002.
		 * @param {CapConditionScriptModel} capConditions (CapConditionScriptModel) - CapConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapCondition(capConditions:CapConditionScriptModel): ScriptResult<any>

		/**
		 * Create CapCondtion.
		 * @param {CapConditionScriptModel} capConditions (CapConditionScriptModel) - CapConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapCondition(capConditions:CapConditionScriptModel): ScriptResult<any>

		/**
		 * Retrieve all conditions associated with current Cap
		 * @param {string} conditionType (string) - Condition Type
		 * @param {string} conditionName (string) - Condition Name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStandardConditions(conditionType:string, conditionName:string): ScriptResult<any>

		/**
		 * Get standard conditions by condition type and name and language.
		 * @param {string} conditionType (string) - Condition Type
		 * @param {string} conditionName (string) - Condition Name
		 * @param {string} language (string) - Language
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStandardConditions(conditionType:string, conditionName:string, language:string): ScriptResult<any>

		/**
		 * Retrieve all standard conditions by condition group.
		 * @param {string} conditionGroup (string) - Condition Group
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStandardConditionsByGroup(conditionGroup:string): ScriptResult<any>

		/**
		 * Fetch cap condition script models by special standard condition number.
		 * @param {CapIDModel} capID (CapIDModel) - capIDModel
		 * @param {string} strStdCondNumber (string) - special standard condition number
		 * @returns (ScriptResult<any>) - cap condition script models come from special standard condition.
		 */
		function getCapConditionByStdConditionNum(capID:CapIDModel, strStdCondNumber:string): ScriptResult<any>

		/**
		 * Creates the cap condition from standard condition.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} strStdCondNumber (string) - the standard number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createCapConditionFromStdCondition(capID:CapIDModel, strStdCondNumber:string): ScriptResult<any>

		/**
		 * Create Cap condition by reference standard condition model.
		 * @param {CapIDModel} capID (CapIDModel) - Cap ID Model
		 * @param {RefStdConditionScriptModel} refStdConditionScriptModel (RefStdConditionScriptModel) - RefStdConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult with condition number.
		 */
		function createCapConditionFromStdCondition(capID:CapIDModel, refStdConditionScriptModel:RefStdConditionScriptModel): ScriptResult<any>

		/**
		 * Clone cap condition.
		 * @param {CapIDModel} sourceCapID (CapIDModel) - the source cap id
		 * @param {CapIDModel} targetCapID (CapIDModel) - the target cap id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function cloneCapCondition(sourceCapID:CapIDModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

	}
	namespace cap {
		/**
		 * Get capID by id1,id2,id3
		 * @param {string} id1 (string) - permit id1
		 * @param {string} id2 (string) - permit id2
		 * @param {string} id3 (string) - permit id3
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapID(id1:string, id2:string, id3:string): ScriptResult<CapIDModel>

		/**
		 * get CapID of trade name by the trade license info.
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (CapIDModel) - CapIDModel
		 */
		function getTradeNameByTradeLicense(capIDModel:CapIDModel): CapIDModel

		/**
		 * copy CapWorkDes info from sourceCap to targetCap.
		 * @param {CapIDModel} srcCapId (CapIDModel)
		 * @param {CapIDModel} targetCapId (CapIDModel)
		 * @returns (void)          *
		 */
		function copyCapWorkDesInfo(srcCapId:CapIDModel, targetCapId:CapIDModel): void

		/**
		 * copy cap detail info from sourceCap to targetCap.
		 * @param {CapIDModel} srcCapId (CapIDModel)
		 * @param {CapIDModel} targetCapId (CapIDModel)
		 * @returns (void)          *
		 */
		function copyCapDetailInfo(srcCapId:CapIDModel, targetCapId:CapIDModel): void

		/**
		 * search a cap summary data.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @returns (CapModel) - CapModel
		 */
		function getCapViewBySingle(capID:CapIDModel): CapModel

		/**
		 * search a cap summary data for ACA.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (CapModel)          *
		 */
		function getCapViewBySingle4ACA(capID:CapIDModel): CapModel

		/**
		 * Get capID by customID.
		 * @param {string} customID (string) - custom id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapID(customID:string): ScriptResult<CapIDModel>

		/**
		 * Get capID by id1,id2,id3,customID,trackingID.
		 * @param {string} id1 (string) - permit id1
		 * @param {string} id2 (string) - permit id2
		 * @param {string} id3 (string) - permit id3
		 * @param {string} customID (string) - custom id
		 * @param {number} trackingID (number) - (long) trackin id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapID(id1:string, id2:string, id3:string, customID:string, trackingID:number): ScriptResult<CapIDModel>

		/**
		 * Get capID by trackingID.
		 * @param {number} trackingID (number) - (long) tracking ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapID(trackingID:number): ScriptResult<CapIDModel>

		/**
		 * get cap by capID.
		 * @param {string} id1 (string)
		 * @param {string} id2 (string)
		 * @param {string} id3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCap(id1:string, id2:string, id3:string): ScriptResult<CapScriptModel>

		/**
		 * Gets the cap basic info.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the cap basic info
		 */
		function getCapBasicInfo(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get cap by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCap(capID:CapIDModel): ScriptResult<CapScriptModel>

		/**
		 * Get cap detail.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapDetail(capID:CapIDModel): ScriptResult<any>

		/**
		 * Selects all records from BPERMIT base on the criteria: Only include file
 safety permit.
		 * @param {string} group (string) - app group
		 * @param {string} type (string) - app type
		 * @returns (ScriptResult<any>) - Collection of CapROC
		 */
		function getByAppType(group:string, type:string): ScriptResult<any>

		/**
		 * Get caps by permitType,taskName,taskStatus,taskPermit.
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskName (string) - task name
		 * @param {string} taskStatus (string) - task status
		 * @param {string} taskPermit (string) - task permit
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCaps(permitType:string, taskName:string, taskStatus:string, taskPermit:string): ScriptResult<any>

		/**
		 * Get project's parents by capID, numLevels.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} numLevels (number) - (int) numLevels
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProjectParents(capID:CapIDModel, numLevels:number): ScriptResult<any>

		/**
		 * Get project's children by capID, numLevels.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} numLevels (number) - (int) numLevels
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProjectChildren(capID:CapIDModel, numLevels:number): ScriptResult<any>

		/**
		 * Add project's child.
		 * @param {CapIDModel} projectID (CapIDModel) - CapIDModel
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addProjectChild(projectID:CapIDModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Remove project's child.
		 * @param {CapIDModel} projectID (CapIDModel) - CapIDModel
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeProjectChild(projectID:CapIDModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * *********** joey add at July 31,2003 **************.
		 * @returns (ScriptResult<any>) - the cap id list
		 */
		function getCapIDList(): ScriptResult<any>

		/**
		 * Edit TotalFees.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} totalFee (number) - (double) total fee
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTotalFees(capID:CapIDModel, totalFee:number): ScriptResult<any>

		/**
		 * Edit total fees
		 * @param {string} ID1 (string) - permit id1
		 * @param {string} ID2 (string) - permit id2
		 * @param {string} ID3 (string) - permit id3
		 * @param {number} totalFee (number) - (double) total fee
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTotalFees(ID1:string, ID2:string, ID3:string, totalFee:number): ScriptResult<any>

		/**
		 * Edit total payment.
		 * @param {string} ID1 (string) - permit id1
		 * @param {string} ID2 (string) - permit id2
		 * @param {string} ID3 (string) - permit id3
		 * @param {number} totalPay (number) - (double) total pay
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTotalPayment(ID1:string, ID2:string, ID3:string, totalPay:number): ScriptResult<any>

		/**
		 * Edit cap detail information.
		 * @param {CapDetailModel} capDetailModel (CapDetailModel) - CapDetailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapDetail(capDetailModel:CapDetailModel): ScriptResult<any>

		/**
		 * Add cap detail information.
		 * @param {CapDetailModel} capDetailModel (CapDetailModel) - CapDetailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapDetail(capDetailModel:CapDetailModel): ScriptResult<any>

		/**
		 * Add cap.
		 * @param {string} userName (string) - the string of username
		 * @param {string} content (string) - the string of content
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function requestCreateCap(userName:string, content:string): ScriptResult<any>

		/**
		 * Add a new cap.
		 * @param {string} tempID (string) - temp id
		 * @param {string} userID (string) - user id
		 * @param {CapModel} cap (CapModel) - CapModel
		 * @param {StringBuffer} buff (StringBuffer) - StringBuffer
		 * @param {string} customID (string) - custom ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCap(tempID:string, userID:string, cap:CapModel, buff:StringBuffer, customID:string): ScriptResult<any>

		/**
		 * Get the collection of cap types.
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeList(qf:QueryFormat | null): ScriptResult<any>

		/**
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeModelByCapID(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * @param {CapTypeModel} capTypeModel (CapTypeModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRelatedCapTypes(capTypeModel:CapTypeModel): ScriptResult<any>

		/**
		 * Get the collection of project types.
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProjectTypeList(qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Get the collection of cap types in the module.
		 * @param {string} moduleName (string) - module name
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeListByModule(moduleName:string, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Get the collection of cap types by group code.
		 * @param {string} groupCode (string) - group code
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeList(groupCode:string, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * ******** capServer **********.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {QueryFormat | null} qf (QueryFormat) - the qf
		 * @returns (ScriptResult<any>) - the cap list
		 */
		function getCapList(capID:CapIDModel, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Return CapIDScriptModel Colelction
		 * @param {string} group (string) - app group
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByInspGroup(group:string, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Return CapIDScriptModel Colelction
		 * @param {string} streetName (string) - street name
		 * @param {number} houseNumber (number) - (Integer) house number
		 * @param {string} streetSuffix (string) - street suffix
		 * @param {string} postalCode (string) - postal code
		 * @param {string} streetDirection (string) - street direction
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapListByDetailAddress(streetName:string, houseNumber:number, streetSuffix:string, postalCode:string, streetDirection:string, queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Return CapIDScriptModel Colelction
		 * @param {string} parcelKey (string) - parcel key
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapListByParcelID(parcelKey:string, queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Get function content by primary key.
		 * @param {UserTempDataModel} temp (UserTempDataModel) - UserTempDataModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFunctionContentByPK(temp:UserTempDataModel): ScriptResult<any>

		/**
		 * Return Cap ScriptModel Colelction.
		 * @param {CapModel} capModel (CapModel) - CapModel
		 * @param {AddressModel} addr (AddressModel) - AddressModel
		 * @param {string} parcelNumber (string) - parcel number
		 * @param {ScriptDateTime} perFileDDFrom (ScriptDateTime) - ScriptDateTime
		 * @param {ScriptDateTime} perFileDDTo (ScriptDateTime) - ScriptDateTime
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @param {GISObjects} gISObject (GISObjects) - GISObject
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapListByCollection(capModel:CapModel, addr:AddressModel, parcelNumber:string, perFileDDFrom:ScriptDateTime, perFileDDTo:ScriptDateTime, qf:QueryFormat | null, gISObject:GISObjects): ScriptResult<any>

		/**
		 * Return Cap ScriptModel Colelction.
		 * @param {CapModel} capModel (CapModel) - CapModel
		 * @param {AddressModel} addr (AddressModel) - AddressModel
		 * @param {string} parcelNumber (string) - parcel number
		 * @param {ScriptDateTime} perFileDDFrom (ScriptDateTime) - ScriptDateTime
		 * @param {ScriptDateTime} perFileDDTo (ScriptDateTime) - ScriptDateTime
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @param {GISObjectModel[]} gISObjects (GISObjectModel[]) - GISObjectModel Array
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapListByCollection(capModel:CapModel, addr:AddressModel, parcelNumber:string, perFileDDFrom:ScriptDateTime, perFileDDTo:ScriptDateTime, qf:QueryFormat | null, gISObjects:GISObjectModel[]): ScriptResult<any>

		/**
		 * Create CAP ID script model according to given parameters.
		 * @param {string} id1 (string)
		 * @param {string} id2 (string)
		 * @param {string} id3 (string)
		 * @returns (CapIDScriptModel)          *
		 */
		function createCapIDScriptModel(id1:string, id2:string, id3:string): CapIDScriptModel

		/**
		 * Get capid by capId value.
		 * @param {string} spc (string) - agency code
		 * @param {string} capIDValue (string) - capid value
		 * @param {string} auditID (string) - the caler id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDByIDValue(spc:string, capIDValue:string, auditID:string): ScriptResult<any>

		/**
		 * Edit app status.
		 * @param {StatusHistoryModel} statusHistoryModel (StatusHistoryModel) - StatusHistoryModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAppStatus(statusHistoryModel:StatusHistoryModel, callerID:string): ScriptResult<any>

		/**
		 * Add an new checkbox.
		 * @param {AppSpecificInfoModel} bchckboxModel (AppSpecificInfoModel) - AppSpecificInfoModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCheckbox(bchckboxModel:AppSpecificInfoModel): ScriptResult<any>

		/**
		 * Get CAEConditions.
		 * @param {number} licenseSeqNo (number) - (long) license sequence number
		 * @param {string} conditionType (string) - condition type
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCAEConditions(licenseSeqNo:number, conditionType:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get comment by primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} activityIDNumber (number) - (long) activityID number
		 * @param {string} commentType (string) - comment type
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCommentByPK(capID:CapIDModel, activityIDNumber:number, commentType:string): ScriptResult<any>

		/**
		 * CommentScriptModel
		 * @returns (CommentScriptModel) - CommentScriptModel
		 */
		function createCommentScriptModel(): CommentScriptModel

		/**
		 * Edit comment.
		 * @param {CommentModel} cmm (CommentModel) - CommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editComment(cmm:CommentModel): ScriptResult<any>

		/**
		 * Add a comment.
		 * @param {CommentModel} cmm (CommentModel) - CommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createComment(cmm:CommentModel): ScriptResult<any>

		/**
		 * Remove a comment.
		 * @param {CommentModel} cmm (CommentModel) - CommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeComment(cmm:CommentModel): ScriptResult<any>

		/**
		 * Get standard comment.
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStandardComment(queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Remove comment by activity.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} activityIDNumber (number) - (long) activityID number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeCommentByActivity(capID:CapIDModel, activityIDNumber:number): ScriptResult<any>

		/**
		 * Get guide item comment.
		 * @param {number} commentID (number) - (long) comment id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getGuideItemComment(commentID:number): ScriptResult<any>

		/**
		 * Add an new guide itme comment.
		 * @param {CommentModel} cm (CommentModel) - CommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createGuideItemComment(cm:CommentModel): ScriptResult<any>

		/**
		 * CapCommentScriptModel
		 * @returns (CapCommentScriptModel) - CapCommentScriptModel
		 */
		function createCapCommentScriptModel(): CapCommentScriptModel

		/**
		 * *********** Joey added CapCommentService's method on Apr 19, 2004
 ************
 Add a new cap comment.
		 * @param {CapCommentModel} capCommentModel (CapCommentModel) - CapCommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapComment(capCommentModel:CapCommentModel): ScriptResult<any>

		/**
		 * Get cap comments.
		 * @param {CapCommentModel} capCommentModel (CapCommentModel) - CapCommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapComment(capCommentModel:CapCommentModel): ScriptResult<any>

		/**
		 * Edit cap comments.
		 * @param {CapCommentModel} capCommentModel (CapCommentModel) - CapCommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapComment(capCommentModel:CapCommentModel): ScriptResult<any>

		/**
		 * Remove cap comments.
		 * @param {CapCommentModel} capCommentModel (CapCommentModel) - CapCommentModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteCapComment(capCommentModel:CapCommentModel): ScriptResult<any>

		/**
		 * Add an new cap  workdes.
		 * @param {CapWorkDesModel} capWorkDesModel (CapWorkDesModel) - CapWorkDesModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapWorkDes(capWorkDesModel:CapWorkDesModel): ScriptResult<any>

		/**
		 * Edit an new cap  workdes.
		 * @param {CapWorkDesModel} capWorkDesModel (CapWorkDesModel) - CapWorkDesModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapWorkDes(capWorkDesModel:CapWorkDesModel): ScriptResult<any>

		/**
		 * Remove an new cap  workdes.
		 * @param {CapIDModel} capIDModel (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeCapWorkDes(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Remove all expired Incomplete CAP
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeExpiredIncompleteCAP(): ScriptResult<any>

		/**
		 * Get an new cap  workdes by primary key.
		 * @param {CapIDModel} capIDModel (CapIDModel) - CapWorkDesModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapWorkDesByPK(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Add an new status history.
		 * @param {StatusHistoryModel} statusHistoryModel (StatusHistoryModel) - StatusHistoryModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createStatusHistory(statusHistoryModel:StatusHistoryModel): ScriptResult<any>

		/**
		 * Get the status history of a CAP.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} type (string) - The type
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStatusHistoryByCap(capID:CapIDModel, type:string, format:QueryFormat | null): ScriptResult<StatusHistoryScriptModel[]>

		/**
		 * Link an application to a parent application.
		 * @param {CapIDModel} parentCapID (CapIDModel) - CapIDModel
		 * @param {CapIDModel} childCapID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAppHierarchy(parentCapID:CapIDModel, childCapID:CapIDModel): ScriptResult<any>

		/**
		 * Gets the children.
		 * @param {CapIDModel} masterID (CapIDModel) - the master id
		 * @param {CapTypeModel} capTypeModel (CapTypeModel) - the cap type model
		 * @returns (ScriptResult<any>) - the children
		 */
		function getChildrenCaps(masterID:CapIDModel, capTypeModel:CapTypeModel): ScriptResult<any>

		/**
		 * Batch create child records.
		 * @param {CapIDModel} parentRecordID (CapIDModel) - the parent record id
		 * @param {CapTypeModel[]} childrenCapTypes (CapTypeModel[]) - the children cap types
		 * @param {string[]} copyFileds (string[]) - the copy fileds
		 * @returns (ScriptResult<any>) - the script result
		 */
		function batchCreateChildRecords(parentRecordID:CapIDModel, childrenCapTypes:CapTypeModel[], copyFileds:string[]): ScriptResult<any>

		/**
		 * Link an application to a parent application with Associated Forms relationship.
		 * @param {CapIDModel} projectID (CapIDModel) - CapIDModel
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAssociatedFormsHierarchy(projectID:CapIDModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Get children applications of a specified application in the applicatino
 hierarchy.
		 * @param {CapIDModel} masterID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildByMasterID(masterID:CapIDModel): ScriptResult<any>

		/**
		 * Delete application from application hierarchy.
		 * @param {CapIDModel} projectID (CapIDModel) - CapIDModel
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAppHierarchy(projectID:CapIDModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Create an application of a predetermined application type.
		 * @param {string} group (string) - app group
		 * @param {string} type (string) - app type
		 * @param {string} subtype (string) - app subtype
		 * @param {string} category (string) - app category
		 * @param {string} appName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createApp(group:string, type:string, subtype:string, category:string, appName:string): ScriptResult<any>

		/**
		 * Update an application's status.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {string} type (string) - status type
		 * @param {string} status (string) - status
		 * @param {ScriptDateTime} date (ScriptDateTime) - ScriptDateTime
		 * @param {string} comment (string) - the string of comment
		 * @param {SysUserModel} sysuser (SysUserModel) - SysUserModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAppStatus(capId:CapIDModel, type:string, status:string, date:ScriptDateTime, comment:string, sysuser:SysUserModel): ScriptResult<any>

		/**
		 * Get Caps by TaskItem.
		 * @param {number} processID (number) - (long) process id
		 * @param {number} stepNumber (number) - (int) step number
		 * @param {string} chckboxDesc (string) - checkbox Desc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapsByTaskItem(processID:number, stepNumber:number, chckboxDesc:string): ScriptResult<any>

		/**
		 * Get CapIDs by appSpecInfoFiled.
		 * @param {string} appSpecInfoLabel (string) - app specific info label
		 * @param {string} appSpecInfoValue (string) - app specific info value
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDsByAppSpecificInfoField(appSpecInfoLabel:string, appSpecInfoValue:string): ScriptResult<any>

		/**
		 * update cap
		 * @param {CapModel} model (CapModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapByPK(model:CapModel): ScriptResult<any>

		/**
		 * create CapScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function newCapScriptModel(): ScriptResult<any>

		/**
		 * Get Cap Type Detail By PK
		 * @param {CapTypeModel} capType (CapTypeModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeDetailByPK(capType:CapTypeModel): ScriptResult<any>

		/**
		 * Get CAP IDs by App Spec Info SubGroup name, Label name, begin file date and end file date
		 * @param {string} appSubGroupName (string)
		 * @param {string} appSpecInfoLabel (string)
		 * @param {ScriptDateTime} beginDateValue (ScriptDateTime)
		 * @param {ScriptDateTime} endDateValue (ScriptDateTime)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDsByAppSpecificInfoDateRange(appSubGroupName:string, appSpecInfoLabel:string, beginDateValue:ScriptDateTime, endDateValue:ScriptDateTime): ScriptResult<any>

		/**
		 * update cap AltID for feature 07ACC-07154_ UpdateALTIDviaEMSE
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} altID (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateCapAltID(capID:CapIDModel, altID:string): ScriptResult<any>

		/**
		 * @param {CapScriptModel} capScriptModel (CapScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createAppWithModel(capScriptModel:CapScriptModel): ScriptResult<any>

		/**
		 * @param {CapScriptModel} capScriptModel (CapScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateAppWithModel(capScriptModel:CapScriptModel): ScriptResult<any>

		/**
		 * @param {string} dateString (string)
		 * @param {string} pattern (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function parseStr2Date(dateString:string, pattern:string): ScriptResult<any>

		/**
		 * @param {string} doubleString (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function parseStr2Double(doubleString:string): ScriptResult<any>

		/**
		 * @param {Date} reportedDate (Date)
		 * @param {string} reportedTime (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function combineDateTime(reportedDate:Date, reportedTime:string): ScriptResult<any>

		/**
		 * @param {string} firstName (string)
		 * @param {string} middleName (string)
		 * @param {string} lastName (string)
		 * @param {string} assigned_Dept (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getStaffByUser(firstName:string, middleName:string, lastName:string, assigned_Dept:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapModel(): ScriptResult<any>

		/**
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapViewByID(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * @param {string} id1 (string)
		 * @param {string} id2 (string)
		 * @param {string} id3 (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapIDModel(id1:string, id2:string, id3:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapTypeModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapDetailModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapWorkDesModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getStaffModel(): ScriptResult<any>

		/**
		 * @param {CapModel} capModel (CapModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapScriptModel(capModel:CapModel): ScriptResult<any>

		/**
		 * Update B1PERMIT.B1_ACCESS_BY_ACA status on CAP.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} isAccessableByACA (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAccessByACA(capID:CapIDModel, isAccessableByACA:string): ScriptResult<any>

		/**
		 * Update B1PERMIT.B1_CREATED_BY , B1_ACCESS_BY_ACA , B1_CREATED_BY_ACA status on CAP.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} createdBy (string)
		 * @param {string} isAccessableByACA (string)
		 * @param {string} isCreatedByACA (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateCreatedAccessBy4ACA(capID:CapIDModel, createdBy:string, isAccessableByACA:string, isCreatedByACA:string): ScriptResult<any>

		/**
		 * 
 Create renewal CAP.
		 * @param {CapIDModel} parentCapID (CapIDModel) - Parent CAPID.
		 * @param {CapIDModel} childCapID (CapIDModel) - Child CAPID.
		 * @param {boolean} isPartialCap (boolean) - For partial CAP, renewal CAP status is "Incomplete".
		 * @returns (ScriptResult<any>) - projectScriptModel
 
		 */
		function createRenewalCap(parentCapID:CapIDModel, childCapID:CapIDModel, isPartialCap:boolean): ScriptResult<any>

		/**
		 * Update project information.
		 * @param {ProjectScriptModel} projectScriptModel (ProjectScriptModel) - the project script model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateProject(projectScriptModel:ProjectScriptModel): ScriptResult<any>

		/**
		 * Get Project with child CAPID and relationship.
		 * @param {CapIDModel} capID (CapIDModel) - the model to represents a cap ID.
		 * @param {string} relationship (string) - It may be "R", "EST" and "Renewal".
		 * @param {string} status (string) - It is for renewal CAP, it may be "Incomplete", "Review" or "Complete".
		 * @returns (ScriptResult<any>) - the project model, in which the specified cap is the child.
		 */
		function getProjectByChildCapID(capID:CapIDModel, relationship:string, status:string): ScriptResult<any>

		/**
		 * Returns all the child caps with parent CAPID and other condition.
		 * @param {CapIDModel} masterID (CapIDModel) - the model to represents a cap ID.
		 * @param {string} relationship (string) - It may be "R", "EST" and "Renewal".
		 * @param {string} status (string) - It is for renewal CAP, it may be "Incomplete", "Review" or "Complete".
		 * @returns (ScriptResult<any>) - the project model, in which the specified cap is the child.
		 */
		function getProjectByMasterID(masterID:CapIDModel, relationship:string, status:string): ScriptResult<any>

		/**
		 * Get BValuation for additional info.
		 * @param {CapIDModel} capID (CapIDModel) - CapID Model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getBValuatn4AddtInfo(capID:CapIDModel): ScriptResult<any>

		/**
		 * Edit additional Info.
		 * @param {CapDetailScriptModel} detailScriptModel (CapDetailScriptModel)
		 * @param {BValuatnScriptModel} bValuatnScriptModel (BValuatnScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editAddtInfo(detailScriptModel:CapDetailScriptModel, bValuatnScriptModel:BValuatnScriptModel): ScriptResult<any>

		/**
		 * Selects all records from BPERMIT base on the criteria: Only include file
 safety permit.
		 * @param {string} group (string) - app group
		 * @param {string} type (string) - app type
		 * @param {string} subType (string)
		 * @param {string} category (string)
		 * @returns (ScriptResult<any>) - Collection of CapROC
		 */
		function getByAppType(group:string, type:string, subType:string, category:string): ScriptResult<any>

		/**
		 * Method for copying address from source CAP to target CAP
		 * @param {CapScriptModel} capSourceModel (CapScriptModel)
		 * @param {CapScriptModel} capTargetModel (CapScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyAddress(capSourceModel:CapScriptModel, capTargetModel:CapScriptModel): ScriptResult<any>

		/**
		 * Method for copying comments from source CAP to target CAP
		 * @param {CapScriptModel} capSourceModel (CapScriptModel)
		 * @param {CapScriptModel} capTargetModel (CapScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyComments(capSourceModel:CapScriptModel, capTargetModel:CapScriptModel): ScriptResult<any>

		/**
		 * Method for copying parcel from source CAP to target CAP
		 * @param {CapScriptModel} capSourceModel (CapScriptModel)
		 * @param {CapScriptModel} capTargetModel (CapScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyParcel(capSourceModel:CapScriptModel, capTargetModel:CapScriptModel): ScriptResult<any>

		/**
		 * Method for copying owner from source CAP to target CAP
		 * @param {CapScriptModel} capSourceModel (CapScriptModel)
		 * @param {CapScriptModel} capTargetModel (CapScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyOwner(capSourceModel:CapScriptModel, capTargetModel:CapScriptModel): ScriptResult<any>

		/**
		 * Method for copying contact from source CAP to target CAP
		 * @param {CapScriptModel} capSourceModel (CapScriptModel)
		 * @param {CapScriptModel} capTargetModel (CapScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyContact(capSourceModel:CapScriptModel, capTargetModel:CapScriptModel): ScriptResult<any>

		/**
		 * Selects all records from BPERMIT base on the criteria: Only include file
 safety permit.
		 * @param {string} group (string) - app group
		 * @param {string} type (string) - app type
		 * @param {string} subType (string)
		 * @param {string} category (string)
		 * @param {number} pageNumber (number) - (int) 
		 * @param {number} pageSize (number) - (int) 
		 * @returns (ScriptResult<any>) - Collection of CapROC
		 */
		function getByAppType(group:string, type:string, subType:string, category:string, pageNumber:number, pageSize:number): ScriptResult<any>

		/**
		 * getCapIDsByAPOAttribute
		 * @param {string} attributeType (string)
		 * @param {string} attributeName (string)
		 * @param {string} attributeValue (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDsByAPOAttribute(attributeType:string, attributeName:string, attributeValue:string): ScriptResult<any>

		/**
		 * getCapIDsByAPOAttributeDateRange
		 * @param {string} attributeType (string)
		 * @param {string} attributeName (string)
		 * @param {ScriptDateTime} beginDateValue (ScriptDateTime)
		 * @param {ScriptDateTime} endDateValue (ScriptDateTime)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDsByAPOAttributeDateRange(attributeType:string, attributeName:string, beginDateValue:ScriptDateTime, endDateValue:ScriptDateTime): ScriptResult<any>

		/**
		 * Retrieve online/public user associated CAP
		 * @param {string} userSeqNbr (string) - the sequence number of the public user
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAssociatedCapsByOnlineUser(userSeqNbr:string): ScriptResult<any>

		/**
		 * Get children CAPs by parent CAP Id.
 hierarchy.
		 * @param {CapIDModel} parentCapID (CapIDModel) - the parent cap id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildCapByParentCapId(parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * Run EMSE script bebore convert partial cap ID to real cap ID
		 * @param {CapModel} capModel (CapModel)
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function runEMSEScriptBeforeCreateRealCap(capModel:CapModel, parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * Run EMSE script after convert partial cap ID to real cap ID
		 * @param {CapModel} capModel (CapModel)
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function runEMSEScriptAfterCreateRealCap(capModel:CapModel, capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Run EMSE script before receive payment
		 * @param {CapModel} capModel (CapModel)
		 * @param {PaymentScriptModel} paymentScriptModel (PaymentScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function runEMSEScriptBeforePaymentReceive(capModel:CapModel, paymentScriptModel:PaymentScriptModel): ScriptResult<any>

		/**
		 * Run EMSE script after receive payment.
		 * @param {CapModel} capModel (CapModel) - the cap model
		 * @param {PaymentScriptModel} paymentScriptModel (PaymentScriptModel) - the payment script model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function runEMSEScriptAfterPaymentReceive(capModel:CapModel, paymentScriptModel:PaymentScriptModel): ScriptResult<any>

		/**
		 * Put application specific infomation field models to appSpecificInfoGroups field of CAP.
		 * @param {CapModel} capModel (CapModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function convertAppSpecificInfoGroups2appSpecificInfos4ACA(capModel:CapModel): ScriptResult<any>

		/**
		 * Convert APP specific table field to value.
		 * @param {CapModel} capModel (CapModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function convertAppSpecTableField2Value4ACA(capModel:CapModel): ScriptResult<any>

		/**
		 * Set the template attribute to a new.
		 * @param {CapModel} capModel (CapModel)
		 * @returns (ScriptResult<any>) - script result
		 */
		function getCapWithTemplateAttributes(capModel:CapModel): ScriptResult<any>

		/**
		 * Save APO and People template attributes to daily side.
		 * @param {CapModel} originalCap (CapModel)
		 * @param {CapModel} newCap (CapModel)
		 * @returns (ScriptResult<any>) - script result
		 */
		function createTemplateAttributes(originalCap:CapModel, newCap:CapModel): ScriptResult<any>

		/**
		 * Create amendent CAP.
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @param {CapIDModel} childCapID (CapIDModel)
		 * @param {boolean} isPartial (boolean)
		 * @returns (ScriptResult<any>) - script result
		 */
		function createAmendmentCap(parentCapID:CapIDModel, childCapID:CapIDModel, isPartial:boolean): ScriptResult<any>

		/**
		 * Change the Partial to a regular CAP
		 * @param {CapModel} capModel (CapModel) - the cap model
		 * @param {string} wotModelSeq (string)
		 * @param {boolean} isWebOnlinePayment (boolean)
		 * @param {boolean} isUsed4SuperAgency (boolean)
		 * @returns (ScriptResult<any>)          *
		 */
		function createRegularCapModel4ACA(capModel:CapModel, wotModelSeq:string, isWebOnlinePayment:boolean, isUsed4SuperAgency:boolean): ScriptResult<any>

		/**
		 * Get Cap Type Fielter Name
		 * @param {CapTypeModel} capType (CapTypeModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapTypeFilterName(capType:CapTypeModel): ScriptResult<any>

		/**
		 * Get CAP model by PK.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {boolean} isActive (boolean)
		 * @returns (ScriptResult<any>) - script result
		 */
		function getCapByPK(capID:CapIDModel, isActive:boolean): ScriptResult<any>

		/**
		 * transfer document to parent cap for renew.
		 * @param {CapIDModel} partialCAPID (CapIDModel) - partial cap id model
		 * @param {CapIDModel} parentCapID (CapIDModel) - parent cap id model
		 * @param {boolean} isAutoIssue (boolean) - is auto issueance
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function transferRenewCapDocument(partialCAPID:CapIDModel, parentCapID:CapIDModel, isAutoIssue:boolean): ScriptResult<any>

		/**
		 * transfer document to parent cap for renew.
		 * @param {CapIDModel} childCapID (CapIDModel) - child cap id model
		 * @param {CapIDModel} parentCapID (CapIDModel) - parent cap id model
		 * @param {string} currentUserID (string) - callerid
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyRenewCapDocument(childCapID:CapIDModel, parentCapID:CapIDModel, currentUserID:string): ScriptResult<any>

		/**
		 * Deprecated.�this method avoid EMSE exception when customer upgrade version from V6.7 to V7.0
		 * @param {CapIDModel} partialCAPID (CapIDModel) - partial cap id model
		 * @param {CapIDModel} parentCapID (CapIDModel) - parent cap id model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function transferRenewCapDocument(partialCAPID:CapIDModel, parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * move document for Etisalat payment
		 * @param {ACAModel} acaModel (ACAModel) - aca model
		 * @param {CapIDModel} sourceCapID (CapIDModel) - source cap id
		 * @param {CapIDModel} targetCapID (CapIDModel) - target cap id
		 * @returns (ScriptResult<any>) - script result
		 */
		function transferCapDoc4EMSEPay(acaModel:ACAModel, sourceCapID:CapIDModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * convert to real cap event
		 * @param {CapIDModel} capID (CapIDModel) - real capID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isRenewalInProgess(capID:CapIDModel): ScriptResult<any>

		/**
		 * update renewal cap status to "Complete" or "Review"
		 * @param {CapIDModel} parentCapID (CapIDModel) - renewal parent cap
		 * @param {CapIDModel} childCapID (CapIDModel) - renewal child cap
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateRenewalCapStatus(parentCapID:CapIDModel, childCapID:CapIDModel): ScriptResult<any>

		/**
		 * Create Partial Record by given Record type, Record name and Record capClass.
		 * @param {CapTypeModel} capType (CapTypeModel) - Record type
		 * @param {string} appName (string) - Record name
		 * @param {string} capClass (string) - Record capClass
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createSimplePartialRecord(capType:CapTypeModel, appName:string, capClass:string): ScriptResult<any>

		/**
		 * Create Partial Record by CapModel
		 * @param {CapModel} capModel (CapModel) - Record model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPartialRecord(capModel:CapModel): ScriptResult<any>

		/**
		 * Create renewal Record by given parent Record id
		 * @param {CapIDModel} parentCapID (CapIDModel) - Parent Record id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRenewalRecord(parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * Get trust account(s) that associated with given record
		 * @param {CapIDModel} capID (CapIDModel) - Record id
		 * @param {string} callerID (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountsByCapID(capID:CapIDModel, callerID:string): ScriptResult<any>

		/**
		 * Get primary trust account that associated with given record
		 * @param {CapIDModel} capID (CapIDModel) - record id
		 * @param {string} callerID (string) - String
		 * @returns (ScriptResult<any>) - ScriptResutl primary trust account
		 */
		function getPrimaryTrustAccountByCapID(capID:CapIDModel, callerID:string): ScriptResult<any>

		/**
		 * Get CapID List By CapModel.   Note: There is a limitation of up to 3,000 records.   If there are more than 3,000 records that meet your query criteria,   the interface will return the first 3,000 records which match the criteria.
		 * @param {CapModel} capModel (CapModel) - CapModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDListByCapModel(capModel:CapModel): ScriptResult<any>

		/**
		 * Get CAP primary contact by roster ID.
		 * @param {CapIDScriptModel} capScriptID (CapIDScriptModel)
		 * @returns (ScriptResult<any>) - the cap primary contact
		 */
		function getCapPrimaryContact(capScriptID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Run EMSE script before application submit.
		 * @param {CapModel} capModel (CapModel) - Cap Model.
		 * @param {CapIDModel} parentCapIDModel (CapIDModel) - Parent Cap ID Model.
		 * @returns (ScriptResult<any>) - Script Result.
		 */
		function runEMSEScriptBeforeApplicationSubmit(capModel:CapModel, parentCapIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Run EMSE script after application submit.
		 * @param {CapModel} capModel (CapModel) - Cap Model.
		 * @param {CapIDModel} parentCapIDModel (CapIDModel) - Parent Cap ID Model.
		 * @returns (ScriptResult<any>) - Script Result.
		 */
		function runEMSEScriptAfterApplicationSubmit(capModel:CapModel, parentCapIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Run EMSE script before application detail update.
		 * @param {CapModel} capModel (CapModel) - Cap Model.
		 * @returns (ScriptResult<any>) - Script Result.
		 */
		function runEMSEScriptBeforeApplicationDetailUpdate(capModel:CapModel): ScriptResult<any>

		/**
		 * Run EMSE script after application detail update.
		 * @param {CapModel} capModel (CapModel) - Cap Model.
		 * @returns (ScriptResult<any>) - Script Result.
		 */
		function runEMSEScriptAfterApplicationDetailUpdate(capModel:CapModel): ScriptResult<any>

		/**
		 * Gets the caps by contact addr validate flag.
		 * @param {CapTypeModel} capType (CapTypeModel) - the cap type
		 * @param {string} validatedFlag (string) - the validated flag
		 * @param {ScriptDateTime} openDateFrom (ScriptDateTime) - the open date start
		 * @param {ScriptDateTime} openDateTo (ScriptDateTime) - the open date end
		 * @returns (ScriptResult<any>) - the caps by contact addr validate flag
		 */
		function getCapsByContactAddrValidateFlag(capType:CapTypeModel, validatedFlag:string, openDateFrom:ScriptDateTime, openDateTo:ScriptDateTime): ScriptResult<any>

		/**
		 * Gets the caps by contact addr validate flag.
		 * @param {CapTypeModel} capType (CapTypeModel) - the cap type
		 * @param {string} validatedFlag (string) - the validated flag
		 * @param {string} contactType (string) - the contact type
		 * @param {string} contactAddressType (string) - the contact address type
		 * @param {ScriptDateTime} openDateFrom (ScriptDateTime) - the open date start
		 * @param {ScriptDateTime} openDateTo (ScriptDateTime) - the open date end
		 * @returns (ScriptResult<any>) - the caps by contact addr validate flag
		 */
		function getCapsByContactAddrValidateFlag(capType:CapTypeModel, validatedFlag:string, contactType:string, contactAddressType:string, openDateFrom:ScriptDateTime, openDateTo:ScriptDateTime): ScriptResult<any>

		/**
		 * Get records by record type
		 * @param {CapModel} capModel (CapModel)
		 * @param {Date} fromDate (Date)
		 * @param {Date} toDate (Date)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapsByAppTypeDateRange(capModel:CapModel, fromDate:Date, toDate:Date): ScriptResult<any>

		/**
		 * Get Simple Cap List by Cap ID List
		 * @param {CapIDScriptModel[]} capScriptIDs (CapIDScriptModel[]) - Cap ID List
		 * @returns (ScriptResult<any>) - Cap Script Model List
		 */
		function getSimpleCapsByCapIDs(capScriptIDs:CapIDScriptModel[]): ScriptResult<any>

		/**
		 * Remove Record.
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function removeRecord(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Delete Partial CAP.
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function deletePartialCAP(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Create an application for application type regardless of the cap type status.
		 * @param {string} group (string) - app group
		 * @param {string} type (string) - app type
		 * @param {string} subtype (string) - app subtype
		 * @param {string} category (string) - app category
		 * @param {string} appName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createAppRegardlessAppTypeStatus(group:string, type:string, subtype:string, category:string, appName:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getCapsByLicenseProfessionalList(): ScriptResult<any>

		/**
		 * Check the status of the cap type.
		 * @param {string} group (string)
		 * @param {string} type (string)
		 * @param {string} subtype (string)
		 * @param {string} category (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function checkAppTypeStatus(group:string, type:string, subtype:string, category:string): ScriptResult<any>

		/**
		 * Checks if is pending validation record.
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function isPendingValidationRecord(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * send an Email after updated record.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} templateName (string)
		 * @returns (void)          *
		 */
		function sendMailForUpdateRecord(capID:CapIDModel, templateName:string): void

		/**
		 * Let the script to set the required flag at b1permit  B1PERMIT.IS_VALID_RENEWAL_PASSCODE // Add New Field, values: Y/N/null   N: Need supervisor to provide  Y: Supervisor has confirm  null: default value, don't care
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (void)          *
		 */
		function setRenewalPasscodeRequired(capID:CapIDModel): void

		/**
		 * Let the script to check if supervisor has confirm the passcode  B1PERMIT.IS_VALID_RENEWAL_PASSCODE // Add New Field, values: Y/N/null   Y: Supervisor has confirm
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (boolean)          *
		 */
		function isValidRenewalPasscode(capID:CapIDModel): boolean

		/**
		 * This API is used to detect whether addresses have conflicts, per the Right Of Way Management system. The  precondition is that the Civic Platform standard choices ROWM_INTEGRATION, ROWM_CONDITIONS, LOCATION_TYPE need to  be configured for the ROWM integration (see Civic Platform Administration Guide for details).
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function checkROWMConflicts(capIDModel:CapIDModel): ScriptResult<any>

	}
	namespace cashier {
		/**
		 * Get total pay.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalPay(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get sumNotAllocated.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSumNotAllocated(capID:CapIDModel): ScriptResult<any>

		/**
		 * Create invoices.
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task description
		 * @param {string} disposition (string) - disposition
		 * @param {string[]} strAction (string[]) - the array of strAction
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoices(permitType:string, taskDescription:string, disposition:string, strAction:string[]): ScriptResult<any>

		/**
		 * Create invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSeqList (string) - feeSeqList
		 * @param {string} paymentPeriodList (string) - paymentPeriodList
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoice(capID:CapIDModel, feeSeqList:string, paymentPeriodList:string): ScriptResult<any>

		/**
		 * Edit invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {F4InvoiceModel} f4InvoiceModel (F4InvoiceModel) - F4InvoiceModel
		 * @param {ScriptDateTime} dt (ScriptDateTime) - ScriptDateTime
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editInvoice(capID:CapIDModel, f4InvoiceModel:F4InvoiceModel, dt:ScriptDateTime): ScriptResult<any>

		/**
		 * Get invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInvoice(capID:CapIDModel, invoiceNbr:number): ScriptResult<any>

		/**
		 * Method clrInvoicePrntFlg.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function clrInvoicePrntFlg(): ScriptResult<any>

		/**
		 * Get count of permits.
		 * @param {number} invLevel (number) - (long) long
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCountOfPermits(invLevel:number): ScriptResult<any>

		/**
		 * Method invoiceAgeing.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function invoiceAgeing(): ScriptResult<any>

		/**
		 * Get total fee amount.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalFeeAmount(capID:CapIDModel): ScriptResult<any>

		/**
		 * Set invoice due date.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task description
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function setInvoiceDueDate(capID:CapIDModel, permitType:string, taskDescription:string): ScriptResult<any>

		/**
		 * Edits the payment user defined field and received type.
		 * @param {CapIDModel} capID (CapIDModel) - the CapIDModel
		 * @param {string} paymentSeqNbr (string) - the payment sequence number
		 * @param {string} udf1 (string) - the payment user defined field1
		 * @param {string} udf2 (string) - the payment user defined field2
		 * @param {string} udf3 (string) - the payment user defined field3
		 * @param {string} udf4 (string) - the payment user defined field4
		 * @param {string} receivedType (string) - the received type
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editPaymentUDFAndReceivedType(capID:CapIDModel, paymentSeqNbr:string, udf1:string, udf2:string, udf3:string, udf4:string, receivedType:string): ScriptResult<any>

	}
	namespace commonCondition {
		/**
		 * Create a new common condition object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewCommonConditionModel(): ScriptResult<any>

		/**
		 * add CommonCondition.
		 * @param {CommonConditionScriptModel} conditionModel (CommonConditionScriptModel) - the condition model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addCommonCondition(conditionModel:CommonConditionScriptModel): ScriptResult<any>

		/**
		 * Add a common condition.
		 * @param {CommonConditionModel} conditionModel (CommonConditionModel) - the condition model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addCommonCondition(conditionModel:CommonConditionModel): ScriptResult<any>

		/**
		 * Update the common condition according to the entityType and entityID.
		 * @param {CommonConditionScriptModel} commonCondition (CommonConditionScriptModel) - the common condition
		 * @returns (ScriptResult<any>) - the script result
		 */
		function editCommonCondition(commonCondition:CommonConditionScriptModel): ScriptResult<any>

		/**
		 * Delete a common condition according to the pk.
		 * @param {string} entityType (string) - the entity type
		 * @param {string} entityID (string) - the entity id
		 * @param {number} conditionNumber (number) - (long) the condition number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeCommonCondition(entityType:string, entityID:string, conditionNumber:number): ScriptResult<any>

		/**
		 * Get a common condition according the PK values.
		 * @param {string} entityType (string) - the entity type
		 * @param {string} entityID (string) - the entity id
		 * @param {number} conditionNumber (number) - (long) the condition number
		 * @returns (ScriptResult<any>) - the common condition
		 */
		function getCommonCondition(entityType:string, entityID:string, conditionNumber:number): ScriptResult<any>

		/**
		 * Get common conditions according to entityType and entityID.
		 * @param {string} entityType (string) - the entity type
		 * @param {string} entityID (string) - the entity id
		 * @returns (ScriptResult<any>) - the common conditions
		 */
		function getCommonConditions(entityType:string, entityID:string): ScriptResult<any>

		/**
		 * Get CAP list by condition ID and condition type.
		 * @param {number} conditionID (number) - (long) the condition id
		 * @param {string} conditionType (string) - the condition type such as: ASSET_CONDITION, PARCEL_CONDITION,
 ADDRESS_CONDITION, OWNER_CONDITION, STRUCTURE_CONDITION, PEOPLE_CONDITION, STRUCTURE_ESTABL_CONDITION
		 * @returns (ScriptResult<any>) - the capIDs by reference condition id and type
		 */
		function getCapIDsByRefConditionIDAndType(conditionID:number, conditionType:string): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

		/**
		 * Create Common condition from standard condition
		 * @param {string} entityID (string) - Entity ID
		 * @param {string} entityType (string) - Entity type
		 * @param {string} stdConditionNnumber (string) - standard condition ID
		 * @returns (ScriptResult<any>)          *
		 */
		function createCommonConditionFromStdCondition(entityID:string, entityType:string, stdConditionNnumber:string): ScriptResult<any>

	}
	namespace communication {
		/**
		 * create external outlook task
		 * @param {CalendarTaskModel} taskModel (CalendarTaskModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createTask(taskModel:CalendarTaskModel): ScriptResult<any>

		/**
		 * delete external outlook task
		 * @param {CalendarTaskModel} taskModel (CalendarTaskModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteTask(taskModel:CalendarTaskModel): ScriptResult<any>

		/**
		 * update external outlook task
		 * @param {CalendarTaskModel} taskModel (CalendarTaskModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTask(taskModel:CalendarTaskModel): ScriptResult<any>

		/**
		 * Returns a new TaskModel object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewTaskModel(): ScriptResult<any>

		/**
		 * associate entities.
		 * @param {string} communicationId (string)
		 * @param {string} entityId (string)
		 * @param {string} entityType (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function associateEnities(communicationId:string, entityId:string, entityType:string): ScriptResult<any>

		/**
		 * Return email message object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getEmailMessageScriptModel(): ScriptResult<any>

		/**
		 * Return sms message object.
		 * @returns (ScriptResult<any>)          *
		 */
		function getSMSMessageScriptModel(): ScriptResult<any>

		/**
		 * Get notification template.
		 * @param {string} templateName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNotificationTemplate(templateName:string): ScriptResult<any>

		/**
		 * Return notification template object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNotificationTemplateModel(): ScriptResult<any>

		/**
		 * Send message by message model.
		 * @param {EmailMessageScriptModel} messageScriptModel (EmailMessageScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function sendMessage(messageScriptModel:EmailMessageScriptModel): ScriptResult<any>

		/**
		 * Send message.
		 * @param {SMSMessageScriptModel} messageScriptModel (SMSMessageScriptModel) - the message script model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendMessage(messageScriptModel:SMSMessageScriptModel): ScriptResult<any>

		/**
		 * Send message by notification template.
		 * @param {string} templateName (string)
		 * @param {Hashtable} variables (Hashtable) - <java.lang.String,java.lang.String> 
		 * @param {string} triggerEvent (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function sendMessages(templateName:string, variables:Hashtable, triggerEvent:string): ScriptResult<any>

		/**
		 * Send messages.    The param relatedEntities will be related to Email.    The Example of relatedEntities:    relatedEntities[][] ={{"RECORD","13CAP-00001033"},XXX};    The relatedEntities[0][0] should be "entityType".    The relatedEntities[0][1] should be "AlterID".    The relatedEntities[0].Length == 2 is require.
		 * @param {string} templateName (string) - the template name
		 * @param {Hashtable} variables (Hashtable) - <java.lang.String,java.lang.String> the variables
		 * @param {string} triggerEvent (string) - the trigger event
		 * @param {string[][]} relatedEntities (string[][]) - the related entities
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendMessages(templateName:string, variables:Hashtable, triggerEvent:string, relatedEntities:string[][]): ScriptResult<any>

		/**
		 * Send message with I18N parameters
		 * @param {string} templateName (string)
		 * @param {Hashtable} i18nVariables (Hashtable) - <java.lang.String,java.util.Hashtable<java.lang.String,java.lang.String>> 
		 * @param {string} triggerEvent (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendMessagesWithI18NParameters(templateName:string, i18nVariables:Hashtable, triggerEvent:string): ScriptResult<any>

		/**
		 * Get contanct list.
		 * @param {string[][]} params (string[][])
		 * @param {string} messageType (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getContactList(params:string[][], messageType:string): ScriptResult<any>

		/**
		 * Resend failed messages.
		 * @param {string[]} types (string[])
		 * @returns (ScriptResult<any>)          *
		 */
		function resendFailedMessages(types:string[]): ScriptResult<any>

		/**
		 * Get I18n variables.
		 * @returns (ScriptResult<any>)          *
		 */
		function getI18nVariables(): ScriptResult<any>

	}
	namespace condition {
		/**
		 * create Condition.
		 * @param {ConditionModel} condition (ConditionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCondition(condition:ConditionModel): ScriptResult<any>

		/**
		 * create Condition.
		 * @param {ConditionScriptModel} condition (ConditionScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCondition(condition:ConditionScriptModel): ScriptResult<any>

		/**
		 * create Condition From Std Condition.
		 * @param {ConditionModel} conditionModel (ConditionModel)
		 * @param {string} strStdCondNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createConditionFromStdCondition(conditionModel:ConditionModel, strStdCondNumber:string): ScriptResult<any>

		/**
		 * create Condition From StdCondition.
		 * @param {ConditionScriptModel} conditionModel (ConditionScriptModel)
		 * @param {string} strStdCondNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createConditionFromStdCondition(conditionModel:ConditionScriptModel, strStdCondNumber:string): ScriptResult<any>

		/**
		 * create Conditions for multi Lang .
		 * @param {ConditionModel[]} multiLangConditions (ConditionModel[])
		 * @param {ConditionModel} condition (ConditionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCondition(multiLangConditions:ConditionModel[], condition:ConditionModel): ScriptResult<any>

		/**
		 * create Condition.
		 * @param {ConditionScriptModel[]} multiLangConditions (ConditionScriptModel[])
		 * @param {ConditionScriptModel} condition (ConditionScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createConditionWithMulLangs(multiLangConditions:ConditionScriptModel[], condition:ConditionScriptModel): ScriptResult<any>

		/**
		 * get Condition.
		 * @param {ConditionModel} condition (ConditionModel)
		 * @param {string} lang (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCondition(condition:ConditionModel, lang:string): ScriptResult<any>

		/**
		 * get Condition by PK with language.
		 * @param {ConditionScriptModel} condition (ConditionScriptModel)
		 * @param {string} lang (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCondition(condition:ConditionScriptModel, lang:string): ScriptResult<any>

		/**
		 * get Owner Condition.
		 * @param {number} ownerNumber (number) - (long) 
		 * @param {number} conditionNumber (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getOwnerCondition(ownerNumber:number, conditionNumber:number): ScriptResult<any>

		/**
		 * get Asset Condition.
		 * @param {number} assetNumber (number) - (long) 
		 * @param {number} conditionNumber (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAssetCondition(assetNumber:number, conditionNumber:number): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getNewOwnerConditionScriptModel(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getNewAssetConditionScriptModel(): ScriptResult<any>

		/**
		 * edit Field For Template Form.
		 * @param {EntityPKModel} entityPKModel (EntityPKModel) - Entity PK Model
		 * @param {GenericTemplateFieldPK} fieldPK (GenericTemplateFieldPK) - Generic Template Field PK
		 * @param {string} newValue (string) - new Value
		 * @returns (ScriptResult<any>) - ScriptResult update count
		 */
		function editField4TemplateForm(entityPKModel:EntityPKModel, fieldPK:GenericTemplateFieldPK, newValue:string): ScriptResult<any>

		/**
		 * get Fields For Template Form.
		 * @param {EntityPKModel} entityPKModel (EntityPKModel) - Entity PK Model
		 * @param {GenericTemplateFieldPK} fieldPK (GenericTemplateFieldPK) - Generic Template Field PK
		 * @returns (ScriptResult<any>) - Script Result
		 */
		function getFields4TemplateForm(entityPKModel:EntityPKModel, fieldPK:GenericTemplateFieldPK): ScriptResult<any>

		/**
		 * get Fields 4 Template Table.
		 * @param {EntityPKModel} entityPKModel (EntityPKModel)
		 * @param {GenericTemplateFieldPK} fieldPK (GenericTemplateFieldPK)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFields4TemplateTable(entityPKModel:EntityPKModel, fieldPK:GenericTemplateFieldPK): ScriptResult<any>

		/**
		 * edit Table Value For Template Table.
		 * @param {EntityPKModel} entityPKModel (EntityPKModel)
		 * @param {GenericTemplateFieldPK} fieldPK (GenericTemplateFieldPK)
		 * @param {string} newValue (string)
		 * @param {number} rowIndex (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editTableValue4TemplateTable(entityPKModel:EntityPKModel, fieldPK:GenericTemplateFieldPK, newValue:string, rowIndex:number): ScriptResult<any>

	}
	namespace continuingEducation {
		/**
		 * Get new ContinuingEducationScriptModel.
		 * @returns (ScriptResult<any>) - the continuing education model
		 */
		function getContinuingEducationModel(): ScriptResult<any>

		/**
		 * Copy Continuing Education List from source Cap to target Cap.
		 * @param {CapIDModel} srcCapID (CapIDModel) - Source Cap ID.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyContEducationList(srcCapID:CapIDModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Get Continuing Education Model List.
		 * @param {CapIDScriptModel} capID (CapIDScriptModel) - the cap id
		 * @returns (ScriptResult<any>) - the cont education list
		 */
		function getContEducationList(capID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Create ContinuingEducationModel.
		 * @param {ContinuingEducationScriptModel} model (ContinuingEducationScriptModel) - the model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createContinuingEducationModel(model:ContinuingEducationScriptModel): ScriptResult<any>

		/**
		 * Update ContinuingEducationModel.
		 * @param {ContinuingEducationScriptModel} model (ContinuingEducationScriptModel) - the model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateContinuingEducationModel(model:ContinuingEducationScriptModel): ScriptResult<any>

		/**
		 * Delete ContinuingEducationModel.
		 * @param {ContinuingEducationScriptModel} model (ContinuingEducationScriptModel) - the model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deleteContinuingEducationModel(model:ContinuingEducationScriptModel): ScriptResult<any>

		/**
		 * Check if all the continuing educations in specific cap are passed.
		 * @param {CapIDScriptModel} capID (CapIDScriptModel) - the cap id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function isContinuingEducationPassed(capID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Auto approve required continuing educations: 1: Need check record setting. 2: Need check all required cont Edu passed.
		 * @param {TaskItemModel} taskItem (TaskItemModel)
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function autoApproveRequiredCEHs(taskItem:TaskItemModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Get People Continuing Education Model List.
		 * @param {string} contactSeqNumber (string) - the reference contact number
		 * @returns (ScriptResult<any>) - the continuing education list
		 */
		function getPeopleContEducationList(contactSeqNumber:string): ScriptResult<any>

		/**
		 * Copy Continuing Education List from source reference contact to target Cap.
		 * @param {ContinuingEducationModel[]} contEduList (ContinuingEducationModel[]) - the people continuing education list.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyPeopleContEducationList(contEduList:ContinuingEducationModel[], targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Auto approve continuing education hours.
		 * @param {ContinuingEducationModel[]} contEduList (ContinuingEducationModel[]) - the people continuing education list.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function autoApproveCEHs(contEduList:ContinuingEducationModel[], targetCapID:CapIDModel): ScriptResult<any>

	}
	namespace contractorLicense {
		/**
		 * get license list by user seq number
		 * @param {number} userSeqNBR (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult -- contains the license list.
		 */
		function getContrLicListByUserSeqNBR(userSeqNBR:number): ScriptResult<any>

		/**
		 * Get Contractor license model by license sequence number and user sequence number.
		 * @param {string} licenseSeqNbr (string) - license sequence number.
		 * @param {number} userSeqNbr (number) - (Long) user sequence number.
		 * @returns (ScriptResult<any>) - the contr license by lic seq nbr
		 */
		function getContrLicenseByLicSeqNBR(licenseSeqNbr:string, userSeqNbr:number): ScriptResult<any>

		/**
		 * Get Contractor license model by license sequence number and user sequence number.
		 * @param {number} licenseSeqNbr (number) - (Long) license sequence number.
		 * @param {number} userSeqNbr (number) - (Long) user sequence number.
		 * @returns (ScriptResult<any>) - the contr license by lic seq nbr
		 */
		function getContrLicenseByLicSeqNBR(licenseSeqNbr:number, userSeqNbr:number): ScriptResult<any>

		/**
		 * Update Contractor license status. A -- Approve status; P -- Pending status; R -- Reject status;
		 * @param {ContractorLicenseModel} contractorLicenseModel (ContractorLicenseModel) - Contractor Licenser Model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateContractorLicense(contractorLicenseModel:ContractorLicenseModel): ScriptResult<any>

		/**
		 * Send approved notice email to public user.
		 * @param {string} licenseNumber (string) - license sequence number.
		 * @param {string} licenseType (string) - license type.
		 * @param {string} userSeqNbr (string) - user sequence number.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function sendApprovNoticeEmailToUser(licenseNumber:string, licenseType:string, userSeqNbr:string): ScriptResult<any>

		/**
		 * Send notice email to agency user and citizen user when the registered user add new license to his account.
		 * @param {number} userSeqNum (number) - (Long) the user sequence number.
		 * @param {string} licenseType (string) - the license type.
		 * @param {string} licenseNumber (string) - the license number.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function sendIssueNoticeEmail(userSeqNum:number, licenseType:string, licenseNumber:string): ScriptResult<any>

		/**
		 * This method will send "Associating License to Multiple Accounts email" to the all the ACA users   that have the license associated to their account, when a new ACA user associate their account to the license
		 * @param {number} userSeqNum (number) - (Long) the user sequence number.
		 * @param {string} licenseType (string) - the license type.
		 * @param {string} licenseNumber (string) - the license number.
		 * @param {string} licenseState (string) - the license state.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function sendNoticeEmailToRelatedAccounts(userSeqNum:number, licenseType:string, licenseNumber:string, licenseState:string): ScriptResult<any>

		/**
		 * Issue license to contractor. If the license has expired (license expiration date is expired or insurance  expiration date is expired), then it can be assigned to contractor.
		 * @param {number} userSeqNBR (number) - (Long) the user sequence number.
		 * @param {LicenseModel} license (LicenseModel) - LicenseModel.
		 * @param {boolean} issuedByAgency (boolean) - it's used to judge whether issued by agency.
		 * @param {boolean} isAutoApproved (boolean) - the license auto approve.
		 * @returns (ScriptResult<any>) - ScriptResult. -1:issue fail / 0:license is not exist / 1:Already has the same type license / 2:issue ok
		 */
		function issueContrLicWithExpired(userSeqNBR:number, license:LicenseModel, issuedByAgency:boolean, isAutoApproved:boolean): ScriptResult<any>

		/**
		 * @param {string} strPublicUserNum (string)
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getContrLicListByUserSeqNBR(strPublicUserNum:string, servProvCode:string): ScriptResult<any>

	}
	namespace document {
		/**
		 * get cap document list
		 * @param {CapIDModel} capID (CapIDModel) - cap id model
		 * @param {string} currentUserID (string) - callerid
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapDocumentList(capID:CapIDModel, currentUserID:string): ScriptResult<any>

		/**
		 * Associate doc2 task.
		 * @param {DocumentModel[]} docList (DocumentModel[]) - the doc list
		 * @param {TaskItemModel} taskItemModel (TaskItemModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function associateDoc2Task(docList:DocumentModel[], taskItemModel:TaskItemModel): ScriptResult<any>

		/**
		 * Get Original Document By Resubmit Document.
		 * @param {DocumentModel} resubmitDocModel (DocumentModel) - resubmit Doc Model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function getOriginalDoc(resubmitDocModel:DocumentModel): ScriptResult<any>

		/**
		 * Update Document.
		 * @param {DocumentModel} docModel (DocumentModel) - Doc Model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateDocument(docModel:DocumentModel): ScriptResult<any>

		/**
		 * Add Document Entity Associations.
		 * @param {DocumentEntityAssociationModel} documentEntityAssociationModel (DocumentEntityAssociationModel) - Document Entity Association Model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function assignReviewer(documentEntityAssociationModel:DocumentEntityAssociationModel): ScriptResult<any>

		/**
		 * Associate reviewer2 doc.
		 * @param {DocumentModel[]} docList (DocumentModel[]) - the doc list
		 * @param {SysUserModel[]} reviewerList (SysUserModel[]) - the reviewer list
		 * @param {TaskItemModel} taskItemModel (TaskItemModel) - the task item model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function associateReviewer2Doc(docList:DocumentModel[], reviewerList:SysUserModel[], taskItemModel:TaskItemModel): ScriptResult<any>

		/**
		 * Gets the related reviewers.
		 * @param {number} docID (number) - (Long) the doc id
		 * @param {TaskItemModel} taskItemModel (TaskItemModel)
		 * @returns (ScriptResult<any>) - the related reviewers
		 */
		function getRelatedReviewers(docID:number, taskItemModel:TaskItemModel): ScriptResult<any>

		/**
		 * update DocumentEntityAssociationModel
		 * @param {DocumentEntityAssociationModel} documentEntityAssociationModel (DocumentEntityAssociationModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateReviewTask(documentEntityAssociationModel:DocumentEntityAssociationModel): ScriptResult<any>

		/**
		 * Gets the cap task by cap id.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the cap task by cap id
		 */
		function getCapTaskByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getTaskItemModel(): ScriptResult<any>

		/**
		 * get document by PK
		 * @param {string} documentID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getDocumentByPK(documentID:string): ScriptResult<any>

		/**
		 * Send email by notification template name.
		 * @param {string} from (string) - email address from
		 * @param {string} to (string) - email address to
		 * @param {string} cc (string) - email address cc
		 * @param {string} templateName (string) - template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> variables for email subject and content
		 * @param {string[]} fileNames (string[]) - the file names of attachment
		 * @returns (ScriptResult<any>)          *
		 */
		function sendEmailByTemplateName(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable, fileNames:string[]): ScriptResult<any>

		/**
		 * send email and upload document by notification template name.
		 * @param {string} from (string)
		 * @param {string} to (string)
		 * @param {string} cc (string)
		 * @param {string} templateName (string) - notification template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> Hashtable
		 * @param {CapIDScriptModel} capIDScriptModel (CapIDScriptModel)
		 * @param {string[]} fileNames (string[]) - attached file names in email content
		 * @returns (ScriptResult<any>)          *
		 */
		function sendEmailAndSaveAsDocument(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable, capIDScriptModel:CapIDScriptModel, fileNames:string[]): ScriptResult<any>

		/**
		 * Send Email and save to document
		 * @param {string} from (string) - the email address that send the email
		 * @param {string} to (string) - the email address to send
		 * @param {string} cc (string) - the email address to CC, can be null
		 * @param {string} subject (string) - the mail subject
		 * @param {string} content (string) - the mail content
		 * @param {string[]} fileNames (string[]) - the fileNames array
		 * @param {ProcessNoteScriptModel} processNoteScriptModel (ProcessNoteScriptModel)
		 * @returns (ScriptResult<any>) - Result the Result object, getSuccess() can identify whether the email is sent successfully, if fail,
		 getMessage() can tell why.
		 */
		function sendEmailAndSaveAsDocument4Workflow(from:string, to:string, cc:string, subject:string, content:string, fileNames:string[], processNoteScriptModel:ProcessNoteScriptModel): ScriptResult<any>

		/**
		 * get ACA URL
		 * @param {string} url (string)
		 * @param {DocumentModel} documentModel (DocumentModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getACADocumentUrl(url:string, documentModel:DocumentModel): ScriptResult<any>

		/**
		 * Removes the document by sequence number
		 * @param {string} docSeq (string) - the doc sequence number
		 * @param {string} userName (string)
		 * @param {string} password (string)
		 * @param {string} moduleName (string)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeDocumentByPK(docSeq:string, userName:string, password:string, moduleName:string): ScriptResult<any>

		/**
		 * Creates the document.
		 * @param {DocumentModel} documentModel (DocumentModel) - the document model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createDocument(documentModel:DocumentModel): ScriptResult<any>

		/**
		 * New document model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function newDocumentModel(): ScriptResult<any>

		/**
		 * New document content model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function newDocumentContentModel(): ScriptResult<any>

		/**
		 * get document list by entity:  1, for License Professional: the entityID is licSeqNbr, and the entityType is 'LICENSEPROFESSIONAL'
		 * @param {string} entityID (string)
		 * @param {string} entityType (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getDocumentListByEntity(entityID:string, entityType:string): ScriptResult<any>

		/**
		 * Attach email to entity.
		 * @param {string} from (string) - the from
		 * @param {string} to (string) - the to
		 * @param {string} cc (string) - the cc
		 * @param {string} templateName (string) - the template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> the content variables
		 * @param {string[]} fileNames (string[]) - the file names
		 * @param {string} entityID (string) - the entity id
		 * @param {string} entityType (string) - the entity type
		 * @returns (ScriptResult<any>) - the script result
		 */
		function attachEmailToEntity(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable, fileNames:string[], entityID:string, entityType:string): ScriptResult<any>

		/**
		 * Creates the document association.
		 * @param {DocumentModel} documentModel (DocumentModel) - document model
		 * @param {string} targetEntityID (string) - the target entity id of the entity which will create the document association
		 * @param {string} targetEntityType (string) - the target entity type of the entity which will create the document association
		 * @returns (ScriptResult<any>)          *
		 */
		function createDocumentAssociation(documentModel:DocumentModel, targetEntityID:string, targetEntityType:string): ScriptResult<any>

		/**
		 * Remove document association
		 * @param {string} docSeq (string) - document sequence number
		 * @returns (ScriptResult<any>)          *
		 */
		function removeDocumentAssociation(docSeq:string): ScriptResult<any>

		/**
		 * Download the document from EDMS server to AA server disk, and return the file path.
		 * @param {DocumentModel} document (DocumentModel) - Document model that you want to download.
		 * @param {string} module (string) - Module name.
		 * @param {string} userName (string) - EDMS server access account name.
		 * @param {string} password (string) - EDMS server access account password.
		 * @param {boolean} useDefalueUser (boolean) - Whether use default user to login EDMS server.
		 * @returns (ScriptResult<any>) - File path.
		 */
		function downloadFile2Disk(document:DocumentModel, module:string, userName:string, password:string, useDefalueUser:boolean): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getDocumentEntityAssociationList(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getRefDocument(): ScriptResult<any>

	}
	namespace education {
		/**
		 * Copy Education List from source Cap to target Cap.
		 * @param {CapIDModel} srcCapID (CapIDModel) - Source Cap ID.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyEducationList(srcCapID:CapIDModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Create EducationModel.
		 * @param {EducationScriptModel} model (EducationScriptModel) - the model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createEducationModel(model:EducationScriptModel): ScriptResult<any>

		/**
		 * Update educationModel.
		 * @param {EducationScriptModel} model (EducationScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateEducationModel(model:EducationScriptModel): ScriptResult<any>

		/**
		 * Delete educationModel.
		 * @param {EducationScriptModel} model (EducationScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteEducationModel(model:EducationScriptModel): ScriptResult<any>

		/**
		 * Get education list by cap ID.
		 * @param {CapIDScriptModel} capID (CapIDScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getEducationList(capID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Get new EducationScriptModel.
		 * @returns (ScriptResult<any>) - EducationScriptModel
		 */
		function getEducationScriptModel(): ScriptResult<any>

		/**
		 * Get People Education list.
		 * @param {string} contactSeqNumber (string) - reference contact number
		 * @returns (ScriptResult<any>)          *
		 */
		function getPeopleEducationList(contactSeqNumber:string): ScriptResult<any>

		/**
		 * Copy People Education List from source reference contact to target Cap.
		 * @param {EducationModel[]} educationList (EducationModel[]) - Source education list.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyPeopleEducationList(educationList:EducationModel[], targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Auto approve educations.
		 * @param {EducationModel[]} educationList (EducationModel[]) - Source education list.
		 * @param {CapIDModel} targetCapID (CapIDModel) - Target Cap ID.
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function autoApproveEducations(educationList:EducationModel[], targetCapID:CapIDModel): ScriptResult<any>

	}
	namespace messageResources {
		/**
		 * Get localized message by resource key.
		 * @param {string} key (string)
		 * @returns (String) - localized message
		 */
		function getLocalMessage(key:string): String

		/**
		 * Get localized message by resource key and variables.
		 * @param {string} key (string)
		 * @param {object[]} objs (object[])
		 * @returns (String) - localized message
		 */
		function getLocalMessage(key:string, objs:object[]): String

	}
	namespace ePayment {
		/**
		 * get EPayment Value
		 * @param {string} url (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getEPaymentValue(url:string): ScriptResult<any>

	}
	namespace eventLog {
		/**
		 * Add a new event log.
		 * @param {string} eventName (string) - event name
		 * @param {string} eventType (string) - event type
		 * @param {string} batchJobName (string) - batchJob name
		 * @param {ScriptDateTime} eventStartDt (ScriptDateTime) - the start of date
		 * @param {ScriptDateTime} eventEndDt (ScriptDateTime) - the end of date
		 * @param {string} eventDesc (string) - event description
		 * @param {string} eventResult (string) - event result
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createEventLog(eventName:string, eventType:string, batchJobName:string, eventStartDt:ScriptDateTime, eventEndDt:ScriptDateTime, eventDesc:string, eventResult:string): ScriptResult<any>

		/**
		 * Add a new event log.
		 * @param {string} eventName (string) - event name
		 * @param {string} eventType (string) - event type
		 * @param {string} batchJobName (string) - batchJob name
		 * @param {ScriptDateTime} startDt (ScriptDateTime) - the start of date
		 * @param {ScriptDateTime} endDate (ScriptDateTime) - the end of date
		 * @param {string} description (string) - event description
		 * @param {string} result (string) - event result
		 * @param {number} batchJobID (number) - (long) the batchJob ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createEventLog(eventName:string, eventType:string, batchJobName:string, startDt:ScriptDateTime, endDate:ScriptDateTime, description:string, result:string, batchJobID:number): ScriptResult<any>

	}
	namespace examination {
		/**
		 * Get new ExaminationScriptModel.
		 * @returns (ScriptResult<any>) - the examination model
		 */
		function getExaminationModel(): ScriptResult<any>

		/**
		 * Copy Examinations from source Cap to target Cap.
		 * @param {CapIDModel} srcCapID (CapIDModel) - the src cap id
		 * @param {CapIDModel} targetCapID (CapIDModel) - the target cap id
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyExaminationList(srcCapID:CapIDModel, targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Get Examination Model List.
		 * @param {CapIDScriptModel} capID (CapIDScriptModel) - Cap Id Script Model.
		 * @returns (ScriptResult<any>) - the examination list
		 */
		function getExaminationList(capID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Get Examination Model List.
		 * @param {string} examName (string)
		 * @returns (ScriptResult<any>) - the reference examination array
		 */
		function getRefExaminationListByName(examName:string): ScriptResult<any>

		/**
		 * Gets the available exam without workflow restriction after workflow status updated.
		 * @param {CapIDScriptModel} capIDScriptModel (CapIDScriptModel) - the cap id script model
		 * @returns (ScriptResult<any>) - the available exam after workflow updated
		 */
		function getAvailableExamAfterWorkflowUpdated(capIDScriptModel:CapIDScriptModel): ScriptResult<any>

		/**
		 * Create ExaminationModel.
		 * @param {ExaminationScriptModel} model (ExaminationScriptModel) - Examination Script Model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createExaminationModel(model:ExaminationScriptModel): ScriptResult<any>

		/**
		 * Update ExaminationModel.
		 * @param {ExaminationScriptModel} model (ExaminationScriptModel) - Examination Script Model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateExaminationModel(model:ExaminationScriptModel): ScriptResult<any>

		/**
		 * Delete ExaminationModel.
		 * @param {ExaminationScriptModel} model (ExaminationScriptModel) - Examination Script Model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deleteExaminationModel(model:ExaminationScriptModel): ScriptResult<any>

		/**
		 * Gets the x ref examination provider model by roster.
		 * @param {ProviderRosterModel} roster (ProviderRosterModel) - the roster
		 * @returns (ScriptResult<any>) - the x ref examination provider model by roster
		 */
		function getXRefExaminationProviderModelByRoster(roster:ProviderRosterModel): ScriptResult<any>

		/**
		 * Gets the examination model by roster id.
		 * @param {number} rosterID (number) - (Long) the roster id
		 * @returns (ScriptResult<any>) - the examination model by roster id
		 */
		function getExaminationModelByRosterID(rosterID:number): ScriptResult<any>

		/**
		 * Gets the exam score.
		 * @param {number} providerNbr (number) - (Long) the provider id
		 * @param {string[]} userExamIDArray (string[]) - the user exam id array
		 * @returns (ScriptResult<any>) - the exam score
		 */
		function getExamScore(providerNbr:number, userExamIDArray:string[]): ScriptResult<any>

		/**
		 * Gets the all external provider exam scores.
		 * @returns (ScriptResult<any>) - the all external provider exam scores
		 */
		function getExternalExamScores(): ScriptResult<any>

		/**
		 * Update exam score.
		 * @param {ExaminationModel[]} examList (ExaminationModel[]) - the exam list
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateExamScore(examList:ExaminationModel[]): ScriptResult<any>

		/**
		 * Gets the exam site by exam model.
		 * @param {ExaminationModel} examModel (ExaminationModel) - the exam model
		 * @returns (ScriptResult<any>) - the exam site by exam model
		 */
		function getExamSiteByExamModel(examModel:ExaminationModel): ScriptResult<any>

		/**
		 * Check if all the examinations in specific cap are passed.
		 * @param {CapIDScriptModel} capID (CapIDScriptModel) - Cap Id Script Model.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function isExaminationPassed(capID:CapIDScriptModel): ScriptResult<any>

		/**
		 * Gets the available schedules.
		 * @param {string} examName (string) - examination name
		 * @returns (ScriptResult<any>) - the available schedules
		 */
		function getAvailableSchedules(examName:string): ScriptResult<any>

		/**
		 * Batch schedule exam.
		 * @param {number} scheduleID (number) - (Long) the schedule id
		 * @param {number} examDate (number) - (Long) the exam date
		 * @param {number} locationID (number) - (Long) the location id
		 * @param {CapIDModel[]} capIDList (CapIDModel[]) - the cap id list
		 * @returns (ScriptResult<any>) - the script result
		 */
		function batchScheduleExam(scheduleID:number, examDate:number, locationID:number, capIDList:CapIDModel[]): ScriptResult<any>

		/**
		 * Gets the roster id list by event id.
		 * @param {number} eventID (number) - (Long) the event id
		 * @returns (ScriptResult<any>) - the roster id list by event id
		 */
		function getRosterIDListByEventID(eventID:number): ScriptResult<any>

		/**
		 * Gets the roster id list by event id.
		 * @param {number} eventID (number) - (Long) the event id
		 * @returns (ScriptResult<any>) - the roster id list by event id
		 */
		function getRosterModelListByEventID(eventID:number): ScriptResult<any>

		/**
		 * get exam name and provider name by event ID.
		 * @param {number} eventID (number) - (Long) the event id
		 * @returns (ScriptResult<any>) - the exam name and provider name
		 */
		function getExamNameAndProviderName(eventID:number): ScriptResult<any>

		/**
		 * get provider event by event ID.
		 * @param {number} eventID (number) - (Long) the event id
		 * @returns (ScriptResult<any>) - providerEventModel
		 */
		function getProviderEventModel(eventID:number): ScriptResult<any>

		/**
		 * Auto approve required ce hs.
		 * @param {TaskItemModel} taskItem (TaskItemModel)
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function autoApproveRequiredExams(taskItem:TaskItemModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Get People Examination Model List.
		 * @param {string} contactSeqNumber (string) - Reference contact number.
		 * @returns (ScriptResult<any>) - the examination list
		 */
		function getPeopleExaminationList(contactSeqNumber:string): ScriptResult<any>

		/**
		 * Copy Examinations from source reference contact to target Cap.
		 * @param {ExaminationModel[]} examList (ExaminationModel[]) - the people examination list
		 * @param {CapIDModel} targetCapID (CapIDModel) - the target cap id
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function copyPeopleExaminationList(examList:ExaminationModel[], targetCapID:CapIDModel): ScriptResult<any>

		/**
		 * Auto approve examinations.
		 * @param {ExaminationModel[]} examList (ExaminationModel[]) - the people examination list
		 * @param {CapIDModel} targetCapID (CapIDModel) - the target cap id
		 * @returns (ScriptResult<any>) - ScriptResult with successful flag true or false.
		 */
		function autoApproveExams(examList:ExaminationModel[], targetCapID:CapIDModel): ScriptResult<any>

	}
	namespace exchange {
		/**
		 * Inits the.
		 * @param {string} user (string) - the user
		 * @param {string} password (string) - the password
		 * @param {string} server (string) - the server
		 * @param {string} virtualDir (string) - the virtual dir
		 * @returns (ScriptResult<any>) - the script result
		 */
		function init(user:string, password:string, server:string, virtualDir:string): ScriptResult<any>

		/**
		 * Send new appointment.
		 * @param {string} subject (string) - the subject
		 * @param {string} location (string) - the location
		 * @param {string} description (string) - the description
		 * @param {string} startDateTime (string) - the start date time
		 * @param {string} endDateTime (string) - the end date time
		 * @param {string} organizer (string) - the organizer
		 * @param {string} receipients (string) - the receipients
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendNewAppointment(subject:string, location:string, description:string, startDateTime:string, endDateTime:string, organizer:string, receipients:string): ScriptResult<any>

		/**
		 * Parses the date.
		 * @param {string} date (string) - the date
		 * @param {string} time (string) - the time
		 * @param {string} ampm (string) - the ampm
		 * @returns (ScriptResult<any>) - the script result
		 */
		function parseDate(date:string, time:string, ampm:string): ScriptResult<any>

		/**
		 * Format date for exchange.
		 * @param {Date} date (Date) - the date
		 * @returns (ScriptResult<any>) - the script result
		 */
		function formatDateForExchange(date:Date): ScriptResult<any>

		/**
		 * Increment date by minutes.
		 * @param {Date} date (Date) - the date
		 * @param {number} minToAdd (number) - (int) the min to add
		 * @returns (ScriptResult<any>) - the script result
		 */
		function incrementDateByMinutes(date:Date, minToAdd:number): ScriptResult<any>

	}
	namespace expiration {
		/**
		 * Fetch the collection of licenses by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} expStatus (string) - the expiration status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicensesByCapID(capID:CapIDModel, expStatus:string): ScriptResult<any>

		/**
		 * Fetch the collection of licenses by status.
		 * @param {string} expStatus (string) - the expiration status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicensesByStatus(expStatus:string): ScriptResult<any>

		/**
		 * Fetch the collection of licenses by date.
		 * @param {string} expStatus (string) - the expiration status
		 * @param {string} dateFromString (string) - the start of date
		 * @param {string} dateToString (string) - date string
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicensesByDate(expStatus:string, dateFromString:string, dateToString:string): ScriptResult<any>

		/**
		 * Edit B1Expiration.
		 * @param {B1ExpirationModel} b1ExpirationModel (B1ExpirationModel) - B1ExpirationModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editB1Expiration(b1ExpirationModel:B1ExpirationModel): ScriptResult<any>

		/**
		 * Get Expiration Info by CAP ID
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<B1ExpirationModel>) - ScriptResult B1ExpirationScriptModel
		 */
		function getLicensesByCapID(capID:CapIDModel): ScriptResult<B1ExpirationModel>

		/**
		 * 
 Check to see if the license is expired.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult B1ExpirationScriptModel
 
		 */
		function isExpiredLicenses(capID:CapIDModel): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function isAboutToExpireStatus(): ScriptResult<any>

		/**
		 * 
 Active license by CAPID.
 1. Active condition
		  License status should be "About to expire", "Expired", or "Delinquent".
 2. Expiration date
				if expiration method is "FILED DATE"
						expDate = dtAdd(now, expInterval, expIntUnit);
				else if expiration method is "FIXED DATE"
						expDate = dtAdd(orgExpDate, expInterval, expIntUnit);
				end if
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult B1ExpirationScriptModel
 
		 */
		function activeLicensesByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * When agency user have rejected the renewal license, system send the denied license email to public user.
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendDeniedNoticeEmailToCitizenUser(parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * When agency user have approved the renewal license, system send the approved license email to public user.
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendApprovedNoticEmailToCitizenUser(parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * When public user had completed renewal process without auto-issuance, system send email to public user and agency user.
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendNoAutoIssueLicenseEmail(parentCapID:CapIDModel): ScriptResult<any>

		/**
		 * When license had been issued by renewal license process, system send the copy of license to public user by email.
		 * @param {CapIDModel} parentCapID (CapIDModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendAutoIssueLicenseEmail(parentCapID:CapIDModel): ScriptResult<any>

	}
	namespace failureDocument {
		/**
		 * remove the failure partial document
		 * @param {Date} startDate (Date)
		 * @param {Date} endDate (Date)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeFailurePartialCapDocumentByRange(startDate:Date, endDate:Date): ScriptResult<any>

		/**
		 * reupload the failure document.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function reuploadFailureDocuments(): ScriptResult<any>

	}
	namespace fee {
		/**
		 * Get FeeItems.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItems(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get total fee by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeTotal(capID:CapIDModel): ScriptResult<any>

		/**
		 * Add FeeItem.
		 * @param {FeeItemScriptModel} scriptF4feeitemROC (FeeItemScriptModel) - FeeItemScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addFeeItem(scriptF4feeitemROC:FeeItemScriptModel): ScriptResult<any>

		/**
		 * Add FeeItem.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} Display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - the fee formula
		 * @param {number} feeUnit (number) - (double) the fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - the apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - the effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - the effect date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subgroup (string) - subgroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} feeitemStatus (string) - fee item status
		 * @param {string} feeCalcProc (string) - fee calc process
		 * @param {string} auditID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addFeeItem(capID:CapIDModel, paymentPeriod:string, feeCod:string, Display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subgroup:string, calcFlag:string, feeitemStatus:string, feeCalcProc:string, auditID:string): ScriptResult<any>

		/**
		 * Get total fee by capID and paymentPeriod.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentPeriod (string) - payment period
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeTotal(capID:CapIDModel, paymentPeriod:string): ScriptResult<any>

		/**
		 * Get RefFeeItem by fee code.
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} feeCode (string) - fee code
		 * @param {string} payPeriodGroup (string) - pay period group
		 * @param {ScriptDateTime} expDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefFeeItemByFeeCode(feeSchedule:string, feeCode:string, payPeriodGroup:string, expDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Get RefFeeItem by fee code.
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} version (string)
		 * @param {string} feeCode (string) - fee code
		 * @param {string} payPeriodGroup (string) - pay period group
		 * @param {ScriptDateTime} expDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefFeeItemByFeeCodeVersion(feeSchedule:string, version:string, feeCode:string, payPeriodGroup:string, expDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Add F4FeeItemModel.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} Display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - the fee formula
		 * @param {number} feeUnit (number) - (double) the fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - the apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - the effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - the effect date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subgroup (string) - subgroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} feeitemStatus (string) - fee item status
		 * @param {string} feeCalcProc (string) - fee calc process
		 * @param {string} auditID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getScriptF4FeeItemModel(capID:CapIDModel, paymentPeriod:string, feeCod:string, Display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subgroup:string, calcFlag:string, feeitemStatus:string, feeCalcProc:string, auditID:string): ScriptResult<any>

		/**
		 * Get all records of FeeItems that have been invoiced from F4FeeItem and
 X4FeeItem_Invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - @author Kevin.Liu
		 */
		function getFeeItemOfInvoicedByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * auto Invoicing Of Fee
		 * @param {any[]} feeItemModels (any[])
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addFeeItem(feeItemModels:any[]): ScriptResult<any>

		/**
		 * get a fee item from F4FEEITEM table
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {number} feeSeqNbr (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemByPK(capID:CapIDModel, feeSeqNbr:number): ScriptResult<any>

		/**
		 * edit fee notes
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} feeNote (string)
		 * @param {number} feeSeqNbr (number) - (long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeNotes(capID:CapIDModel, feeNote:string, feeSeqNbr:number): ScriptResult<any>

		/**
		 * createF4FeeItemScriptModel
		 * @returns (F4FeeItemScriptModel) - F4FeeItemScriptModel
		 */
		function createF4FeeItemScriptModel(): F4FeeItemScriptModel

		/**
		 * Get fee balance due by capID.
		 * @param {CapIDModel} capIDModel (CapIDModel) - cap ID model
		 * @returns (ScriptResult<any>) - script result
		 */
		function isFullPaid4Renewal(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Get array of enabled Fee Schedule objects by date
		 * @param {string} feeSchedule (string) - feeSchedule
		 * @param {ScriptDateTime} checkDate (ScriptDateTime) - checkDate, need to check the date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefFeeScheduleVersionsByDate(feeSchedule:string, checkDate:ScriptDateTime): ScriptResult<any>

		/**
		 * getFeeItems.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} feeCode (string)
		 * @param {string} status (string)
		 * @returns (ScriptResult<any>) - ScriptResult for Fee items
		 */
		function getFeeItems(capID:CapIDModel, feeCode:string, status:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getScriptF4FeeItemModel(): ScriptResult<any>

	}
	namespace db {
		/**
		 * 
		 * @param waitTime - long
		 */
		function wait(waitTime: number): void
		/**
		 * 
		 * @param sqlString - The SQL command to run on the database.
		 * @param arrayVar - Unknown use case. Accepts [] as a value.
		 */
		function select(sqlString: string, arrayVar: any[]): ScriptResult<HashMap[]>
		function batchUpdate(var1: string, var2: any[]): ScriptResult<any>
		function notifyAll(): void
		function update(var1: any, var2: any[]): ScriptResult<any>
		function batchUpdate4CrossAgency(var1: string, var2: any[], var3: HashMap): ScriptResult<any>
		function prepareStatement(var1: java.sql.Connection, var2: string): ScriptResult<any>
		function update4CrossAgency(var1: string, var2: any[], var3: HashMap): ScriptResult<any>
		function notify(): void
		function getConnection(): java.sql.Connection
		/**
		 * @returns int
		 */
		function hashCode(): number
		function equals(var1: any): boolean
		function toString(): string
		function select4CrossAgency(var1: String, var2: any[], var3: HashMap): ScriptResult<any>
		function initScript(var1: string, var2: string): void
	}
	namespace finance {
		/**
		 * Assign Fee factor for calculator according to assigned higher or lower job value; And return updated  BValuatnModel
		 * @param {CapIDModel} capID (CapIDModel) - Cap ID Model
		 * @param {boolean} isHigherJobValue (boolean) - true higher job value, lower job value
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function assignFeeFactor(capID:CapIDModel, isHigherJobValue:boolean): ScriptResult<any>

		/**
		 * get Fee Calc Factor.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeCalcFactor(capID:CapIDModel): ScriptResult<any>

		/**
		 * Add fee item.
		 * @param {F4FeeItemModel} f4FeeItemModel (F4FeeItemModel) - F4FeeItemModel
		 * @param {number} debugDays (number) - (int) debug days
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeItem(f4FeeItemModel:F4FeeItemModel, debugDays:number): ScriptResult<any>

		/**
		 * Add fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} feeCode (string) - fee code
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeItem(capID:CapIDModel, feeSchedule:string, feeCode:string, paymentPeriod:string, feeUnit:number): ScriptResult<any>

		/**
		 * Add fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} version (string) - fee schedule version
		 * @param {string} feeCode (string) - fee code
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeItem(capID:CapIDModel, feeSchedule:string, version:string, feeCode:string, paymentPeriod:string, feeUnit:number): ScriptResult<any>

		/**
		 * Add fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} Display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - formula
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subgroup (string) - subgroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} feeitemStatus (string) - feeitem status
		 * @param {string} feeCalcProc (string) - feeCalcProc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeItem(capID:CapIDModel, paymentPeriod:string, feeCod:string, Display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subgroup:string, calcFlag:string, feeitemStatus:string, feeCalcProc:string): ScriptResult<any>

		/**
		 * At first time, it will create fee item for pos transaction.
 
 For Self-plan checking, please refer to the following process.
 1. Get self-plan checking Cap ID from BizDomain.
 2. Create fee items.
 3. Generate invoice automatically.
		 * @param {any[]} refFeeItems (any[])
		 * @param {number} posTransId (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeItemsForPosTransaction(refFeeItems:any[], posTransId:number): ScriptResult<any>

		/**
		 * Edit feeitem flag
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence  number
		 * @param {string} statusFlag (string) - status flag
		 * @param {string} calcFlag (string) - calc flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItemFlag(capID:CapIDModel, feeSeqNbr:number, statusFlag:string, calcFlag:string): ScriptResult<any>

		/**
		 * Edit fee item.
		 * @param {F4FeeItemModel} f4FeeItemModel (F4FeeItemModel) - F4FeeItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItem(f4FeeItemModel:F4FeeItemModel): ScriptResult<any>

		/**
		 * Edit fee item
		 * @param {F4FeeItemModel} f4FeeItemModel (F4FeeItemModel) - F4FeeItemModel
		 * @param {number} debugDays (number) - (int) debug days
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItem(f4FeeItemModel:F4FeeItemModel, debugDays:number): ScriptResult<any>

		/**
		 * Edit fee item unit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItemUnit(capID:CapIDModel, feeUnit:number, feeSeqNbr:number): ScriptResult<any>

		/**
		 * Edit fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) 
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} Display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - formula
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subgroup (string) - subgroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} feeitemStatus (string) - feeitem status
		 * @param {string} feeCalcProc (string) - feeCalcProc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItem(capID:CapIDModel, feeSeqNbr:number, paymentPeriod:string, feeCod:string, Display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subgroup:string, calcFlag:string, feeitemStatus:string, feeCalcProc:string): ScriptResult<any>

		/**
		 * Delete fee item.
		 * @param {F4FeeItemModel} f4FeeItemModel (F4FeeItemModel) - F4FeeItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeFeeItem(f4FeeItemModel:F4FeeItemModel): ScriptResult<any>

		/**
		 * Delete fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeFeeItem(capID:CapIDModel, feeSeqNbr:number): ScriptResult<any>

		/**
		 * Calculate fees
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function calculateFees(capID:CapIDModel): ScriptResult<any>

		/**
		 * Recalculate fees.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeCalcFactor (string) - fee calc factor
		 * @param {string} feeFactorValue (string) - fee factor value
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function reCalculateFees(capID:CapIDModel, feeCalcFactor:string, feeFactorValue:string): ScriptResult<any>

		/**
		 * Get fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemByPK(capID:CapIDModel, feeSeqNbr:number): ScriptResult<any>

		/**
		 * void fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {string} flag (string) - flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function voidFeeItem(capID:CapIDModel, feeSeqNbr:number, flag:string): ScriptResult<any>

		/**
		 * Void feeItem audit
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {string} flag (string) - flag
		 * @param {string} comment (string) - comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function voidFeeItemAddAudit(capID:CapIDModel, feeSeqNbr:number, flag:string, comment:string): ScriptResult<any>

		/**
		 * Get total of fee.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentPeriod (string) - payment period
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeTotal(capID:CapIDModel, paymentPeriod:string): ScriptResult<any>

		/**
		 * wrkItemFeeTotalBySubGroup.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} inputParameter (string) - input parameter
		 * @param {string} formula (string) - formula
		 * @param {string} subGroup (string) - subGroup
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function wrkItemFeeTotalBySubGroup(capID:CapIDModel, inputParameter:string, formula:string, subGroup:string): ScriptResult<any>

		/**
		 * Get total of set fee assess amount.
		 * @param {string} setID (string) - the set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetFeeAssessAmount(setID:string): ScriptResult<any>

		/**
		 * Get fee item by fee code.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeCode (string) - fee code
		 * @param {string} paymentPeriod (string) - payment period
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemByFeeCode(capID:CapIDModel, feeCode:string, paymentPeriod:string): ScriptResult<any>

		/**
		 * getFeeItemsByFeeCodeAndPeriod.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} feeCode (string)
		 * @param {string} paymentPeriod (string)
		 * @param {string} status (string)
		 * @returns (ScriptResult<any>) - ScriptResult for Fee items.
		 */
		function getFeeItemsByFeeCodeAndPeriod(capID:CapIDModel, feeCode:string, paymentPeriod:string, status:string): ScriptResult<any>

		/**
		 * Get fee item by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * get all records from F4FEEITEM base on CapID and TransactionID
		 * @param {CapIDModel} capID (CapIDModel) - the cap ID.
		 * @param {number} posTransSeq (number) - (Long) transaction sequence
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemByPosTransaction(capID:CapIDModel, posTransSeq:number): ScriptResult<any>

		/**
		 * Get fee unit by fee code.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} payPeriodGroup (string) - paypPeriod group
		 * @param {string} feeCode (string) - fee code
		 * @param {ScriptDateTime} expDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeUnitByFeeCode(capID:CapIDModel, payPeriodGroup:string, feeCode:string, expDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Add a fee audit.
		 * @param {F4FeeItemAuditTrailModel} f4feeitemAuditTrailROC (F4FeeItemAuditTrailModel) - F4FeeItemAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeAudit(f4feeitemAuditTrailROC:F4FeeItemAuditTrailModel): ScriptResult<any>

		/**
		 * Add fee audit.
		 * @param {string} permitID1 (string) - the permit id1
		 * @param {string} permitID2 (string) - the permit id2
		 * @param {string} permitID3 (string) - the permit id3
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - formula
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subGroup (string) - subGroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} statusFlag (string) - status flag
		 * @param {string} actionType (string) - action type
		 * @param {string} comment (string) - comment
		 * @param {string} feeSchedule (string) - fee schedule
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeAudit(permitID1:string, permitID2:string, permitID3:string, feeSeqNbr:number, paymentPeriod:string, feeCod:string, display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subGroup:string, calcFlag:string, statusFlag:string, actionType:string, comment:string, feeSchedule:string): ScriptResult<any>

		/**
		 * Add fee audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCod (string) - fee code
		 * @param {string} display (string) - display
		 * @param {string} feeDescription (string) - fee description
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {string} formula (string) - formula
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {string} udes (string) - udes
		 * @param {number} fee (number) - (double) fee
		 * @param {ScriptDateTime} applyDate (ScriptDateTime) - apply date
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - expire date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {string} subGroup (string) - subGroup
		 * @param {string} calcFlag (string) - calc flag
		 * @param {string} statusFlag (string) - status flag
		 * @param {string} actionType (string) - action type
		 * @param {string} comment (string) - comment
		 * @param {string} feeSchedule (string) - fee schedule
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFeeAudit(capID:CapIDModel, feeSeqNbr:number, paymentPeriod:string, feeCod:string, display:string, feeDescription:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, formula:string, feeUnit:number, udes:string, fee:number, applyDate:ScriptDateTime, effectDate:ScriptDateTime, expireDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, subGroup:string, calcFlag:string, statusFlag:string, actionType:string, comment:string, feeSchedule:string): ScriptResult<any>

		/**
		 * Edit fee audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeAuditTrailSeqNbr (number) - (long) fee audit sequence number
		 * @param {string} fee_comment (string) - fee comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeAudit(capID:CapIDModel, feeAuditTrailSeqNbr:number, fee_comment:string): ScriptResult<any>

		/**
		 * Get fee audit by primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeAuditSeqNbr (number) - (long) fee audit sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeAuditByPK(capID:CapIDModel, feeAuditSeqNbr:number): ScriptResult<any>

		/**
		 * Get fee audit list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeAuditList(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get fee audit list.
		 * @param {number} batchNbr (number) - (long) the batch number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeAuditList(batchNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get fee schedule list
		 * @param {string} appGroup (string) - application group
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeScheduleList(appGroup:string): ScriptResult<any>

		/**
		 * Get fee item list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemList(capID:CapIDModel, feeSchedule:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get fee item list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} version (string) - fee version
		 * @param {string} auditStatus (string)
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemList(capID:CapIDModel, feeSchedule:string, version:string, auditStatus:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get fee schedule by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeScheduleByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get ref-fee item by fee code.
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} feeCode (string) - fee code
		 * @param {string} payPeriodGroup (string) - pay period group
		 * @param {ScriptDateTime} expDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefFeeItemByFeeCode(feeSchedule:string, feeCode:string, payPeriodGroup:string, expDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Get ref-fee item by fee code.
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} version (string)
		 * @param {string} feeCode (string) - fee code
		 * @param {string} payPeriodGroup (string) - pay period group
		 * @param {ScriptDateTime} expDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefFeeItemByFeeCodeVersion(feeSchedule:string, version:string, feeCode:string, payPeriodGroup:string, expDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Get payment by primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {string} callerId (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentByPK(capID:CapIDModel, paymentSeqNbr:number, callerId:string): ScriptResult<any>

		/**
		 * Get payment fee items.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentFeeItems(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Make payment.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentMethod (string) - payment mMethod
		 * @param {string} paymentRefNbr (string) - paymentRefNbr
		 * @param {string} ccType (string) - ccType
		 * @param {ScriptDateTime} ccExpDate (ScriptDateTime) - ccExpDate
		 * @param {string} payee (string) - payee
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @param {number} paymentChange (number) - (double) payment change
		 * @param {number} amountNotAllocated (number) - (double) amount not allocated
		 * @param {string} paymentStatus (string) - payment status
		 * @param {string} tranCode (string) - tran code
		 * @param {string} cashierID (string) - cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @param {string} paymentComment (string) - payment comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function makePayment(capID:CapIDModel, paymentMethod:string, paymentRefNbr:string, ccType:string, ccExpDate:ScriptDateTime, payee:string, paymentDate:ScriptDateTime, paymentAmount:number, paymentChange:number, amountNotAllocated:number, paymentStatus:string, tranCode:string, cashierID:string, registerNbr:string, paymentComment:string): ScriptResult<any>

		/**
		 * @param {PaymentScriptModel} scriptModel (PaymentScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function makePayment(scriptModel:PaymentScriptModel): ScriptResult<any>

		/**
		 * get online payment info.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentMethod (string) - payment mMethod
		 * @param {string} ccType (string) - ccType
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @returns (ScriptResult<any>) - ScriptResult : OnlinePaymentInfo.
		 */
		function getOnlinePaymentInfo(capID:CapIDModel, paymentMethod:string, ccType:string, paymentAmount:number): ScriptResult<any>

		/**
		 * Apply payment.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} paymentNbr (number) - (long) payment number
		 * @param {number} amountNotAllocated (number) - (double) amount not allocated
		 * @param {number[]} feeSeqNbr (number[]) - (long[]) fee sequence number
		 * @param {number[]} invoiceNbr (number[]) - (long[]) invoice number
		 * @param {number[]} feeAllocation (number[]) - (double[]) allocation fee
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {string} paymentFeeStatus (string) - payment fee status
		 * @param {string} paymentInvStatus (string) - invoice status
		 * @param {string} cashierID (string) - cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyPayment(capID:CapIDModel, paymentNbr:number, amountNotAllocated:number, feeSeqNbr:number[], invoiceNbr:number[], feeAllocation:number[], paymentDate:ScriptDateTime, paymentFeeStatus:string, paymentInvStatus:string, cashierID:string, registerNbr:string): ScriptResult<any>

		/**
		 * apply payment
		 * @param {CapIDModel} capID (CapIDModel) - cap ID
		 * @param {PaymentScriptModel} model (PaymentScriptModel) - PaymentScriptModel, should set: PaymentSeqNbr,AmountNotAllocated,CashierID,
 PaymentDate,RegisterNbr,WorkstationID
		 * @param {number[]} feeSeqNbr (number[]) - (long[]) 
		 * @param {number[]} invoiceNbr (number[]) - (long[]) 
		 * @param {number[]} feeAllocation (number[]) - (double[]) 
		 * @param {string} paymentFeeStatus (string)
		 * @param {string} paymentInvStatus (string)
		 * @param {string} sessionNbr (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyPayment(capID:CapIDModel, model:PaymentScriptModel, feeSeqNbr:number[], invoiceNbr:number[], feeAllocation:number[], paymentFeeStatus:string, paymentInvStatus:string, sessionNbr:string): ScriptResult<any>

		/**
		 * Generate receipt.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - ScriptDateTime
		 * @param {number} paymentNbr (number) - (long) payment number
		 * @param {string} cashierID (string) - the cashier id
		 * @param {string} registerNbr (string) - register number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function generateReceipt(capID:CapIDModel, paymentDate:ScriptDateTime, paymentNbr:number, cashierID:string, registerNbr:string): ScriptResult<any>

		/**
		 * Generate receipt.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - ScriptDateTime
		 * @param {number[]} paymentNbr (number[]) - (long[]) payment number
		 * @param {string} cashierID (string) - the cashier id
		 * @param {string} registerNbr (string) - register number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function generateReceipt(capID:CapIDModel, paymentDate:ScriptDateTime, paymentNbr:number[], cashierID:string, registerNbr:string): ScriptResult<any>

		/**
		 * Apply refund.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number[]} feeSeqNbr (number[]) - (long[]) fee sequence number
		 * @param {number[]} invoiceNbr (number[]) - (long[]) invoice number
		 * @param {number[]} feeAllocation (number[]) - (double[]) fee allocation
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {string} paymentFeeStatus (string) - payment fee status
		 * @param {string} paymentInvStatus (string) - payment invoice status
		 * @param {string} cashierID (string) - the cashier id
		 * @param {string} registerNbr (string) - register number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyRefund(capID:CapIDModel, feeSeqNbr:number[], invoiceNbr:number[], feeAllocation:number[], paymentDate:ScriptDateTime, paymentFeeStatus:string, paymentInvStatus:string, cashierID:string, registerNbr:string): ScriptResult<any>

		/**
		 * Apply refund.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {PaymentScriptModel} model (PaymentScriptModel) - PaymentScriptModel, should set: cashierID,registerNbr,workstationID,
 terminalID, paymentDate
		 * @param {number[]} feeSeqNbr (number[]) - (long[]) fee sequence number
		 * @param {number[]} invoiceNbr (number[]) - (long[]) invoice number
		 * @param {number[]} feeAllocation (number[]) - (double[]) fee allocation
		 * @param {string} paymentFeeStatus (string) - payment fee status
		 * @param {string} paymentInvStatus (string) - payment invoice status
		 * @param {string} sessionNbr (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyRefund(capID:CapIDModel, model:PaymentScriptModel, feeSeqNbr:number[], invoiceNbr:number[], feeAllocation:number[], paymentFeeStatus:string, paymentInvStatus:string, sessionNbr:string): ScriptResult<any>

		/**
		 * Void fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function voidFeeItem(capID:CapIDModel, feeSeqNbr:number): ScriptResult<any>

		/**
		 * Make refund
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment refNbr
		 * @param {string} ccType (string) - ccType
		 * @param {ScriptDateTime} ccExpDate (ScriptDateTime) - ccExpDate
		 * @param {string} payee (string) - payee
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @param {string} paymentStatus (string) - payment status
		 * @param {string} tranCode (string) - tran code
		 * @param {string} cashierID (string) - the cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {string} paymentComment (string) - payment comment
		 * @param {string} receiptComment (string) - receipt comment
		 * @param {ScriptDateTime} receiptDate (ScriptDateTime) - receipt date
		 * @param {ScriptDateTime} receiptBatchDate (ScriptDateTime) - receipt batchDate
		 * @param {string} receiptStatus (string) - receipt status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function makeRefund(capID:CapIDModel, paymentMethod:string, paymentRefNbr:string, ccType:string, ccExpDate:ScriptDateTime, payee:string, paymentDate:ScriptDateTime, paymentAmount:number, paymentStatus:string, tranCode:string, cashierID:string, registerNbr:string, paymentComment:string, receiptComment:string, receiptDate:ScriptDateTime, receiptBatchDate:ScriptDateTime, receiptStatus:string): ScriptResult<any>

		/**
		 * Make fund transfer.
		 * @param {CapIDModel} capIDFrom (CapIDModel) - the begin of capID
		 * @param {CapIDModel} capIDTo (CapIDModel) - the end of capId
		 * @param {string} cashierID (string) - the cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @param {string} receiptComment (string) - receipt comment
		 * @param {ScriptDateTime} receiptDate (ScriptDateTime) - receipt date
		 * @param {ScriptDateTime} receiptBatchDate (ScriptDateTime) - receipt batchDate
		 * @param {string} receiptStatus (string) - receipt status
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @param {string} tranCode (string) - tran code
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment refNbr
		 * @param {string} ccType (string) - ccType
		 * @param {ScriptDateTime} ccExpDate (ScriptDateTime) - ccExpDate
		 * @param {string} payee (string) - payee
		 * @param {string} paymentStatus (string) - payment status
		 * @param {string} paymentComment (string) - payment comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function makeFundTransfer(capIDFrom:CapIDModel, capIDTo:CapIDModel, cashierID:string, registerNbr:string, receiptComment:string, receiptDate:ScriptDateTime, receiptBatchDate:ScriptDateTime, receiptStatus:string, paymentDate:ScriptDateTime, paymentAmount:number, tranCode:string, paymentMethod:string, paymentRefNbr:string, ccType:string, ccExpDate:ScriptDateTime, payee:string, paymentStatus:string, paymentComment:string): ScriptResult<any>

		/**
		 * @param {CapIDModel} capIDFrom (CapIDModel)
		 * @param {CapIDModel} capIDTo (CapIDModel)
		 * @param {PaymentScriptModel} model (PaymentScriptModel)
		 * @param {string} receiptComment (string)
		 * @param {ScriptDateTime} receiptDate (ScriptDateTime)
		 * @param {ScriptDateTime} receiptBatchDate (ScriptDateTime)
		 * @param {string} receiptStatus (string)
		 * @param {string} sessionNbr (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function makeFundTransfer(capIDFrom:CapIDModel, capIDTo:CapIDModel, model:PaymentScriptModel, receiptComment:string, receiptDate:ScriptDateTime, receiptBatchDate:ScriptDateTime, receiptStatus:string, sessionNbr:string): ScriptResult<any>

		/**
		 * Void payment.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentNbr (number) - (long) payment number
		 * @param {string} status (string) - status
		 * @param {string} comment (string) - comment
		 * @param {string} cashierID (string) - cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function voidPayment(capID:CapIDModel, paymentDate:ScriptDateTime, paymentNbr:number, status:string, comment:string, cashierID:string, registerNbr:string): ScriptResult<any>

		/**
		 * void payment
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {PaymentScriptModel} paymentModel (PaymentScriptModel)
		 * @param {string} sessionNbr (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function voidPayment(capID:CapIDModel, paymentModel:PaymentScriptModel, sessionNbr:string): ScriptResult<any>

		/**
		 * Get receipt by primary key.
		 * @param {number} receiptSeqNbr (number) - (long) receipt sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getReceiptByPK(receiptSeqNbr:number): ScriptResult<any>

		/**
		 * Get receipt by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getReceiptByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get payment by capID
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get payment by payment date range
		 * @param {Date} dateFrom (Date) - Date
		 * @param {Date} dateTo (Date) - Date
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getOnLinePaymentByDate(dateFrom:Date, dateTo:Date, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get the payments in a special payment date ranger.
		 * @param {Date} dateFrom (Date)
		 * @param {Date} dateTo (Date)
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentByDate(dateFrom:Date, dateTo:Date, format:QueryFormat | null): ScriptResult<any>

		/**
		 * @param {Date} dateFrom (Date)
		 * @param {Date} dateTo (Date)
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>)          *
		 */
		function getReceiptsByDate(dateFrom:Date, dateTo:Date, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get payment by batch number.
		 * @param {number} batchNumber (number) - (long) 
		 * @returns (ScriptResult<any>)          *
		 */
		function getPaymentByBatchNumber(batchNumber:number): ScriptResult<any>

		/**
		 * Get payment by receiptNo.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentByReceiptNo(capID:CapIDModel, receiptNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get total of set paid.
		 * @param {string} setID (string) - the set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetPaid(setID:string): ScriptResult<any>

		/**
		 * Get total of paid invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalPaidInvoice(capID:CapIDModel, invoiceNbr:number): ScriptResult<any>

		/**
		 * Get total of paid fee item.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalPaidFeeItem(capID:CapIDModel, feeSeqNbr:number): ScriptResult<any>

		/**
		 * Apply payment to set.
		 * @param {string} setID (string) - the set id
		 * @param {string[]} paymentPeriod (string[]) - paymentpPeriod list
		 * @param {string[]} feeCode (string[]) - fee code list
		 * @param {string[]} feeDes (string[]) - fee desc list
		 * @param {number[]} paidAmount (number[]) - (double[]) paid amount
		 * @param {number[]} feeAllocationAmount (number[]) - (double[]) fee allocation amount
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - paymentRefNbr
		 * @param {string} ccType (string) - ccType
		 * @param {ScriptDateTime} ccExpDate (ScriptDateTime) - ccExpDate
		 * @param {string} payee (string) - payee
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @param {number} paymentChange (number) - (double) payment change
		 * @param {number} amountNotAllocated (number) - (double) amount not allocated
		 * @param {string} paymentStatus (string) - payment status
		 * @param {string} tranCode (string) - tran code
		 * @param {string} cashierID (string) - cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @param {string} paymentComment (string) - payment comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyPaymentToSet(setID:string, paymentPeriod:string[], feeCode:string[], feeDes:string[], paidAmount:number[], feeAllocationAmount:number[], paymentMethod:string, paymentRefNbr:string, ccType:string, ccExpDate:ScriptDateTime, payee:string, paymentDate:ScriptDateTime, paymentAmount:number, paymentChange:number, amountNotAllocated:number, paymentStatus:string, tranCode:string, cashierID:string, registerNbr:string, paymentComment:string): ScriptResult<any>

		/**
		 * Apply payment to set.
		 * @param {string} setID (string) - the set id
		 * @param {string} paymentPeriodList (string) - paymentpPeriod list
		 * @param {string} feeCodeList (string) - fee code list
		 * @param {string} feeDesList (string) - fee desc list
		 * @param {number[]} paidAmount (number[]) - (double[]) paid amount
		 * @param {number[]} feeAllocationAmount (number[]) - (double[]) fee allocation amount
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - paymentRefNbr
		 * @param {string} ccType (string) - ccType
		 * @param {ScriptDateTime} ccExpDate (ScriptDateTime) - ccExpDate
		 * @param {string} payee (string) - payee
		 * @param {ScriptDateTime} paymentDate (ScriptDateTime) - payment date
		 * @param {number} paymentAmount (number) - (double) payment amount
		 * @param {number} paymentChange (number) - (double) payment change
		 * @param {number} amountNotAllocated (number) - (double) amount not allocated
		 * @param {string} paymentStatus (string) - payment status
		 * @param {string} tranCode (string) - tran code
		 * @param {string} cashierID (string) - cashier ID
		 * @param {string} registerNbr (string) - register number
		 * @param {string} paymentComment (string) - payment comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function applyPaymentToSet(setID:string, paymentPeriodList:string, feeCodeList:string, feeDesList:string, paidAmount:number[], feeAllocationAmount:number[], paymentMethod:string, paymentRefNbr:string, ccType:string, ccExpDate:ScriptDateTime, payee:string, paymentDate:ScriptDateTime, paymentAmount:number, paymentChange:number, amountNotAllocated:number, paymentStatus:string, tranCode:string, cashierID:string, registerNbr:string, paymentComment:string): ScriptResult<any>

		/**
		 * Get total of set paid by period.
		 * @param {string} setID (string) - the set id
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCode (string) - fee code
		 * @param {string} feeDesc (string) - fee desc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetPaidByPeriod(setID:string, paymentPeriod:string, feeCode:string, feeDesc:string): ScriptResult<any>

		/**
		 * Get set payments by receipt number.
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSetPaymentsByReceiptNbr(receiptNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get total of set application.
		 * @param {string} setID (string) - the set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetApp(setID:string): ScriptResult<any>

		/**
		 * Get total of full paid application.
		 * @param {string} setID (string) - the set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalFullPaidApp(setID:string): ScriptResult<any>

		/**
		 * Add invoicing audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoicingAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add invoicing audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoicingAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Add payment audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPaymentAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add payment audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @param {string} ftPerID1 (string)
		 * @param {string} ftPerID2 (string)
		 * @param {string} ftPerID3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPaymentAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string, ftPerID1:string, ftPerID2:string, ftPerID3:string): ScriptResult<any>

		/**
		 * Add apply payment audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createApplyPaymentAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add apply payment audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createApplyPaymentAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Add refund audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefundAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add refund audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefundAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Add apply fefund audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createApplyRefundAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add apply refund audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createApplyRefundAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Add fund transfer audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFundTransferAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add fund transfer audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @param {string} ftPerID1 (string)
		 * @param {string} ftPerID2 (string)
		 * @param {string} ftPerID3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createFundTransferAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string, ftPerID1:string, ftPerID2:string, ftPerID3:string): ScriptResult<any>

		/**
		 * Add a new void payment audit.
		 * @param {AccountingAuditTrailModel} accountingAuditTrailROC (AccountingAuditTrailModel) - AccountingAuditTrailModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createVoidPaymentAudit(accountingAuditTrailROC:AccountingAuditTrailModel): ScriptResult<any>

		/**
		 * Add void payment audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} accAuditSeqNbr (number) - (long) accAudit sequence number
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {string} altID (string) - altID
		 * @param {string} accCodeL1 (string) - accCodeL1
		 * @param {string} accCodeL2 (string) - accCodeL2
		 * @param {string} accCodeL3 (string) - accCodeL3
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} receiptNbr (number) - (long) receipt number
		 * @param {number} paymentSeqNbr (number) - (long) payment sequence number
		 * @param {ScriptDateTime} tranDate (ScriptDateTime) - tran date
		 * @param {number} tranAmount (number) - (double) tran amount
		 * @param {number} receiptAmount (number) - (double) receipt amount
		 * @param {string} action (string) - action
		 * @param {string} feeCod (string) - fee code
		 * @param {number} printInvNbr (number) - (long) print invoice sequence number
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeDescription (string) - fee description
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {number} feeUnit (number) - (double) fee unit
		 * @param {number} fee (number) - (double) fee
		 * @param {string} feeSchedule (string) - fee schedule
		 * @param {string} paymentMethod (string) - payment method
		 * @param {string} paymentRefNbr (string) - payment ref number
		 * @param {string} cashierID (string) - cashier id
		 * @param {string} registerNbr (string) - register number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createVoidPaymentAudit(capID:CapIDModel, accAuditSeqNbr:number, tranSeqNbr:number, altID:string, accCodeL1:string, accCodeL2:string, accCodeL3:string, invoiceNbr:number, receiptNbr:number, paymentSeqNbr:number, tranDate:ScriptDateTime, tranAmount:number, receiptAmount:number, action:string, feeCod:string, printInvNbr:number, paymentPeriod:string, feeDescription:string, feeSeqNbr:number, feeUnit:number, fee:number, feeSchedule:string, paymentMethod:string, paymentRefNbr:string, cashierID:string, registerNbr:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Get cashier audit.
		 * @param {number} accAudSeqNbr (number) - (long) accAud sequence number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCashierAudit(accAudSeqNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get cashier audit list by capId.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCashierAuditListByCapId(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get cashier audit list by TranSeqNbr.
		 * @param {number} tranSeqNbr (number) - (long) tran sequence number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCashierAuditListByTranSeqNbr(tranSeqNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get TranBatchNbr.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTranBatchNbr(): ScriptResult<any>

		/**
		 * Get contractor supplied valuation.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getContractorSuppliedValuation(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get calculated valuation.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCalculatedValuation(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get calculated valuation.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCalculatedValuation(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get multipliter for valuation calculator.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getValuationCalcMultiplier(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get extra amount for valuation calculator.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getValuationCalcExtraAmount(capID:CapIDModel): ScriptResult<any>

		/**
		 * Update multiplier and extra amount for valuation calculator.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} sMultiplier (string)
		 * @param {string} sExtraAmount (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateMultiplierAndExtraAmount(capID:CapIDModel, sMultiplier:string, sExtraAmount:string): ScriptResult<any>

		/**
		 * Inserts a record into the BCALC_VALUATN table.
		 * @param {BCalcValuatnScriptModel} bCalcValuatnScriptModel (BCalcValuatnScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createBCalcValuatn(bCalcValuatnScriptModel:BCalcValuatnScriptModel): ScriptResult<any>

		/**
		 * deletes records from BCALC_VALUATN by capID and calcValueSeqNbr
		 * @param {BCalcValuatnScriptModel} bCalcValuatnScriptModel (BCalcValuatnScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteBCalcValuatn(bCalcValuatnScriptModel:BCalcValuatnScriptModel): ScriptResult<any>

		/**
		 * Updates a record in BCALC_VALUATN table.
		 * @param {BCalcValuatnScriptModel} bCalcValuatnScriptModel (BCalcValuatnScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBCalcValuatn(bCalcValuatnScriptModel:BCalcValuatnScriptModel): ScriptResult<any>

		/**
		 * Get BValuatn by period.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} valuationPeriod (string) - valuation period
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getBValuatnByPeriod(capID:CapIDModel, valuationPeriod:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Edit BValuatn flag.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} valuationPeriod (string) - valuation period
		 * @param {string} feeFactorFlag (string) - fee factor flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBValuatnFlag(capID:CapIDModel, valuationPeriod:string, feeFactorFlag:string): ScriptResult<any>

		/**
		 * Edit BValuatn value.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} valuationPeriod (string) - valuation period
		 * @param {number} estimatedValue (number) - (double) estimated value
		 * @param {string} feeFactorFlag (string) - fee factor flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editBValuatnValue(capID:CapIDModel, valuationPeriod:string, estimatedValue:number, feeFactorFlag:string): ScriptResult<any>

		/**
		 * Add bValuatn.
		 * @param {BValuatnModel} bValuatnModel (BValuatnModel) - BValuatnModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createBvaluatn(bValuatnModel:BValuatnModel): ScriptResult<any>

		/**
		 * Add Bvaluatn.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} valuationPeriod (string) - valuation period
		 * @param {number} estimatedValue (number) - (double) estimated value
		 * @param {number} planCheckValue (number) - (double) plan check value
		 * @param {number} calculatedValue (number) - (double) calculated value
		 * @param {string} feeFactorFlag (string) - fee factor flag
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createBvaluatn(capID:CapIDModel, valuationPeriod:string, estimatedValue:number, planCheckValue:number, calculatedValue:number, feeFactorFlag:string, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Get valuation.
		 * @param {string} setID (string) - set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getValuation(setID:string): ScriptResult<any>

		/**
		 * Add an new invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} feeSeqList (string) - fee sequence list
		 * @param {string} paymentPeriodList (string) - payment period list
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoice(capID:CapIDModel, feeSeqList:string, paymentPeriodList:string): ScriptResult<any>

		/**
		 * Add an new invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number[]} feeSeqList (number[]) - (long[]) the array of fee sequence
		 * @param {string[]} paymentPeriodList (string[]) - the array of payment period
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoice(capID:CapIDModel, feeSeqList:number[], paymentPeriodList:string[]): ScriptResult<any>

		/**
		 * Close invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {F4InvoiceModel} f4InvoiceROC (F4InvoiceModel) - f4InvoiceROC
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function closeInvoice(capID:CapIDModel, f4InvoiceROC:F4InvoiceModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Close invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invNbr (number) - (long) invoice number
		 * @param {number} invLevel (number) - (long) invoice level
		 * @param {string} invStatus (string) - invoice status
		 * @param {ScriptDateTime} invStatusDate (ScriptDateTime) - invoice status date
		 * @param {number} balanceDue (number) - (double) balanceDue
		 * @param {number} invAmount (number) - (double) invoice amount
		 * @param {ScriptDateTime} invDate (ScriptDateTime) - invoice date
		 * @param {ScriptDateTime} invDueDate (ScriptDateTime) - invoice due date
		 * @param {string} invComment (string) - invoice comment
		 * @param {number} invBatchNbr (number) - (long) invoice batch number
		 * @param {ScriptDateTime} invBatchDate (ScriptDateTime) - invoice batch date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {number} printInvNbr (number) - (long) print invoice number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function closeInvoice(capID:CapIDModel, invNbr:number, invLevel:number, invStatus:string, invStatusDate:ScriptDateTime, balanceDue:number, invAmount:number, invDate:ScriptDateTime, invDueDate:ScriptDateTime, invComment:string, invBatchNbr:number, invBatchDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, printInvNbr:number, auditDate:ScriptDateTime, auditStatus:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {F4InvoiceModel} f4InvoiceROC (F4InvoiceModel) - f4InvoiceROC
		 * @param {any[]} feeitems (any[]) - the collection of feeitems
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoice(capID:CapIDModel, f4InvoiceROC:F4InvoiceModel, feeitems:any[]): ScriptResult<any>

		/**
		 * Add invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invNbr (number) - (long) invoice number
		 * @param {number} invLevel (number) - (long) invoice level
		 * @param {string} invStatus (string) - invoice status
		 * @param {ScriptDateTime} invStatusDate (ScriptDateTime) - invoice status date
		 * @param {number} balanceDue (number) - (double) balanceDue
		 * @param {number} invAmount (number) - (double) invoice amount
		 * @param {ScriptDateTime} invDate (ScriptDateTime) - invoice date
		 * @param {ScriptDateTime} invDueDate (ScriptDateTime) - invoice due date
		 * @param {string} invComment (string) - invoice comment
		 * @param {number} invBatchNbr (number) - (long) invoice batch number
		 * @param {ScriptDateTime} invBatchDate (ScriptDateTime) - invoice batch date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {number} printInvNbr (number) - (long) print invoice number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @param {any[]} feeitems (any[])
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoice(capID:CapIDModel, invNbr:number, invLevel:number, invStatus:string, invStatusDate:ScriptDateTime, balanceDue:number, invAmount:number, invDate:ScriptDateTime, invDueDate:ScriptDateTime, invComment:string, invBatchNbr:number, invBatchDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, printInvNbr:number, auditDate:ScriptDateTime, auditStatus:string, feeitems:any[]): ScriptResult<any>

		/**
		 * Edit invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invNbr (number) - (long) invoice number
		 * @param {number} invLevel (number) - (long) invoice level
		 * @param {string} invStatus (string) - invoice status
		 * @param {ScriptDateTime} invStatusDate (ScriptDateTime) - invoice status date
		 * @param {number} balanceDue (number) - (double) balanceDue
		 * @param {number} invAmount (number) - (double) invoice amount
		 * @param {ScriptDateTime} invDate (ScriptDateTime) - invoice date
		 * @param {ScriptDateTime} invDueDate (ScriptDateTime) - invoice due date
		 * @param {string} invComment (string) - invoice comment
		 * @param {number} invBatchNbr (number) - (long) invoice batch number
		 * @param {ScriptDateTime} invBatchDate (ScriptDateTime) - invoice batch date
		 * @param {string} udf1 (string) - udf1
		 * @param {string} udf2 (string) - udf2
		 * @param {string} udf3 (string) - udf3
		 * @param {string} udf4 (string) - udf4
		 * @param {number} printInvNbr (number) - (long) print invoice number
		 * @param {ScriptDateTime} auditDate (ScriptDateTime) - the audit date
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editInvoice(capID:CapIDModel, invNbr:number, invLevel:number, invStatus:string, invStatusDate:ScriptDateTime, balanceDue:number, invAmount:number, invDate:ScriptDateTime, invDueDate:ScriptDateTime, invComment:string, invBatchNbr:number, invBatchDate:ScriptDateTime, udf1:string, udf2:string, udf3:string, udf4:string, printInvNbr:number, auditDate:ScriptDateTime, auditStatus:string): ScriptResult<any>

		/**
		 * Get invoice list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceList(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get invoice by InvoiceNbr.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceByInvoiceNbr(capID:CapIDModel, invoiceNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get invoice by capid.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInvoiceByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Edit invoice BalanceDue.
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @param {number} invAmount (number) - (double) invoice amount
		 * @param {number} balanceDue (number) - (double) balanceDue
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editInvoiceBalanceDue(invoiceNbr:number, invAmount:number, balanceDue:number): ScriptResult<any>

		/**
		 * Edit fee invoice status.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeSeqNbr (number) - (long) fee sequence number
		 * @param {string} itemStatus (string) - item status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeitemInvoiceStatus(capID:CapIDModel, feeSeqNbr:number, itemStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Edit fee invoice .
		 * @param {X4FeeItemInvoiceModel} x4FeeItemInvoiceModel (X4FeeItemInvoiceModel) - X4FeeItemInvoiceModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editFeeItemInvoice(x4FeeItemInvoiceModel:X4FeeItemInvoiceModel): ScriptResult<any>

		/**
		 * Get total set fee invoice amount.
		 * @param {string} setID (string) - the string of set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetFeeInvoiceAmount(setID:string): ScriptResult<any>

		/**
		 * Get total set fee invoice amount.
		 * @param {string} setID (string) - the string of set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTotalSetFeeInvoiceAmountExceptVoid(setID:string): ScriptResult<any>

		/**
		 * Get invoice fee item by set id.
		 * @param {string} setID (string) - the string of set id
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceBySetID(setID:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get invoice fee item by fee number
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeNbr (number) - (long) fee number
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceByFeeNbr(capID:CapIDModel, feeNbr:number, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get invoice fee item by set id.
		 * @param {string} setID (string) - the string of set id
		 * @param {string} paymentPeriod (string) - payment period
		 * @param {string} feeCode (string) - fee code
		 * @param {string} feeDes (string) - feedes
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInvoiceFeeItemBySetID(setID:string, paymentPeriod:string, feeCode:string, feeDes:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get set invoice.
		 * @param {string} setID (string) - the string of set id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSetInvoicedPerApp(setID:string): ScriptResult<any>

		/**
		 * Get valid fee itme invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get valid fee itme invoice.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} feeNbr (number) - (long) fee number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getValidFeeItemInvoiceByFeeNbr(capID:CapIDModel, feeNbr:number): ScriptResult<any>

		/**
		 * Gets the valid invoice model list by fee nbr list.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string[]} feeNbrList (string[]) - the fee nbr list
		 * @returns (ScriptResult<any>) - the valid invoice model list by fee nbr list
		 */
		function getValidFeeItemInvoiceListByFeeNbrList(capID:CapIDModel, feeNbrList:string[]): ScriptResult<any>

		/**
		 * Get invoice amount.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} invoiceNbr (number) - (long) invoice number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInvoiceAmountExceptVoidCredited(capID:CapIDModel, invoiceNbr:number): ScriptResult<any>

		/**
		 * auto Invoicing Of Fee
		 * @param {any[]} feeItemModels (any[])
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addFeeItem(feeItemModels:any[]): ScriptResult<any>

		/**
		 * Switch the Calc. Factor of a CAP and then recalculate.
		 * @param {CapIDModel} capID (CapIDModel) - the POS cap ID.
		 * @param {string} calcFactor (string) - the new calc. Factor.
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function switchCalcFactor(capID:CapIDModel, calcFactor:string, callerID:string): ScriptResult<any>

		/**
		 * Create an empty TransactionModel.
		 * @returns (TransactionModel) - an new empty TransactionModel.
		 */
		function createTransactionScriptModel(): TransactionModel

		/**
		 * createPaymentScriptModel
		 * @returns (PaymentScriptModel) - PaymentScriptModel
		 */
		function createPaymentScriptModel(): PaymentScriptModel

		/**
		 * createValuationCalcScriptModel
		 * @returns (BCalcValuatnScriptModel) - BCalcValuatnScriptModel
		 */
		function createBCalcValuatnScriptModel(): BCalcValuatnScriptModel

		/**
		 * Prepare transaction related model for trailing online payment for ACA.
		 * @param {CapIDModel} capIdModel (CapIDModel)
		 * @param {boolean} isInvoiceBalance (boolean)
		 * @returns (ScriptResult<any>)          *
		 */
		function prepareTransaction4ACA(capIdModel:CapIDModel, isInvoiceBalance:boolean): ScriptResult<any>

		/**
		 * Create online payment transaction.
		 * @param {TransactionModel} transactionModel (TransactionModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createETransaction(transactionModel:TransactionModel): ScriptResult<any>

		/**
		 * Update online payment transaction.
		 * @param {TransactionModel} transactionModel (TransactionModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateETransaction(transactionModel:TransactionModel): ScriptResult<any>

		/**
		 * Update record into table ETRANSACTION, won't update record date.
		 * @param {TransactionModel} transactionModel (TransactionModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateETransaction4ACA(transactionModel:TransactionModel): ScriptResult<any>

		/**
		 * Get online payment transaction.
		 * @param {TransactionModel} transactionModel (TransactionModel)
		 * @param {QueryFormat | null} qf (QueryFormat)
		 * @returns (ScriptResult<any>)          *
		 */
		function getETransaction(transactionModel:TransactionModel, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * Make local payment for ACA, include under steps:
 1. Make invoice when this action source is renew license or new CAP.
 2. Create payment.
 3. Apply payment.
 4. Generate receipt.
 5. Update ACA status when this action source is renew license or new CAP.
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @param {PaymentScriptModel} paymentScriptModel (PaymentScriptModel)
		 * @param {ACAModel} acaModel (ACAModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function makePayment4ACA(capIDModel:CapIDModel, paymentScriptModel:PaymentScriptModel, acaModel:ACAModel): ScriptResult<any>

		/**
		 * @param {string} customer (string)
		 * @param {string} externalReference (string)
		 * @param {string} amount (string)
		 * @param {string} currency (string)
		 * @param {number} expiration (number) - (int) 
		 * @param {string} tranHint (string)
		 * @param {string} transactionID (string)
		 * @param {string} orderName (string)
		 * @param {Date} currentDate (Date)
		 * @param {string} notificationURL (string)
		 * @param {string[]} AccountsXML (string[])
		 * @param {string} dataXML (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getEtisalatRegisterModel(customer:string, externalReference:string, amount:string, currency:string, expiration:number, tranHint:string, transactionID:string, orderName:string, currentDate:Date, notificationURL:string, AccountsXML:string[], dataXML:string): ScriptResult<any>

		/**
		 * Get payment amount for ACA according to given parameter.
		 * @param {CapIDModel} capIDModel (CapIDModel)
		 * @param {boolean} isInvoiceBalance (boolean)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPaymentAmount4ACA(capIDModel:CapIDModel, isInvoiceBalance:boolean): ScriptResult<any>

		/**
		 * Get cashier session from database.
		 * @returns (ScriptResult<any>) - script result
		 */
		function getCashierSessionFromDB(): ScriptResult<any>

		/**
		 * Get ACAModel for online payment.
		 * @param {CapModel} capModel (CapModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getACAModel(capModel:CapModel): ScriptResult<any>

		/**
		 * Create empty ACAModel.
		 * @returns (ACAModel) - empty ACAModel
		 */
		function createACAScriptModel(): ACAModel

		/**
		 * Gets the merchant account info.
		 * @param {CapTypeModel} capType (CapTypeModel) - the cap type
		 * @returns (ScriptResult<any>) - the merchant account info
		 */
		function getMerchantAccInfo(capType:CapTypeModel): ScriptResult<any>

		/**
		 * To edit ref fee item variable.
		 * @param {string} feeSchedule (string) - feeSchedule
		 * @param {string} version (string) - version
		 * @param {string} feeCode (string) - feeCode
		 * @param {string} paymentPeriod (string) - paymentPeriod
		 * @param {string} formula (string) - formula
		 * @returns (ScriptResult<any>) - a number
		 */
		function editRFeeItemFormulaVariable(feeSchedule:string, version:string, feeCode:string, paymentPeriod:string, formula:string): ScriptResult<any>

	}
	namespace genericQuery {
		/**
		 * Query.
		 * @param {string} sqlName (string) - the sql name
		 * @param {ParameterModel[]} paramList (ParameterModel[]) - the where params
		 * @param {number} startRow (number) - (int) the start row
		 * @param {number} endRow (number) - (int) the end row
		 * @returns (ScriptResult<any>) - the return info encapsuled in ScriptResult
		 */
		function query(sqlName:string, paramList:ParameterModel[], startRow:number, endRow:number): ScriptResult<any>

		/**
		 * Gets the parameter model.
		 * @param {string} name (string) - the name
		 * @param {string} value (string) - the value
		 * @returns (ScriptResult<any>) - the parameter model
		 */
		function getParameterModel(name:string, value:string): ScriptResult<any>

	}
	namespace genericTemplate {
		/**
		 * create new GenericTemplateTableValue.
		 * @param {number} rowIndex (number) - (Long) row index
		 * @param {GenericTemplateAttribute} field (GenericTemplateAttribute) - field
		 * @param {string} value (string) - value
		 * @returns (GenericTemplateTableValue) - the generic template table value
		 */
		function createGenericTemplateTableValue(rowIndex:number, field:GenericTemplateAttribute, value:string): GenericTemplateTableValue

		/**
		 * create new template row.
		 * @param {number} rowIndex (number) - (Long) row index
		 * @param {GenericTemplateTableValue[]} values (GenericTemplateTableValue[]) - values
		 * @returns (TemplateRow) - the template row
		 */
		function createTemplateRow(rowIndex:number, values:GenericTemplateTableValue[]): TemplateRow

		/**
		 * get Template.
		 * @param {EntityPKModel} entityPKModel (EntityPKModel) - entityPKModel
		 * @returns (ScriptResult<any>) - Template Model with values
		 */
		function getTemplate(entityPKModel:EntityPKModel): ScriptResult<any>

		/**
		 * Method getTemplateStructureByGroupName.
		 * @param {string} groupName (string) - Template Form Group code
		 * @returns (ScriptResult<any>) - Template Structure Model
		 */
		function getTemplateStructureByGroupName(groupName:string): ScriptResult<any>

	}
	namespace gis {
		/**
		 * Gets the cap asset gis objects.
		 * @param {CapIDModel} capId (CapIDModel) - the cap id
		 * @returns (ScriptResult<any>) - the cap asset gis objects
		 */
		function getAssetGISObject(capId:CapIDModel): ScriptResult<any>

		/**
		 * Get CapGISObjects.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapGISObjects(capId:CapIDModel): ScriptResult<any>

		/**
		 * Get ParcelGISObjects.
		 * @param {string} parcelNumber (string) - parcel number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelGISObjects(parcelNumber:string): ScriptResult<any>

		/**
		 * Get BufferByRadius.
		 * @param {GISTypeScriptModel} bufferSource (GISTypeScriptModel) - GISTypeScriptModel
		 * @param {number} radius (number) - (double) radius
		 * @param {string} radiusUnits (string) - radius units
		 * @param {GISTypeScriptModel} bufferTarget (GISTypeScriptModel) - buffer target
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getBufferByRadius(bufferSource:GISTypeScriptModel, radius:number, radiusUnits:string, bufferTarget:GISTypeScriptModel): ScriptResult<any>

		/**
		 * Get GISObjectAttributes by GISTypeScriptModel gisType.
		 * @param {GISTypeScriptModel} gisType (GISTypeScriptModel) - GISTypeScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getGISObjectAttributes(gisType:GISTypeScriptModel): ScriptResult<any>

		/**
		 * Get GISType by gisServiceId,gisTypeId.
		 * @param {string} gisServiceId (string) - gis service id
		 * @param {string} gisTypeId (string) - gis type id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getGISType(gisServiceId:string, gisTypeId:string): ScriptResult<any>

		/**
		 * Remove all CapGISObjects.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeAllCapGISObjects(capId:CapIDModel): ScriptResult<any>

		/**
		 * Add CapGISObject.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {string} serviceName (string) - service name
		 * @param {string} layerId (string) - layer Id
		 * @param {string} id (string) - id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCapGISObject(capId:CapIDModel, serviceName:string, layerId:string, id:string): ScriptResult<any>

		/**
		 * Add CapGISObject.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {string} serviceName (string) - service name
		 * @param {string} layerId (string) - layer Id
		 * @param {string} id (string) - id
		 * @param {boolean} isPrimary (boolean) - isPrimary
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addCapGISObject(capId:CapIDModel, serviceName:string, layerId:string, id:string, isPrimary:boolean): ScriptResult<any>

		/**
		 * According gis feature string from AGIS_OBJECT table.
		 * @param {string} gisFeaturesString (string) - such as "Seminole,Parcels=002-461-031-000||Seminole,Parcels=003-202-009-000||"
		 * @returns (ScriptResult<any>) - the GIS objects by features
		 */
		function getGISObjectsByFeatures(gisFeaturesString:string): ScriptResult<any>

		/**
		 * @param {string} serviceName (string)
		 * @param {string} layerName (string)
		 * @param {string} gisIDValue (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getGISObjectDetails(serviceName:string, layerName:string, gisIDValue:string): ScriptResult<any>

		/**
		 * Gets the proximity Result by radius.
		 * @param {GISTypeScriptModel} bufferSource (GISTypeScriptModel) - the buffer source
		 * @param {number} radius (number) - (double) the radius
		 * @param {string} radiusUnits (string) - the radius units
		 * @param {GISTypeScriptModel} bufferTarget (GISTypeScriptModel) - the buffer target
		 * @returns (ScriptResult<any>) - the proximity
		 */
		function getProximityResultByRadius(bufferSource:GISTypeScriptModel, radius:number, radiusUnits:string, bufferTarget:GISTypeScriptModel): ScriptResult<any>

	}
	namespace globalSearch {
		/**
		 * Method RebuildIndex
		 * @param {string} agencies (string) - String
		 * @param {string} entities (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function rebuildIndex(agencies:string, entities:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function updatePendingRequests(): ScriptResult<any>

	}
	namespace gStructure {
		/**
		 * Retrieve a structure from GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructure(structureNumber:number, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE table.
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructures(format:QueryFormat | null, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE table.
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructures(callerID:string): ScriptResult<any>

		/**
		 * Add a structure to GSTRUCTURE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Add a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {Date} structureStatusDate (Date) - structure status date
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, structureStatusDate:Date, callerID:string): ScriptResult<any>

		/**
		 * Add a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {ScriptDateTime} structureStatusDateSCR (ScriptDateTime) - structure status date
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, structureStatusDateSCR:ScriptDateTime, callerID:string): ScriptResult<any>

		/**
		 * Add a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStructure(structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Delete a structure record from GSTRUCTURE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStructure(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Remove a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStructure(structureNumber:number, callerID:string): ScriptResult<any>

		/**
		 * Update a structure to GSTRUCTURE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructure(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Update a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {ScriptDateTime} structureStatusDateSCR (ScriptDateTime) - structure status date
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructure(structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, structureStatusDateSCR:ScriptDateTime, callerID:string): ScriptResult<any>

		/**
		 * Update a structure to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureType (string) - structure type
		 * @param {string} structureName (string) - structure name
		 * @param {string} structureDescription (string) - structure description
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructure(structureNumber:number, structureType:string, structureName:string, structureDescription:string, structureStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Get an attribute by GSTRUCUTRE_ATTRIBUTE primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} structureAttributeNumber (number) - (long) structure attribute number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttribute(capID:CapIDModel, structureNumber:number, structureAttributeNumber:number, callerID:string): ScriptResult<any>

		/**
		 * Get a list of attributes by a given StructureModel from
 GSTRUCTURE_ATTRIBUTE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttributes(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Get a list of attributes by a given StructureModel from
 GSTRUCTURE_ATTRIBUTE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} auditID (string) - the auditID
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getAttributes(structureNumber:number, structureStatus:string, auditID:string, auditStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Add an attribute to GSTRUCTURE_ATTRIBUTE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAttribute(structureROC:StructureModel, attributeROC:AttributeModel, callerID:string): ScriptResult<any>

		/**
		 * Add an attribute to GSTRUCTURE_ATTRIBUTE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} componentGroup (string) - component group
		 * @param {string} componentType (string) - component type
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @param {string} attributeName (string) - attribute name
		 * @param {string} attributeLabel (string) - attribute label
		 * @param {string} attributeCode (string) - attribute code
		 * @param {string} attributeDescription (string) - attribute description
		 * @param {string} attributeDataType (string) - attribute data type
		 * @param {string} attributeValueReqFlag (string) - attribute value required flag
		 * @param {string} attributeValue (string) - attribute value
		 * @param {string} attributeUnitType (string) - attribute unit type
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addAttribute(structureNumber:number, componentGroup:string, componentType:string, attributeNumber:number, attributeName:string, attributeLabel:string, attributeCode:string, attributeDescription:string, attributeDataType:string, attributeValueReqFlag:string, attributeValue:string, attributeUnitType:string, callerID:string): ScriptResult<any>

		/**
		 * Delete an attribute record from GSTRUCTURE_ATTRIBUTE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAttribute(structureROC:StructureModel, attributeROC:AttributeModel, callerID:string): ScriptResult<any>

		/**
		 * Delete an attribute from GSTRUCTURE_ATTRIBUTE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteAttribute(structureNumber:number, attributeNumber:number, callerID:string): ScriptResult<any>

		/**
		 * update an attribute to GSTRUCTURE_ATTRIBUTE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {AttributeModel} attributeROC (AttributeModel) - AttributeModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAttribute(structureROC:StructureModel, attributeROC:AttributeModel, callerID:string): ScriptResult<any>

		/**
		 * update an attribute to GSTRUCTURE_ATTRIBUTE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} componentGroup (string) - component group
		 * @param {string} componentType (string) - component type
		 * @param {number} attributeNumber (number) - (long) attribute number
		 * @param {string} attributeName (string) - attribute name
		 * @param {string} attributeLabel (string) - attribute label
		 * @param {string} attributeCode (string) - attribute code
		 * @param {string} attributeDescription (string) - attribute description
		 * @param {string} attributeDataType (string) - attribute data type
		 * @param {string} attributeValueReqFlag (string) - attribute value required flag
		 * @param {string} attributeValue (string) - attribute value
		 * @param {string} attributeUnitType (string) - attribute unit type
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateAttribute(structureNumber:number, componentGroup:string, componentType:string, attributeNumber:number, attributeName:string, attributeLabel:string, attributeCode:string, attributeDescription:string, attributeDataType:string, attributeValueReqFlag:string, attributeValue:string, attributeUnitType:string, callerID:string): ScriptResult<any>

		/**
		 * Get a list of owners who own the structure. Get GStructureOwnerModel
 object by using methods in GstructureOwner class, then use method in
 Owner class to retrieve the OwnerROC. Refer to APO component
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStrucutureOwners(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Get a list of owners who own the structure. Get GStructureOwnerModel
 object by using methods in GstructureOwner class, then use method in
 Owner class to retrieve the OwnerROC. Refer to APO component
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStrucutureOwners(structureNumber:number, structureStatus:string, auditStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_OWNER table to link an owner from
 L3OWNERS to GSTRUCTURE table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {StructureOwnerModel} structureOwnerROC (StructureOwnerModel) - StructureOwnerModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureOwner(structureROC:StructureModel, structureOwnerROC:StructureOwnerModel, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_OWNER table to link an owner from
 L3OWNERS to GSTRUCTURE table.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} ownerNumber (number) - (long) owner number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureOwner(structureNumber:number, ownerNumber:number, callerID:string): ScriptResult<any>

		/**
		 * Delete a record from the GSTRUCTURE_OWNER table to remove the link.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {StructureOwnerModel} structureOwnerROC (StructureOwnerModel) - StructureOwnerModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStrucutureOwner(structureROC:StructureModel, structureOwnerROC:StructureOwnerModel, callerID:string): ScriptResult<any>

		/**
		 * Delete a record from the GSTRUCTURE_OWNER table to remove the link.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {number} ownerNumber (number) - (long) owner number
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStrucutureOwner(structureNumber:number, ownerNumber:number, callerID:string): ScriptResult<any>

		/**
		 * Get the list of locations for the structure. Get GstructureLocationROC
 object by using methods in GstructureLocation class, then use method in
 Parcel or Address or GisObject class to retrieve the detail Location
 object. Refer to APO component.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStrucutureLocation(structureROC:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Get the list of locations for the structure. Get GstructureLocationROC
 object by using methods in GstructureLocation class, then use method in
 Parcel or Address or GisObject class to retrieve the detail Location
 object. Refer to APO component.
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStrucutureLocation(structureNumber:number, structureStatus:string, auditStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_LOCATION table to link a structure to a
 location (the location could be a type of parcel, address, or GIS
 object).
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {StructureLocationModel} structureLocationROC (StructureLocationModel) - StructureLocationModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureLocation(structureROC:StructureModel, structureLocationROC:StructureLocationModel, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_LOCATION table to link a structure to a
 location (the location could be a type of parcel, address, or GIS
 object).
		 * @param {number} structureNumber (number) - (long) structure number
		 * @param {string} locationType (string) - location type
		 * @param {string} locationID (string) - location id
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureLocation(structureNumber:number, locationType:string, locationID:string, callerID:string): ScriptResult<any>

		/**
		 * Delete a record from the GSTRUCTURE_LOCATION table.
		 * @param {StructureModel} structureROC (StructureModel) - StructureModel
		 * @param {StructureLocationModel} structureLocationROC (StructureLocationModel) - StructureLocationModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStrucutureLocation(structureROC:StructureModel, structureLocationROC:StructureLocationModel, callerID:string): ScriptResult<any>

		/**
		 * Delete a record from the GSTRUCTURE_LOCATION table.
		 * @param {number} structureNumber (number) - (long) 
		 * @param {string} locationID (string)
		 * @param {string} locationType (string)
		 * @param {string} auditID (string)
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStrucutureLocation(structureNumber:number, locationID:string, locationType:string, auditID:string, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE_STRUCTURE table.
		 * @param {StructureModel} parentStructureModel (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParentStructures(parentStructureModel:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE_STRUCTURE table.
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParentStructures(parentStructureNumber:number, structureStatus:string, auditStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE_STRUCTURE table.
		 * @param {StructureModel} childStructureModel (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildStructures(childStructureModel:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Retrieve structures from GSTRUCTURE_STRUCTURE table.
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @param {string} structureStatus (string) - structure status
		 * @param {string} auditStatus (string) - audit status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getChildStructures(childStructureNumber:number, structureStatus:string, auditStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_STRUCTURE table to create a structure
 to structure or structure to establishment relationship.
		 * @param {StructureModel} structureROC1 (StructureModel) - StructureModel
		 * @param {StructureModel} structureROC2 (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureRelation(structureROC1:StructureModel, structureROC2:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Insert a record in the GSTRUCTURE_STRUCTURE table to create a structure
 to structure or structure to establishment relationship.
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @param {string} relationship (string) - relationship
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addStrucutureRelation(parentStructureNumber:number, childStructureNumber:number, relationship:string, callerID:string): ScriptResult<any>

		/**
		 * Remove a record from the GSTRUCTURE_STRUCTURE table to create a structure
 to structure or structure to establishment relationship.
		 * @param {StructureModel} structureROC1 (StructureModel) - StructureModel
		 * @param {StructureModel} structureROC2 (StructureModel) - StructureModel
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteStrucutureRelation(structureROC1:StructureModel, structureROC2:StructureModel, callerID:string): ScriptResult<any>

		/**
		 * Remove a record in the GSTRUCTURE_STRUCTURE table to create a structure
 to structure or structure to establishment relationship.
		 * @param {number} parentStructureNumber (number) - (long) parent structure number
		 * @param {number} childStructureNumber (number) - (long) child structure number
		 * @param {string} relationship (string) - relationship
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeStrucutureRelation(parentStructureNumber:number, childStructureNumber:number, relationship:string, callerID:string): ScriptResult<any>

	}
	namespace guidesheet {
		/**
		 * Get status result type.
		 * @param {string} serviceProviderCode (string) - Service provider code.
		 * @param {string} statusGroupName (string) - Guidesheet item status group name.
		 * @param {string} statusName (string) - Guidesheet item status name.
		 * @returns (ScriptResult<any>) - Result type for the status.
		 */
		function getStatusResultType(serviceProviderCode:string, statusGroupName:string, statusName:string): ScriptResult<any>

		/**
		 * Update guidesheet.
		 * @param {GGuideSheetModel} gGuidesheetModel (GGuideSheetModel) - Guidesheet model.
		 * @param {string} callerId (string) - Caller id;
		 * @returns (ScriptResult<any>)          *
		 */
		function updateGGuidesheet(gGuidesheetModel:GGuideSheetModel, callerId:string): ScriptResult<any>

		/**
		 * Copy g guide sheet items.
		 * @param {any[]} guideSheetModelSources (any[]) - the guide sheet model sources
		 * @param {CapIDModel} targetCapId (CapIDModel) - the target cap id
		 * @param {number} targetInspectionId (number) - (Long) the target inspection id
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function copyGGuideSheetItems(guideSheetModelSources:any[], targetCapId:CapIDModel, targetInspectionId:number, callerID:string): ScriptResult<any>

		/**
		 * Gets the fail g guide sheet items by cap id and insp id.
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} inspectionID (string) - the inspection id
		 * @param {Boolean} isCheckGuideItemCarryOverFlag (Boolean)
		 * @returns (ScriptResult<any>) - the fail g guide sheet items by cap id and insp id
		 */
		function getFailGGuideSheetItemsByCapIDAndInspID(capID:CapIDModel, inspectionID:string, isCheckGuideItemCarryOverFlag:Boolean): ScriptResult<any>

	}
	namespace httpClient {
		/**
		 * @returns (HashMap) - <java.lang.String,java.lang.Object> 
		 */
		function initPostParameters(): HashMap

		/**
		 * @param {string} url (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function get(url:string): ScriptResult<any>

		/**
		 * Get with headers
		 * @returns (ScriptResult<any>)          *
		 */
		function get(): ScriptResult<any>

		/**
		 * @param {string} url (string)
		 * @param {HashMap} parameters (HashMap) - <java.lang.String,java.lang.Object> 
		 * @returns (ScriptResult<any>)          *
		 */
		function post(url:string, parameters:HashMap): ScriptResult<any>

		/**
		 * Post form data with headers
		 * @returns (ScriptResult<any>)          *
		 */
		function post(): ScriptResult<any>

		/**
		 * Post body with headers
		 * @returns (ScriptResult<any>)          *
		 */
		function post(): ScriptResult<any>

		/**
		 * Post multipart with form data and file
		 * @returns (ScriptResult<any>)          *
		 */
		function post(): ScriptResult<any>

		/**
		 * Post multipart with body and file
		 * @returns (ScriptResult<any>)          *
		 */
		function post(): ScriptResult<any>

		/**
		 * Post multiparts with multiple bodies and multiple files
		 * @param {string} url (string) - HTTP request URL
		 * @param {HashMap} headers (HashMap) - <java.lang.String,java.lang.String> HTTP request headers
		 * @param {string[][]} multiBodies (string[][]) - multiple bodies to post, with array[0] as part name and array[1] value as part content
		 * @param {string[][]} multiFiles (string[][]) - multiple files to post, with array[0] as part name, array[1] as file name, and array[2] as file path
		 * @returns (ScriptResult<any>)          *
		 */
		function post(url:string, headers:HashMap, multiBodies:string[][], multiFiles:string[][]): ScriptResult<any>

	}
	namespace inspection {
		/**
		 * Schedules an inspection, and enters its request comment.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {SysUserModel} inspector (SysUserModel) - SysUserModel
		 * @param {ScriptDateTime} scheduledDate (ScriptDateTime) - scheduled date, it must be of the form "12/31/2001"
		 * @param {string} scheduledTime (string) - scheduled time
		 * @param {string} inspectionType (string) - inspection type
		 * @param {string} requestComment (string) - request comment
			no persistance data is stored if the comment is null or ""
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function scheduleInspection(capID:CapIDModel, inspector:SysUserModel, scheduledDate:ScriptDateTime, scheduledTime:string, inspectionType:string, requestComment:string): ScriptResult<any>

		/**
		 * Retrieves an InspectionBusines wrapped in a InspectionScriptModel object.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} inspectionID (number) - (long) inspection ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspection(capID:CapIDModel, inspectionID:number): ScriptResult<any>

		/**
		 * Retrieves an array of InspectionBusiness objects wrapped in
 InspectionScriptModel objects.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspections(capID:CapIDModel): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: findByDateRange(String
 serviceProviderCode, java.util.Date activityDate1,java.util.Date
 activityDate2) the date1 & date2 sample format: "yyyy-MM-dd" or
 "yyyy-MM-dd'T'hh:mm:ss" Retrieves an array of InspectionBusines objects .
		 * @param {string} date1 (string)
		 * @param {string} date2 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspections(date1:string, date2:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss".
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} inspectionID (number) - (long) inspection ID
		 * @param {string} resultStatus (string) - result status
		 * @param {string} resultDate (string) - result date
		 * @param {string} resultComment (string) - result comment
		 * @param {string} auditID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function resultInspection(capID:CapIDModel, inspectionID:number, resultStatus:string, resultDate:string, resultComment:string, auditID:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss".
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} inspectionID (number) - (long) inspection ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function cancelInspection(capID:CapIDModel, inspectionID:number): ScriptResult<any>

		/**
		 * Reschedules an inspection, and updates its request comment.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {number} inspectionId (number) - (long) inspection Id
		 * @param {SysUserModel} inspector (SysUserModel) - SysUserModel
		 * @param {ScriptDateTime} scheduledDate (ScriptDateTime) - scheduled date
		 * @param {string} scheduledTime (string) - scheduled time
		 * @param {string} requestComment (string) - request comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function reschedule(capId:CapIDModel, inspectionId:number, inspector:SysUserModel, scheduledDate:ScriptDateTime, scheduledTime:string, requestComment:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss"
		 * @param {SysUserModel} sysuser (SysUserModel) - SysUserModel
		 * @param {string} date1 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function findByInspectorDaily(sysuser:SysUserModel, date1:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss"
		 * @param {SysUserModel} sysuser (SysUserModel) - SysUserModel
		 * @param {string} date1 (string)
		 * @param {string} date2 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function findByInspectorDateRange(sysuser:SysUserModel, date1:string, date2:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss"
		 * @param {string} date1 (string)
		 * @param {string} date2 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUnassignedInspections(date1:string, date2:string): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss"
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUnassignedInspections(): ScriptResult<any>

		/**
		 * Added by carl , this call activity's method: getUnassignedInspections()
 the date1&date2 sample format: "yyyy-MM-dd" or "yyyy-MM-dd'T'hh:mm:ss"
		 * @param {InspectionScriptModel} model (InspectionScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function needDDA(model:InspectionScriptModel): ScriptResult<any>

		/**
		 * @param {InspectionScriptModel} model (InspectionScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function reschedule(model:InspectionScriptModel): ScriptResult<any>

		/**
		 * Update Inspection Type property according to inspSeqNumber
		 * @param {number} inspSeqNumber (number) - (long) 
		 * @param {string} inspGroupCode (string)
		 * @param {string} inspType (string)
		 * @param {string} resultGruop (string)
		 * @param {string} guideGroup (string)
		 * @param {string} autoAssign (string)
		 * @param {string} unit (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateInspectionType(inspSeqNumber:number, inspGroupCode:string, inspType:string, resultGruop:string, guideGroup:string, autoAssign:string, unit:string): ScriptResult<any>

		/**
		 * Get Inspection Type by groupCode
		 * @param {string} groupCode (string)
		 * @param {string} inspectionType (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspectionType(groupCode:string, inspectionType:string): ScriptResult<any>

		/**
		 * Get inspection discipline
		 * @param {string} inspSeqNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getDiscipline(inspSeqNumber:string): ScriptResult<any>

		/**
		 * Get inspection discipline from standard choice
		 * @param {string} inspSeqNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspectionDiscipline(inspSeqNumber:string): ScriptResult<any>

		/**
		 * Add inspection discipline
		 * @param {string} inspSeqNumber (string)
		 * @param {string} disciplineName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addInspectionDiscipline(inspSeqNumber:string, disciplineName:string): ScriptResult<any>

		/**
		 * Delete inspection discipline
		 * @param {string} inspSeqNumber (string)
		 * @param {string} disciplineName (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteInspectionDiscipline(inspSeqNumber:string, disciplineName:string): ScriptResult<any>

		/**
		 * Get inspection list for schedule
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspectionListForSchedule(capId1:string, capId2:string, capId3:string): ScriptResult<any>

		/**
		 * Get inspection list for reschedule
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspectionListForReschedule(capId1:string, capId2:string, capId3:string): ScriptResult<any>

		/**
		 * Automatically assign a meet inspector
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @param {number} inspTypeSeq (number) - (long) 
		 * @param {string} ScheduleDate (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function autoAssignInspector(capId1:string, capId2:string, capId3:string, inspTypeSeq:number, ScheduleDate:string): ScriptResult<any>

		/**
		 * Schedule inspection for automatically assign inspector
		 * @param {InspectionModel} inspectionModel (InspectionModel)
		 * @param {SysUserModel} actor (SysUserModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function scheduleInspection(inspectionModel:InspectionModel, actor:SysUserModel): ScriptResult<any>

		/**
		 * ReSchedule inspection for automatically assign inspector
		 * @param {InspectionModel} inspectionModel (InspectionModel)
		 * @param {SysUserModel} actor (SysUserModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function reScheduleInspection(inspectionModel:InspectionModel, actor:SysUserModel): ScriptResult<any>

		/**
		 * Get Inspection Script Model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspectionScriptModel(): ScriptResult<any>

		/**
		 * Copy Inspection with GuideSheet
		 * @param {CapIDModel} source (CapIDModel)
		 * @param {CapIDModel} target (CapIDModel)
		 * @param {InspectionModel} inspectionModel (InspectionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyInspectionWithGuideSheet(source:CapIDModel, target:CapIDModel, inspectionModel:InspectionModel): ScriptResult<any>

		/**
		 * @param {InspectionScriptModel} inspScrModel (InspectionScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function editInspection(inspScrModel:InspectionScriptModel): ScriptResult<any>

		/**
		 * @param {string} spCode (string)
		 * @param {string} auditId (string)
		 * @returns (InspectionScriptModel)          *
		 */
		function newInspectionScriptModel(spCode:string, auditId:string): InspectionScriptModel

		/**
		 * Automatically assign a meet inspector
		 * @param {string} capId1 (string)
		 * @param {string} capId2 (string)
		 * @param {string} capId3 (string)
		 * @param {number[]} inspTypeSeq (number[]) - (long[]) 
		 * @param {string} ScheduleDate (string)
		 * @returns (ScriptResult<any>) - ScriptResult SysUserModel object
		 */
		function autoAssignInspectorForMultiInspection(capId1:string, capId2:string, capId3:string, inspTypeSeq:number[], ScheduleDate:string): ScriptResult<any>

		/**
		 * Get failed GGuideSheetItems that can be carried over. 
  if the Inspection carry-over-Flag of the GGuideSheetItem is 'A'(auto) 
  this GGuideSheetItem will be carried over to target Inspection .  
  if the Inspection carry-over-Flag of the GGuideSheetItem is 'P' 
  this GGuideSheetItem will be added to ScriptResult .
		 * @param {CapIDModel} capID (CapIDModel) - the CapIDModel of cur application.
		 * @param {string} targetid (string) - the act_num of Inspection .
		 * @returns (ScriptResult<any>) - the list of all failed GGuideSheetItems that can be carried over
		 */
		function carryOverGSItems(capID:CapIDModel, targetid:string): ScriptResult<any>

		/**
		 * Validates inspection has fail guide sheet items that is able to allow result inspection to pass.    1.if the inpsection result operation is not approved, validation is pass. 2.if the insection type is configured  "Allow Failed Guidesheet Items" is Yes, validation is pass. 3.if above two cases are not passed, to check failed  guidesheet items, if has check failed guidesheet items, vlidation fail.
		 * @param {CapIDModel} capID (CapIDModel) - cap ID model
		 * @param {string} actvityIdNumber (string) - inspection activity id number
		 * @param {string} inspectionGroupCode (string) - inspection group code
		 * @param {string} inspectinType (string) - inspection type
		 * @param {string} resultStatus (string) - inspection result status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function validateFailGuidesheetItems(capID:CapIDModel, actvityIdNumber:string, inspectionGroupCode:string, inspectinType:string, resultStatus:string): ScriptResult<any>

		/**
		 * Carry over failed  GGuideSheetItems to target Inspection.
		 * @param {GGuideSheetItemModel[]} listGGuideSheetItemModel (GGuideSheetItemModel[]) - the source of carry over failed GGuideSheetItems
		 * @param {CapIDModel} targetCap (CapIDModel) - the CapIDModel of the target Inspection.
		 * @param {string} targetActNum (string) - the act_num of the target Inspection.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function saveCarryOverItems(listGGuideSheetItemModel:GGuideSheetItemModel[], targetCap:CapIDModel, targetActNum:string): ScriptResult<any>

		/**
		 * Gets the next available time.
		 * @param {number[]} inspTypeSeq (number[]) - (long[]) the array of insp seq.
		 * @param {ScriptDateTime} ScheduleDateTime (ScriptDateTime) - the schedule date time.
		 * @returns (ScriptResult<any>) - the next available time
		 */
		function getNextAvailableTime(inspTypeSeq:number[], ScheduleDateTime:ScriptDateTime): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getNextAvailableTime(): ScriptResult<any>

		/**
		 * Checks if is available time.
		 * @param {number[]} inspTypeSeq (number[]) - (long[]) the insp type seq
		 * @param {ScriptDateTime} ScheduleDateTime (ScriptDateTime) - the schedule date time
		 * @returns (ScriptResult<any>) - the script result
		 */
		function checkAvailableTime(inspTypeSeq:number[], ScheduleDateTime:ScriptDateTime): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function checkAvailableTime(): ScriptResult<any>

		/**
		 * Assign app for event.
		 * @param {string} capId1 (string) - the cap id1
		 * @param {string} capId2 (string) - the cap id2
		 * @param {string} capId3 (string) - the cap id3
		 * @param {string} calendarName (string) - the calendar name
		 * @param {string} eventType (string) - the event type
		 * @param {string} startDate (string) - the start date
		 * @returns (ScriptResult<any>) - the script result
		 */
		function assignAppForEvent(capId1:string, capId2:string, capId3:string, calendarName:string, eventType:string, startDate:string): ScriptResult<any>

		/**
		 * Assign app for event.
		 * @param {string} capId1 (string) - the cap id1
		 * @param {string} capId2 (string) - the cap id2
		 * @param {string} capId3 (string) - the cap id3
		 * @param {CalendarEventModel} eventModel (CalendarEventModel) - the event model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function assignAppForEvent(capId1:string, capId2:string, capId3:string, eventModel:CalendarEventModel): ScriptResult<any>

		/**
		 * Check assign application to calendar event.
		 * @param {string} capId1 (string) - the cap id1
		 * @param {string} capId2 (string) - the cap id2
		 * @param {string} capId3 (string) - the cap id3
		 * @param {string} calendarName (string) - the calendar name
		 * @param {string} eventType (string) - the event type
		 * @param {string} startDate (string) - the start date
		 * @returns (ScriptResult<any>) - the script result
		 */
		function checkAssignAppForEvent(capId1:string, capId2:string, capId3:string, calendarName:string, eventType:string, startDate:string): ScriptResult<any>

		/**
		 * Check assign app for event.
		 * @param {string} capId1 (string) - the cap id1
		 * @param {string} capId2 (string) - the cap id2
		 * @param {string} capId3 (string) - the cap id3
		 * @param {CalendarEventModel} eventModel (CalendarEventModel) - the event model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function checkAssignAppForEvent(capId1:string, capId2:string, capId3:string, eventModel:CalendarEventModel): ScriptResult<any>

		/**
		 * Gets the workflow calendar events.
		 * @param {string} processCode (string) - the process code
		 * @param {string} StpNum (string) - the stp num
		 * @param {string} actStatDes (string) - the act stat des
		 * @param {string} calendarName (string) - the calendar name
		 * @returns (ScriptResult<any>) - the workflow calendar events
		 */
		function getWorkflowCalendarEvents(processCode:string, StpNum:string, actStatDes:string, calendarName:string): ScriptResult<any>

		/**
		 * update inspection for supervisor
		 * @param {InspectionModel} inspectionModel (InspectionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateInspectionForSuperVisor(inspectionModel:InspectionModel): ScriptResult<any>

		/**
		 * Gets the inspectors workload.
		 * @param {number[]} inspSeq (number[]) - (long[]) the insp seq
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @param {ScriptDateTime} ScheduleDateTime (ScriptDateTime) - the schedule date time
		 * @returns (ScriptResult<any>) - the inspectors workload
		 */
		function getInspectorsWorkload(inspSeq:number[], capIDModel:CapIDModel, ScheduleDateTime:ScriptDateTime): ScriptResult<any>

		/**
		 * pending inspection
		 * @param {InspectionModel} inspectionModel (InspectionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function pendingInspection(inspectionModel:InspectionModel): ScriptResult<any>

		/**
		 * Update inspection milestone base inspection flow model
		 * @param {GInspProcessModel[]} gInspProcessArray (GInspProcessModel[]) - array of GInspProcessModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateInspectionMilestone(gInspProcessArray:GInspProcessModel[]): ScriptResult<any>

		/**
		 * Get inspection milestone model
		 * @param {CapIDModel} capID (CapIDModel) - capID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getInspMilestoneByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * Provide interface to delete all recurring tasks for the CAP
		 * @param {CapIDModel} capIDModel (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteRecurrings(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Batch result inspection by CSV file.
		 * @param {string} documentID (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function batchResultInspByCSV(documentID:string): ScriptResult<any>

		/**
		 * Send email and announcement.
		 * @param {string} publicuserEmail (string)
		 * @param {string} subject (string) - the subject
		 * @param {string} content (string) - the content
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendAnnouncement(publicuserEmail:string, subject:string, content:string, callerID:string): ScriptResult<any>

		/**
		 * create inspection relation.
		 * @param {InspectionIDModel} inspectionIDModel (InspectionIDModel)
		 * @param {string} childNum (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function createInspectionRelation(inspectionIDModel:InspectionIDModel, childNum:string): ScriptResult<any>

	}
	namespace invoice {
		/**
		 * Get fee item invoice by invoice number.
		 * @param {number} invoiceNbr (number) - (long) fee number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFeeItemInvoiceByInvoiceNbr(invoiceNbr:number): ScriptResult<any>

		/**
		 * Get fee item invoice record by customized invoice number
		 * @param {string} customInvoiceNbr (string) - customized invoice number        *
		 * @returns (ScriptResult<any>) - ScriptResult Script Result model
		 */
		function getFeeItemInvoiceByCustomizedNbr(customInvoiceNbr:string): ScriptResult<any>

		/**
		 * Get unpaid invoices.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUnpaidInvoices(): ScriptResult<any>

		/**
		 * Edit F4InvoiceModel object.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {F4InvoiceModel} f4InvoiceROC (F4InvoiceModel) - F4InvoiceModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editInvoice(capID:CapIDModel, f4InvoiceROC:F4InvoiceModel): ScriptResult<any>

		/**
		 * execute an event script after invoice fees
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} feeSeqList (string)
		 * @param {string} paymentPeriodList (string)
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createInvoiceWithEvent(capID:CapIDModel, feeSeqList:string, paymentPeriodList:string, callerID:string): ScriptResult<any>

	}
	namespace licenseProfessional {
		/**
		 * Copy LicenseProfessional to Lic. Prof. reference table .
		 * @param {CapIDModel} model (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createLicensedProfessionals(model:CapIDModel): ScriptResult<any>

		/**
		 * Get LicenseProfessionals from Lic. Prof. reference table .
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicenseProf(capID:CapIDModel): ScriptResult<any>

		/**
		 * Get a capLicenseProfessionalModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicenseProfessionScriptModel(): ScriptResult<any>

		/**
		 * Get a LicenseProfessionalScriptModel from a LicenseProfessionalModel
		 * @param {LicenseProfessionalModel} licenseProfessionalModel (LicenseProfessionalModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicenseProfessionScriptModel(licenseProfessionalModel:LicenseProfessionalModel): ScriptResult<any>

		/**
		 * Get a capLicenseProfessionalModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getContactAttributeScriptModel(): ScriptResult<any>

		/**
		 * Create a LicenseProfession for CAP..
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createLicensedProfessional(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * edit a LicenseProfession based on LicenseProfessionalModel.
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editLicensedProfessional(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * remove a LicenseProfession based on LicenseProfessionalModel.
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeLicensedProfessional(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * get LicenseProfessions based on capID.
		 * @param {CapIDModel} model (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicensedProfessionalsByCapID(model:CapIDModel): ScriptResult<any>

		/**
		 * get LicenseProfessions based on LicenseProfessionalScriptModel.
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicensedProfessionalsByPK(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Get a RefInfoTableGroupCodeModel
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>) - the ref info table group code
		 */
		function getRefInfoTableGroupCode(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Create a new RefInfoTableGroupCode and it's subgroups and columns
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createRefInfoTable(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Update a model Remove the old RefInfoTableGroupCode data first, then
 create the new data
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateRefInfoTableValues(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Remove admin side data in rinfo_table and rinfo_talbe_value
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function removeRefInfoTableGroupCode(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Get infotable and info table values from rinfotable/rinfotable_value,then copy to binfotable/binfotable_value
 
 Only set daily side unique index information into model, it will copy admin side info table data into daily side.
 Because the referenceId in admin side equals to daily side, so we need not additional pass admin side referenceId
 in this method
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function copyInfoTable(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Remove daily side data in binfo_table and binfo_talbe_value
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeInfoTableGroupCode(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Get a CapInfoTableGroupCodeModel
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>) - the info table group code
		 */
		function getInfoTableGroupCode(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Crate a new CapInfoTableGroupCodeModel instance
		 * @param {LicenseProfessionalScriptModel} model (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createInfoTable(model:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Copy LicenseProfessionalScriptModel from source to target.
		 * @param {LicenseProfessionalScriptModel} sourceModel (LicenseProfessionalScriptModel)
		 * @param {LicenseProfessionalScriptModel} targetModel (LicenseProfessionalScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function copyLicenseProfessionalScriptModel(sourceModel:LicenseProfessionalScriptModel, targetModel:LicenseProfessionalScriptModel): ScriptResult<any>

		/**
		 * Get the license Professional model by public user
		 * @param {string} userSeqNum (string)
		 * @returns (ScriptResult<any>) - the ref lic prof by online user
		 */
		function getRefLicProfByOnlineUser(userSeqNum:string): ScriptResult<any>

		/**
		 * Get LP by license type and it's associated public user type.
		 * @param {string} lpType (string) - License type.
		 * @param {string} userType (string) - public user type, include CONTRACT_INSPECTOR, AUTH_AGENT_CLERK, CITIZEN, AUTH_AGENT, SELF_CERTIFIED_INSPECTOR
		 * @returns (ScriptResult<any>)          *
		 */
		function getLicenseByUserTypeAndLicenseType(lpType:string, userType:string): ScriptResult<any>

		/**
		 * Creates the licensee and record relationship.
		 * @param {LicenseModel} licensee (LicenseModel) - the licensee
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createLicenseeAndRecordRelationship(licensee:LicenseModel, capID:CapIDModel, callerID:string): ScriptResult<any>

	}
	namespace licenseScript {
		/**
		 * Add a LicenseScriptModel.
		 * @returns (LicenseScriptModel) - LicenseScriptModel
		 */
		function createLicenseScriptModel(): LicenseScriptModel

		/**
		 * Creates the people attribute script model.
		 * @returns (PeopleAttributeScriptModel) - the people attribute script model
		 */
		function createPeopleAttributeScriptModel(): PeopleAttributeScriptModel

		/**
		 * Copy License to Lic. Prof. reference table .
		 * @param {LicenseScriptModel} licenseScriptModel (LicenseScriptModel) - the license script model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createRefLicenseProf(licenseScriptModel:LicenseScriptModel): ScriptResult<any>

		/**
		 * Get LicenseScriptModel.
		 * @param {LicenseScriptModel} licenseScriptModel (LicenseScriptModel) - LicenseScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editRefLicenseProf(licenseScriptModel:LicenseScriptModel): ScriptResult<any>

		/**
		 * Gets the provider by seq.
		 * @param {string} providerNbr (string) - the provider nbr
		 * @returns (ScriptResult<any>) - the provider by seq
		 */
		function getProviderBySeq(providerNbr:string): ScriptResult<any>

		/**
		 * Get LicenseScriptModel.
		 * @param {string} serviceProviderCode (string) - agency code
		 * @param {number} seqNbr (number) - (Long) license number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefLicenseProfBySeqNbr(serviceProviderCode:string, seqNbr:number): ScriptResult<any>

		/**
		 * Get a collection of LicenseScriptModel.
		 * @param {string} serviceProviderCode (string) - agency code
		 * @param {string} licenseNbr (string) - license number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefLicensesProfByLicNbr(serviceProviderCode:string, licenseNbr:string): ScriptResult<any>

		/**
		 * Get LicenseScriptModel.
		 * @param {string} serviceProviderCode (string) - agency code
		 * @param {string} fName (string) - first name
		 * @param {string} mName (string) - middle name
		 * @param {string} lName (string) - last name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getRefLicensesProfByName(serviceProviderCode:string, fName:string, mName:string, lName:string): ScriptResult<any>

		/**
		 * Get LicenseProfessionals from Lic. Prof. reference table .
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLicenseProf(capID:CapIDModel): ScriptResult<any>

		/**
		 * Create an Approval TradeName License, and write it to DB.
		 * @param {CapScriptModel} capScriptModel (CapScriptModel) - the cap script model
		 * @param {PublicUserModel} publicUser (PublicUserModel) - the public user
		 * @param {string} licenseType (string) - the license type
		 * @param {string} tradeName1Key1 (string) - the trade name1 key1
		 * @param {string} tradeName1Key2 (string) - the trade name1 key2
		 * @param {string} tradeName1Key3 (string) - the trade name1 key3
		 * @param {string} tradeName2Key1 (string) - the trade name2 key1
		 * @param {string} tradeName2Key2 (string) - the trade name2 key2
		 * @param {string} tradeName2Key3 (string) - the trade name2 key3
		 * @param {string} legalFormKey (string) - the legal form key
		 * @param {string} financeNbrKey (string) - the finance nbr key
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createApprovalTradeNameLicense(capScriptModel:CapScriptModel, publicUser:PublicUserModel, licenseType:string, tradeName1Key1:string, tradeName1Key2:string, tradeName1Key3:string, tradeName2Key1:string, tradeName2Key2:string, tradeName2Key3:string, legalFormKey:string, financeNbrKey:string): ScriptResult<any>

		/**
		 * Create an Approval TradeName License.
		 * @param {CapScriptModel} capScriptModel (CapScriptModel) - the cap script model
		 * @param {PublicUserModel} publicUser (PublicUserModel) - the public user
		 * @param {string} licenseType (string) - the license type
		 * @param {string} englishTradeName (string) - the ASI field labels of english trade names
		 * @param {string} arabicTradeName (string) - the ASI field labels of arabic trade names
		 * @param {string} legalFormKey (string) - the legal form key
		 * @param {string} financeNbrKey (string) - the finance nbr key
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createApprovalTradeNameLicense(capScriptModel:CapScriptModel, publicUser:PublicUserModel, licenseType:string, englishTradeName:string, arabicTradeName:string, legalFormKey:string, financeNbrKey:string): ScriptResult<any>

		/**
		 * Get the public user by the userName.
		 * @param {string} puserUserName (string) - the puser user name
		 * @returns (PublicUserModel) - the public user by user name
		 */
		function getPublicUserByUserName(puserUserName:string): PublicUserModel

		/**
		 * Associate the license with the specific cap.
		 * @param {CapIDModel} capId (CapIDModel) - the cap id
		 * @param {LicenseScriptModel} license (LicenseScriptModel) - the license
		 * @returns (ScriptResult<any>) - the script result
		 */
		function associateLpWithCap(capId:CapIDModel, license:LicenseScriptModel): ScriptResult<any>

		/**
		 * Associate the licesne with the specific public user, and the notice mail will be sent to the PublicUser and the Agency User.
		 * @param {PublicUserModel} publicUser (PublicUserModel) - the public user
		 * @param {LicenseScriptModel} license (LicenseScriptModel) - the license
		 * @returns (ScriptResult<any>) - the script result
		 */
		function associateLpWithPublicUser(publicUser:PublicUserModel, license:LicenseScriptModel): ScriptResult<any>

		/**
		 * Associate the contact with the specific public user .
		 * @param {string} publicUserSeqNbr (string) - the sequence number of public user.
		 * @param {string} contactSeqNbr (string) - the sequence number of contact.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function associateContactWithPublicUser(publicUserSeqNbr:string, contactSeqNbr:string): ScriptResult<any>

		/**
		 * Send the notice mail about approval trade name to the public user
		 * @param {PublicUserModel} publicUser (PublicUserModel)
		 * @param {LicenseScriptModel} license (LicenseScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function notifyPublicUserByEmail(publicUser:PublicUserModel, license:LicenseScriptModel): ScriptResult<any>

		/**
		 * Create Approval TradeName License,
 assocaite the LP to the specific cap
 associate the LP to the public user
 send the approval notice mail to the public user
 it same as invoking:
 1.createApprovalTradeNameLicense();
 2.associateWithCap();
 3.associateWithPublicUser();
 4.sendNoticeMailToUser().
		 * @param {CapScriptModel} capScriptModel (CapScriptModel) - the cap script model
		 * @param {string} licenseType (string) - the license type
		 * @param {string} tradeName1Key1 (string) - the trade name1 key1
		 * @param {string} tradeName1Key2 (string) - the trade name1 key2
		 * @param {string} tradeName1Key3 (string) - the trade name1 key3
		 * @param {string} tradeName2Key1 (string) - the trade name2 key1
		 * @param {string} tradeName2Key2 (string) - the trade name2 key2
		 * @param {string} tradeName2Key3 (string) - the trade name2 key3
		 * @param {string} legalFormKey (string) - the legal form key
		 * @param {string} financeNbrKey (string) - the finance nbr key
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createAssociatedLicenseProfessional(capScriptModel:CapScriptModel, licenseType:string, tradeName1Key1:string, tradeName1Key2:string, tradeName1Key3:string, tradeName2Key1:string, tradeName2Key2:string, tradeName2Key3:string, legalFormKey:string, financeNbrKey:string): ScriptResult<any>

		/**
		 * Return list of trade names by BusinessName and BusName2.
 One of the two params can be null but not both.
		 * @param {string} businessName (string) - the business name which may be null
		 * @param {string} businessName2 (string) - the business name2 which may be null
		 * @returns (ScriptResult<any>) - list of trade names by BusinessName and BusName2.
		 */
		function getTradeNameList(businessName:string, businessName2:string): ScriptResult<any>

		/**
		 * Judge the status change is whether for approving trade name.
		 * @param {CapScriptModel} cap (CapScriptModel) - The current trade name cap
		 * @param {string} filterName (string) - The cap type filter name
		 * @param {string} currentModuleName (string) - The current module name
		 * @param {string} status (string) - The status which user want to change
		 * @returns (ScriptResult<any>) - the script result
		 */
		function isApproveTradeName(cap:CapScriptModel, filterName:string, currentModuleName:string, status:string): ScriptResult<any>

		/**
		 * Get all reference license professional by the user sequence number.
		 * @param {string} userSeqNbr (string) - the sequence number of the public user
		 * @returns (ScriptResult<any>) - a list of reference license professional
		 */
		function getRefLicProfByOnlineUser(userSeqNbr:string): ScriptResult<any>

		/**
		 * Check trade names group by group.
		 * @param {CapScriptModel} cap (CapScriptModel) - the cap
		 * @param {string} tradeName1Key1 (string) - the trade name1 key1
		 * @param {string} tradeName2Key1 (string) - the trade name2 key1
		 * @param {string} tradeName1Key2 (string) - the trade name1 key2
		 * @param {string} tradeName2Key2 (string) - the trade name2 key2
		 * @param {string} tradeName1Key3 (string) - the trade name1 key3
		 * @param {string} tradeName2Key3 (string) - the trade name2 key3
		 * @returns (ScriptResult<any>) - the script result
		 */
		function checkTradeNamesGroupByGroup(cap:CapScriptModel, tradeName1Key1:string, tradeName2Key1:string, tradeName1Key2:string, tradeName2Key2:string, tradeName1Key3:string, tradeName2Key3:string): ScriptResult<any>

		/**
		 * update the status of license.
		 * @param {string} licenseType (string) - the license type
		 * @param {string} licenseNbr (string) - the license nbr
		 * @param {string} auditStatus (string) - the audit status
		 * @returns (ScriptResult<any>) - ScriptResult -- contains the result("true/false") and the error message.
		 */
		function updateLicenseStatusByTypeAndNbr(licenseType:string, licenseNbr:string, auditStatus:string): ScriptResult<any>

		/**
		 * Gets the license professional by provider no.
		 * @param {string} providerNo (string) - the provider no
		 * @returns (ScriptResult<any>) - the provider by provider no
		 */
		function getRefLicenseProfByProviderNo(providerNo:string): ScriptResult<any>

		/**
		 * Get Caps by LicenseModel.    Note: There's a limitation up to 3,000 records.    If there are more than 3,000 records meet your querying criteria,    the interface will not return data normally but return a null output,false flag with an error message "The results count exceed the max limit 3000."    eg. ScriptResult(false, "getCapIDsByLicenseModel","The results count exceed the max limit 3000.", null).   Once the error message occurs, please change your criteria in capModel to narrow your search for getting data normally.
		 * @param {LicenseScriptModel} licenseScriptModel (LicenseScriptModel) - LicenseScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult the script result output is CapIDModel List
		 */
		function getCapIDsByLicenseModel(licenseScriptModel:LicenseScriptModel): ScriptResult<any>

	}
	namespace meeting {
		/**
		 * Create one meeting calendar.
		 * @param {string} meetingCalendarName (string) - (String) calendar's name
		 * @param {string} meetingCalendarType (string) - (String) calendar's type
		 * @returns (ScriptResult<any>) - ScriptResult output object is null.
		 */
		function addMeetingCalendar(meetingCalendarName:string, meetingCalendarType:string): ScriptResult<any>

		/**
		 * Get one meetingCalendar by meetingCalendarID.
		 * @param {number} meetingCalendarID (number) - (long) (Long) calendar's ID
		 * @returns (ScriptResult<any>) - ScriptResult output object is MeetingGroupModel.
		 */
		function getMeetingCalendar(meetingCalendarID:number): ScriptResult<any>

		/**
		 * Get all MeetingGroups according to a certain condition
		 * @param {string} meetingCalendarName (string) - MeetingGroup Name
		 * @returns (ScriptResult<any>) - ScriptResult  output object is collection of calendar records
		 */
		function getMeetingCalendars(meetingCalendarName:string): ScriptResult<any>

		/**
		 * Get all meeting calendars.
		 * @returns (ScriptResult<any>) - ScriptResult output object is a list(MeetingGroupModel) of meeting calendar.
		 */
		function getMeetingCalendars(): ScriptResult<any>

		/**
		 * Get available meetings between a period of time.
		 * @param {string} meetingBody (string) - (String) meeting's body
		 * @param {number} duration (number) - (double) (double) meeting's duration
		 * @param {string} meetingGroupName (string) - (String) meeting calendar name
		 * @param {ScriptDateTime} dateFrom (ScriptDateTime) - (ScriptDateTime) Meeting must after this time
		 * @param {ScriptDateTime} dateTo (ScriptDateTime) - (ScriptDateTime) Meeting must before this time
		 * @param {string} dayOfWeek (string) - (String) Day of the week.
		 * @param {string} location (string) - (String) Meeting location.
		 * @returns (ScriptResult<any>) - ScriptResult output object is an array of MeetingModel.
		 */
		function getAvailableMeetings(meetingBody:string, duration:number, meetingGroupName:string, dateFrom:ScriptDateTime, dateTo:ScriptDateTime, dayOfWeek:string, location:string): ScriptResult<any>

		/**
		 * Add meeting for inspector meetingGroup
		 * @param {number} meetingGroupId (number) - (long) 
		 * @param {string} meetingName (string)
		 * @param {string} meetingType (string)
		 * @param {string} meetingDate (string)
		 * @returns (ScriptResult<any>) - ScriptResult  output object is Collection of event ID
		 */
		function addMeeting(meetingGroupId:number, meetingName:string, meetingType:string, meetingDate:string): ScriptResult<any>

		/**
		 * Delete meeting by meeting ID
		 * @param {number} meetingCalendarID (number) - (long) (Long) meetingGourpID
		 * @param {number} meetingID (number) - (long) (Long) Meeting's ID
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function deleteMeetingByMeetingID(meetingCalendarID:number, meetingID:number): ScriptResult<any>

		/**
		 * Get meeting by meeting ID
		 * @param {number} meetingCalendarID (number) - (long) (Long) meetingGourpID
		 * @param {number} meetingID (number) - (long) (Long) Meeting's ID
		 * @returns (ScriptResult<any>) - ScriptResult  output object is null
		 */
		function getMeetingByMeetingID(meetingCalendarID:number, meetingID:number): ScriptResult<any>

		/**
		 * Get meetings by meetingGroupID
		 * @param {number} meetingCalendarID (number) - (long) (Long) meeting calendar ID
		 * @param {number} year (number) - (int) (int) Query condition by the year.
		 * @param {number} month (number) - (int) (int) Query condition by the month.
		 * @returns (ScriptResult<any>) - ScriptResult  output object is Collection of  meeting list
		 */
		function getMeetingSeriesByCalendarID(meetingCalendarID:number, year:number, month:number): ScriptResult<any>

		/**
		 * Update meeting information include meeting name, meeting type and meeting date.
		 * @param {number} meetingCalendarID (number) - (long) (Long) meeting calendar ID(MeetingGroupID).
		 * @param {number} meetingID (number) - (long) (Long) meeting ID.
		 * @param {string} meetingName (string) - (String) meeting name.
		 * @param {string} meetingType (string) - (String) meeting type.
		 * @param {string} meetingDate (string) - (String) meeting date.
		 * @returns (ScriptResult<any>) - ScriptResult output object is null.
		 */
		function updateMeeting(meetingCalendarID:number, meetingID:number, meetingName:string, meetingType:string, meetingDate:string): ScriptResult<any>

		/**
		 * Schedule meeting for V360,This meeting will be stored into table "XAPP_EVENT"
		 * @param {CapIDModel} capID (CapIDModel) - the cap ID model
		 * @param {string} meetingCalendarID (string) - the calendar ID
		 * @param {string} meetingID (string) - the event ID
		 * @param {string} duration (string) - the duration
		 * @param {string} reason (string) - the meeting reason
		 * @param {string} comments (string) - the meeting comments
		 * @returns (ScriptResult<any>) - ScriptResult output object is null.
		 */
		function scheduleMeeting(capID:CapIDModel, meetingCalendarID:string, meetingID:string, duration:string, reason:string, comments:string): ScriptResult<any>

		/**
		 * Send email which use document as attachment.
		 * @param {string} emailSubject (string) - Email subject.
		 * @param {string} emailContent (string) - Email content.
		 * @param {string} from (string) - If from is null, it will replace by default address
		 * @param {string} to (string) - recipient's address  separate by ";"
		 * @param {string} cc (string) - Cc filed, separate by ";".
		 * @param {any[]} meetingDocList (any[]) - Document List which send as attachment.
		 * @returns (ScriptResult<any>)          *
		 */
		function sendEmail(emailSubject:string, emailContent:string, from:string, to:string, cc:string, meetingDocList:any[]): ScriptResult<any>

		/**
		 * Get meeting attendees.
		 * @param {number} meetingGroupID (number) - (Long) Meeting group ID.
		 * @param {number} meetingID (number) - (Long) Meeting ID.
		 * @returns (ScriptResult<any>) - ScriptResult  output object is (String)the Email
		 */
		function getMeetingAttendees(meetingGroupID:number, meetingID:number): ScriptResult<any>

		/**
		 * Get meetings by workflow task and status.
 1. Get the meeting type by workflow task and status;
 2. Get meetings by the meeting type.
		 * @param {string} processCode (string) - Process code.
		 * @param {string} StpNum (string) - Step number.
		 * @param {string} actStatDes (string) - Workflow status.
		 * @param {string} calendarName (string) - Meeting calendar name.
		 * @param {ScriptDateTime} fromDate (ScriptDateTime) - Search From date.
		 * @param {ScriptDateTime} toDate (ScriptDateTime) - Search To date.
		 * @param {string} capType (string) - Cap type, it will get the meeting list which tpye is associated with the cap type.
		 * @returns (ScriptResult<any>) - ScriptResult  output object is meeting list.
		 */
		function getMeetingsByWorkflow(processCode:string, StpNum:string, actStatDes:string, calendarName:string, fromDate:ScriptDateTime, toDate:ScriptDateTime, capType:string): ScriptResult<any>

		/**
		 * Get available meeting by workflow task and status.
 1. Get the meeting type by workflow task and status;
 2. Get meetings by the meeting type. 
 3. Filter the unavailable meeting.
		 * @param {string} processCode (string) - Process code.
		 * @param {string} StpNum (string) - Step number.
		 * @param {string} actStatDes (string) - Workflow status.
		 * @param {string} calendarName (string) - Meeting calendar name.
		 * @param {ScriptDateTime} fromDate (ScriptDateTime) - Search From date.
		 * @param {ScriptDateTime} toDate (ScriptDateTime) - Search To date.
		 * @param {number} duration (number) - (long) Meeting duration.
		 * @param {string} capType (string) - Cap type, it will get the meeting list which tpye is associated with the cap type.
		 * @returns (ScriptResult<any>) - ScriptResult  output object is available meeting list.
		 */
		function getAvailableMeetingsByWorkflow(processCode:string, StpNum:string, actStatDes:string, calendarName:string, fromDate:ScriptDateTime, toDate:ScriptDateTime, duration:number, capType:string): ScriptResult<any>

		/**
		 * Get E-mail server configure attachment limit size, unit: byte
		 * @returns (ScriptResult<any>)          *
		 */
		function getAttachmentMaximumSize(): ScriptResult<any>

		/**
		 * Get meeting agendas by meeting's primary key.
		 * @param {number} meetingGroupID (number) - (Long) (Long) The meeting group ID;
		 * @param {number} meetingID (number) - (Long) (Long) The meeting ID;
		 * @returns (ScriptResult<any>) - ScriptResult output object is a list(CapIDModel) of meeting agendas.
		 */
		function getMeetingAgendaItems(meetingGroupID:number, meetingID:number): ScriptResult<any>

		/**
		 * Send notification, include send by E-mail and Outlook invite.
		 * @param {MeetingNotificationModel} notificationModel (MeetingNotificationModel) - Notification's information;
		 * @param {MeetingAttendeeModel[]} attendees (MeetingAttendeeModel[]) - The notification's receivers;
		 * @param {string} actionType (string) - Include "New Meeting","Update Meeting" and "Cancel Meeting".
		 * @returns (ScriptResult<any>) - ScriptResult output object is a list of result map.
		 */
		function sendNotification(notificationModel:MeetingNotificationModel, attendees:MeetingAttendeeModel[], actionType:string): ScriptResult<any>

		/**
		 * Get meeting default notification template by meeting type for send notification.
		 * @param {number} meetingID (number) - (Long) (Long) The meeting ID;
		 * @param {number} meetingGroupID (number) - (Long) (Long) The meeting group ID;
		 * @param {string} meetingType (string) - (String) The meeting type;
		 * @param {string} language (string) - (String) The notification's language(Nullable).
		 * @returns (ScriptResult<any>) - ScriptResult output object is a default MeetingNotificationModel.
		 */
		function getMeetingNotificationModel(meetingID:number, meetingGroupID:number, meetingType:string, language:string): ScriptResult<any>

		/**
		 * Get all meetings under current CAP
		 * @param {CapIDModel} capIDModel (CapIDModel) - (CapIDModel) cap ID model.
		 * @param {boolean} isIncludeHistory (boolean) - (boolean) include history flag.
		 * @returns (ScriptResult<any>) - ScriptResult output object is a list(XAppMeetingModel) of meeting event.
		 */
		function getMeetingsByCAP(capIDModel:CapIDModel, isIncludeHistory:boolean): ScriptResult<any>

		/**
		 * Remove an agenda from a meeting.
		 * @param {number} meetingGroupID (number) - (Long) (Long) The meeting group ID;
		 * @param {number} meetingID (number) - (Long) (Long) The meeting ID;
		 * @param {CapIDModel} capIDModel (CapIDModel) - (CapIDModel) The removed capIDModel(Agenda).
		 * @returns (ScriptResult<any>) - ScriptResult output object is null.
		 */
		function removeAgendaFromMeeting(meetingGroupID:number, meetingID:number, capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Move agendas from original meeting to another meeting.
		 * @param {number} meetingGroupID (number) - (Long) (Long) The meeting group ID;
		 * @param {number} newMeetingID (number) - (Long) (Long) The target meeting ID;
		 * @param {number} originalMeetingID (number) - (Long) (Long) The original meeting ID;
		 * @param {CapIDModel[]} capIDModels (CapIDModel[]) - (List) The move capIDModel list(Agendas);
		 * @returns (ScriptResult<any>) - ScriptResult output object is a list(MeetingAttendeeModel) of deleted attendees.
		 */
		function moveAgendaToAnotherMeeting(meetingGroupID:number, newMeetingID:number, originalMeetingID:number, capIDModels:CapIDModel[]): ScriptResult<any>

		/**
		 * Create a MeetingAttendeeModel object with the basic information, such as
 service provider code, meeting primary keys and attendee contact
 information.
		 * @param {number} meetingID (number) - (Long) (Long) The meeting ID ;
		 * @param {number} meetingGroupID (number) - (Long) (Long) The meeting group ID;
		 * @param {CapIDModel} capID (CapIDModel) - (CapIDModel) The Cap ID Model ;
		 * @param {string} contactSeqNumber (string) - (String) The contact sequence number;
		 * @param {string} name (string) - (String) The attendee name;
		 * @param {string} email (string) - (String) The email.
		 * @returns (ScriptResult<any>) - ScriptResult output object is MeetingAttendeeModel.
		 */
		function createMeetingAttendeeModel(meetingID:number, meetingGroupID:number, capID:CapIDModel, contactSeqNumber:string, name:string, email:string): ScriptResult<any>

		/**
		 * Get meeting application types by meeting type.
		 * @param {string} meetingType (string) - (String) meeting type.
		 * @returns (ScriptResult<any>) - ScriptResult  output object is a list(CapTypeModel) of application type.
		 */
		function getMeetingAppType(meetingType:string): ScriptResult<any>

	}
	namespace messageService {
		/**
		 * send announcement to aca.
		 * @param {string} publicuserEmail (string)
		 * @param {string} subject (string)
		 * @param {string} content (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function sendAnnouncement(publicuserEmail:string, subject:string, content:string): ScriptResult<any>

	}
	namespace oAuthClient {
		/**
		 * Gets the configuration.
		 * @param {string} providerCode (string) - the provider code
		 * @returns (HashMap) - <java.lang.String,java.lang.String> the configuration
		 */
		function getConfiguration(providerCode:string): HashMap

		/**
		 * Inits the post parameters.
		 * @returns (HashMap) - <java.lang.String,java.lang.Object> the map< string, object>
		 */
		function initPostParameters(): HashMap

		/**
		 * Gets the.
		 * @param {string} providerCode (string) - the provider code
		 * @param {string} url (string) - the url
		 * @returns (ScriptResult<any>) - the script result
		 */
		function get(providerCode:string, url:string): ScriptResult<any>

		/**
		 * Post.
		 * @param {string} providerCode (string) - the provider code
		 * @param {string} url (string) - the url
		 * @param {HashMap} params (HashMap) - <java.lang.String,java.lang.Object> the params
		 * @returns (ScriptResult<any>) - the script result
		 */
		function post(providerCode:string, url:string, params:HashMap): ScriptResult<any>

	}
	namespace ownerCondition {
		/**
		 * Retrieve all conditions associated with the given Owner.
		 * @param {number} ownerNumber (number) - (long) owner number
		 * @returns (ScriptResult<any>) - ScriptResult Object - see documentation for this type.
		 */
		function getOwnerConditions(ownerNumber:number): ScriptResult<any>

		/**
		 * Gets the owner condition.
		 * @param {number} ownerNumber (number) - (long) the owner number
		 * @param {number} conditionNumber (number) - (long) the condition number
		 * @returns (ScriptResult<any>) - the owner condition
		 */
		function getOwnerCondition(ownerNumber:number, conditionNumber:number): ScriptResult<any>

		/**
		 * createOwnerCondition.
		 * @param {OwnerConditionScriptModel} ownerConditionScriptModel (OwnerConditionScriptModel) - OwnerConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createOwnerCondition(ownerConditionScriptModel:OwnerConditionScriptModel): ScriptResult<any>

		/**
		 * Edits the owner condition.
		 * @param {OwnerConditionScriptModel} ownerCondition (OwnerConditionScriptModel) - the owner condition
		 * @returns (ScriptResult<any>) - the script result
		 */
		function editOwnerCondition(ownerCondition:OwnerConditionScriptModel): ScriptResult<any>

		/**
		 * Removes the owner condition.
		 * @param {number} ownerNumber (number) - (long) the owner number
		 * @param {number} conditionNumber (number) - (long) the condition number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeOwnerCondition(ownerNumber:number, conditionNumber:number): ScriptResult<any>

		/**
		 * Create Owner condition from standard condition
		 * @param {string} ownerNumber (string) - Owner ID
		 * @param {string} stdConditionNnumber (string) - standard condition ID
		 * @returns (ScriptResult<any>)          *
		 */
		function createOwnerConditionFromStdCondition(ownerNumber:string, stdConditionNnumber:string): ScriptResult<any>

	}
	namespace owner {
		/**
		 * Get Owner by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getOwnerByCapId(capID:CapIDModel): ScriptResult<any>

		/**
		 * Copy CapParcel Model from source to target.
		 * @param {CapOwnerScriptModel} sourceModel (CapOwnerScriptModel) - CAP Owner model.
		 * @param {CapOwnerScriptModel} targetModel (CapOwnerScriptModel) - CAP Owner model.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyCapOwnerModel(sourceModel:CapOwnerScriptModel, targetModel:CapOwnerScriptModel): ScriptResult<any>

		/**
		 * Update OwnerDaily and APO attributes.
		 * @param {CapOwnerScriptModel} capOwner (CapOwnerScriptModel) - the cap owner
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateDailyOwnerWithAPOAttribute(capOwner:CapOwnerScriptModel): ScriptResult<any>

		/**
		 * Add an new Parcel and APO attributes.
		 * @param {CapOwnerScriptModel} capOwner (CapOwnerScriptModel) - the cap owner
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapOwnerWithAPOAttribute(capOwner:CapOwnerScriptModel): ScriptResult<any>

		/**
		 * Get a capOwnerScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapOwnerScriptModel(): ScriptResult<any>

		/**
		 * get Parcel Owners By Cap
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<any>) - the parcel owners by cap
		 */
		function getParcelOwnersByCap(capID:CapIDModel): ScriptResult<any>

		/**
		 * removeCapOwnerModel
		 * @param {CapOwnerScriptModel} capOwner (CapOwnerScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeCapOwnerModel(capOwner:CapOwnerScriptModel): ScriptResult<any>

		/**
		 * get Owners By Parcel
		 * @param {ParcelScriptModel} parcelScriptModel (ParcelScriptModel)
		 * @returns (ScriptResult<any>) - the owners by parcel
		 */
		function getOwnersByParcel(parcelScriptModel:ParcelScriptModel): ScriptResult<any>

	}
	namespace parcelCondition {
		/**
		 * Retrieve all conditions associated with the given Parcel.
		 * @param {string} parcelNumber (string) - parcel number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelConditions(parcelNumber:string): ScriptResult<any>

		/**
		 * Retrieve one parcel condition by primary key.
		 * @param {string} parcelNumber (string) - parcel number
		 * @param {number} conditionNumber (number) - (long) condition number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelCondition(parcelNumber:string, conditionNumber:number): ScriptResult<any>

		/**
		 * Retrieve condition by condition type.
		 * @param {string} parcelNumber (string) - parcel number
		 * @param {string} conditionType (string) - condition type
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelConditions(parcelNumber:string, conditionType:string): ScriptResult<any>

		/**
		 * Add one parcel condition by parcel condition primary key.
		 * @param {string} parcelNumber (string) - parcel number
		 * @param {string} conditionType (string) - condition type
		 * @param {string} conditionDescription (string) - condition description
		 * @param {string} conditionComment (string) - condition comment
		 * @param {string} refNumber1 (string) - refNumber1
		 * @param {string} refNumber2 (string) - refNumber2
		 * @param {string} impactCode (string) - impact code
		 * @param {string} conditionStatus (string) - condition status
		 * @param {ScriptDateTime} effectDate (ScriptDateTime) - the effect date
		 * @param {ScriptDateTime} expireDate (ScriptDateTime) - the expire date
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime) - the issue date
		 * @param {ScriptDateTime} statusDate (ScriptDateTime) - the status date
		 * @param {SysUserModel} issuedByUser (SysUserModel) - issued by user
		 * @param {SysUserModel} statusByUser (SysUserModel) - status by user
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addParcelCondition(parcelNumber:string, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function addParcelCondition(): ScriptResult<any>

		/**
		 * Add one parcel condition.
 (added new fields in V6.5)
		 * @param {string} parcelNumber (string)
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {string} conditionStatus (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {ScriptDateTime} statusDate (ScriptDateTime)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addParcelCondition(parcelNumber:string, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function addParcelCondition(): ScriptResult<any>

		/**
		 * Add condition group (Added in V6.6).
		 * @param {string} parcelNumber (string)
		 * @param {string} conditionType (string)
		 * @param {string} conditionDescription (string)
		 * @param {string} conditionComment (string)
		 * @param {string} refNumber1 (string)
		 * @param {string} refNumber2 (string)
		 * @param {string} impactCode (string)
		 * @param {string} conditionStatus (string)
		 * @param {ScriptDateTime} effectDate (ScriptDateTime)
		 * @param {ScriptDateTime} expireDate (ScriptDateTime)
		 * @param {ScriptDateTime} issuedDate (ScriptDateTime)
		 * @param {ScriptDateTime} statusDate (ScriptDateTime)
		 * @param {SysUserModel} issuedByUser (SysUserModel)
		 * @param {SysUserModel} statusByUser (SysUserModel)
		 * @param {string} conditionStatusType (string)
		 * @param {string} displayConditionNotice (string)
		 * @param {string} includeInConditionName (string)
		 * @param {string} includeInShortDescription (string)
		 * @param {string} inheritable (string)
		 * @param {string} longDescripton (string)
		 * @param {string} publicDisplayMessage (string)
		 * @param {string} resolutionAction (string)
		 * @param {string} conditionGroup (string)
		 * @param {string} displayNoticeOnACA (string)
		 * @param {string} displayNoticeOnACAFee (string)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addParcelCondition(parcelNumber:string, conditionType:string, conditionDescription:string, conditionComment:string, refNumber1:string, refNumber2:string, impactCode:string, conditionStatus:string, effectDate:ScriptDateTime, expireDate:ScriptDateTime, issuedDate:ScriptDateTime, statusDate:ScriptDateTime, issuedByUser:SysUserModel, statusByUser:SysUserModel, conditionStatusType:string, displayConditionNotice:string, includeInConditionName:string, includeInShortDescription:string, inheritable:string, longDescripton:string, publicDisplayMessage:string, resolutionAction:string, conditionGroup:string, displayNoticeOnACA:string, displayNoticeOnACAFee:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function addParcelCondition(): ScriptResult<any>

		/**
		 * createParcelCondition.
		 * @param {ParcelConditionScriptModel} pm (ParcelConditionScriptModel) - ParcelConditionScriptModel
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createParcelCondition(pm:ParcelConditionScriptModel): ScriptResult<any>

		/**
		 * Update one parcel condition by parcel condition primary key.
		 * @param {ParcelConditionScriptModel} parcelCondition (ParcelConditionScriptModel) - ParcelConditionScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editParcelCondition(parcelCondition:ParcelConditionScriptModel): ScriptResult<any>

		/**
		 * Delete one parcel condition by parcel condition primary key.
		 * @param {number} conditionID (number) - (long) condition id
		 * @param {string} parcelID (string) - parcel id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeParcelCondition(conditionID:number, parcelID:string): ScriptResult<any>

		/**
		 * get New ConditionScriptModel.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getNewConditionScriptModel(): ScriptResult<any>

		/**
		 * Create Parcel condition from standard condition
		 * @param {string} parcelNumber (string) - Parcel ID
		 * @param {string} stdConditionNnumber (string) - standard condition ID
		 * @returns (ScriptResult<any>)          *
		 */
		function createParcelConditionFromStdCondition(parcelNumber:string, stdConditionNnumber:string): ScriptResult<any>

	}
	namespace parcel {
		/**
		 * Add a cap parcel.
		 * @param {CapParcelModel} capParcel (CapParcelModel) - CapParcelModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapParcel(capParcel:CapParcelModel): ScriptResult<any>

		/**
		 * Add an new Parcel and APO attributes.
		 * @param {CapParcelModel} capParcel (CapParcelModel) - the cap parcel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapParcelWithAPOAttribute(capParcel:CapParcelModel): ScriptResult<any>

		/**
		 * Returns an emtpy CapParcelModel object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapParcelModel(): ScriptResult<any>

		/**
		 * Get Parcel List by Collection.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {CapTypeModel} capType (CapTypeModel) - CapTypeModel
		 * @param {PersonModel} person (PersonModel) - PersonModel
		 * @param {AddressModel} addr (AddressModel) - AddressModel
		 * @param {any[]} parcelNumbers (any[]) - the ArrayList of parcel number
		 * @param {Date} parcelRecordFromDate (Date) - the from date
		 * @param {Date} parcelRecordToDate (Date) - the to date
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @param {GISObjects} gISObject (GISObjects) - GISObjects
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelListByGisObject(capId:CapIDModel, capType:CapTypeModel, person:PersonModel, addr:AddressModel, parcelNumbers:any[], parcelRecordFromDate:Date, parcelRecordToDate:Date, qf:QueryFormat | null, gISObject:GISObjects): ScriptResult<any>

		/**
		 * Get Parcel List by Collection.
		 * @param {CapIDModel} capId (CapIDModel) - CapIDModel
		 * @param {CapTypeModel} capType (CapTypeModel) - CapTypeModel
		 * @param {PersonModel} person (PersonModel) - PersonModel
		 * @param {AddressModel} addr (AddressModel) - AddressModel
		 * @param {any[]} parcelNumbers (any[]) - the ArrayList of parcel number
		 * @param {Date} parcelRecordFromDate (Date) - the from date
		 * @param {Date} parcelRecordToDate (Date) - the to date
		 * @param {QueryFormat | null} qf (QueryFormat) - QueryFormat
		 * @param {GISObjectModel[]} gISObjects (GISObjectModel[])
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelListByCollection(capId:CapIDModel, capType:CapTypeModel, person:PersonModel, addr:AddressModel, parcelNumbers:any[], parcelRecordFromDate:Date, parcelRecordToDate:Date, qf:QueryFormat | null, gISObjects:GISObjectModel[]): ScriptResult<any>

		/**
		 * Get parcel by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelDailyByCapID(capID:CapIDModel, queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Get parcel and attributes.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<java.util.ArrayList>) - ScriptResult
		 */
		function getParcelandAttribute(capID:CapIDModel, queryFormat:QueryFormat | null | null): ScriptResult<java.util.ArrayList<ParcelModel>>
		
		/**
		 * Get parcel and attributes by cap id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelByCapId(capID:CapIDModel, queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Get ParcelList by ParcelInfoModel
		 * @param {string} parcel (string) - the parcelNumber
		 * @param {string} addressStart (string) - the address start
		 * @param {string} addressEnd (string) - the addressEnd
		 * @param {string} direction (string) - the StreetDirection
		 * @param {string} streetName (string) - the streetName
		 * @param {string} suffix (string) - the streetSuffix
		 * @param {string} unitStart (string) - the UnitStart
		 * @param {string} unitEnd (string) - the UnitEnd
		 * @param {string} city (string) - the cityName
		 * @param {string} ownerName (string) - the ownerFullName
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParceListForAdmin(parcel:string, addressStart:string, addressEnd:string, direction:string, streetName:string, suffix:string, unitStart:string, unitEnd:string, city:string, ownerName:string): ScriptResult<any>

		/**
		 * Get parcel list.
		 * @param {string} parcel (string) - the parcNbr
		 * @param {string} addressStart (string) - the address start
		 * @param {string} addressEnd (string) - the address end
		 * @param {string} direction (string) - the direction
		 * @param {string} streetName (string) - the streetName
		 * @param {string} suffix (string) - the suffix
		 * @param {string} unitStart (string) - the unitStart
		 * @param {string} unitEnd (string) - the unitEnd
		 * @param {string} city (string) - the city
		 * @param {string} ownerName (string) - the owner Name
		 * @param {string} houseNumberAlphaStart (string) - the house number Alpha Start
		 * @param {string} houseNumberAlphaEnd (string) - the house number Alpha End
		 * @param {string} levelPrefix (string) - the level Prefix
		 * @param {string} levelNumberStart (string) - the level Number Start
		 * @param {string} levelNumberEnd (string) - the level Number End
		 * @returns (ScriptResult<any>)          *
		 */
		function getParceListForAdmin(parcel:string, addressStart:string, addressEnd:string, direction:string, streetName:string, suffix:string, unitStart:string, unitEnd:string, city:string, ownerName:string, houseNumberAlphaStart:string, houseNumberAlphaEnd:string, levelPrefix:string, levelNumberStart:string, levelNumberEnd:string): ScriptResult<any>

		/**
		 * Get ParcelDistrict by RefParcelDistrictModel
		 * @param {string} parcelId (string) - RefParcelDistrictModel.parcelId
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParceDistrictForAdmin(parcelId:string): ScriptResult<any>

		/**
		 * Get ParcelDistrict by parcelDistrictModel
		 * @param {string} capId1 (string) - the capId1
		 * @param {string} capId2 (string) - the capId2
		 * @param {string} capId3 (string) - the capId3
		 * @param {string} parcelNbr (string) - the parcelId
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelDistrictForDaily(capId1:string, capId2:string, capId3:string, parcelNbr:string): ScriptResult<any>

		/**
		 * AddParcelDistrict by Collection
		 * @param {string} parcelId (string) - the parcelId
		 * @param {string} districtName (string) - the districtName
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addParceDistrictForAdmin(parcelId:string, districtName:string): ScriptResult<any>

		/**
		 * Add ParcelDistrict by Collection
		 * @param {string} capId1 (string) - the capId1
		 * @param {string} capId2 (string) - the capId2
		 * @param {string} capId3 (string) - the capId3
		 * @param {string} parcelNbr (string) - the parcelId
		 * @param {string} districtName (string) - the districtName
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addParceDistrictForDaily(capId1:string, capId2:string, capId3:string, parcelNbr:string, districtName:string): ScriptResult<any>

		/**
		 * Delete ParcelDistrictModel
		 * @param {string} capId1 (string) - the capId1
		 * @param {string} capId2 (string) - the capId2
		 * @param {string} capId3 (string) - the capId3
		 * @param {string} parcelNbr (string) - the parcelId
		 * @param {string} districtName (string) - the districtName
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteParceDistrictForDaily(capId1:string, capId2:string, capId3:string, parcelNbr:string, districtName:string): ScriptResult<any>

		/**
		 * Delete RefParcelDistrictModel
		 * @param {string} parcelId (string) - the parcelId
		 * @param {string} districtName (string) - the districtName
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteParceDistrictForAdmin(parcelId:string, districtName:string): ScriptResult<any>

		/**
		 * Get ParcelDaily by CapIdModel
		 * @param {string} capId1 (string) - the capId1
		 * @param {string} capId2 (string) - the capId2
		 * @param {string} capId3 (string) - the capId3
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getParcelDailyByCapID(capId1:string, capId2:string, capId3:string): ScriptResult<any>

		/**
		 * Update ParcelDaily and APO attributes.
		 * @param {CapParcelModel} capParcel (CapParcelModel) - CAP Parcel model.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateDailyParcelWithAPOAttribute(capParcel:CapParcelModel): ScriptResult<any>

		/**
		 * Copy CapParcel Model from source to target.
		 * @param {CapParcelModel} sourceModel (CapParcelModel) - CAP Parcel model.
		 * @param {CapParcelModel} targetModel (CapParcelModel) - CAP Parcel model.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyCapParcelModel(sourceModel:CapParcelModel, targetModel:CapParcelModel): ScriptResult<any>

		/**
		 * Warp  CapIdModel and ParcelModel to CapParcel Model
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @param {ParcelModel} parcelModel (ParcelModel) - the parcel model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function warpCapIdParcelModel2CapParcelModel(capIDModel:CapIDModel, parcelModel:ParcelModel): ScriptResult<any>

		/**
		 * Return the primary parcel of the ref address indicated by refAddressID if primary exists,
 else return the first parcel of the related parcel list.
 If there is no related parcel about the ref address, return null.
		 * @param {string} refAddressIDOrUID (string) - the ref address id or uid
		 * @param {string} primaryFlag (string) - the flag indicating the primary parcel of the specified ref address
		 * @returns (ScriptResult<any>) - the primary parcel of the ref address indicated by refAddressID
		 */
		function getPrimaryParcelByRefAddressID(refAddressIDOrUID:string, primaryFlag:string): ScriptResult<any>

		/**
		 * Get parcel genealogy.
		 * @param {string} tranType (string) - Transaction Type.
		 * @param {string} objectID (string) - Object ID.
		 * @param {Date} tranDateFrom (Date) - Transaction Date From.
		 * @param {Date} tranDateTo (Date) - Transaction Date To.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result.
		 */
		function getParcelGenealogy(tranType:string, objectID:string, tranDateFrom:Date, tranDateTo:Date): ScriptResult<any>

		/**
		 * Copy associate objects to target parcel.
		 * @param {ParcelGenealogyModel} parcelGenealogyModel (ParcelGenealogyModel) - ParcelGenealogyModel.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result.
		 */
		function copyAssociatedObjs2TargetParcel(parcelGenealogyModel:ParcelGenealogyModel): ScriptResult<any>

		/**
		 * Move associate objects to target parcel.
		 * @param {ParcelGenealogyModel} parcelGenealogyModel (ParcelGenealogyModel) - ParcelGenealogyModel.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result.
		 */
		function moveAssociatedObjs2TargetParcel(parcelGenealogyModel:ParcelGenealogyModel): ScriptResult<any>

		/**
		 * Copy associate objects from source parcel to target parcel.
		 * @param {string} srcParcelNumber (string) - source parcel number.
		 * @param {string} targetParcelNumber (string) - target parcel number.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result.
		 */
		function copyAssociatedObjs2TargetParcel(srcParcelNumber:string, targetParcelNumber:string): ScriptResult<any>

		/**
		 * Move associate objects from source parcel to target parcel
		 * @param {string} srcParcelNumber (string) - source parcel number.
		 * @param {string} targetParcelNumber (string) - target parcel number.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result.
		 */
		function moveAssociatedObjs2TargetParcel(srcParcelNumber:string, targetParcelNumber:string): ScriptResult<any>

	}
	namespace partTransaction {
		/**
		 * Build a Part Transaction PK Model.
		 * @param {number} partSeq (number) - (Long) the part seq
		 * @param {number} transactionSeq (number) - (Long) Part Transaction sequence number
		 * @returns (ScriptResult<any>) - ScriptResult include the Part Transaction PK Model
		 */
		function getPartTransactionPK(partSeq:number, transactionSeq:number): ScriptResult<any>

		/**
		 * get Part Transaction by Primary Key
		 * @param {PartTransactionPK} pt (PartTransactionPK) - Primary Keys model of Part Transaction
		 * @returns (ScriptResult<any>) - ScriptResult include the Part Transaction information
		 */
		function getPartTransactionByPK(pt:PartTransactionPK): ScriptResult<any>

		/**
		 * Update Part Transaction information
		 * @param {PartTransactionModel} pt (PartTransactionModel) - Part Transaction Model
		 * @returns (ScriptResult<any>) - ScriptResult The messages
		 */
		function updatePartTransaction(pt:PartTransactionModel): ScriptResult<any>

		/**
		 * Remove Part Transaction by Primary Key
		 * @param {PartTransactionPK} pt (PartTransactionPK) - Primary Keys model of Part Transaction
		 * @returns (ScriptResult<any>) - ScriptResult include the messages
		 */
		function removePartTransaction(pt:PartTransactionPK): ScriptResult<any>

	}
	namespace people {
		/**
		 * get an instance of PeopleModel.
		 * @returns (PeopleModel)          *
		 */
		function getPeopleModel(): PeopleModel

		/**
		 * Get People by peopleSequenceNumber.
		 * @param {number} peopleSequenceNumber (number) - (long) people sequence number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeople(peopleSequenceNumber:number): ScriptResult<any>

		/**
		 * Get People by First,Middle,Last name.
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByFMLName(firstName:string, middleName:string, lastName:string): ScriptResult<any>

		/**
		 * Get people by fullName.
		 * @param {string} fullName (string) - fullname
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByFullName(fullName:string): ScriptResult<any>

		/**
		 * Get people by businessName.
		 * @param {string} businessName (string) - business name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByBusinessName(businessName:string): ScriptResult<any>

		/**
		 * Get People by phone1.
		 * @param {string} phone1 (string) - phone number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByPhone1(phone1:string): ScriptResult<any>

		/**
		 * Get an array of People by houseNumber,streetName,streetSuffix,city,state.
		 * @param {string} houseNumber (string) - house number
		 * @param {string} streetName (string) - street name
		 * @param {string} streetSuffix (string) - street suffix
		 * @param {string} city (string) - city
		 * @param {string} state (string) - state
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByAddress(houseNumber:string, streetName:string, streetSuffix:string, city:string, state:string): ScriptResult<any>

		/**
		 * Get an array of People by compactAddress.
		 * @param {CompactAddressModel} compactAddress (CompactAddressModel) - CompactAddressModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByAddress(compactAddress:CompactAddressModel): ScriptResult<any>

		/**
		 * Add People.
		 * @param {PeopleModel} peopleModel (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPeople(peopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Edit People.
		 * @param {PeopleModel} peopleModel (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editPeople(peopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Remove People.
		 * @param {PeopleModel} peopleModel (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removePeople(peopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Remove People.
		 * @param {string} contactSeqNumber (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removePeople(contactSeqNumber:string): ScriptResult<any>

		/**
		 * Get contactType.
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use BizDomainModel, need change to
		 BizDomainScriptModel later
		 */
		function getContactType(format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get contactTypeAll.
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getContactTypeAll(format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get peopleByOthers.
		 * @param {string} contactType (string) - contact type
		 * @param {string} businessName (string) - business name
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @param {string} city (string) - city
		 * @param {string} state (string) - state
		 * @param {string} zip (string) - zip
		 * @param {string} status (string) - status
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByOthers(contactType:string, businessName:string, firstName:string, middleName:string, lastName:string, city:string, state:string, zip:string, status:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get peopleByOthersForDaily.
		 * @param {string} contactType (string) - contact type
		 * @param {string} businessName (string) - business name
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @param {string} city (string) - city
		 * @param {string} state (string) - state
		 * @param {string} zip (string) - zip
		 * @param {string} status (string) - status
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByOthersForDaily(contactType:string, businessName:string, firstName:string, middleName:string, lastName:string, city:string, state:string, zip:string, status:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Add peopleAttribute.
		 * @param {PeopleAttributeModel} peopleAttributeModel (PeopleAttributeModel) - PeopleAttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPeopleAttribute(peopleAttributeModel:PeopleAttributeModel): ScriptResult<any>

		/**
		 * Add peopleWithAttribute.
		 * @param {PeopleModel} peopleROC (PeopleModel) - PeopleModel
		 * @param {any[]} g3ContactAttributeModel (any[]) - the Collection of g3ContactAttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPeopleWithAttribute(peopleROC:PeopleModel, g3ContactAttributeModel:any[]): ScriptResult<any>

		/**
		 * Remove peopleWithAttribute.
		 * @param {PeopleModel} peopleROC (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removePeopleWithAttribute(peopleROC:PeopleModel): ScriptResult<any>

		/**
		 * Edit peopleWithAttribute.
		 * @param {PeopleModel} peopleROC (PeopleModel) - PeopleModel
		 * @param {any[]} g3ContactAttributeModel (any[]) - the collection of g3ContactAttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editPeopleWithAttribute(peopleROC:PeopleModel, g3ContactAttributeModel:any[]): ScriptResult<any>

		/**
		 * Edit peopleAttribute.
		 * @param {PeopleAttributeModel} peopleAttributeModel (PeopleAttributeModel) - PeopleAttributeModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editPeopleAttribute(peopleAttributeModel:PeopleAttributeModel): ScriptResult<any>

		/**
		 * Get peopleByPeopleModel.
		 * @param {PeopleModel} objPeopleModel (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleByPeopleModel(objPeopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Create an empty PeopleModel object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPeopleModel(): ScriptResult<any>

		/**
		 * Create an empty PeopleAttributeModel object.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createPeopleAttributeModel(): ScriptResult<any>

		/**
		 * Fetch out a PeopleModel list by .
		 * @param {PeopleModel} objPeopleModel (PeopleModel) - PeopleModel
		 * @param {string} peopleType (string) - String
		 * @param {string} recordStatus (string) - String
		 * @param {QueryFormat | null} queryFormat (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeoplesByAttrs(objPeopleModel:PeopleModel, peopleType:string, recordStatus:string, queryFormat:QueryFormat | null): ScriptResult<any>

		/**
		 * Get peopleAttributeByPeople.
		 * @param {number} peopleNumber (number) - (long) long
		 * @param {string} peopleType (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleAttributeByPeople(peopleNumber:number, peopleType:string): ScriptResult<any>

		/**
		 * Get sysUserList.
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult note use SysUserModel,need to change to
		 SysUserScriptModel later
		 */
		function getSysUserList(format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get FIDList.
		 * @param {string} user (string) - String
		 * @param {string} moduleName (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getFIDList(user:string, moduleName:string): ScriptResult<any>

		/**
		 * Get userModules.
		 * @param {string} user (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUserModules(user:string): ScriptResult<any>

		/**
		 * Get departmentList.
		 * @param {string} user (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getDepartmentList(user:string): ScriptResult<any>

		/**
		 * Get departmentBySeqID.
		 * @param {string} seqID (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getDepartmentBySeqID(seqID:string): ScriptResult<any>

		/**
		 * Get sysUserListByDepartment.
		 * @param {DepartmentModel} dept (DepartmentModel) - DepartmentModel
		 * @returns (ScriptResult<any>) - ScriptResult note use SysUserModel,need to change to
		 SysUserScriptModel later
		 */
		function getSysUserListByDepartment(dept:DepartmentModel): ScriptResult<any>

		/**
		 * Get all users by department name
		 * @param {string} deptName (string) - department name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSysUserListByDepartmentName(deptName:string): ScriptResult<any>

		/**
		 * Add a capContact.
		 * @param {CapContactModel} pCapContact (CapContactModel) - CapContactModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapContact(pCapContact:CapContactModel): ScriptResult<any>

		/**
		 * Add a capContact and APO attributes.
		 * @param {CapContactModel} pCapContact (CapContactModel) - CapContactModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapContactWithAttribute(pCapContact:CapContactModel): ScriptResult<any>

		/**
		 * Add a new CapContactWithRefPeopleModel.
		 * @param {CapIDModel} objCapID (CapIDModel) - CapIDModel
		 * @param {PeopleModel} objPeople (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapContactWithRefPeopleModel(objCapID:CapIDModel, objPeople:PeopleModel): ScriptResult<any>

		/**
		 * Get capContactByRefPeopleModel.
		 * @param {CapIDModel} objCapID (CapIDModel) - CapIDModel
		 * @param {PeopleModel} objPeople (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult note use SysUserModel,need to change to
		 SysUserScriptModel later
		 */
		function getCapContactByRefPeopleModel(objCapID:CapIDModel, objPeople:PeopleModel): ScriptResult<any>

		/**
		 * isExisted.
		 * @param {CapIDModel} objCapID (CapIDModel) - CapIDModel
		 * @param {PeopleModel} objPeople (PeopleModel) - PeopleModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isExisted(objCapID:CapIDModel, objPeople:PeopleModel): ScriptResult<any>

		/**
		 * Edit capContact.
		 * @param {CapContactModel} pCapContact (CapContactModel) - CapContactModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapContact(pCapContact:CapContactModel): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function editOtherContactsWithCurrentContact(): ScriptResult<any>

		/**
		 * Edit capContact.
		 * @param {CapContactModel} pCapContact (CapContactModel) - CapContactModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editCapContactWithAttribute(pCapContact:CapContactModel): ScriptResult<any>

		/**
		 * @param {CapContactModel} sourceModel (CapContactModel)
		 * @param {CapContactModel} targetModel (CapContactModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function copyCapContactModel(sourceModel:CapContactModel, targetModel:CapContactModel): ScriptResult<any>

		/**
		 * Remove capContact.
		 * @param {CapIDModel} pCapID (CapIDModel) - CapIDModel
		 * @param {number} pCapContactNumber (number) - (long) long
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeCapContact(pCapID:CapIDModel, pCapContactNumber:number): ScriptResult<any>

		/**
		 * Get capContactByPK.
		 * @param {CapIDModel} pCapID (CapIDModel) - CapIDModel
		 * @param {number} pCapContactNumber (number) - (long) long
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapContactByPK(pCapID:CapIDModel, pCapContactNumber:number): ScriptResult<any>

		/**
		 * Get capContactByContactID.
		 * @param {number} pCapContactNumber (number) - (long) long
		 * @returns (ScriptResult<any>) - ScriptResult note use SysUserModel,need to change to
		 SysUserScriptModel later
		 */
		function getCapContactByContactID(pCapContactNumber:number): ScriptResult<any>

		/**
		 * Get capContactByCapID.
		 * @param {CapIDModel} pCapID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult note use SysUserModel,need to change to
		 SysUserScriptModel later
		 */
		function getCapContactByCapID(pCapID:CapIDModel): ScriptResult<any>

		/**
		 * user by userId userName(firstName,middleName,lastName)
		 * @param {string} userID (string) - User ID
		 * @param {string} userFirstName (string) - User First Name
		 * @param {string} userMiddleName (string) - User Middle Name
		 * @param {string} userLastName (string) - User Last Name
		 * @returns (ScriptResult<any>) - ScriptResult   Includes SysUserModel array
		 */
		function getUsersByUserIdAndName(userID:string, userFirstName:string, userMiddleName:string, userLastName:string): ScriptResult<any>

		/**
		 * Search user group by agency
		 * @returns (ScriptResult<any>) - ScriptResult   Includes BizDomainModel array
		 */
		function getUserGroups(): ScriptResult<any>

		/**
		 * Get discipline from standchoice and not in user discipline
		 * @param {string} userID (string) - User ID
		 * @returns (ScriptResult<any>) - ScriptResult   Includes BizDomainModel array
		 */
		function getDisciplines(userID:string): ScriptResult<any>

		/**
		 * Get discipline
		 * @param {string} userID (string) - User ID
		 * @returns (ScriptResult<any>) - ScriptResult   Includes UserDisciplineModel array
		 */
		function getUserDisciplines(userID:string): ScriptResult<any>

		/**
		 * Add discipline
		 * @param {string} userID (string) - User ID
		 * @param {string} disciplineName (string) - Discipline Name
		 * @returns (ScriptResult<any>) - ScriptResult   Includes UserDisciplineModel array
		 */
		function addUserDiscipline(userID:string, disciplineName:string): ScriptResult<any>

		/**
		 * Delete discipline
		 * @param {string} userID (string) - User ID
		 * @param {string} disciplineName (string) - Discipline Name
		 * @returns (ScriptResult<any>) - ScriptResult   Includes UserDisciplineModel array
		 */
		function deleteUserDiscipline(userID:string, disciplineName:string): ScriptResult<any>

		/**
		 * Get district
		 * @param {string} userID (string) - User ID
		 * @returns (ScriptResult<any>) - ScriptResult   Includes UserDistrictModel array
		 */
		function getDistricts(userID:string): ScriptResult<any>

		/**
		 * Get district
		 * @param {string} userID (string) - User ID
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUserDistricts(userID:string): ScriptResult<any>

		/**
		 * Add district
		 * @param {string} userID (string) - User ID
		 * @param {string} districtName (string) - District Name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addUserDistrict(userID:string, districtName:string): ScriptResult<any>

		/**
		 * Delete district
		 * @param {string} userID (string) - User ID
		 * @param {string} districtName (string) - District Name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function deleteUserDistrict(userID:string, districtName:string): ScriptResult<any>

		/**
		 * Update user Workload
		 * @param {string} userID (string) - User ID
		 * @param {string} unit (string) - Workload
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateUserWorkload(userID:string, unit:string): ScriptResult<any>

		/**
		 * Method of getting System User by its ID..
		 * @param {string} userID (string) - User ID.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSysUserByID(userID:string): ScriptResult<any>

		/**
		 * Get sysuser if the userID is public user.
		 * @param {string} userName (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getPublicUserByUserName(userName:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function disableAgencyUser(): ScriptResult<any>

		/**
		 * get CapIDs By Reference PeopleModel.    Note: There's a limitation up to 3,000 records.    If there are more than 3,000 records meet your querying criteria,    the interface will not return data normally but return a null output,false flag with an error message "The results count exceed the max limit 3000."    eg. ScriptResult(false, "getCapIDsByRefContact","The results count exceed the max limit 3000.", null).   Once the error message occurs, please change your criteria in capModel to narrow your search for getting data normally.
		 * @param {PeopleScriptModel} peopleScriptModel (PeopleScriptModel) - PeopleScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCapIDsByRefContact(peopleScriptModel:PeopleScriptModel): ScriptResult<any>

		/**
		 * Gets the sys user list by discipline.
		 * @param {string} discipline (string) - the discipline
		 * @returns (ScriptResult<any>) - the sys user list by discipline
		 */
		function getSysUserListByDiscipline(discipline:string): ScriptResult<any>

		/**
		 * get auto assign reviewers for document
		 * @param {CapIDModel} capID (CapIDModel) - -- the capID of the document
		 * @param {string[]} discipline (string[]) - -- the discipline of the document
		 * @param {number} limit (number) - (int) -- the limit of the reviews, if this parameter is null, return all
		 * @param {string} matchValue (string)
		 * @returns (ScriptResult<any>) - the suitable reviewers
		 */
		function autoAssignReviewers(capID:CapIDModel, discipline:string[], limit:number, matchValue:string): ScriptResult<any>

		/**
		 * Edit contact by reference contact, will be synchronized daily contact data..
		 * @param {PeopleModel} contactModel (PeopleModel) - Contact Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Edit Count.
		 */
		function editContactByRefContact(contactModel:PeopleModel): ScriptResult<any>

		/**
		 * Edit contact by cap contact, will be synchronized daily and reference contact data.
		 * @param {CapContactModel} contactModel (CapContactModel) - Cap Contact Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Edit Count.
		 */
		function editContactByCapContact(contactModel:CapContactModel): ScriptResult<any>

		/**
		 * Edit contact by cap contacts, will be synchronized daily and reference contact data.
		 * @param {CapContactModel[]} contactList (CapContactModel[]) - Cap Contact Model List.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Edit Count.
		 */
		function editContactByCapContacts(contactList:CapContactModel[]): ScriptResult<any>

		/**
		 * New contact by cap contact, will be synchronized daily and reference contact data.
		 * @param {CapContactModel} contactModel (CapContactModel) - Cap Contact Model.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Edit Count.
		 */
		function newContactByCapContact(contactModel:CapContactModel): ScriptResult<any>

		/**
		 * New contact by cap contacts, will be synchronized daily and reference contact data.
		 * @param {CapContactModel[]} contactList (CapContactModel[]) - Cap Contact Model List.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result, Edit Count.
		 */
		function newContactByCapContacts(contactList:CapContactModel[]): ScriptResult<any>

		/**
		 * Send email after create contact.
		 * @param {string} from (string) - the from
		 * @param {string} to (string) - the to
		 * @param {string} cc (string) - the cc
		 * @param {string} templateName (string) - the template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> the content variables
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendEmailAfterCreateContact(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable): ScriptResult<any>

		/**
		 * Send email after approve contact.
		 * @param {string} from (string) - the from
		 * @param {string} to (string) - the to
		 * @param {string} cc (string) - the cc
		 * @param {string} templateName (string) - the template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> the content variables
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendEmailAfterApproveContact(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable): ScriptResult<any>

		/**
		 * Send email after reject contact.
		 * @param {string} from (string) - the from
		 * @param {string} to (string) - the to
		 * @param {string} cc (string) - the cc
		 * @param {string} templateName (string) - the template name
		 * @param {Hashtable} contentVariables (Hashtable) - <java.lang.String,java.lang.String> the content variables
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendEmailAfterRejectContact(from:string, to:string, cc:string, templateName:string, contentVariables:Hashtable): ScriptResult<any>

		/**
		 * Upadate reference contact relationship.
		 * @param {string} contactEntityID (string)
		 * @param {string} entityID3 (string)
		 * @param {string} entityID4 (string)
		 * @param {Date} startDate (Date)
		 * @param {Date} endDate (Date)
		 * @param {string} status (string)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateRefContactRelationship(contactEntityID:string, entityID3:string, entityID4:string, startDate:Date, endDate:Date, status:string): ScriptResult<any>

		/**
		 * Create reference contact relationship.
		 * @param {XRefContactEntityModel[]} xRefContactEntityList (XRefContactEntityModel[]) - List
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createRefContactRelationship(xRefContactEntityList:XRefContactEntityModel[]): ScriptResult<any>

		/**
		 * Get the XRefContactEntityModel.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function getXRefContactEntityModel(): ScriptResult<any>

		/**
		 * Update Cap contact sync Flag.
		 * @param {CapContactModel} capContact (CapContactModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateCapContactSyncFlag(capContact:CapContactModel): ScriptResult<any>

		/**
		 * Sync cap contact from reference contact.
		 * @param {CapContactModel} capContact (CapContactModel)
		 * @param {PeopleModel} peopleModel (PeopleModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function syncCapContactFromReference(capContact:CapContactModel, peopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Sync cap contact to reference contact.
		 * @param {CapContactModel} capContact (CapContactModel)
		 * @param {PeopleModel} peopleModel (PeopleModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function syncCapContactToReference(capContact:CapContactModel, peopleModel:PeopleModel): ScriptResult<any>

		/**
		 * Create system login user, Do not support external users
 And do not support verify password
		 * @param {SysUserModel} user (SysUserModel)
		 * @param {string[]} userGroupNmaes (string[])
		 * @param {string} deptID (string)
		 * @param {boolean} isDummyUser (boolean)
		 * @param {boolean} accessToAGIS (boolean)
		 * @param {boolean} accessToAMO (boolean)
		 * @param {boolean} accessToAW (boolean)
		 * @returns (ScriptResult<any>)          *
		 */
		function createSystemUser(user:SysUserModel, userGroupNmaes:string[], deptID:string, isDummyUser:boolean, accessToAGIS:boolean, accessToAMO:boolean, accessToAW:boolean): ScriptResult<any>

		/**
		 * @returns (SysUserModel)          *
		 */
		function getSysUserModel(): SysUserModel

		/**
		 * @param {SysUserModel} user (SysUserModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateUserPrifle(user:SysUserModel): ScriptResult<any>

		/**
		 * Gets the user associated contact.
		 * @param {string} publicUserSeqNum (string) - the user sequence number
		 * @returns (ScriptResult<any>) - the user associated contact
		 */
		function getUserAssociatedContact(publicUserSeqNum:string): ScriptResult<any>

	}
	namespace person {
		/**
		 * Get user.
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @param {string} userID (string) - the user id
		 * @param {string} agencyCode (string) - agency code
		 * @param {string} bureauCode (string) - bureau code
		 * @param {string} divisionCode (string) - division code
		 * @param {string} sectionCode (string) - section code
		 * @param {string} groupCode (string) - group code
		 * @param {string} officeCode (string) - office code
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUser(firstName:string, middleName:string, lastName:string, userID:string, agencyCode:string, bureauCode:string, divisionCode:string, sectionCode:string, groupCode:string, officeCode:string): ScriptResult<any>

		/**
		 * Get user by userid add getUser method 02/26/02 CherryYang.
		 * @param {string} userID (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUser(userID:string): ScriptResult<any>

		/**
		 * Get user by first, middle, last name.
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUser(firstName:string, middleName:string, lastName:string): ScriptResult<any>

		/**
		 * Get user.
		 * @param {string} firstName (string) - first name
		 * @param {string} middleName (string) - middle name
		 * @param {string} lastName (string) - last name
		 * @param {string} title (string) - title
		 * @param {string} userID (string) - the user id
		 * @param {string} agencyCode (string) - agency code
		 * @param {string} bureauCode (string) - bureau code
		 * @param {string} divisionCode (string) - division code
		 * @param {string} sectionCode (string) - section code
		 * @param {string} groupCode (string) - group code
		 * @param {string} officeCode (string) - office code
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUser(firstName:string, middleName:string, lastName:string, title:string, userID:string, agencyCode:string, bureauCode:string, divisionCode:string, sectionCode:string, groupCode:string, officeCode:string): ScriptResult<any>

		/**
		 * Get user by current userid (auditID).
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getCurrentUser(): ScriptResult<any>

	}
	namespace proxyInvoker {
		/**
		 * New a class instance which default constructor method.
		 * @param {string} className (string) - the class name
		 * @returns (ScriptResult<any>) - the script result
		 */
		function newInstance(className:string): ScriptResult<any>

		/**
		 * New a class instance with a customized constructor method.
		 * @param {string} className (string) - the class name
		 * @param {object[]} arglist (object[]) - - The argment list. The argument type can't be Number type, except Double. Since EMSE will auto
 translate all number type data to Doulbe type. Else you will meet a NoSuchMethodException exception.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function newInstance(className:string, arglist:object[]): ScriptResult<any>

		/**
		 * New a class instance with a customized construction method We can provide a parameter types array to avoid
 meeting NoSuchMethodException exception.
		 * @param {string} className (string) - the class name
		 * @param {string[]} argTypes (string[]) - - parameter types array
		 * @param {object[]} arglist (object[]) - the arglist
		 * @returns (ScriptResult<any>) - the script result
		 */
		function newInstance(className:string, argTypes:string[], arglist:object[]): ScriptResult<any>

		/**
		 * Invoke a class method by class name and method name.
		 * @param {string} className (string) - the class name
		 * @param {string} methodName (string) - the method name
		 * @param {object[]} arglist (object[]) - the arglist
		 * @returns (ScriptResult<any>) - the script result
		 */
		function invoke(className:string, methodName:string, arglist:object[]): ScriptResult<any>

		/**
		 * Invoke a class method by class instance and method name.
		 * @param {object} classInstance (object) - the class instance
		 * @param {string} methodName (string) - the method name
		 * @param {object[]} arglist (object[]) - the arglist
		 * @returns (ScriptResult<any>) - the script result
		 */
		function invoke(classInstance:object, methodName:string, arglist:object[]): ScriptResult<any>

		/**
		 * Invoke a class method by class instance, method name and argument types.
		 * @param {object} classInstance (object) - the class instance
		 * @param {string} methodName (string) - the method name
		 * @param {string[]} argTypes (string[]) - the arg types
		 * @param {object[]} arglist (object[]) - the arglist
		 * @returns (ScriptResult<any>) - the script result
		 */
		function invoke(classInstance:object, methodName:string, argTypes:string[], arglist:object[]): ScriptResult<any>

	}
	namespace publicUser {
		/**
		 * get an instance of PublicUserModel
		 * @returns (PublicUserModel) - PublicUserModel
		 */
		function getPublicUserModel(): PublicUserModel

		/**
		 * get an instance of DepartmentModel
		 * @returns (DepartmentModel) - DepartmentModel
		 */
		function getDepartmentModel(): DepartmentModel

		/**
		 * get an instance of LicenseModel
		 * @returns (LicenseModel) - LicenseModel
		 */
		function getLicenseModel(): LicenseModel

		/**
		 * Get an next UUID for new public user.
		 * @returns (String) - UUID.
		 */
		function getNewPublicUserUUID(): String

		/**
		 * return an user discipline model.
		 * @returns (ScriptResult<any>)          *
		 */
		function getUserModel(): ScriptResult<any>

		/**
		 * return an user model.
		 * @returns (ScriptResult<any>)          *
		 */
		function getUserDisciplineModel(): ScriptResult<any>

		/**
		 * Return a UserDistricModel instance.
		 * @returns (ScriptResult<any>)          *
		 */
		function getUserDistrictModel(): ScriptResult<any>

		/**
		 * create the publicUser.
		 * @param {PublicUserModel} publicUser (PublicUserModel)
		 * @returns (ScriptResult<any>) - senquence number of the new Record
		 */
		function createPublicUser(publicUser:PublicUserModel): ScriptResult<any>

		/**
		 * Creates a public user with agency user and issues associated licenses.
		 * @param {PublicUserModel} publicUser (PublicUserModel) - public user model
		 * @param {LicenseModel[]} licenseModels (LicenseModel[]) - associated license models
		 * @returns (ScriptResult<any>) - senquence number of the new Record
		 */
		function createPublicUser(publicUser:PublicUserModel, licenseModels:LicenseModel[]): ScriptResult<any>

		/**
		 * edit the appropriate publicUser.
		 * @param {PublicUserModel} publicUser (PublicUserModel)
		 * @returns (ScriptResult<any>) - void
		 */
		function editPublicUser(publicUser:PublicUserModel): ScriptResult<any>

		/**
		 * reset password for a public User.
		 * @param {string} userID (string)
		 * @returns (ScriptResult<any>) - the reset password (the new password)
		 */
		function resetPassword(userID:string): ScriptResult<any>

		/**
		 * check if a public user id exists in teh table PUBLICUSER.
		 * @param {string} userID (string)
		 * @returns (ScriptResult<any>) - the senquence number of the found user
		 */
		function isExistingUser(userID:string): ScriptResult<any>

		/**
		 * Check whether an Email id of public user exists in the table PUBLICUSER.
		 * @param {string} userEmail (string) - Register User Email.
		 * @returns (ScriptResult<any>) - the sequence number of the found user
		 */
		function isExistingEmailID(userEmail:string): ScriptResult<any>

		/**
		 * get a publicUser record.
		 * @param {number} userSeqNum (number) - (Long) 
		 * @returns (ScriptResult<any>) - PublicUserModel
		 */
		function getPublicUser(userSeqNum:number): ScriptResult<any>

		/**
		 * Get organization owner with organization model, .
		 * @param {DepartmentModel} organization (DepartmentModel)
		 * @returns (ScriptResult<any>) - PublicUserModel
		 */
		function getOrganizatonOwner(organization:DepartmentModel): ScriptResult<any>

		/**
		 * Insert a record into XPUBLICUSER_SERVPROV table.
		 * @param {PublicUserModel} publicUser (PublicUserModel)
		 * @returns (ScriptResult<any>) - void
		 */
		function createPublicUserForAgency(publicUser:PublicUserModel): ScriptResult<any>

		/**
		 * Find the agency id for the public user signon.
		 * @param {string} userId (string)
		 * @param {string} password (string)
		 * @returns (ScriptResult<any>) - a collection of user senquence number which match the userId+password
		 */
		function signon(userId:string, password:string): ScriptResult<any>

		/**
		 * Search public user by search keys.
		 * @param {PublicUserModel} puser (PublicUserModel) - The PublicUser model which contains search keys.
		 * @param {PeopleModel} peopleModel (PeopleModel) - The People model which contains search keys.
		 * @param {boolean} searchAllAgencies (boolean) - Whether the public users in all Agencies.
		 * @returns (ScriptResult<any>) - The public user collection searched by keys.
		 */
		function getPublicUserBySearchKeys(puser:PublicUserModel, peopleModel:PeopleModel, searchAllAgencies:boolean): ScriptResult<any>

		/**
		 * Disable public user account in the Agency, public user could not log into the Agency once his account is disabled
 in the Agency.
		 * @param {PublicUserModel} puser (PublicUserModel) - The public user to be disabled in the Agency.
		 * @param {boolean} disableAllAgencyAccounts (boolean) - Whether disable all Agency accounts.
		 * @returns (ScriptResult<any>) - void
		 */
		function disablePublicUserAccount(puser:PublicUserModel, disableAllAgencyAccounts:boolean): ScriptResult<any>

		/**
		 * Check whether public user account in the Agency is valid.
		 * @param {PublicUserModel} puser (PublicUserModel) - The public user to be checked.
		 * @returns (ScriptResult<any>) - Returns true if the user's STATUS is "A", returns false if STATUS is "I".
		 */
		function checkPublicUserAccountInAgency(puser:PublicUserModel): ScriptResult<any>

		/**
		 * For the aspect of privacy, public user can remove his profile from the Agency.
		 * @param {PublicUserModel} puser (PublicUserModel) - The public user whose profile will be removed.
		 * @returns (ScriptResult<any>) - void
		 */
		function removePublicUserInfoFromAgency(puser:PublicUserModel): ScriptResult<any>

		/**
		 * Update public user information when his email address is changed. The update will includes in G3STAFFS and CAP 's
 Contact tables.
		 * @param {PublicUserModel} puser (PublicUserModel) - The public user model to be updated.
		 * @param {string} oldEmail (string) - Public user's old email address.
		 * @returns (ScriptResult<any>) - void
		 */
		function updateEmail4PublicUser(puser:PublicUserModel, oldEmail:string): ScriptResult<any>

		/**
		 * Check if there is a record in XPUBLICUSER_SERVPROV table already.
		 * @param {number} userSeqNum (number) - (Long) 
		 * @returns (ScriptResult<any>) - return true if the userSeqNum is registerrd, otherwise return false.
		 */
		function isRegisterred(userSeqNum:number): ScriptResult<any>

		/**
		 * It to send activate Email for ACA.
		 * @param {PublicUserModel} publicUserModel (PublicUserModel)
		 * @param {boolean} isAgencyUser (boolean)
		 * @param {boolean} isActivated (boolean)
		 * @returns (ScriptResult<any>) - void
		 */
		function sendActivateEmail(publicUserModel:PublicUserModel, isAgencyUser:boolean, isActivated:boolean): ScriptResult<any>

		/**
		 * This email send to citizen user when register a new account and the email option turn on.  And citizen user can activate his account by the hyperlink within the email.
		 * @param {PublicUserModel} publicUserModel (PublicUserModel) - Public User Model.
		 * @returns (ScriptResult<any>) - ScriptResult model.
		 */
		function sendHyperlinkActivateEmail(publicUserModel:PublicUserModel): ScriptResult<any>

		/**
		 * Gets a publicUser model by email address.
		 * @param {string} email (string) - email address
		 * @returns (ScriptResult<any>) - Public User Model
		 */
		function getPublicUserByEmail(email:string): ScriptResult<any>

		/**
		 * Gets a publicUser model by user ID.
		 * @param {string} userId (string) - user ID
		 * @returns (ScriptResult<any>) - Public User Model
		 */
		function getPublicUserByUserId(userId:string): ScriptResult<any>

		/**
		 * Sends new password Email for ACA.
		 * @param {PublicUserModel} publicUserModel (PublicUserModel) - the public user model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendPasswordEmail(publicUserModel:PublicUserModel): ScriptResult<any>

		/**
		 * getPublicUserByPUser.
		 * @param {string} puserUserName (string) - the puser user name
		 * @returns (ScriptResult<any>) - PublicUserModel
		 */
		function getPublicUserByPUser(puserUserName:string): ScriptResult<any>

		/**
		 * According to PURGE_EXPIRED_ACCOUNT_INTERVAL in ACA_CONFIGS standard choice, to purge all expired inactive
 accounts.
		 * @returns (ScriptResult<any>) - ScriptResult true/false
		 */
		function purgExpiredInactiveAccount(): ScriptResult<any>

		/**
		 * Search public user by License SeqNB.
		 * @param {number} licenseNBR (number) - (Long) the license nbr
		 * @returns (ScriptResult<any>) - the public user list by license seq nbr
		 */
		function getPublicUserListByLicenseSeqNBR(licenseNBR:number): ScriptResult<any>

		/**
		 * Search public user by contact number.
		 * @param {number} contactNBR (number) - (Long) Contact Number.
		 * @returns (ScriptResult<any>) - ScriptResult Object.
		 */
		function getPublicUserListByContactNBR(contactNBR:number): ScriptResult<any>

		/**
		 * Search public user by owner number.
		 * @param {string} ownerNBR (string) - Owner Number.
		 * @returns (ScriptResult<any>) - ScriptResult Object.
		 */
		function getPublicUserListByOwnerNBR(ownerNBR:string): ScriptResult<any>

		/**
		 * Gets the delegate user by user sequence number.
		 * @param {number} userSeqNbr (number) - (Long) the user sequence number
		 * @returns (ScriptResult<any>) - the delegate user by user id
		 */
		function getDelegateUserByUserSeqNbr(userSeqNbr:number): ScriptResult<any>

		/**
		 * Gets the initial user by user sequence number.
		 * @param {number} userSeqNbr (number) - (Long) the user sequence number
		 * @returns (ScriptResult<any>) - the initial user by user sequence number
		 */
		function getInitialUserByUserSeqNbr(userSeqNbr:number): ScriptResult<any>

		/**
		 * Activate User's Account by hyperlink within Account Verification Email.
		 * @param {string} uuid (string) - Universally Unique Identifier for public user verification.
		 * @returns (ScriptResult<any>) - ScriptResult    Object.
		 */
		function activatePublicUser(uuid:string): ScriptResult<any>

		/**
		 * update public user AA. TODO.
		 * @param {UserModel} userModel (UserModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updatePublicUserAAAccount(userModel:UserModel): ScriptResult<any>

		/**
		 * Associate discipline with public user AA. TODO.
		 * @param {UserDisciplineModel} udm (UserDisciplineModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function addPublicUserAAAccountDiscipline(udm:UserDisciplineModel): ScriptResult<any>

		/**
		 * get public user model from DB. TODO.
		 * @param {UserModel} userModel (UserModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getPublicUserAAAccount(userModel:UserModel): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function deletePublicUserAAAccountDiscipline(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getPublicUserAAAccountDisciplines(): ScriptResult<any>

		/**
		 * Create a district to a user.
		 * @param {UserDistrictModel} udm (UserDistrictModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function createPublicUserDistrict(udm:UserDistrictModel): ScriptResult<any>

		/**
		 * Delete a district from a user.
		 * @param {UserDistrictModel} udm (UserDistrictModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function deletePublicUserDistrict(udm:UserDistrictModel): ScriptResult<any>

		/**
		 * Query a district from a user.
		 * @param {UserDistrictModel} udm (UserDistrictModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getPublicUserDistrict(udm:UserDistrictModel): ScriptResult<any>

		/**
		 * Encrypt password.
		 * @param {string} inputPassword (string) - the input password
		 * @returns (ScriptResult<any>) - the script result
		 */
		function encryptPassword(inputPassword:string): ScriptResult<any>

		/**
		 * Search x public user sso.
		 * @param {number} userSeqNum (number) - (Long) 
		 * @returns (ScriptResult<any>) - the script result
		 */
		function getXPublicUserSSO(userSeqNum:number): ScriptResult<any>

		/**
		 * Creates the x public user sso.
		 * @param {XPublicUserSSOModel} model (XPublicUserSSOModel) - the model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function syncXPublicUserSSO(model:XPublicUserSSOModel): ScriptResult<any>

	}
	namespace ratingFormula {
		/**
		 * @returns (String)          *
		 */
		function getCallerID(): String

		/**
		 * @param {string} auditID (string)
		 * @returns (void)          *
		 */
		function setCallerID(auditID:string): void

		/**
		 * Get serviceProviderCode
		 * @returns (String) - the agency code
		 */
		function getServiceProviderCode(): String

		/**
		 * @param {string} serviceProviderCode (string)
		 * @returns (void)          *
		 */
		function setServiceProviderCode(serviceProviderCode:string): void

		/**
		 * @returns (String)          *
		 */
		function getScriptText(): String

		/**
		 * @param {string} scriptText (string)
		 * @returns (void)          *
		 */
		function setScriptText(scriptText:string): void

		/**
		 * @returns (HashMap) - <java.lang.String,com.accela.ams.rating.RatingFormulaFieldModel> 
		 */
		function getInputParams(): HashMap

		/**
		 * @param {HashMap} inputParams (HashMap) - <java.lang.String,com.accela.ams.rating.RatingFormulaFieldModel> 
		 * @returns (void)          *
		 */
		function setInputParams(inputParams:HashMap): void

		/**
		 * Get expession field by variableKey.
		 * @param {string} variableKey (string) - the variable key
		 * @returns (RatingFormulaFieldModel) - the value
		 */
		function getValue(variableKey:string): RatingFormulaFieldModel

		/**
		 * @param {string} key (string)
		 * @param {RatingFormulaFieldModel} value (RatingFormulaFieldModel)
		 * @returns (void)          *
		 */
		function setValue(key:string, value:RatingFormulaFieldModel): void

		/**
		 * Set the portlet field into the 1st record of return list.
		 * @param {number} ratingValue (number) - (Double) 
		 * @returns (void)          *
		 */
		function setReturnRating(ratingValue:number): void

		/**
		 * Set the portlet field into the 1st record of return list.
		 * @returns (number) - (Double) the return rating
		 */
		function getReturnRating(): number

		/**
		 * Create a new lookup table query parameter.
		 * @returns (any[]) - the list
		 */
		function createParamList(): any[]

		/**
		 * Execute runExpression() function.
		 * @param {string} sqlStr (string) - the sql str
		 * @param {string[]} sqlParams (string[]) - the sql params
		 * @returns (number) - (Double) the double
		 */
		function runExpression(sqlStr:string, sqlParams:string[]): number

		/**
		 * addDate(Date date, int day ) Add or subtract date for some days.
		 * @param {string} startDate (string) - - the data to be added. Date formate MM/DD/YYYY, for example 04/29/2008
		 * @param {number} addDays (number) - (long) the add days
		 * @returns (String) - the string
		 */
		function addDate(startDate:string, addDays:number): String

		/**
		 * Calculate how many days data1 before data2
		 * @param {string} startDate (string) - - Date formate MM/DD/YYYY, for example: 04/29/2008
		 * @param {string} endDate (string) - - Date formate MM/DD/YYYY, for example: 04/29/2008
		 * @returns (number) - (long) date1 - date2
		 */
		function diffDate(startDate:string, endDate:string): number

		/**
		 * Parser date string into java.util.Date
		 * @param {string} dateString (string) - the date string
		 * @returns (Date) - the date
		 */
		function parseDate(dateString:string): Date

		/**
		 * Add other date patterns into DATE_PATTERNS
		 * @param {string[]} patterns (string[])
		 * @returns (void)          *
		 */
		function addDatePatterns(patterns:string[]): void

	}
	namespace reconciliationScript {
		/**
		 * Generate transaction file.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function generateApprovedTransactionFile(): ScriptResult<any>

		/**
		 * Generate transaction file.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function generateFailedTransactionFile(): ScriptResult<any>

		/**
		 * Upload Transaction File.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function uploadTransactionFile(): ScriptResult<any>

		/**
		 * Recover Transaction File.
		 * @param {string} transFileName (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function recoverTransactionFile(transFileName:string): ScriptResult<any>

		/**
		 * Insert or update upload status log.
		 * @param {string} uploadFileName (string) - String
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateUploadStatusLog(uploadFileName:string): ScriptResult<any>

		/**
		 * send mail with attached files to adminstrator.
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendMail(): ScriptResult<any>

		/**
		 * replace parameter for Email.
		 * @param {string} contentType (string) - the content type
		 * @param {Hashtable} parameters (Hashtable) - the parameters
		 * @returns (String) - the custom content by type
		 */
		function getCustomContentByType(contentType:string, parameters:Hashtable): String

		/**
		 * @param {string[]} fileFieldNames (string[])
		 * @returns (void)          *
		 */
		function setSuccessFileFieldNames(fileFieldNames:string[]): void

		/**
		 * @param {string[]} fileFieldTitles (string[])
		 * @returns (void)          *
		 */
		function setSuccessFileFieldTitles(fileFieldTitles:string[]): void

		/**
		 * @param {string[]} fileFieldValues (string[])
		 * @returns (void)          *
		 */
		function setSuccessFileFieldValues(fileFieldValues:string[]): void

		/**
		 * @param {string[]} fileFieldNames (string[])
		 * @returns (void)          *
		 */
		function setFailedFileFieldNames(fileFieldNames:string[]): void

		/**
		 * @param {string[]} fileFieldTitles (string[])
		 * @returns (void)          *
		 */
		function setFailedFileFieldTitles(fileFieldTitles:string[]): void

		/**
		 * @param {string[]} fileFieldValues (string[])
		 * @returns (void)          *
		 */
		function setFailedFileFieldValues(fileFieldValues:string[]): void

		/**
		 * @param {string} provider (string)
		 * @returns (void)          *
		 */
		function setProvider(provider:string): void

		/**
		 * @param {string} fileNamePrefix (string)
		 * @returns (void)          *
		 */
		function setFileNamePrefix(fileNamePrefix:string): void

		/**
		 * @param {string} dateString (string)
		 * @returns (void)          *
		 */
		function setTransEndDate(dateString:string): void

		/**
		 * @param {string} dateString (string)
		 * @returns (void)          *
		 */
		function setTransStartDate(dateString:string): void

		/**
		 * @param {string} ftpFolder (string)
		 * @returns (void)          *
		 */
		function setFtpFolder(ftpFolder:string): void

		/**
		 * @param {string} ftpPassword (string)
		 * @returns (void)          *
		 */
		function setFtpPassword(ftpPassword:string): void

		/**
		 * @param {string} ftpPort (string)
		 * @returns (void)          *
		 */
		function setFtpPort(ftpPort:string): void

		/**
		 * @param {string} ftpSite (string)
		 * @returns (void)          *
		 */
		function setFtpSite(ftpSite:string): void

		/**
		 * @param {string} ftpUserName (string)
		 * @returns (void)          *
		 */
		function setFtpUserName(ftpUserName:string): void

		/**
		 * @param {boolean} isUploadToFTP (boolean)
		 * @returns (void)          *
		 */
		function setUploadToFTP(isUploadToFTP:boolean): void

		/**
		 * @param {string} localDiskFolder (string)
		 * @returns (void)          *
		 */
		function setLocalDiskFolder(localDiskFolder:string): void

		/**
		 * @param {string} ccMailAddress (string)
		 * @returns (void)          *
		 */
		function setCcMailAddress(ccMailAddress:string): void

		/**
		 * @param {string} content (string)
		 * @returns (void)          *
		 */
		function setContent(content:string): void

		/**
		 * @param {string} fromMailAddress (string)
		 * @returns (void)          *
		 */
		function setFromMailAddress(fromMailAddress:string): void

		/**
		 * @param {string} subject (string)
		 * @returns (void)          *
		 */
		function setSubject(subject:string): void

		/**
		 * @param {string} toMailAddress (string)
		 * @returns (void)          *
		 */
		function setToMailAddress(toMailAddress:string): void

		/**
		 * @param {string} password (string)
		 * @returns (void)          *
		 */
		function setWSPassword(password:string): void

		/**
		 * @param {string} userName (string)
		 * @returns (void)          *
		 */
		function setWSUserName(userName:string): void

		/**
		 * @param {number} dateStoreId (number) - (int) 
		 * @returns (void)          *
		 */
		function setWSDateStoreId(dateStoreId:number): void

		/**
		 * @param {number} projectId (number) - (int) 
		 * @returns (void)          *
		 */
		function setWSProjectId(projectId:number): void

		/**
		 * Method setWSEndPoint
		 * @param {string} endPoint (string)
		 * @returns (void)          *
		 */
		function setWSEndPoint(endPoint:string): void

		/**
		 * Get serviceProviderCode
		 * @returns (String) - the serviceProviderCode
		 */
		function getServiceProviderCode(): String

		/**
		 * @returns (Date) - the transEndDate
		 */
		function getTransEndDate(): Date

		/**
		 * @returns (Date) - the transStartDate
		 */
		function getTransStartDate(): Date

		/**
		 * Method setTestMode
		 * @param {boolean} isTestMode (boolean)
		 * @returns (void)          *
		 */
		function setTestMode(isTestMode:boolean): void

		/**
		 * Method getJobDate
		 * @returns (String) - String
		 */
		function getCurrentDate(): String

		/**
		 * Method setMessageResources
		 * @param {HashMap} resources (HashMap)
		 * @returns (void)          *
		 */
		function setMessageResources(resources:HashMap): void

	}
	namespace reportManager {
		/**
		 * Check if the user has the permission on the report.
		 * @param {string} reportName (string) - the report name
		 * @param {string} userID (string) - the user id
		 * @returns (ScriptResult<any>) - ScriptResult: true or false
		 */
		function hasPermission(reportName:string, userID:string): ScriptResult<any>

		/**
		 * Get the report model by report name.
		 * @param {string} reportName (string) - the report name
		 * @returns (ScriptResult<any>) - ScriptResult: ReportScriptModel
		 */
		function getReportModelByName(reportName:string): ScriptResult<any>

		/**
		 * Get the report model by report name.
		 * @param {string} reportName (string) - the report name
		 * @returns (ScriptResult<any>) - ScriptResult: ReportScriptModel
		 */
		function getReportInfoModelByName(reportName:string): ScriptResult<any>

		/**
		 * Constuct the Report URI String that used to open a report window.
		 * @param {HashMap} paremters (HashMap) - A HashMap that used to run the report.
		 * @param {ReportScriptModel} reportScriptModel (ReportScriptModel) - the report script model
		 * @returns (ScriptResult<any>) - ScriptResult: Report URI
		 */
		function runReport(paremters:HashMap, reportScriptModel:ReportScriptModel): ScriptResult<any>

		/**
		 * Gets the report script model.
		 * @param {ReportDetailModel} reportDetailModel (ReportDetailModel) - the report detail model
		 * @returns (ScriptResult<any>) - the report script model
		 */
		function getReportScriptModel(reportDetailModel:ReportDetailModel): ScriptResult<any>

		/**
		 * Gets the report detail model.
		 * @returns (ScriptResult<any>) - the report detail model
		 */
		function getReportDetailModel(): ScriptResult<any>

		/**
		 * get the report result.
		 * @param {ReportInfoScriptModel} reportInfoModel (ReportInfoScriptModel) - the report info model
		 * @returns (ScriptResult<any>) - the report result
		 */
		function getReportResult(reportInfoModel:ReportInfoScriptModel): ScriptResult<any>

		/**
		 * get the report result.
		 * @param {ReportInfoScriptModel} reportInfoModel (ReportInfoScriptModel) - the report info model
		 * @param {ReportResultScriptModel} reportResult (ReportResultScriptModel) - the report result
		 * @returns (ScriptResult<any>) - the script result
		 */
		function sendReportInEmail(reportInfoModel:ReportInfoScriptModel, reportResult:ReportResultScriptModel): ScriptResult<any>

		/**
		 * store report to disk.
		 * @param {ReportResultScriptModel} reportResult (ReportResultScriptModel) - the report result
		 * @returns (ScriptResult<any>) - the script result
		 */
		function storeReportToDisk(reportResult:ReportResultScriptModel): ScriptResult<any>

	}
	namespace serviceProvider {
		/**
		 * Get special handle.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSpecialHandle(): ScriptResult<any>

	}
	namespace set {
		/**
		 * Add a set.
		 * @param {string} setCode (string) - the set code
		 * @param {string} setName (string) - the set name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createSet(setCode:string, setName:string): ScriptResult<any>

		/**
		 * create a set for a specified type.
		 * @param {string} setCode (string)
		 * @param {string} setName (string)
		 * @param {string} setType (string)
		 * @param {string} setComment (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function createSet(setCode:string, setName:string, setType:string, setComment:string): ScriptResult<any>

		/**
		 * @param {string} setCode (string)
		 * @param {string} setName (string)
		 * @param {string} setComment (string)
		 * @param {string} randomType (string)
		 * @param {number} randomNumber (number) - (double) 
		 * @returns (ScriptResult<any>)          *
		 */
		function createSet4RandomAudit(setCode:string, setName:string, setComment:string, randomType:string, randomNumber:number): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function createSet4RandomAudit(): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function getNewRandomAuditRuleModel(): ScriptResult<any>

		/**
		 * Add method.
		 * @param {string} setCode (string) - the set code
		 * @param {CapIDModel} capID (CapIDModel) - an object of CapIDModel
		 * @returns (ScriptResult<any>) - the script result
		 */
		function add(setCode:string, capID:CapIDModel): ScriptResult<any>

		/**
		 * Add method.
		 * @param {string} setCode (string) - the set code
		 * @param {string} entType (string) - the entType
		 * @param {CapIDModel} capID (CapIDModel) - an object of CapIDModel
		 * @param {string} entID (string) - the entID
		 * @returns (ScriptResult<any>) - the script result
		 */
		function add(setCode:string, entType:string, capID:CapIDModel, entID:string): ScriptResult<any>

		/**
		 * Get set by primary key set code.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getSetByPK(setCode:string): ScriptResult<any>

		/**
		 * Gets the cAP set members by pk.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - the cAP set members by pk
		 */
		function getCAPSetMembersByPK(setCode:string): ScriptResult<any>

		/**
		 * Gets the parcel set members by pk.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - the parcel set members by pk
		 */
		function getParcelSetMembersByPK(setCode:string): ScriptResult<any>

		/**
		 * Gets the address set members by pk.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - the address set members by pk
		 */
		function getAddressSetMembersByPK(setCode:string): ScriptResult<any>

		/**
		 * Gets the sets the set members by pk.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - the sets the set members by pk
		 */
		function getSetSetMembersByPK(setCode:string): ScriptResult<any>

		/**
		 * Gets the lP set members by pk.
		 * @param {string} setCode (string) - the set code
		 * @returns (ScriptResult<any>) - the lP set members by pk
		 */
		function getLPSetMembersByPK(setCode:string): ScriptResult<any>

		/**
		 * Update Set detail information.
		 * @param {string} setCode (string) - the set code
		 * @param {string} setName (string) - the set name
		 * @param {string} setComments (string) - the set comments
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateSet(setCode:string, setName:string, setComments:string): ScriptResult<any>

		/**
		 * Gets the sets the headers list by address.
		 * @param {number} addressNBR (number) - (Long) the address number
		 * @returns (ScriptResult<any>) - the sets the headers list by address
		 */
		function getSetHeadersListByAddress(addressNBR:number): ScriptResult<any>

		/**
		 * Gets the sets the headers list by parcel.
		 * @param {string} parcelNBR (string) - the parcel number
		 * @returns (ScriptResult<any>) - the sets the headers list by parcel
		 */
		function getSetHeadersListByParcel(parcelNBR:string): ScriptResult<any>

		/**
		 * Gets the sets the headers list by license professional.
		 * @param {number} lpNBR (number) - (Long) the license professional number
		 * @returns (ScriptResult<any>) - the sets the headers list by license professional
		 */
		function getSetHeadersListByLP(lpNBR:number): ScriptResult<any>

		/**
		 * Gets the sets the headers list by child set.
		 * @param {string} childID (string) - the child id
		 * @returns (ScriptResult<any>) - the sets the headers list by child set
		 */
		function getSetHeadersListByChildSet(childID:string): ScriptResult<any>

		/**
		 * Gets the sets the headers list by member.
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (ScriptResult<any>) - the sets the headers list by member
		 */
		function getSetHeadersListByMember(capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Removes the set headers list by address.
		 * @param {string} setCode (string) - the set code
		 * @param {number} addressNBR (number) - (Long) the address number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeSetHeadersListByAddress(setCode:string, addressNBR:number): ScriptResult<any>

		/**
		 * Removes the set headers list by parcel.
		 * @param {string} setCode (string) - the set code
		 * @param {string} parcelNBR (string) - the parcel number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeSetHeadersListByParcel(setCode:string, parcelNBR:string): ScriptResult<any>

		/**
		 * Removes the set headers list by license professional.
		 * @param {string} setCode (string) - the set code
		 * @param {number} lpNBR (number) - (Long) the license professional number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeSetHeadersListByLP(setCode:string, lpNBR:number): ScriptResult<any>

		/**
		 * Removes the set headers list by cap.
		 * @param {string} setCode (string) - the set code
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeSetHeadersListByCap(setCode:string, capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Removes the set headers list by child.
		 * @param {string} setCode (string) - the set code
		 * @param {string} clildSetID (string) - the clild set id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function removeSetHeadersListByChild(setCode:string, clildSetID:string): ScriptResult<any>

		/**
		 * Adds the setof set member.
		 * @param {string} setCode (string) - the set code
		 * @param {string} clildSetID (string) - the clild set id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addSetofSetMember(setCode:string, clildSetID:string): ScriptResult<any>

		/**
		 * Adds the cap set member.
		 * @param {string} setCode (string) - the set code
		 * @param {CapIDModel} capIDModel (CapIDModel) - the cap id model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addCapSetMember(setCode:string, capIDModel:CapIDModel): ScriptResult<any>

		/**
		 * Adds the parcel set member.
		 * @param {string} setCode (string) - the set code
		 * @param {string} parcelNumber (string) - the parcel number
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addParcelSetMember(setCode:string, parcelNumber:string): ScriptResult<any>

		/**
		 * Adds the address set member.
		 * @param {string} setCode (string) - the set code
		 * @param {number} addressNBR (number) - (Long) the address nbr
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addAddressSetMember(setCode:string, addressNBR:number): ScriptResult<any>

		/**
		 * Adds the lp set member.
		 * @param {string} setCode (string) - the set code
		 * @param {number} licenseSeqNBR (number) - (Long) the license seq nbr
		 * @returns (ScriptResult<any>) - the script result
		 */
		function addLPSetMember(setCode:string, licenseSeqNBR:number): ScriptResult<any>

		/**
		 * Get new SetHeaderScriptModel.
		 * @returns (ScriptResult<any>) - the ScriptResult  SetHeaderScriptModel
		 */
		function getSetHeaderScriptModel(): ScriptResult<any>

		/**
		 * Get new SetDetailsScriptModel.
		 * @returns (ScriptResult<any>) - the ScriptResult SetDeatilsScriptModel
		 */
		function getSetDetailsScriptModel(): ScriptResult<any>

		/**
		 * Create SetHeaderModel
		 * @param {SetHeaderScriptModel} setHeaderScriptModel (SetHeaderScriptModel)
		 * @returns (ScriptResult<any>) - the Script Result SetHeaderScriptModel
		 */
		function createSetHeader(setHeaderScriptModel:SetHeaderScriptModel): ScriptResult<any>

		/**
		 * Get Set Header List by Model
		 * @param {SetHeaderScriptModel} setHeaderScriptModel (SetHeaderScriptModel) - SetHeaderScriptModel
		 * @returns (ScriptResult<any>) - List of Set in ScriptResult
		 */
		function getSetHeaderListByModel(setHeaderScriptModel:SetHeaderScriptModel): ScriptResult<any>

		/**
		 * Update SetHeaderModel.  SetID is required.
		 * @param {SetHeaderScriptModel} setHeaderScriptModel (SetHeaderScriptModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateSetHeader(setHeaderScriptModel:SetHeaderScriptModel): ScriptResult<any>

		/**
		 * Remove Set by Set ID.
		 * @param {string} setCode (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function removeSetHeader(setCode:string): ScriptResult<any>

		/**
		 * Add Set Member List for Set
		 * @param {SetDetailsModel[]} setDetailsList (SetDetailsModel[]) - a List of SetDetailsModel.
		 * @returns (ScriptResult<any>)          *
		 */
		function addRecordSetMembers(setDetailsList:SetDetailsModel[]): ScriptResult<any>

		/**
		 * Get SetMember List
		 * @param {SetDetailsScriptModel} setDetailsScriptModel (SetDetailsScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getSetMembers(setDetailsScriptModel:SetDetailsScriptModel): ScriptResult<any>

		/**
		 * Update Set Member Status  and Set Member Status Date
		 * @param {SetDetailsScriptModel} setDetailsScriptModel (SetDetailsScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function updateSetMemberStatus(setDetailsScriptModel:SetDetailsScriptModel): ScriptResult<any>

		/**
		 * Delete Set Members.
		 * @param {SetDetailsScriptModel} setDetailsScriptModel (SetDetailsScriptModel) - SetDetailsScriptModel
		 * @returns (ScriptResult<any>) - the script result  removeCount
		 */
		function deleteSetMembers(setDetailsScriptModel:SetDetailsScriptModel): ScriptResult<any>

		/**
		 * Get set list which contain the specify set member
		 * @param {SetDetailsScriptModel} setDetailsScriptModel (SetDetailsScriptModel)
		 * @returns (ScriptResult<any>)          *
		 */
		function getSetBySetMember(setDetailsScriptModel:SetDetailsScriptModel): ScriptResult<any>

	}
	namespace shoppingCart {
		/**
		 * Remove expire Shopping Cart Items for patch job.
		 * @returns (ScriptResult<any>)          *
		 */
		function removeExpireShoppingCartItems(): ScriptResult<any>

		/**
		 * Remove expire Shopping Cart Items for patch job.
		 * @returns (ScriptResult<any>)          *
		 */
		function removeSelectedExpireItems(): ScriptResult<any>

		/**
		 * Remove expire Shopping Cart Items for patch job.
		 * @returns (ScriptResult<any>)          *
		 */
		function removeSavedExpireItems(): ScriptResult<any>

	}
	namespace smartNotice {
		/**
		 * Adds a new Smart Notice.
		 * @param {string} id1 (string) - permit id1
		 * @param {string} id2 (string) - permit id2
		 * @param {string} id3 (string) - permit id3
		 * @param {string} activityType (string) - activity type
		 * @param {string} activityComment (string) - activity comment
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addNotice(id1:string, id2:string, id3:string, activityType:string, activityComment:string): ScriptResult<any>

		/**
		 * Adds a new Smart Notice.
		 * @param {string} id1 (string) - permit id1
		 * @param {string} id2 (string) - permit id2
		 * @param {string} id3 (string) - permit id3
		 * @param {string} activityType (string) - activity type
		 * @param {string} activityComment (string) - activity comment
		 * @param {ScriptDateTime} expirationDate (ScriptDateTime) - expiration date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addNotice(id1:string, id2:string, id3:string, activityType:string, activityComment:string, expirationDate:ScriptDateTime): ScriptResult<any>

	}
	namespace specialSearch {
		/**
		 * Batch create the search datas according to the param searchModels
		 * @param {GenericSearchModel[]} searchModels (GenericSearchModel[]) - the search models to create
		 * @returns (ScriptResult<any>)          *
		 */
		function createBatchSearchData(searchModels:GenericSearchModel[]): ScriptResult<any>

		/**
		 * Rereate the search datas according to the param searchModels

 It will remove the search datas according to capID and then batch create search datas according to searchModels
		 * @param {CapIDModel} capID (CapIDModel) - the ID of cap to recreate
		 * @param {GenericSearchModel[]} searchModels (GenericSearchModel[]) - the search models to create
		 * @returns (ScriptResult<any>)          *
		 */
		function recreateBatchSearchData(capID:CapIDModel, searchModels:GenericSearchModel[]): ScriptResult<any>

		/**
		 * Create the search data according to the param searchModel
		 * @param {GenericSearchModel} searchModel (GenericSearchModel) - the search model to create
		 * @returns (ScriptResult<any>)          *
		 */
		function createSearchData(searchModel:GenericSearchModel): ScriptResult<any>

		/**
		 * Convert arabic text to pure text and the pure text will be used to store and special search.
		 * @param {string} arabicTradeName (string) - the original arabic trade name
		 * @returns (ScriptResult<any>)          *
		 */
		function getPureArabicText(arabicTradeName:string): ScriptResult<any>

		/**
		 * Convert english text to pure text and the pure text will be used to store and special search.
		 * @param {string} englishTradeName (string) - the original english trade name
		 * @returns (ScriptResult<any>)          *
		 */
		function getPureEnglishText(englishTradeName:string): ScriptResult<any>

		/**
		 * Get the search data list according to search model searchModel
		 * @param {GenericSearchModel} searchModel (GenericSearchModel) - the search model criteria
		 * @returns (ScriptResult<any>)          *
		 */
		function getSearchDataList(searchModel:GenericSearchModel): ScriptResult<any>

		/**
		 * Remove the search datas with the same capID
		 * @param {CapIDModel} capID (CapIDModel) - the ID of cap to remove
		 * @returns (ScriptResult<any>)          *
		 */
		function removeSearchDataByCapID(capID:CapIDModel): ScriptResult<any>

		/**
		 * Update the search datas' status to status with the same capID
		 * @param {CapIDModel} capID (CapIDModel) - the cap id
		 * @param {string} status (string) - the audit status to set, maybe A or I
		 * @returns (ScriptResult<any>)          *
		 */
		function updateSearchDataStatusByCapID(capID:CapIDModel, status:string): ScriptResult<any>

		/**
		 * Judge whether the trade name already exists.
 
 1. Convert the trade names to pure text.
 2. Call business method to do exact search.
		 * @param {string} englishTradeName (string) - the original English trade name
		 * @param {string} arabicTradeName (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function isTradeNameExist(englishTradeName:string, arabicTradeName:string): ScriptResult<any>

		/**
		 * Return an instance of GenericSearchModel
		 * @returns (ScriptResult<any>)          *
		 */
		function newSearchDataModel(): ScriptResult<any>

	}
	namespace structEstabScript {
		/**
		 * Get list of structure & establishment.
		 * @param {StructureEstablishmentScriptModel} strucEstabScriptmodel (StructureEstablishmentScriptModel) - the struc estab scriptmodel
		 * @returns (ScriptResult<any>) - ScriptResult note use StructureEstablishmentModel,need to change to StructureEstablishmentScriptModel later
		 */
		function getStructEstablList(strucEstabScriptmodel:StructureEstablishmentScriptModel): ScriptResult<any>

		/**
		 * Get structure&establishment by Primary Key.
		 * @param {number} sourceSeqNum (number) - (Long) the source seq num
		 * @param {number} seqNbr (number) - (Long) the seq nbr
		 * @returns (ScriptResult<any>) - the struct establ by pk
		 */
		function getStructEstablByPK(sourceSeqNum:number, seqNbr:number): ScriptResult<any>

		/**
		 * Get structure&establishment according to cap id.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getStructEStablByCapId(capID:CapIDModel): ScriptResult<any>

		/**
		 * Create a new structure or establishment.
		 * @param {StructureEstablishmentScriptModel} strucEstabScriptmodel (StructureEstablishmentScriptModel) - the struc estab scriptmodel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function newStructEstab(strucEstabScriptmodel:StructureEstablishmentScriptModel): ScriptResult<any>

		/**
		 * Edit a structure or establishment.
		 * @param {StructureEstablishmentScriptModel} strucEstabScriptmodel (StructureEstablishmentScriptModel) - the struc estab scriptmodel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateStructEstabl(strucEstabScriptmodel:StructureEstablishmentScriptModel): ScriptResult<any>

		/**
		 * Delete.
		 * @param {number} sourceSeqNum (number) - (Long) the source seq num
		 * @param {number} seqNbr (number) - (Long) the seq nbr
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function disableStructEstabl(sourceSeqNum:number, seqNbr:number, callerID:string): ScriptResult<any>

		/**
		 * get model data for emse test
		 * @param {string[]} param (string[])
		 * @returns (StructureEstablishmentScriptModel) - StructureEstablishmentScriptModel
		 */
		function getStructureEstablishmentModeData(param:string[]): StructureEstablishmentScriptModel

	}
	namespace taskSpecificInfo {
		/**
		 * Get a TaskSpecificScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskSpecificInfoScriptModel(): ScriptResult<any>

		/**
		 * Get by checkboxDesc.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) process id
		 * @param {number} stepNumber (number) - (int) step number
		 * @param {string} checkboxDesc (string) - checkboxDesc
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskSpecifiInfoByDesc(capID:CapIDModel, processID:number, stepNumber:number, checkboxDesc:string): ScriptResult<any>

		/**
		 * Get askSpecifiInfo by Task.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) process id
		 * @param {number} stepNumber (number) - (int) step number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskSpecificInfoByTask(capID:CapIDModel, processID:number, stepNumber:number): ScriptResult<any>

		/**
		 * Edit task specific infos.
		 * @param {TaskSpecificInfoModel[]} bchckboxs (TaskSpecificInfoModel[]) - the array of TaskSpecificInfoModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editTaskSpecInfos(bchckboxs:TaskSpecificInfoModel[]): ScriptResult<any>

	}
	namespace timeAccounting {
		/**
		 * Get Time Account message.
		 * @param {number} timeLogSeq (number) - (long) the time log seq
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTimeLogModel(timeLogSeq:number): ScriptResult<any>

		/**
		 * Get a new empty Time Account message.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTimeLogModel(): ScriptResult<any>

		/**
		 * Adds the time log model.
		 * @param {TimeAccountingScriptModel} timeAccountingModel (TimeAccountingScriptModel) - the time accounting model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function addTimeLogModel(timeAccountingModel:TimeAccountingScriptModel): ScriptResult<any>

		/**
		 * update the time log model.
		 * @param {TimeAccountingScriptModel} timeAccountingModel (TimeAccountingScriptModel) - the time accounting model
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTimeLogModel(timeAccountingModel:TimeAccountingScriptModel): ScriptResult<any>

		/**
		 * Get the time accounting group type models
		 * @param {TimeGroupTypeScriptModel} timeGrpTypModel (TimeGroupTypeScriptModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTimeGroupTypeModels(timeGrpTypModel:TimeGroupTypeScriptModel): ScriptResult<any>

		/**
		 * Get the time accounting group type models by specific group name and type name
		 * @param {string} groupName (string) - The specific group name
		 * @param {string} typeName (string) - The specific type name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTimeGroupTypeModels(groupName:string, typeName:string): ScriptResult<any>

		/**
		 * Get an initialized TimeGroupTypeScriptModel instance
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTimeGroupTypeModel(): ScriptResult<any>

		/**
		 * Get time account by entity..
		 * @param {CapIDModel} capIDModel (CapIDModel) - cap id
		 * @param {string} entityId (string) - workflow/inspection id etc.
		 * @param {string} entityType (string) - entity type
		 * @param {number} taTypeSeq (number) - (Long) time accounting type sequence
		 * @param {number} taGroupSeq (number) - (Long) time accounting group sequence
		 * @returns (ScriptResult<any>)          *
		 */
		function getTimeLogModelByEntity(capIDModel:CapIDModel, entityId:string, entityType:string, taTypeSeq:number, taGroupSeq:number): ScriptResult<any>

		/**
		 * get time type by time type name.
		 * @param {string} timeTypeName (string) - time accounting type name
		 * @returns (ScriptResult<any>)          *
		 */
		function getTimeTypeByTimeTypeName(timeTypeName:string): ScriptResult<any>

		/**
		 * get time group by time group name.
		 * @param {string} timeGroupName (string) - time accounting group name
		 * @returns (ScriptResult<any>)          *
		 */
		function getTimeGroupByTimeGroupName(timeGroupName:string): ScriptResult<any>

		/**
		 * Gets the time accounting sync mapping list.
		 * @param {string} entityTypeFrom (string) - the entity type from
		 * @param {string} entityIDFrom (string) - the entity id from
		 * @param {string} entityTypeTo (string) - the entity type to
		 * @param {string} entityIDTo (string) - the entity id to
		 * @returns (ScriptResult<any>) - the time accounting sync mapping list
		 */
		function getTimeAccountingSyncMappingList(entityTypeFrom:string, entityIDFrom:string, entityTypeTo:string, entityIDTo:string): ScriptResult<any>

		/**
		 * Creates the time accounting sync mapping.
		 * @param {string} entityTypeFrom (string) - the entity type from
		 * @param {string} entityIDFrom (string) - the entity id from
		 * @param {string} entityTypeTo (string) - the entity type to
		 * @param {string} entityIDTo (string) - the entity id to
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createTimeAccountingSyncMapping(entityTypeFrom:string, entityIDFrom:string, entityTypeTo:string, entityIDTo:string): ScriptResult<any>

		/**
		 * Delete time accounting sync mapping.
		 * @param {string} entityTypeFrom (string) - the entity type from
		 * @param {string} entityIDFrom (string) - the entity id from
		 * @param {string} entityTypeTo (string) - the entity type to
		 * @param {string} entityIDTo (string) - the entity id to
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deleteTimeAccountingSyncMapping(entityTypeFrom:string, entityIDFrom:string, entityTypeTo:string, entityIDTo:string): ScriptResult<any>

		/**
		 * Convert time accounting to generic costing.
		 * @param {TimeLogModel} timeLogModel (TimeLogModel) - the time log model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function convTimeAccountingToGenericCosting(timeLogModel:TimeLogModel): ScriptResult<any>

		/**
		 * Convert time accounting to humaning.
		 * @param {TimeLogModel} timeLogModel (TimeLogModel) - the time log model
		 * @returns (ScriptResult<any>) - the script result
		 */
		function convTimeAccountingToHumaning(timeLogModel:TimeLogModel): ScriptResult<any>

		/**
		 * Convert generic costing to costing.
		 * @param {GenericCostingModel} genericCosting (GenericCostingModel) - the generic costing
		 * @param {string} reference (string) - the cap id
		 * @param {string} entityType (string) - the entity type
		 * @param {string} entityId (string) - the entity id
		 * @returns (ScriptResult<any>) - the script result
		 */
		function convGenericCostingToCosting(genericCosting:GenericCostingModel, reference:string, entityType:string, entityId:string): ScriptResult<any>

	}
	namespace trustAccount {
		/**
		 * Create a new trust account
		 * @param {TrustAccountModel} trustAccountModel (TrustAccountModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createTrustAccount(trustAccountModel:TrustAccountModel): ScriptResult<any>

		/**
		 * Create a new trust account
		 * @param {string} peopleType (string) - people type
		 * @param {string} peopleNBR (string) - people number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function autoCreateTrustAccount(peopleType:string, peopleNBR:string): ScriptResult<any>

		/**
		 * Get trust account by Primary Key
		 * @param {number} accountSeq (number) - (Long) 
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountByPK(accountSeq:number, servProvCode:string): ScriptResult<any>

		/**
		 * Get trust account by Primary Key
		 * @param {number} accountSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountByPK(accountSeq:number): ScriptResult<any>

		/**
		 * Return trust account by account ID
		 * @param {string} accountID (string)
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountByAccountID(accountID:string, servProvCode:string): ScriptResult<any>

		/**
		 * Return trust account by account ID
		 * @param {string} accountID (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountByAccountID(accountID:string): ScriptResult<any>

		/**
		 * return all trust account collection of specific agency
		 * @param {string} servProvCode (string)
		 * @param {QueryFormat | null} qf (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountList(servProvCode:string, qf:QueryFormat | null): ScriptResult<any>

		/**
		 * return all trust account collection of specific agency
		 * @param {QueryFormat | null} qf (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountList(qf:QueryFormat | null): ScriptResult<any>

		/**
		 * return all trust accounts that contain specific trust account status.
		 * @param {string} servProvCode (string)
		 * @param {string} status (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListByAccountStatus(servProvCode:string, status:string): ScriptResult<any>

		/**
		 * return all trust accounts that contain specific trust account status.
		 * @param {string} status (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListByAccountStatus(status:string): ScriptResult<any>

		/**
		 * return the trust account information by trust account model
		 * @param {TrustAccountModel} trustAccModel (TrustAccountModel)
		 * @param {TrustAccountPeopleModel} people (TrustAccountPeopleModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListByCondition(trustAccModel:TrustAccountModel, people:TrustAccountPeopleModel): ScriptResult<any>

		/**
		 * return the trust account information by trust account model
		 * @param {TrustAccountModel} trustAccModel (TrustAccountModel)
		 * @param {TrustAccountPeopleModel} people (TrustAccountPeopleModel)
		 * @param {RefAddressModel} refAddressModel (RefAddressModel)
		 * @param {ParcelModel} refParcelModel (ParcelModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListByCondition(trustAccModel:TrustAccountModel, people:TrustAccountPeopleModel, refAddressModel:RefAddressModel, refParcelModel:ParcelModel): ScriptResult<any>

		/**
		 * Close a trust account
		 * @param {number} accountSeq (number) - (Long) 
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function closeTrustAccountByPK(accountSeq:number, servProvCode:string): ScriptResult<any>

		/**
		 * Close a trust account
		 * @param {number} accountSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function closeTrustAccountByPK(accountSeq:number): ScriptResult<any>

		/**
		 * Edit a trust account
		 * @param {TrustAccountModel} trustAccountModel (TrustAccountModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editTrustAccount(trustAccountModel:TrustAccountModel): ScriptResult<any>

		/**
		 * return the trust accounts that have negative balance.
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListWithNegativeBalance(servProvCode:string): ScriptResult<any>

		/**
		 * return the trust accounts that have negative balance.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListWithNegativeBalance(): ScriptResult<any>

		/**
		 * return trust account ID collection by CAP ID.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountIDListByCAPID(capID:CapIDModel): ScriptResult<any>

		/**
		 * to deposit fund to trust account.
		 * @param {TransactionModel} trans (TransactionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function depositTrustAccount(trans:TransactionModel): ScriptResult<any>

		/**
		 * to transfer fund between trust accounts.
		 * @param {TransactionModel} trans (TransactionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function transferTrustAccount(trans:TransactionModel): ScriptResult<any>

		/**
		 * to withdraw fund to trust account.
		 * @param {TransactionModel} trans (TransactionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function withdrawTrustAccount(trans:TransactionModel): ScriptResult<any>

		/**
		 * to make adjustment to trust account
		 * @param {TransactionModel} trans (TransactionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTrustAccount(trans:TransactionModel): ScriptResult<any>

		/**
		 * return transaction collection for a specific trust account.
		 * @param {number} accountSeq (number) - (Long) 
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTransactionListByAccountSeq(accountSeq:number, servProvCode:string): ScriptResult<any>

		/**
		 * return transaction collection for a specific trust account.
		 * @param {number} accountSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTransactionListByAccountSeq(accountSeq:number): ScriptResult<any>

		/**
		 * return the transaction model by Primary Key.
		 * @param {number} transSeq (number) - (Long) 
		 * @param {string} servProvCode (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTransactionByPK(transSeq:number, servProvCode:string): ScriptResult<any>

		/**
		 * return the transaction model by Primary Key.
		 * @param {number} transSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTransactionByPK(transSeq:number): ScriptResult<any>

		/**
		 * return the transaction collection for specific search condition.
		 * @param {TransactionModel} trans (TransactionModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTransactionListByCondition(trans:TransactionModel): ScriptResult<any>

		/**
		 * return TrustAccountPeople collection by trust account number
		 * @param {string} servProvCode (string)
		 * @param {number} accountNumber (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountPeopleListByAccount(servProvCode:string, accountNumber:number): ScriptResult<any>

		/**
		 * return TrustAccountPeople collection by trust account number
		 * @param {number} accountNumber (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountPeopleListByAccount(accountNumber:number): ScriptResult<any>

		/**
		 * Associated a people
		 * @param {TrustAccountPeopleModel} trustAccountPeopleModel (TrustAccountPeopleModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createTrustAccountPeople(trustAccountPeopleModel:TrustAccountPeopleModel): ScriptResult<any>

		/**
		 * Associated a parcel or address or people
		 * @param {TrustAccountAssociationModel} accountAssociationModel (TrustAccountAssociationModel)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createTrustAccountAssociation(accountAssociationModel:TrustAccountAssociationModel): ScriptResult<any>

		/**
		 * Delete the relationship between a trust account and Licensed Professional or Contact.
		 * @param {string} servProvCode (string)
		 * @param {number} acctNBR (number) - (Long) 
		 * @param {string} peopleType (string)
		 * @param {number} peopleNBR (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeTrustAccountPeople(servProvCode:string, acctNBR:number, peopleType:string, peopleNBR:number): ScriptResult<any>

		/**
		 * Delete the relationship between a trust account and Licensed Professional or Contact.
		 * @param {number} acctNBR (number) - (Long) 
		 * @param {string} peopleType (string)
		 * @param {number} peopleNBR (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeTrustAccountPeople(acctNBR:number, peopleType:string, peopleNBR:number): ScriptResult<any>

		/**
		 * Delete the relationship between a trust account and Parcel or Address or Licensed Professional or Contact
		 * @param {number} acctNBR (number) - (Long) 
		 * @param {string} peopleType (string)
		 * @param {number} peopleNBR (number) - (Long) 
		 * @param {number} sourceNumber (number) - (Integer) 
		 * @param {string} parcelNumber (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeTrustAccountPeople(acctNBR:number, peopleType:string, peopleNBR:number, sourceNumber:number, parcelNumber:string): ScriptResult<any>

		/**
		 * return available trust account  collection by Set code
		 * @param {string} servProvCode (string)
		 * @param {string} setCode (string)
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @param {string} callerID (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountIDListBySetID(servProvCode:string, setCode:string, format:QueryFormat | null, callerID:string): ScriptResult<any>

		/**
		 * return available trust account  collection by Set code
		 * @param {string} setCode (string)
		 * @param {QueryFormat | null} format (QueryFormat)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountIDListBySetID(setCode:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * return the total count of the people for the specific trust account
		 * @param {string} servProvCode (string)
		 * @param {number} accountSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleCountInfoByTrustAccount(servProvCode:string, accountSeq:number): ScriptResult<any>

		/**
		 * return the total count of the people for the specific trust account
		 * @param {number} accountSeq (number) - (Long) 
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPeopleCountInfoByTrustAccount(accountSeq:number): ScriptResult<any>

		/**
		 * Get primary trust account of one cap according to the given trust account type.
 Return all primary trust account of all type if given account type is null
		 * @param {CapIDModel} capID (CapIDModel) - the cap which primary trust account belongs to
		 * @param {string} trustAccountType (string) - point out the trust account type
		 * @returns (ScriptResult<any>) - collection of correspond account ID(s).
		 */
		function getPrimaryTrustAccountID(capID:CapIDModel, trustAccountType:string): ScriptResult<any>

		/**
		 * create TrustAccountScriptModel
		 * @returns (TrustAccountScriptModel) - TrustAccountScriptModel
		 */
		function createTrustAccountScriptModel(): TrustAccountScriptModel

		/**
		 * create TrustAccountPeopleScriptModel
		 * @returns (TrustAccountPeopleScriptModel) - TrustAccountPeopleScriptModel
		 */
		function createTrustAccountPeopleScriptModel(): TrustAccountPeopleScriptModel

		/**
		 * create TrustAccountPeopleScriptModel
		 * @returns (TrustAccountTransactionScriptModel) - TrustAccountPeopleScriptModel
		 */
		function createTrustAccountTransactionScriptModel(): TrustAccountTransactionScriptModel

		/**
		 * create TrustAccountPeopleScriptModel
		 * @returns (CapIDScriptModel) - TrustAccountPeopleScriptModel
		 */
		function createCapIDScriptModel(): CapIDScriptModel

		/**
		 * This method is to get primary trust account amount by cap ID model.
		 * @param {CapIDModel} capID (CapIDModel) - CAP ID model.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getPrimaryTrustAccountByCAP(capID:CapIDModel): ScriptResult<any>

		/**
		 * This method is to get all trust account collection associated with given CAP ID.
		 * @param {CapIDModel} capID (CapIDModel) - CAP ID modle.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTrustAccountListByCAPID(capID:CapIDModel): ScriptResult<any>

	}
	namespace userright {
		/**
		 * To check if the user have a supervisor role.
		 * @param {string} user (string) - the user name
		 * @param {string} modulename (string) - the module name
		 * @param {string} fid (string) - fid
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function isSupervisor(user:string, modulename:string, fid:string): ScriptResult<any>

		/**
		 * Get user right.
		 * @param {string} currentModule (string) - the current module
		 * @param {string} userID (string) - the user id
		 * @returns (ScriptResult<any>) - the user right
		 */
		function getUserRight(currentModule:string, userID:string): ScriptResult<any>

		/**
		 * Method getUserProfileValue.
		 * @param {string} userName (string) - the user name
		 * @param {string} constantName (string) - the constant name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getUserProfileValue(userName:string, constantName:string): ScriptResult<any>

		/**
		 * Method updateUserProfileValue.
		 * @param {string} userName (string) - the user name
		 * @param {string} constantName (string) - the constant name
		 * @param {string} constantValue (string) - the constant value
		 * @param {string} caller (string) - the caller
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateUserProfileValue(userName:string, constantName:string, constantValue:string, caller:string): ScriptResult<any>

	}
	namespace util {
		/**
		 * httpPost method.
		 * @param {string} url (string) - url address
		 * @param {string} parameters (string) - parameters
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function httpPost(url:string, parameters:string): ScriptResult<any>

		/**
		 * httpPost for HTTP Authentication.
		 * @param {string} url (string) - url address
		 * @param {string} userName (string) - the user name
		 * @param {string} passWord (string) - the password
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function httpPost(url:string, userName:string, passWord:string): ScriptResult<any>

		/**
		 * httpPost for HTTP Authentication.
		 * @param {string} url (string) - url address
		 * @param {string} parameters (string) - parameters
		 * @param {string} userName (string) - the user name
		 * @param {string} passWord (string) - the password
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function httpPost(url:string, parameters:string, userName:string, passWord:string): ScriptResult<any>

		/**
		 * httpPostToSoapWebService for HTTP Authentication.
		 * @param {string} url (string) - the url
		 * @param {string} parameters (string) - the parameters
		 * @param {string} userName (string) - the user name
		 * @param {string} passWord (string) - the pass word
		 * @param {string} sSoapAction (string) - the s soap action
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function httpPostToSoapWebService(url:string, parameters:string, userName:string, passWord:string, sSoapAction:string): ScriptResult<any>

		/**
		 * Convert to ObjectArray.
		 * @param {object} obj (object) - Object
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function toObjectArray(obj:object): ScriptResult<any>

		/**
		 * Utility to construct a new java.util.HashMap
		 * @returns (HashMap) - new java.util.HashMap
 Assume success because only real possible error is OutOfMemory.
		 */
		function newHashMap(): HashMap

		/**
		 * create an instance for Hashtable.
		 * @returns (Hashtable) - the hashtable
		 */
		function newHashtable(): Hashtable

		/**
		 * replace parameter for Email.
		 * @param {string} contentType (string) - the content type
		 * @param {Hashtable} parameters (Hashtable) - the parameters
		 * @returns (String) - the custom content by type
		 */
		function getCustomContentByType(contentType:string, parameters:Hashtable): String

		/**
		 * Get custom desc As subject by contentType.
		 * @param {string} contentType (string)
		 * @param {Hashtable} parameters (Hashtable)
		 * @returns (String)          *
		 */
		function getCustomDescAsSubjectByType(contentType:string, parameters:Hashtable): String

		/**
		 * Replace parameter for the event InspectionScheduleAfter.
		 * @param {string} contentType (string) - Content Type.
		 * @param {InspectionModel} inspection (InspectionModel) - Inspection Model.
		 * @param {CapIDModel} capIdModel (CapIDModel) - CapIDModel.
		 * @param {Hashtable} parameters (Hashtable) - <java.lang.String,java.lang.String> variables.
		 * @returns (String) - String.
		 */
		function getCustomContentByType4InspScheAfter(contentType:string, inspection:InspectionModel, capIdModel:CapIDModel, parameters:Hashtable): String

		/**
		 * Utility to construct a new java.util.ArrayList
		 * @returns (any[]) - new java.util.ArrayList
		 */
		function newArrayList(): any[]

		/**
		 * Utility to construct a new java.lang.StringBuffer
		 * @returns (StringBuffer) - new java.lang.StringBuffer
 Assume success because only real possible error is OutOfMemory.
		 */
		function newStringBuffer(): StringBuffer

		/**
		 * Utility to construct a new QueryFormat.
		 * @returns (QueryFormat) - new QueryFormat
		 */
		function newQueryFormat(): QueryFormat

		/**
		 * Gets the calendar.
		 * @returns (Calendar) - the calendar
		 */
		function getCalendar(): Calendar

		/**
		 * Format date.
		 * @param {Date} date (Date) - the date
		 * @param {string} format (string) - the format
		 * @returns (String) - the string
		 */
		function formatDate(date:Date, format:string): String

		/**
		 * Now.
		 * @returns (Date) - the date
		 */
		function now(): Date

		/**
		 * Takes a string formatted as a date.
 The date string should be in one of the following formats:
 yyyy-MM-dd'T'hh:mm:ss, yyyy-MM-dd or MM/dd/yyyy
		 * @param {string} dateString (string) - the date string
		 * @returns (Date) - the date
		 */
		function parseDate(dateString:string): Date

		/**
		 * Date diff.
		 * @param {Date} date (Date) - the date
		 * @param {string} intervalType (string) - the interval type
		 * @param {number} interval (number) - (int) the interval
		 * @returns (Date) - the date
		 */
		function dateDiff(date:Date, intervalType:string, interval:number): Date

		/**
		 * Utility to return Utility logger in order to allow scripts to
 log information into server.log on the application server
		 * @returns (AVLogger) - com.accela.util.AVLogger
		 */
		function getLogger(): AVLogger

		/**
		 * Method to write to file.
		 * @param {object} obj (object) - the obj
		 * @param {string} fileName (string) - the file name
		 * @returns (File) - the File object
		 */
		function writeToFile(obj:object, fileName:string): File

		/**
		 * @param {object} obj (object)
		 * @param {string} fileName (string)
		 * @returns (File)          *
		 */
		function writeToFileWithSecurity(obj:object, fileName:string): File

		/**
		 * @returns (File)          *
		 */
		function writeToFileWithoutSecurity(): File

		/**
		 * Delete a special file.
		 * @param {string} fileName (string) - the file name
		 * @returns (void)          *
		 */
		function deleteFile(fileName:string): void

		/**
		 * Method to upload one file to a ftp site.
		 * @param {string} site (string) - the site
		 * @param {string} port (string) - the port
		 * @param {string} username (string) - the username
		 * @param {string} password (string) - the password
		 * @param {string} folder (string) - the folder
		 * @param {File} file (File) - the file
		 * @returns (ScriptResult<any>) - the upload result
		 */
		function ftpUpload(site:string, port:string, username:string, password:string, folder:string, file:File): ScriptResult<any>

		/**
		 * Check to see if the object is data model.
 For EMSE parameter, the event parameter is string type by default.
		 * @param {object} obj (object) - the obj
		 * @returns (boolean) - true, if instance of string
		 */
		function instanceOfString(obj:object): boolean

		/**
		 * match value by teg from string.
		 * @param {string} tag (string) - the tag
		 * @param {string} registerResultXML (string) - the register result xml
		 * @returns (String) - the value from xml
		 */
		function getValueFromXML(tag:string, registerResultXML:string): String

		/**
		 * format number.
		 * @param {number} number (number) - (Double) the number
		 * @returns (String) - the string
		 */
		function numberFormat(number:number): String

		/**
		 * Parses the int.
		 * @param {string} value (string) - the value
		 * @returns (number) - (Integer) the integer
		 */
		function parseInt(value:string): number

		/**
		 * Parses the long.
		 * @param {string} value (string) - the value
		 * @returns (number) - (Long) the long
		 */
		function parseLong(value:string): number

		/**
		 * Parses the double.
		 * @param {string} value (string) - the value
		 * @returns (number) - (Double) the double
		 */
		function parseDouble(value:string): number

		/**
		 * get deadline's day.
		 * @param {Date} currectDate (Date) - the currect date
		 * @param {Date} registrationDate (Date) - the registration date
		 * @param {string} deadline (string) - the deadline
		 * @returns (ScriptResult<any>) - the deadline day
		 */
		function getDeadlineDay(currectDate:Date, registrationDate:Date, deadline:string): ScriptResult<any>

		/**
		 * Returns a double whose value is (minuend -
 subtrahend).
		 * @param {number} minuend (number) - (double) minuend value
		 * @param {number} subtrahend (number) - (double) subtrahend value
		 * @returns (number) - (double) minuend - subtrahend
		 */
		function subtract(minuend:number, subtrahend:number): number

		/**
		 * Returns a double whose value is (firstValue +
 secondValue).
		 * @param {number} firstValue (number) - (double) value to add
		 * @param {number} secondValue (number) - (double) value to add
		 * @returns (number) - (double) firstValue + secondValue
		 */
		function add(firstValue:number, secondValue:number): number

		/**
		 * Returns a double whose value is (firstValue *
 secondValue).
		 * @param {number} firstValue (number) - (double) 
		 * @param {number} secondValue (number) - (double) 
		 * @returns (number) - (double) 
		 */
		function multiply(firstValue:number, secondValue:number): number

		/**
		 * Returns a double whose value is (dividend /
 divisor).
		 * @param {number} dividend (number) - (double) 
		 * @param {number} divisor (number) - (double) 
		 * @param {number} scale (number) - (int) 
		 * @returns (number) - (double) 
		 */
		function divide(dividend:number, divisor:number, scale:number): number

		/**
		 * Returns a double whose value is (dividend /
 divisor).
		 * @param {number} dividend (number) - (double) 
		 * @param {number} divisor (number) - (double) 
		 * @returns (number) - (double) 
		 */
		function divide(dividend:number, divisor:number): number

		/**
		 * Returns a double whose value is  round to scale.
		 * @param {number} d (number) - (double) 
		 * @param {number} scale (number) - (int) 
		 * @returns (number) - (double) 
		 */
		function round(d:number, scale:number): number

		/**
		 * Compares the firstValue with the secondeValue.
		 * @param {number} firstValue (number) - (double) the first value
		 * @param {number} secondValue (number) - (double) the second value
		 * @returns (number) - (int) -1, 0, or 1 as the firstValue is numerically less than, equal to, or greater than
 secondValue.
		 */
		function compare(firstValue:number, secondValue:number): number

		/**
		 * Format double to keep two decimal digits.
		 * @param {number} fee (number) - (double) double to format.
		 * @returns (String) - result.
		 */
		function formatFee(fee:number): String

		/**
		 * Format double to keep two decimal digits .
		 * @param {number} amount (number) - (Double) double to format
		 * @returns (number) - (Double) the double
		 */
		function doubleFormat(amount:number): number

		/**
		 * Do deep object clone.   Please make sure that the object/sub objects is serializable.
		 * @param {object} srcObject (object) - object will be cloned.
		 * @returns (ScriptResult<any>)          *
		 */
		function deepClone(srcObject:object): ScriptResult<any>

		/**
		 * Insert, delete or update custom DB directly in EMSE script  To use this API, you need to follow below steps:  1. For oracle, find file {$HOME$}\av.biz\deploy\oracle-ds.xml, for MSSQL, find file {$HOME$}\av.biz\deploy\AVVembuMSSQL-ds.xml  2. Enable  which was commented, it's the data source configuration.  3. Find file {$HOME$}\av.biz\conf\av\ServerConfig.properties and enable jdbc.custom.datasource
		 * @param {string} dataSourceName (string) - Data Source Name
		 * @param {string} sqlString (string) - sql which hoped to execute
		 * @param {object[]} parameters (object[]) - parameters needed in sql
		 * @returns (ScriptResult<any>) - update impact count
		 */
		function update(dataSourceName:string, sqlString:string, parameters:object[]): ScriptResult<any>

		/**
		 * Batch Insert, delete or update custom DB directly in EMSE script   To use this API, you need to follow below steps:  1. For oracle, find file {$HOME$}\av.biz\deploy\oracle-ds.xml, for MSSQL, find file {$HOME$}\av.biz\deploy\AVVembuMSSQL-ds.xml  2. Enable  which was commented, it's the data source configuration.  3. Find file {$HOME$}\av.biz\conf\av\ServerConfig.properties and enable jdbc.custom.datasource
		 * @param {string} dataSourceName (string) - Data Source Name
		 * @param {string} sqlString (string) - sql which hoped to execute
		 * @param {object[][]} parameters (object[][]) - List of parameters needed in sql
		 * @returns (ScriptResult<any>) - update impact count
		 */
		function batchUpdate(dataSourceName:string, sqlString:string, parameters:object[][]): ScriptResult<any>

		/**
		 * Select in custom DB directly in EMSE script   To use this API, you need to follow below steps:  1. For oracle, find file {$HOME$}\av.biz\deploy\oracle-ds.xml, for MSSQL, find file {$HOME$}\av.biz\deploy\AVVembuMSSQL-ds.xml  2. Enable  which was commented, it's the data source configuration.  3. Find file {$HOME$}\av.biz\conf\av\ServerConfig.properties and enable jdbc.custom.datasource
		 * @param {string} dataSourceName (string) - Data Source Name
		 * @param {string} sqlString (string) - sql which hoped to execute
		 * @param {object[]} parameters (object[]) - parameters needed in sql
		 * @returns (ScriptResult<any>) - List of select result
		 */
		function select(dataSourceName:string, sqlString:string, parameters:object[]): ScriptResult<any>

		/**
		 * Main method.
		 * @param {string[]} ares (string[]) - the ares
		 * @returns (void)          *
		 */
		function main(ares:string[]): void

	}
	namespace workflow {
		/**
		 * Return a task item in the workflow of current Cap.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTask(capID:CapIDModel, stepNumber:number): ScriptResult<any>

		/**
		 * Return one task by task description.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTask(capID:CapIDModel, taskDescription:string): ScriptResult<any>

		/**
		 * Return a TaskItem objects which represent all the tasks for the workflow
 attached to the cap.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) process id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTask(capID:CapIDModel, stepNumber:number, processID:number): ScriptResult<any>

		/**
		 * Return all tasks in the workflow of current Cap.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasks(capID:CapIDModel): ScriptResult<any>

		/**
		 * Return all tasks in the workflow of current Cap.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) the process id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasks(capID:CapIDModel, processID:number): ScriptResult<any>

		/**
		 * Return one task in the workflow of current app by task name.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasks(capID:CapIDModel, taskDescription:string): ScriptResult<any>

		/**
		 * Get the collection of tasks.
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} startDueDate (ScriptDateTime) - the start of due date
		 * @param {ScriptDateTime} endDueDate (ScriptDateTime) - the end of due date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasks(taskDescription:string, disposition:string, startDueDate:ScriptDateTime, endDueDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Get the collection of tasks.
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasks(taskDescription:string, disposition:string): ScriptResult<any>

		/**
		 * Get task items.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} disposition (string) - task status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItems(capID:CapIDModel, disposition:string): ScriptResult<any>

		/**
		 * Get task history.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getHistory(capID:CapIDModel): ScriptResult<any>

		/**
		 * adjust task.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} activeFlag (string) - active flag
		 * @param {string} completeFlag (string) - complete flag
		 * @param {ScriptDateTime} assignmentDate (ScriptDateTime) - assignment date
		 * @param {ScriptDateTime} dueDate (ScriptDateTime) - due date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTask(capID:CapIDModel, stepNumber:number, activeFlag:string, completeFlag:string, assignmentDate:ScriptDateTime, dueDate:ScriptDateTime): ScriptResult<any>

		/**
		 * adjust task.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string)
		 * @param {string} activeFlag (string) - active flag
		 * @param {string} completeFlag (string) - complete flag
		 * @param {ScriptDateTime} assignmentDate (ScriptDateTime) - assignment date
		 * @param {ScriptDateTime} dueDate (ScriptDateTime) - due date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTask(capID:CapIDModel, taskDescription:string, activeFlag:string, completeFlag:string, assignmentDate:ScriptDateTime, dueDate:ScriptDateTime): ScriptResult<any>

		/**
		 * adjust task state.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process ID
		 * @param {string} activeFlag (string) - active flag
		 * @param {string} completeFlag (string) - complete flag
		 * @param {ScriptDateTime} assignmentDate (ScriptDateTime) - assignment date
		 * @param {ScriptDateTime} dueDate (ScriptDateTime) - due date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTask(capID:CapIDModel, stepNumber:number, processID:number, activeFlag:string, completeFlag:string, assignmentDate:ScriptDateTime, dueDate:ScriptDateTime): ScriptResult<any>

		/**
		 * Retrieve all audit records from GPROCESS_HISTORY table.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getWorkflowHistory(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Retrieve all audit records from GPROCESS_HISTORY table.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getWorkflowHistory(capID:CapIDModel, taskDescription:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info deactive task
 adjust next task check ship task do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleYDisposition(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info deactive task
 adjust next task check ship task do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleYDisposition(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info deactive task
 adjust branch task check ship task do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleBDisposition(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info deactive task
 adjust branch task check ship task do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleBDisposition(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info deactive task
 adjust loop task check ship task do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleLDisposition(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * handle LDisposition.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleLDisposition(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition privileges update current task info do audit.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleUDisposition(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * handle UDisposition.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleUDisposition(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Check disposition flag, call coresponding methods.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @param {string} dispositionFlag (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleDisposition(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel, dispositionFlag:string): ScriptResult<any>

		/**
		 * check disposition flag, call coresponding methods.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @param {string} dispositionFlag (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleDisposition(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel, dispositionFlag:string): ScriptResult<any>

		/**
		 * handle disposition with flag.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleDispositionWithFlag(capID:CapIDModel, stepNumber:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * handle disposition with flag.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} processID (number) - (long) the process id
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dispositionDate (ScriptDateTime) - status date
		 * @param {string} dispositionNote (string) - status note
		 * @param {string} dispositionComment (string) - comment
		 * @param {SysUserModel} dispositionBy (SysUserModel) - dispositionBy
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleDispositionWithFlag(capID:CapIDModel, stepNumber:number, processID:number, disposition:string, dispositionDate:ScriptDateTime, dispositionNote:string, dispositionComment:string, dispositionBy:SysUserModel): ScriptResult<any>

		/**
		 * Retrieve all tasks by task description and task status and print flag
 08/13/02.
		 * @param {string} taskPermit (string) - task permit
		 * @param {string} taskPermitStatus (string) - task permit status
		 * @param {string} taskInspection (string) - task inspection
		 * @param {string} taskInspectionStatus (string) - task inspection status
		 * @param {string} taskBilling (string) - task billing
		 * @param {string} taskBillingStatus (string) - task billing status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function findByDescStatus(taskPermit:string, taskPermitStatus:string, taskInspection:string, taskInspectionStatus:string, taskBilling:string, taskBillingStatus:string): ScriptResult<any>

		/**
		 * clear print flag.
		 * @param {string} taskDescription (string) - task name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function clearPrintFlag(taskDescription:string): ScriptResult<any>

		/**
		 * Get tasks desc status.
		 * @param {string} servProviderCode (string) - agency code
		 * @param {string} auditID (string) - the audit id
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @param {string} taskPermit (string) - task permit
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTasksDescStatus(servProviderCode:string, auditID:string, permitType:string, taskDescription:string, disposition:string, taskPermit:string): ScriptResult<any>

		/**
		 * find by rebill list.
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @param {ScriptDateTime} dateFrom (ScriptDateTime) - the from date
		 * @param {ScriptDateTime} dateTo (ScriptDateTime) - the to date
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function findByRebillList(permitType:string, taskDescription:string, disposition:string, dateFrom:ScriptDateTime, dateTo:ScriptDateTime): ScriptResult<any>

		/**
		 * rebill list.
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function rebillList(permitType:string, taskDescription:string, disposition:string): ScriptResult<any>

		/**
		 * issue permit.
		 * @param {string} taskDescription (string) - task name
		 * @param {string} disposition (string) - task status
		 * @param {string} printFlag (string) - print flag
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function issuePermit(taskDescription:string, disposition:string, printFlag:string): ScriptResult<any>

		/**
		 * The main method.
		 * @param {string[]} args (string[]) - the arguments
		 * @returns (void)          *
		 */
		function main(args:string[]): void

		/**
		 * Get add a workflow for a cap.
		 * @param {CapIDModel} cap (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function createCapWorkflow(cap:CapIDModel): ScriptResult<any>

		/**
		 * Get task item by capID.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItemWorkflowByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get task item by capId.
		 * @param {string} Id1 (string) - permit id1
		 * @param {string} Id2 (string) - permit id2
		 * @param {string} Id3 (string) - permit id3
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function getTaskItemByCapID(Id1:string, Id2:string, Id3:string, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get workflow bean.
		 * @param {string} workflowId (string) - the workflow id
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function WorkflowBean(workflowId:string, capID:CapIDModel): ScriptResult<any>

		/**
		 * Get task itme by capid.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItemByCapID(capID:CapIDModel, format:QueryFormat | null): ScriptResult<any>

		/**
		 * Adject task.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @param {string} taskStatus (string) - task status
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTask(capID:CapIDModel, taskDescription:string, taskStatus:string, callerID:string): ScriptResult<any>

		/**
		 * Adject task.
		 * @param {TaskItemModel} taskItem (TaskItemModel) - TaskItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTask(taskItem:TaskItemModel): ScriptResult<any>

		/**
		 * Get taskItemRebill by task description.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} permitType (string) - permit type
		 * @param {string} taskDescription (string) - task description
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItemRebillByTaskDescription(capID:CapIDModel, permitType:string, taskDescription:string, callerID:string): ScriptResult<any>

		/**
		 * Get processRelation by primary key.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} stepNumber (number) - (int) the step number
		 * @param {number} parentProcessID (number) - (long) parent proecess id
		 * @param {string} callerID (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProcessRelationByPK(capID:CapIDModel, stepNumber:number, parentProcessID:number, callerID:string): ScriptResult<any>

		/**
		 * Get task status list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {QueryFormat | null} Format (QueryFormat) - QueryFormat
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProcessRelationByCapID(capID:CapIDModel, Format:QueryFormat | null): ScriptResult<any>

		/**
		 * Get task status list.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} processCode (string) - process code
		 * @param {string} taskName (string) - task name
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskStatusList(capID:CapIDModel, processCode:string, taskName:string): ScriptResult<any>

		/**
		 * Get taskItemForTaskAssign.
		 * @param {SysUserModel} asgnUser (SysUserModel) - SysUserModel
		 * @param {DepartmentModel} curr_dep (DepartmentModel) - DepartmentModel
		 * @param {ScriptDateTime} dateFrom (ScriptDateTime) - ScriptDateTime
		 * @param {ScriptDateTime} dateTo (ScriptDateTime) - ScriptDateTime
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItemForTaskAssign(asgnUser:SysUserModel, curr_dep:DepartmentModel, dateFrom:ScriptDateTime, dateTo:ScriptDateTime): ScriptResult<any>

		/**
		 * The result returned by workflowServer will be stroed into a String Buffer.
 so we can return a String in ScriptResult.
		 * @param {TaskItemModel} model (TaskItemModel) - TaskItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getLayedTaskName(model:TaskItemModel): ScriptResult<any>

		/**
		 * handleDisposition.
		 * @param {TaskItemModel} model (TaskItemModel) - TaskItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function assignTask(model:TaskItemModel): ScriptResult<any>

		/**
		 * handleDisposition.
		 * @param {TaskItemModel} model (TaskItemModel) - TaskItemModel
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function handleDisposition(model:TaskItemModel, capID:CapIDModel): ScriptResult<any>

		/**
		 * Get taskAuditByTime.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) process id
		 * @param {string} time (string) - time
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskAuditByTime(capID:CapIDModel, processID:number, time:string): ScriptResult<any>

		/**
		 * Method adjustTaskWithNoAudit.
		 * @param {TaskItemModel} taskItem (TaskItemModel) - TaskItemModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function adjustTaskWithNoAudit(taskItem:TaskItemModel): ScriptResult<any>

		/**
		 * Retrieve all the tasks in the master process.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getMasterProcess(capID:CapIDModel): ScriptResult<any>

		/**
		 * Retrieve all the tasks in the specified process.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {number} processID (number) - (long) the process id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getProcess(capID:CapIDModel, processID:number): ScriptResult<any>

		/**
		 * Method getTaskItemByTaskDes.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @param {number} processID (number) - (long) process id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItemByTaskDes(capID:CapIDModel, taskDescription:string, processID:number): ScriptResult<any>

		/**
		 * Method editTask.
		 * @param {TaskItemModel} taskItem (TaskItemModel) - TaskItemModel
		 * @param {string} caller (string) - the caller id
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editTask(taskItem:TaskItemModel, caller:string): ScriptResult<any>

		/**
		 * @returns (ScriptResult<any>)          *
		 */
		function handleTimeTracking(): ScriptResult<any>

		/**
		 * @param {CapIDModel} targetCapId (CapIDModel)
		 * @param {string} newProcessCode (string)
		 * @param {boolean} isReallyDelete (boolean)
		 * @returns (ScriptResult<any>)          *
		 */
		function deleteAndAssignWorkflow(targetCapId:CapIDModel, newProcessCode:string, isReallyDelete:boolean): ScriptResult<any>

		/**
		 * Edit a task by its position in the cap workflow task tree.
		 * @param {TaskItemScriptModel} task (TaskItemScriptModel) - The task's edited value.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function editTask(task:TaskItemScriptModel): ScriptResult<any>

		/**
		 * Method to copy a task into a workflow process in the workflow .
		 * @param {TaskItemScriptModel} sourceTask (TaskItemScriptModel) - The task where copy from.
		 * @param {TaskItemScriptModel} targetTask (TaskItemScriptModel) - The task where copy to.
		 * @param {string} copyedTaskType (string) - The copied task type, if the type is p, it is copied as a next task, 
				 if the type is P, it is copied as a parallel task,
				 if the type is N ,it is copied as a next task,
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function copyTask(sourceTask:TaskItemScriptModel, targetTask:TaskItemScriptModel, copyedTaskType:string): ScriptResult<any>

		/**
		 * Method to copy a task into a workflow process in the workflow .
		 * @param {TaskItemScriptModel} insertedTask (TaskItemScriptModel) - The task where insert to.
		 * @param {string} insertTaskType (string) - The insert task type, if the type is p, it is copied as a next task, 
				 if the type is P, it is copied as a parallel task,
				 if the type is N ,it is copied as a next task,
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function insertTask(insertedTask:TaskItemScriptModel, insertTaskType:string): ScriptResult<any>

		/**
		 * Method to copy a task into a workflow process in the workflow with resource data.
		 * @param {TaskItemScriptModel} insertedTask (TaskItemScriptModel) - The task where insert to.
		 * @param {string} insertTaskType (string) - The insert task type, if the type is p, it is copied as a next task, 
				 if the type is P, it is copied as a parallel task,
				 if the type is N ,it is copied as a next task,
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function insertTaskWithResourceData(insertedTask:TaskItemScriptModel, insertTaskType:string): ScriptResult<any>

		/**
		 * Remove a task from one cap workflow process.
		 * @param {TaskItemScriptModel} task (TaskItemScriptModel) - The task to remove.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeTask(task:TaskItemScriptModel): ScriptResult<any>

		/**
		 * Method to insert a sub-process under a appoint task.
		 * @param {TaskItemScriptModel} task (TaskItemScriptModel) - process task.
		 * @param {string} subProcessCode (string) - The code of inserted sub-process.
		 * @param {boolean} isCompleteRequired (boolean) - complete flag.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function insertSubProcess(task:TaskItemScriptModel, subProcessCode:string, isCompleteRequired:boolean): ScriptResult<any>

		/**
		 * Method to remove a sub-process from the workflow.
		 * @param {TaskItemScriptModel} task (TaskItemScriptModel) - process task.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function removeSubProcess(task:TaskItemScriptModel): ScriptResult<any>

		/**
		 * Method to create a new TaskStatus method createTaskStatus250.
		 * @param {TaskStatusScriptModel} taskStatus (TaskStatusScriptModel) - Task Status Model.
		 * @returns (ScriptResult<any>) - a flag with object.
		 */
		function createTaskStatus(taskStatus:TaskStatusScriptModel): ScriptResult<any>

		/**
		 * Method to edit TaskStatus(method createTaskStatus250)
		 * @param {TaskStatusScriptModel} taskStatus (TaskStatusScriptModel) - Task Status Model.
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function editTaskStatus(taskStatus:TaskStatusScriptModel): ScriptResult<any>

		/**
		 * method to get TaskStatus List by Taskitem.
		 * @param {TaskItemScriptModel} scriptTask (TaskItemScriptModel) - task item model.
		 * @param {string} taskStatusDesc (string)
		 * @returns (ScriptResult<any>)          *
		 */
		function getTaskStatus(scriptTask:TaskItemScriptModel, taskStatusDesc:string): ScriptResult<any>

		/**
		 * Return one AdHoc task in the workflow of current app by task name.
		 * @param {CapIDModel} capID (CapIDModel) - CapIDModel
		 * @param {string} taskDescription (string) - task name
		 * @returns (ScriptResult<any>) - ScriptResult ScriptResult script result
		 */
		function getAdHocTask(capID:CapIDModel, taskDescription:string): ScriptResult<any>

		/**
		 * When WorkFlow task updated, execute to send email
		 * @param {TaskItemScriptModel} taskItemScriptModel (TaskItemScriptModel) - TaskItemScriptModel
		 * @param {string} sendFrom (string) - send from email address
		 * @param {string} sendTo (string) - send to email address
		 * @param {string} ccTo (string) - cc to email address
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function sendEmailForWorkflowTaskUpdated(taskItemScriptModel:TaskItemScriptModel, sendFrom:string, sendTo:string, ccTo:string): ScriptResult<any>

		/**
		 * When WorkFlow task updated, execute to get mail message
		 * @param {TaskItemScriptModel} taskItemScriptModel (TaskItemScriptModel) - TaskItemScriptModel
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function getMessageForWorkflowTaskUpdated(taskItemScriptModel:TaskItemScriptModel): ScriptResult<any>

		/**
		 * Method to create a new TaskStatus method createTaskStatusWithResourceData with resource data..
		 * @param {TaskStatusScriptModel} taskStatus (TaskStatusScriptModel) - Task Status Model.
		 * @returns (ScriptResult<any>) - a flag with object.
		 */
		function createTaskStatusWithResourceData(taskStatus:TaskStatusScriptModel): ScriptResult<any>

		/**
		 * get cap ids by multiple criteria
		 * @param {TaskItemScriptModel} taskItem (TaskItemScriptModel) - TaskItemModel
		 * @param {ScriptDateTime} startDueDate (ScriptDateTime) - start due date
		 * @param {ScriptDateTime} endDueDate (ScriptDateTime) - end due date
		 * @param {CapTypeScriptModel} capType (CapTypeScriptModel) - CapTypeModel
		 * @param {string[]} capStatusArray (string[]) - cap status array
		 * @returns (ScriptResult<any>) - ScriptResult Script Result
		 */
		function getCapIdsByCriteria(taskItem:TaskItemScriptModel, startDueDate:ScriptDateTime, endDueDate:ScriptDateTime, capType:CapTypeScriptModel, capStatusArray:string[]): ScriptResult<any>

		/**
		 * get task item script model object.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result
		 */
		function getTaskItemScriptModel(): ScriptResult<any>

		/**
		 * get cap type script model object.
		 * @returns (ScriptResult<any>) - ScriptResult Script Result
		 */
		function getCapTypeScriptModel(): ScriptResult<any>

		/**
		 * get process note script model.
		 * @returns (ScriptResult<any>) - ScriptResult script result
		 */
		function getProcessNoteScriptModel(): ScriptResult<any>

		/**
		 * Get processNoteScript
		 * @param {TaskItemScriptModel} taskItemScriptModel (TaskItemScriptModel)
		 * @returns (ScriptResult<any>) - Result include ProcessNoteScriptModel, included AttachTo, EdmsName, DocGroup, DocCategory,
			and CAPID.
		 */
		function getProcessNoteScriptModelByTaskItem(taskItemScriptModel:TaskItemScriptModel): ScriptResult<any>

		/**
		 * get Task Items.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} taskDesc (string)
		 * @param {string} processCode (string)
		 * @param {string} completeFlag (string)
		 * @param {string} disposition (string)
		 * @param {string} activeFlag (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskItems(capID:CapIDModel, taskDesc:string, processCode:string, completeFlag:string, disposition:string, activeFlag:string): ScriptResult<any>

		/**
		 * get Task Count.
		 * @param {CapIDModel} capID (CapIDModel)
		 * @param {string} processCode (string)
		 * @param {string} activeFlag (string)
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function getTaskCount(capID:CapIDModel, processCode:string, activeFlag:string): ScriptResult<any>

		/**
		 * Update normal task together with its TSI.
		 * @param {TaskItemScriptModel} taskItemScriptModel (TaskItemScriptModel) - Normal task item to be updated, adhoc task is not supported.
		 * @returns (ScriptResult<any>) - ScriptResult
		 */
		function updateTaskWithinTSI(taskItemScriptModel:TaskItemScriptModel): ScriptResult<any>

	}
	namespace workOrder {
		/**
		 * Creates the work order costing.
		 * @param {CostingModel} costing (CostingModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function createWorkOrderCosting(costing:CostingModel): ScriptResult<any>

		/**
		 * Update work order costing.
		 * @param {CostingModel} costing (CostingModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function updateWorkOrderCosting(costing:CostingModel): ScriptResult<any>

		/**
		 * Delete work order costing.
		 * @param {CostingModel} costing (CostingModel)
		 * @returns (ScriptResult<any>) - the script result
		 */
		function deleteWorkOrderCosting(costing:CostingModel): ScriptResult<any>

	}
	namespace wsConsumer {
		/**
		 * Invoking this method to consume remote web services.  
		 * @param {string} wsdlURL (string) - URL to remote web service WSDL file
		 * @param {string} methodName (string) - The remote web service method name to invoke
		 * @param {any[]} params (any[]) - Array of variable size of type Object
		 * @returns (ScriptResult<any>) - A reference to an object of type ScriptResult
		 */
		function consume(wsdlURL:string, methodName:string, params:any[]): ScriptResult<any>

		/**
		 * @returns (WSConsumerService)          *
		 */
		function getWSConsumerService(): WSConsumerService

		/**
		 * @returns (void)          *
		 */
		function setWSConsumerService(): void

	}
}
