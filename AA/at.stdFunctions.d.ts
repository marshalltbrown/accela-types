/// <reference path="at.objects.d.ts" />

/**
 * This function calls a web service script in a new transaction and logs any debug or message information returned from the script.
 * @param wsSubScript - The name of the web service script to execute.
 * @param wsScriptParameters - The parameters to pass to the web service script.
 */
declare function callWebService(wsSubScript: string, wsScriptParameters: string): void

/**
 * Activate a workflow task.
 * @param wfstr The name of the workflow task to activate.
 * @param processName Optional process that the task belongs to.
 */
declare function activateTask(wfstr: string, processName?: string): void

/**
 * Activates a license that is associated with a given CAP ID.
 * 
 * @param capid The CAP ID to activate the license for.
 * @return True if the license was successfully activated, false otherwise.
 */
declare function activeLicense(capid: CapIDModel): boolean

/**
 * Checks if any workflow tasks are active. References the global capId variable.
 * @return True if any workflow tasks are active, false otherwise.
 */
declare function activeTasksCheck(): boolean

/**
Adds a new row to an ASI table.
@param {string} tableName - The name of the ASI table.
@param {Array<{[key: string]: string | {fieldValue: string, readOnly: boolean}}>} tableValueArray - An array of associative arrays representing the values for the new row. Each element in the array must be either a string or an object with properties 'fieldValue' and 'readOnly'.
@param {string} [capId] - (Optional) The ID of the record to add the ASI table to. If not provided, the function will use the global variable 'capId'.
*/
declare function addASITable(tableName: string, tableValueArray: Array<{[key: string]: string | {fieldValue: string, readOnly: boolean}}>, capId?: string): void;

/**
Adds a new ASI table to the specified page flow in ACA.
@param {Object} destinationTableGroupModel - The table group model to add the new ASI table to.
@param {string} tableName - The name of the ASI table to add.
@param {Array<{[key: string]: string | {fieldValue: string, readOnly: boolean}}>} tableValueArray - An array of associative arrays representing the values for the ASI table.
Each element in the array should be either a string or an asiTableVal object (with properties "fieldValue" and "readOnly").
@param {string} [capId] - The cap ID to add the ASI table to (optional, defaults to the current cap ID).
@returns {boolean} - Returns true if the ASI table was successfully added, false if it was not.
*/
declare function addASITable4ACAPageFlow(destinationTableGroupModel: Object, tableName: string, tableValueArray: Array<{[key: string]: string | {fieldValue: string, readOnly: boolean}}>, capId?: string): boolean;

/**
*
@param {string} adHocProcess - must be same as one defined in R1SERVER_CONSTANT
@param {string} adHocTask - must be same as Task Name defined in AdHoc Process
@param {string} adHocNote - can be variable
@param {string} [AssignedToUserID] - must match an AA user
@param {CapIDModel} [capId] -
@returns {boolean} - returns true if task is successfully created, false otherwise
This function creates an ad-hoc task and assigns it to a user. The task is created using the adHocProcess, adHocTask, and adHocNote parameters. The task is also assigned to the user specified by the AssignedToUserID parameter, or the current user if no user is specified. The function also accepts an optional capId parameter.
*/
declare function addAdHocTask(adHocProcess: string, adHocTask: string, adHocNote: string, AssignedToUserID?: string, capId?: CapIDModel): boolean

/**
 * Adds a condition to an address or all addresses on a CAP.
 *
 * @param {number|null} addNum - The address number to add the condition to. If null, condition will be added to all addresses on the CAP.
 * @param {string} cType - The type of condition to add.
 * @param {string} cStatus - The status of the condition to add.
 * @param {string} cDesc - The description of the condition to add.
 * @param {string} cComment - Additional comments about the condition to add.
 * @param {string} cImpact - The impact of the condition on the address.
 * @returns {void}
 */
declare function addAddressCondition(addNum: number | null, cType: string, cStatus: string, cDesc: string, cComment: string, cImpact: string): void;

/**
Add a district value to an address or multiple addresses on a record.
@param {string|null} addrNum - The address number to add the district value to. If null, the district value will be added to all addresses on the record.
@param {string} districtValue - The district value to add.
*/
declare function addAddressDistrict(addrNum: string | null, districtValue: string): void

/**
addAddressStdCondition - function that adds a standard condition to a specific address or all addresses on the current record
@param {string} addNum - Address number to add the condition to. If not provided, condition will be added to all addresses on the current record
@param {string} cType - Type of condition (Example: "Building/Construction")
@param {string} cDesc - Description of the condition (Example: "Fire Sprinkler Required")
@param {string} [cStatus = "Applied"] - Status of the condition (Example: "Applied"). Default is "Applied"
*/
declare function addAddressStdCondition(addNum: string,cType: string,cDesc: string,cStatus: string)

/**

This function retrieves a list of fees from a specified fee schedule and creates new fee items for each fee, with the specified quantity and period. If the 'finvoice' parameter is set to 'Y', the fee sequence and period will be added to corresponding lists for invoice purposes.
@param {string} fsched - the fee schedule code
@param {string} fperiod - the fee period code
@param {number} fqty - the quantity of the fee
@param {string} finvoice - whether or not to invoice the fee
@returns {void}
*/
declare function addAllFees(fsched: string, fperiod: string, fqty: number, finvoice: string): void;

/**

This function adds a condition to a specific application. It references the global variable capId.
@param {string} cType - The type of condition to be added.
@param {string} cStatus - The status of the condition (i.e. "Applied", "Approved", etc.).
@param {string} cDesc - A brief description of the condition.
@param {string} cComment - Additional comments or notes about the condition.
@param {string} cImpact - The impact of the condition on the application (i.e. "Notice", "Hold", etc.).
@param {string} [conditionOfApproval] - The condition of approval for the application.
@returns {void}
*/
declare function addAppCondition(cType: string, cStatus: string, cDesc: string, cComment: string, cImpact: string, conditionOfApproval?: string): void;

/**
This function is used to add a standard condition to a contact on a record in Accela Automation. The function takes in three parameters: the sequence number of the contact, the type of the standard condition, and the description of the standard condition. If the contSeqNum parameter is null, the condition will be added to all contacts on the current record.
@param {string | null} contSeqNum - The sequence number of the contact to add the standard condition to. If null, the condition will be added to all contacts on the current record.
@param {string} cType - The type of the standard condition to add (e.g. "Building").
@param {string} cDesc - The description of the standard condition to add (e.g. "Accessibility").
@returns {void}
*/
declare function addContactStdCondition(contSeqNum: string | null, cType: string, cDesc: string): void;

/**
*

@param {string} feeSched - The schedule of the fee
@param {string} feeCode - The code of the fee
@param {string} feeDescr - The description of the fee
@param {number} feeAm - The fee amount
@param {string} feeAcc - The accounting code of the fee
@param {string} feePeriod - The period of the fee
@returns {void}
This function creates and adds a custom fee to the record using the provided parameters. If feePeriod is null, it defaults to "FINAL".
*/
declare function addCustomFee(feeSched: string, feeCode: string, feeDescr: string, feeAm: number, feeAcc: string | null, feePeriod: string | null): void;

/**

Adds a single fee to the specified CAP (or current CAP if no argument is provided)
@param {string} fcode - The fee code to be added
@param {string} fsched - The fee schedule for the fee
@param {string} fperiod - The payment period for the fee
@param {number} fqty - The quantity of the fee
@param {string} finvoice - Indicates if the fee should be invoiced or not (Y or N)
@param {CapIDModel} [fCap] - The CAP ID to add the fee to (optional, defaults to current CAP)
@returns {(string | null)} - The fee sequence number or null if an error occurred
*/
declare function addFee(fcode: string, fsched: string, fperiod: string, fqty: number, finvoice: string, fCap?: string): string | null;

/**
*
Used to add a single fee to a specific schedule on a specific date. It accepts several parameters and returns the fee's sequence number or null if an error is encountered.
@param {CapIDModel} feeCap - CapIDModel for the record the fee is being added to
@param {string} fdate - The date the fee is being added
@param {string} fcode - The code of the fee being added
@param {string} fsched - The schedule the fee is being added to
@param {string} fperiod - The period for which the fee is being added
@param {string} fqty - The quantity of the fee being added
@param {string} finvoice - Indicates if the fee should be invoiced or not
@returns {number | null} - The sequence number of the fee or null if error encountered
*/
declare function addFeeByDate(feeCap: string | null, fdate: string, fcode: string, fsched: string, fperiod: string, fqty: string, finvoice: string): number | null;

/**

This function adds a fee with extra data such as fee comment and UDF1 and UDF2 values.
@param {string} fcode - The fee code for the fee being added.
@param {string} fsched - The schedule for the fee being added.
@param {string} fperiod - The period for the fee being added.
@param {number} fqty - The quantity for the fee being added.
@param {string} finvoice - Indicates if the fee should be invoiced.
@param {CapIDModel} feeCap - The cap for the fee being added.
@param {string} feeComment - A comment for the fee being added.
@param {string} UDF1 - User defined field 1 for the fee being added.
@param {string} UDF2 - User defined field 2 for the fee being added.
@returns {number} feeSeq - The sequence number of the added fee. Or null if an error occurred.
*/
declare function addFeeWithExtraData(fcode: string, fsched: string, fperiod: string, fqty: string, finvoice: string, feeCap: string, feeComment: string | null, UDF1: string | null, UDF2: string | null): number | null;

/**

This function is used to add a fee with extra data and a specific date to a specific CAP.
@param {CapIDModel} feeCap - The CAP that the fee will be added to.
@param {string} fdate - The date that the fee will be added.
@param {string} fcode - The fee code that will be added.
@param {string} fsched - The fee schedule that the fee code belongs to.
@param {string} fperiod - The payment period for the fee.
@param {number} fqty - The quantity of the fee.
@param {string} finvoice - Indicates if the fee should be invoiced.
@param {string} feeComment - Any additional comments about the fee.
@param {string} UDF1 - User defined field 1 for the fee.
@param {string} UDF2 - User defined field 2 for the fee.
@return {number} feeSeq - The sequence number of the fee that was added. Or null if an error occurred.
*/
declare function addFeeWithExtraDataByDate(feeCap: string, fdate: string, fcode: string, fsched: string, fperiod: string, fqty: string, finvoice: string, feeComment: string | null, UDF1: string | null, UDF2: string | null): number | null;

/**

A function that creates a guide sheet for a given inspection and adds it to the specified item's record.
@param {CapIDModel} itemCapId - The item's record ID.
@param {number} inspectionId - The ID of the inspection for which the guide sheet will be added.
@param {string} guideSheetName - The name of the guide sheet to be added.
@returns {number} gsSequence - The sequence number of the created guide sheet.
*/
declare function addGuideSheet(itemCapId:CapIDModel,inspectionId:number,guideSheetName:String):number

/**

Adds a condition to a license professional or all license professionals associated with a CAP.
@param {string} cType - The type of the condition.
@param {string} cStatus - The status of the condition.
@param {string} cDesc - The description of the condition.
@param {string} cComment - A comment on the condition.
@param {string} cImpact - The impact of the condition.
@param {string} licNum(Optional) - The license number. If provided, the condition will only be added to the specified license professional.
@returns {void}
*/
declare function addLicenseCondition(cType: string, cStatus: string, cDesc: string, cComment: string, cImpact: string, licNum?: string): void;

/**

This function adds a standard condition to a specific license or all licenses associated with the current capId.
The condition is specified by its type and description.
The status of the condition can also be specified, with "Applied" as the default.
@param {string|null} licSeqNum - The license sequence number to add the condition to. If not specified, the condition will be added to all licenses associated with the current capId.
@param {string} cType - The type of the standard condition to be added.
@param {string} cDesc - The description of the standard condition to be added.
@param {string} [cStatus="Applied"] - The status of the condition to be added. Default is "Applied".
@returns {void} Void
*/
declare function addLicenseStdCondition(licSeqNum: string | null, cType: string, cDesc: string, cStatus?: string): void;

/**

Adds a new standard choice item to the specified standard choice list.
@param {string} stdChoice - The name of the standard choice list.
@param {string} stdValue - The value of the new standard choice item.
@param {string} stdDesc - The description of the new standard choice item.
@returns {boolean} - False if the standard choice item already exists, void otherwise.
*/
declare function addLookup(stdChoice: string, stdValue: string, stdDesc: string): false | void;

/**
 * Adds a key and a value to a hashtable.
 * @param {Hashtable} parameters - The hashtable to add the key and value to.
 * @param {string} key - The key to add to the hashtable.
 * @param {any} value - The value to add to the hashtable.
 * @returns {void} There is no return value. It adds the key and value to the hashtable indicated in the paramters.
 * @example
 * var parameters = aa.util.newHashtable();
 * addParameter(parameters, "key1", "value1");
 */
declare function addParameter(parameters: Hashtable, key : string, value : any): void

/**

This function adds a primary parcel and its owners to a specified cap ID using a reference address.
@param {string} refAddress - The reference address to use for adding the parcel and owners.
@param {CapIDModel} [capID] - (optional) The cap ID to add the parcel and owners to. If not provided, the function will use the global cap ID.
*/
declare function addParcelAndOwnerFromRefAddress(refAddress: string, capID?: CapIDModel): void;

/**

This function adds a condition to a parcel using the provided information. If a parcel number is not provided, the function will add the condition to all parcels associated with the current record.
@param {string} parcelNum - The parcel number to add the condition to. If not provided, the function will add the condition to all parcels associated with the current record.
@param {string} cType - The type of condition.
@param {string} cStatus - The status of the condition.
@param {string} cDesc - A brief description of the condition.
@param {string} cComment - Additional comments about the condition.
@param {string} cImpact - The impact of the condition.
@returns {void}
*/
declare function addParcelCondition(parcelNum: string | null, cType: string, cStatus: string, cDesc: string, cComment: string, cImpact: string): void;

/**

This function adds a district to a parcel or all parcels on a CAP.
If the parcel number is not provided, the district will be added to all parcels on the CAP.
@param {string} [parcelNum=null] - The parcel number to add the district to. If not provided, district will be added to all parcels on the CAP.
@param {string} districtValue - The district value to add to the parcel(s).
@returns {void}
*/
declare function addParcelDistrict(parcelNum: string | null, districtValue: string): void;

/**
*

This function adds the current application to the parent application specified in the parentAppNum parameter. It then uses the aa.cap.createAppHierarchy() function to link the current application to the parent application. If the link is successful, it logs a success message. If not, it logs an error message.
@param parentAppNum - The record id of the parent application.
@returns {void} - This function does not return a value but will log a success or error message.
*/
declare function addParent(parentAppNum: string | CapIDModel): void;

/**

This function is used to add public user's licensed professionals to a record. This references the global capId environment variable.
@param {string | null} itemCapId - Used for logging only.
@param {string} publicUser - The public user's username.
@returns {void}
*/
declare function addPublicUserLPsToRecord(itemCapId: string | null, publicUser: string): void;

/**

This function adds a reference contact to the current CAP by searching for a user with the provided first, middle, and last name.
@param {string} vFirst - The first name of the reference contact to add.
@param {string} vMiddle - The middle name of the reference contact to add.
@param {string} vLast - The last name of the reference contact to add.
@returns {number | null} - Returns the contact sequence number of the added reference contact if successful, or null if not successful.
*/
declare function addReferenceContactByName(vFirst: string, vMiddle: string, vLast: string): number | null;

/**

Adds a standard condition to the ApplicationSubmitBefore and PaymentReceiveBefore events.
@param {string} cType - The type of the condition (ex. "Building").
@param {string} cDesc - The description of the condition (ex. "Fire Safety").
@param {CapIDModel} itemCap(Optional) - The capId of the record to recieve the condition.
@return {void}
*/
declare function addStdCondition(cType: string, cDesc: string, itemCap?: CapIDModel): void;

/**
 * Adds a task to a record. If no cap ID is provided, the function will use the global cap ID.
 * @param sourceTaskName - The name of the task to add.
 * @param newTaskName - The name of the new task to add.
 * @param insertTaskType - The type of task to add. Must be "N" or "P" for "Next" or "Parallel".
 * @param itemCap - (Optional) The cap ID to add the task to. If not provided, the function will use the global cap ID.
 * @returns {TaskItemModel | null} - Returns the task item model of the added task if successful, or null if not successful.
 */
declare function addTask(sourceTaskName: string, newTaskName: string, insertTaskType: string, itemCap?: CapIDModel): TaskItemModel | null

/**
 * 
 * @param taskUser - The user to add the time accounting record to.
 * @param taGroup  - The time accounting group to add the time accounting record to.
 * @param taType  - The time accounting type to add the time accounting record to.
 * @param dateLogged - The date the time accounting record was logged.
 * @param hoursSpent  - The number of hours spent on the time accounting record.
 * @param itemCap - The cap ID to add the time accounting record to.
 * @param billableBool - A flag to indicate whether or not the time accounting record is billable.
 */
declare function addTimeAccountingRecord(taskUser, taGroup, taType, dateLogged, hoursSpent, itemCap, billableBool): void

/**
 * Adds a time accounting record to a workflow task.
 * @param taskUser the user to log the time accounting record for
 * @param taGroup the time accounting group
 * @param taType the time accounting type
 * @param dateLogged the date the time accounting record was logged
 * @param hoursSpent the number of hours spent on the task
 * @param itemCap the cap to log the time accounting for
 * @param taskName the workflow task to log the time accounting for
 * @param processName the workflow process to log the time accounting for
 * @param billableBool whether or not the time accounting record should be billable. If any truthy value is passed, the time accounting record will be billable.
 * @returns {boolean} true if the time accounting record was added, false if not
 * @example
 * 
 * // Add a time accounting record for the current user to the Inspection Completed task
 * addTimeAccountingRecordToWorkflow(currentUserID, "GENERAL", "INSP", sysDateMMDDYYYY, "1", capId, "Inspection Completed", "", false);
 * 
 */
declare function addTimeAccountingRecordToWorkflow(taskUser:any, taGroup: string, taType: string, dateLogged: string, hoursSpent: string, itemCap: CapIDModel, taskName: string, processName: string, billableBool: any): Boolean

/**
 * @name addToASITable
 * @description Adds a row to an ASI Table
 * @param {string} tableName The name of the ASI Table
 * @param {object} tableValues An associative array of values. All elements must be either a string or asiTableVal object
 * @param {CapIDModel} itemCap Optional capId
 * @returns {boolean} True if successful
 * @example
 * var tableValues = new Array();
 * tableValues["Column Name 1"] = "Value 1";
 * tableValues["Column Name 2"] = "Value 2";
 * addToASITable("Table Name", tableValues);
 */
declare function addToASITable(tableName: string,tableValues: object, itemCap?: CapIDModel):boolean

/**

This function is used to add a condition to an address or all addresses on a CAP. If the address number is not provided, the condition will be added to all addresses on the CAP. The function checks for duplicate conditions before adding a new one.
@param {string|null} pAddrNum - The address number to add the condition to. If null, the condition will be added to all addresses on the CAP.
@param {string} pType - The type of condition being added.
@param {string} pStatus - The status of the condition being added.
@param {string} pDesc - The description of the condition being added.
@param {string} pComment - A comment to be added with the condition.
@param {string} pImpact - The impact code of the condition being added.
@param {string} pAllowDup - A flag to indicate whether or not to allow duplicate conditions.
@returns {void} - This function does not return a value.
*/
declare function addrAddCondition(pAddrNum: string | null, pType: string, pStatus: string, pDesc: string, pComment: string, pImpact: string, pAllowDup: string): void;

/**
 * Checks if an address exists on the CAP.
 * @param itemCapId (Optional) - If provided, uses the provided capId, otherwise uses the global capId.
 * @returns {boolean} - Returns true if an address exists on the CAP, false if not.
 */
declare function addressExistsOnCap(itemCapId?): boolean;

/**
 * Returns true if all tasks are complete or inactive.
 * @param taskToHide The process code of tasks that should be ignored
 * @returns {Boolean} True if all tasks are complete
 */
declare function allTasksComplete(taskToHide: any): Boolean

/**
* Checks to see if conditions have been added to CAP
* @param {string|null} pType - condition type
* @param {any} pStatus - condition status
* @param {any} pDesc - condition description
* @param {any} pImpact - condition impact
* @returns {boolean} true if a matching condition is found, false if no matching condition is found
*/
declare function appHasCondition(pType: string | null, pStatus: any, pDesc: any, pImpact: any): boolean

/**

Compares the Application Type of the current record or a specified CapID with the input Application Type String.
@param {string} appTypeString - The Application Type String to compare with.
@param {CapID} [matchCapId] - The CapID to compare the Application Type with. If not provided, the function will use the global capID.
@return {boolean} - Returns true if the Application Type of the record matches the input Application Type String, false otherwise.
*/
declare function appMatch(appTypeString: string, matchCapId?: CapIDModel): boolean;

/**

Determines if the application name (gaName) has been used in previous CAPs of the same group (gaGroup) and type (gaType).
Bypasses the current CAP if the global variable capIDString is set.
@param {string} gaGroup - The group of the CAP.
@param {string} gaType - The type of the CAP.
@param {string} gaName - The name of the application.
@global {string} capIDString - A global variable used to bypass the current CAP.
@returns {boolean} True if the application name is unique, false if it has already been used in previous CAPs.
*/
declare function appNameIsUnique(gaGroup: string, gaType: string, gaName: string): boolean;

/**

Allocates a payment to fee items for a specific record.
Uses the global capId - Record ID for which payments will be allocated.
@returns {Boolean} - Returns true if payment is successfully allocated to fee items, returns false otherwise.
*/
declare function applyPayments(): boolean;

/**

Constructs an object representing a single value within an ASI table
@param {string} columnName - The name of the column in the ASI table
@param {string} fieldValue - The value of the field
@param {boolean} [readOnly=false] - Indicates if the field is read-only
@returns {asiTableValObj}
*/
declare function asiTableValObj(columnName: string, fieldValue: string, readOnly?: boolean): any;

/**

Assigns a cap to a specific user.
@param {string} assignId - ID of the user to assign the cap to.
@param {CapIDModel} [itemCap=capId] - ID of the cap to assign (optional, defaults to global capId).
@returns {boolean} - Returns false if unsuccessful.
*/
declare function assignCap(assignId: string, itemCap?: CapIDModel): false | void;

/**

Assign an inspection to a new user
@param {number} iNumber - Inspection number
@param {string} iName - User name or department name to be assigned to the inspection
@param {CapIDModel} [itemCap=capId] - Optional cap ID to specify which inspection to assign
@return {boolean} Returns false if the assignment failed, otherwise returns nothing
*/
declare function assignInspection(iNumber: number, iName: string, itemCap?: CapIDModel): false | void;
/**

Assigns the task to a user.
@param {string} wfstr - The task description to be assigned.
@param {string} username - The username to assign the task to.
@param {string} [processName] - The process name (optional).
@returns {boolean} Returns false if the task assignment failed, otherwise assigns the task and logs a message.
*/
declare function assignTask(wfstr: string, username: string, processName?: string): false | void;

/**

Associates a reference contact address to a record contact.
@param {CapIDModel} itemCap - The capId to associate the reference contact address to.
@param {number} cSeqNumber - The sequence number of the cap contact to associate the reference contact address to.
@param {any} rConAddrModel - The reference contact address model.
@returns {boolean} - Returns true if the reference contact address was successfully associated to the record contact, false otherwise.
*/
declare function associateRefContactAddressToRecordContact(itemCap: CapIDModel, cSeqNumber: number, rConAddrModel: object): boolean;

/**

@param {number} iNumber - The inspection ID number.
@returns {boolean} - false
*/
declare function autoAssignInspection(iNumber: number): false | void;

/**

Performs a standard choice action for a given standard choice value.
@param {string} stdChoice - The standard choice value to perform the action for.
@returns {undefined}
*/
declare function branch(stdChoice: string): void

/**

Closes a specified task and branches to a new task in the workflow.
@param {string} wfstr - The task description to close.
@param {string} wfstat - The status to set for the task.
@param {string} wfcomment - The comment to set for the task.
@param {string} wfnote - The note to set for the task.
@param {string} [processName] - The name of the subprocess. Optional.
@returns {false | void}
*/
declare function branchTask(wfstr: string, wfstat: string, wfcomment: string, wfnote: string, processName?: string): false | void;

/**

Checks if any licensed professional of specified type on a given CAP has expired, based on the expiration date type specified.
@param {string} pDateType - The type of expiration date to be checked (EXPIRE, INSURANCE, or BUSINESS).
@param {string} [pLicType] - The type of license to be checked (optional).
@param {CapIDModel} [pCapId] - The CAP id to be checked (optional, current CAP will be used if not provided).
@returns {boolean} True if any licensed professional has expired, false otherwise.
*/
declare function capHasExpiredLicProf(pDateType: string, pLicType?: string, pCapId?: CapIDModel): boolean;

/**

Filters the list of CAP IDs in pCapIdArray by file date, and returns only CAP IDs whose file date falls within the date range specified by pStartDate and pEndDate.
@param {CapIDModel[]} pCapIdArray - An array of CapIDModel objects to be filtered.
@param {string} pStartDate - The start date of the date range to filter by, in the format "mm/dd/yyyy".
@param {string} pEndDate - The end date of the date range to filter by, in the format "mm/dd/yyyy".
@returns {CapIDModel[]} An array of CapIDModel objects whose file dates fall within the specified date range.
*/
declare function capIdsFilterByFileDate(pCapIdArray: CapIDModel[], pStartDate: string, pEndDate: string): CapIDModel[];

/**

Gets CAPs with the same address as the current CAP.
@returns {CapIDModel[] | false} - Returns an array of CapIDModel objects or false if unsuccessful.
*/
declare function capIdsGetByAddr(): CapIDModel[] | false;

/**

Gets CAPs that have parcel pParcelNum, as capId (CapIDModel object) array (array includes current capId).
If parameter pParcelNum is null, uses 1st parcel on current CAP.
@param {string} [pParcelNum=null] - Parcel number.
@returns {CapIDModel[]} capIdParArray - An array of CapIDModel objects that have parcel pParcelNum or false if there was an error.
*/
declare function capIdsGetByParcel(pParcelNum?: string): CapIDModel[] | boolean;

/**

Constructs a capSet object with specified set ID. The capSet object provides methods for retrieving, adding, updating, and removing records from the set.
@param {any} desiredSetId - Required. The set ID for the capSet object to be constructed.
*/
declare function capSet(desiredSetId: any): void;

/**

This function checks if there is a licensed professional of a specific type associated with the global capId.
@param {string} licProfType - The type of licensed professional to check for.
@returns {boolean} True if the licensed professional of specified type is found, false otherwise.
*/
declare function checkCapForLicensedProfessionalType(licProfType: string): boolean

/**
*
Checks if the last uploaded document matches the specified document category.
@param {string} vDocCat - The document category to be compared.
@param {CapIDModel} capId - The capId of the record. May be optional and might use the global capID
@returns {boolean} - Returns true if the last uploaded document matches the specified document category, false otherwise.
*/
declare function checkForLastDocCat(vDocCat: string, capId: CapIDModel): boolean;


/**

Checks the inspection result for a specific inspection type and inspection status.
@param {string} insp2Check - The type of the inspection to check.
@param {string} insp2Result - The expected result of the inspection.
@return {boolean} - True if the inspection result matches the expected type and status, false otherwise.
*/
declare function checkInspectionResult(insp2Check: string, insp2Result: string): boolean

/**

This function checks if all the required fields on the global capId in the ASI are completed
@return {boolean} fieldsComplete - returns true if all required fields are complete, false otherwise
*/
declare function checkRequiredASIFields(): boolean;

/**

Returns the capId object of the first child of pParentCapId whose cap type matches pCapType parameter
@param {string} pCapType - The cap type to search for. Can use wildcard , e.g. "Building/Commercial//*"
@param {CapIDModel} pParentCapId - The parent capId to search within. If not provided, the current capId will be used.
@param {CapIDModel} [pChildCapIdSkip] - capId of child to skip. Optional.
@returns {CapIDModel | false} capId - The capId of the first child matching the cap type
*/
declare function childGetByCapType(pCapType: string, pParentCapId?: CapIDModel, pChildCapIdSkip?: CapIDModel): CapIDModel | false;

/**

Closes a cap and updates its details with the user and department information.
@param {string} userId - The ID of the user who will close the cap.
@param {CapIDModel} [itemCap=capId] - The ID of the cap to close.
@return {false | undefined} - Returns false if there's an error, otherwise returns undefined.
*/
declare function closeCap(userId: string, itemCap?: CapIDModel): false | undefined;

/**

Closes a sub-workflow.
@param {number} thisProcessID - The process ID of the sub-workflow to close.
@param {string} wfStat - The status to set the sub-workflow to when closing.
@param {CapIDModel} [itemCap=capId] - The ID of the record to close the sub-workflow for.
@returns {false | undefined} True if the sub-workflow was closed successfully, false otherwise.
*/
declare function closeSubWorkflow(thisProcessID: number, wfStat: string, itemCap?: CapIDModel): false | undefined;

/**

Closes a specific task in the workflow of a record with a provided status and comments.
@param {string} wfstr - Description of the task to be closed
@param {string} [wfstat="NA"] - Status to be set for the closed task
@param {string} wfcomment - Comment to be added to the closed task
@param {string} wfnote - Note to be added to the closed task
@param {string} [processName] - Name of the subprocess. If not provided, the task will be closed under the primary process.
*/
declare function closeTask(wfstr: string, wfstat: string, wfcomment: string, wfnote: string, processName?: string): void;

/**

Outputs a message to the debug log and/or displays a message on the screen.

if showDebug - Indicates whether to log the message to the debug log.

if showMessage - Indicates whether to display the message on the screen.
@param {string} cstr - The message to be outputted.
*/
declare function comment(cstr: string): void;

/**

Compares a peopleModel to the existing people and returns the sequence number of the first match found.
@param {PeopleModel} peop - The peopleModel to compare.
@returns {(number|null)} The sequence number of the first match found, or null if no matches are found.
*/
declare function comparePeopleGeneric(peop: PeopleModel): number | null;

/**

Compares people and returns the sequence number of the first G6Contact result.
@param {PeopleModel} peop - A single peopleModel object to compare.
@returns {number | false} Returns the sequence number of the first G6Contact result. Returns false if no matches are found.
*/
declare function comparePeopleStandard(peop: PeopleModel): number | false;

/**

Completes the CAP with the user ID provided as a parameter.
@param {string} userId - The ID of the user who will complete the CAP.
@param {CapIDModel} [itemCap=capId] - The ID of the CAP to complete. If not provided, the default is capId.
@returns {false | undefined} - Returns false if error, otherwise void.
*/
declare function completeCAP(userId: string, itemCap?: CapIDModel): false | undefined

/**

Adds a reference Contact record to the current CAP using a User's information.
@param {string} pUserId - the user ID to retrieve the reference Contact from. If not provided, the current user is used.
@returns {number|false} - the contact seq nbr if the reference contact was successfully added to the CAP. Returns false if an error occurred.
*/
declare function contactAddFromUser(pUserId: string): number | false;

/**
 * 
 * @param ccsm - The CapContactScriptModel object.
 * @returns {contactObj} - The contactObj object.
 * @example
 *var vContactObj = new contactObj(vCCSM);
*var contactRecordArray = vContactObj.getAssociatedRecords();
*var cParams = aa.util.newHashtable();
*vContactObj.getEmailTemplateParams(cParams);
 */
declare function contactObj(ccsm: any): any;

/**

Makes a contact the primary contact on the global capId.
@param {number} pContactNbr - The contact number.
@returns {boolean} - True if the contact was successfully set as the primary contact, false otherwise.
*/
declare function contactSetPrimary(pContactNbr: number): boolean;

/**

Edits the relationship for a specified contact on the global capId.
@param {number} pContactNbr - The contact number to edit.
@param {string} pRelation - The new relationship to set for the contact.
@return {boolean} Returns true if the relationship was successfully changed, false otherwise.
*/
declare function contactSetRelation(pContactNbr: number, pRelation: string): boolean;

/**

Converts an array of ContactAddressScriptModel objects to an array of ContactAddressModel objects.
@param {ContactAddressScriptModel[]} contactAddressScriptModelArr - An array of ContactAddressScriptModel objects.
@returns {ContactAddressModel[]} contactAddressModelArr - An array of ContactAddressModel objects.
*/
declare function convertContactAddressModelArr(contactAddressScriptModelArr: any): ContactAddressModel[];

/**

Converts a date value to a JavaScript date object.
@param {(string | object | number)} thisDate - The date value to be converted.
@returns {Date} The converted JavaScript date object or null if the date could not be parsed.
*/
declare function convertDate(thisDate: string | object | number): Date | null;

/**

Converts a given string to a phone number format
@param {string} theString - The string to be converted
@returns {string} - The converted phone number string
*/
declare function convertStringToPhone(theString: string): string;

/**

Copies the Application Specific Information (ASI) fields from one record to another.
@param {CapIDModel} sourceCapId - The source record's ID to copy ASI from.
@param {CapIDModel} targetCapId - The target record's ID to copy ASI to.
@param {string[]} [ignoreArray] - An optional list of checkbox types to ignore during the copy.
@returns {boolean} - Returns false if there was an error getting the source ASI information.
*/
declare function copyASIFields(sourceCapId: CapIDModel, targetCapId: CapIDModel, ignoreArray: string[]): boolean;

/**

Copies the ASI tables from one record to another
@param {CapIDModel} pFromCapId - The record ID to copy the ASI tables from.
@param {CapIDModel} pToCapId - The record ID to copy the ASI tables to.
@param {string[]} [ignoreArr] - Optional 0-based array of tables to ignore.
*/
declare function copyASITables(pFromCapId: CapIDModel, pToCapId: CapIDModel, ignoreArr?: string[]): void;

/**

Copies all property addresses from one Cap ID to another. If the target Cap ID is null, it copies to the current CAP.
@param {CapIDModel} pFromCapId - The Cap ID to copy addresses from.
@param {CapIDModel} [pToCapId=current CAP] - The Cap ID to copy addresses to.
@returns {number | false} - The number of addresses copied or false if an error occurred.
*/
declare function copyAddresses(pFromCapId: CapIDModel, pToCapId?: CapIDModel): number | false;

/**

Copies all App Specific information from the global AInfo into a new record
@param {CapIDModel} newCap - the new record to copy the information to
@param {string[]} [ignoreArr] - an optional array of fields to ignore during the copy
*/
declare function copyAppSpecific(newCap: CapIDModel, ignoreArr?: string[]): void

/**

Copies all App Specific information from a source record to a new record.
@param {CapIDModel} capFrom - The source record that the App Specific information will be copied from.
@returns {void}
*/
declare function copyAppSpecific4ACA(capFrom: CapIDModel): void;

/**

Copies the calculated values from one cap to another.
@param {CapIDModel} fromcap - The cap ID to copy the calculated values from.
@param {CapIDModel} newcap - The cap ID to copy the calculated values to.
*/
declare function copyCalcVal(fromcap: CapIDModel, newcap: CapIDModel): false | void;

/**

Copies conditions from one record to another.
@param {CapIDModel} fromCapId - The source cap id to copy conditions from.
@param {CapIDModel} [toCapId] - (optional) The destination cap id to copy conditions to. If not provided, the current cap id will be used.
@returns {boolean} Returns false if there was an error getting cap conditions, otherwise logs a success message for each condition added.
*/
declare function copyConditions(fromCapId: CapIDModel, toCapId?: CapIDModel): boolean;

/**

Copies conditions from a parcel to the global capID.
@param {string} parcelIdString - The parcel ID as a string
*/
declare function copyConditionsFromParcel(parcelIdString: string): void;

/**

Copies all contacts from one record to another.
@param {CapIDModel} [pFromCapId=null] - The source record from which the contacts will be copied. If not specified, the current record will be used.
@param {CapIDModel} [pToCapId=null] - The target record to which the contacts will be copied. If not specified, the current record will be used.
@returns {number} - The number of contacts that have been copied.
*/
declare function copyContacts(pFromCapId: CapIDModel, pToCapId: CapIDModel): number;

/**

Copies all contacts of a specified type from one CAP ID to another.
@param {CapIDModel} [pFromCapId=capId] - The source CAP ID to copy contacts from.
@param {CapIDModel} [pToCapId=capId] - The target CAP ID to copy contacts to. If not specified, the global capId will be used.
@param {String} pContactType - The type of contacts to be copied.
@returns {Number} - The number of contacts copied.
*/
declare function copyContactsByType(pFromCapId: CapIDModel, pToCapId: CapIDModel | null, pContactType: string): number;

/**

Copies the education information from one CAP to another.
@param {CapIDModel} srcCapId - The source CAP ID.
@param {CapIDModel} targetCapId - The target CAP ID.
*/
declare function copyEducation(srcCapId: CapIDModel, targetCapId: CapIDModel): void;

/**

Copies fees from a source cap to a target cap
@param {CapIDModel} sourceCapId - The source cap ID to copy fees from.
@param {CapIDModel} targetCapId - The target cap ID to copy fees to.
*/
declare function copyFees(sourceCapId: CapIDModel, targetCapId: CapIDModel): void;

/**

Copies all licensed professionals from source CapID to target CapID
@param {CapIDModel} sCapId - Source CapID to copy licensed professionals from
@param {CapIDModel} tCapId - Target CapID to copy licensed professionals to
*/
declare function copyLicensedProf(sCapId: CapIDModel, tCapId: CapIDModel): void

/**

Copies all owners from the source CAP (sCapID) to the target CAP (tCapID).
@param {CapIDModel} sCapID - The source CAP ID.
@param {CapIDModel} tCapID - The target CAP ID.
*/
declare function copyOwner(sCapID: CapIDModel, tCapID: CapIDModel): void

/**

Copies the owner(s) of the parcels associated with the global Cap ID to the current record.
*/
declare function copyOwnersByParcel(): void;

/**

Gets GIS objects associated with the parcel of a given capId to the cap.
@returns {false | undefined} - Returns false if there was an error getting the GIS objects, otherwise returns undefined.
*/
declare function copyParcelGisObjects(): false | undefined;

/**

Copies all parcels from one cap ID to another. If the target cap ID is not specified, it will be copied to the current CAP.
@param {CapIDModel} pFromCapId - The source cap ID to copy the parcels from.
@param {CapIDModel} [pToCapId=null] - The target cap ID to copy the parcels to. If not specified, the global capId will be used.
@returns {number} The number of parcels that were copied.
*/
declare function copyParcels(pFromCapId: CapIDModel, pToCapId?: CapIDModel): number;

/**

Copies all scheduled inspections from one CAP ID to another CAP ID.
@param {CapIDModel} [pFromCapId=null] - The source CAP ID to copy from.
@param {CapIDModel | null} [pToCapId=null] - The target CAP ID to copy to. If null, the function will copy to the current CAP.
@return {number} The number of copied scheduled inspections.
*/
declare function copySchedInspections(pFromCapId: CapIDModel, pToCapId: CapIDModel | null): number;

/**

Counts the number of active tasks on a given process of the global capId.
@param {String} processName - Name of the process to count active tasks for
@returns {Number | false} numOpen - Number of active tasks on the given process or false if an error occurred.
*/
declare function countActiveTasks(processName: string): number | false;

/**

Returns the count of identical inspections on the global capId.
@param {string} [oldDateStr="01/01/1900"] - The date string to compare the inspection status date with. If not provided, the default is "01/01/1900".
@returns {number} The count of identical inspections
*/
declare function countIdenticalInspections(oldDateStr?: string): number;

/**

Creates a new application and returns the capID object
@param {string} pCapType - The type of the application being created (Example: "Building/Residential/New Building/NA").
@param {string} pAppName - The name of the new application being created.
@return {CapIDModel | false} newId - The capID of the newly created application or false if an error occurred.
*/
declare function createCap(pCapType: string, pAppName: string): CapIDModel | false;

/**

Creates a cap comment for a record.
@param {string} vComment - Required comment text to be added to the record.
@param {CapIDModel} [CapId] - Optional CapId, the current capId will be used if not provided.
@param {string} [vDispOnInsp="N"] - Optional parameter to set whether the comment should be displayed on inspection reports. The default is "N".
*/
declare function createCapComment(vComment: string, CapId?: CapIDModel, vDispOnInsp?: string): void;

/**

Creates a new application related to the parent and returns the capID object
@param {string} grp - the group of the new application
@param {string} typ - the type of the new application
@param {string} stype - the subtype of the new application
@param {string} cat - the category of the new application
@param {string} desc - the description of the new application
@param {CapIDModel} [parentCap] - optional parent capId
@returns {CapIDModel} the capID object of the new application
@example
createChild("Building", "Residential", "Electrical", "NA", "Electrical Permit");
*/
declare function createChild(grp: string, typ: string, stype: string, cat: string, desc: string, parentCap?: CapIDModel): CapIDModel;

/**

Creates a license record with the specified initial status and the option to copy ASI information from the application.
@param {string} initStatus - The initial status to set the license to.
@param {boolean} [copyASI=false] - Determines whether to copy ASI information from the application to the license.
@returns {string} The custom ID of the newly created license.
*/
declare function createLicense(initStatus: string, copyASI?: boolean): string;

/**

Creates a parent record for the global capId and returns the new parents capID object.
@param {string} grp - The group type of the new application.
@param {string} typ - The type of the new application.
@param {string} stype - The subtype of the new application.
@param {string} cat - The category of the new application.
@param {string} desc - The description of the new application.
@returns {CapIDModel} The capID of the newly created application.
@example
createParent("Building", "Residential", "Electrical", "NA", "Electrical Permit");

*/
declare function createParent(grp: string, typ: string, stype: string, cat: string, desc: string): CapIDModel;

/**

Creates a pending inspection for each required inspection associated with the current cap ID.
@param {CapIDModel} [itemCap] - (optional) The Cap ID to create the pending inspection for. Defaults to the current cap ID.
*/
declare function createPendingInspFromReqd(itemCap?: CapIDModel): void;

/**

Creates a pending inspection for the given group and type.
@param {string} iGroup - The inspection group.
@param {string} iType - The inspection type.
@param {CapIDModel} [itemCap=capId] - The Cap ID. If none is provided, the global capId will be used.
@returns {boolean} Returns true if the pending inspection was successfully created, otherwise false.
*/
declare function createPendingInspection(iGroup: string, iType: string, itemCap?: CapIDModel): boolean;

/**

Creates a public user based on the contact information in the current record.
If a public user with the same email address already exists, it will return that user.
Otherwise, a new public user will be created and linked to the reference contact.
@param {string} [contactType=Applicant] - Optional - The type of contact to be used for creating the public user. If not provided, the default is "Applicant".
@returns {PublicUserModel} - A public user object.
*/
declare function createPublicUserFromContact(contactType?: string): PublicUserModel;

/**
Creates a new blank record based on the given 4 level record structure.
@param {string} grp - The group name of the new record.
@param {string} typ - The type name of the new record.
@param {string} stype - The subtype name of the new record.
@param {string} cat - The category name of the new record.
@param {string} desc - The description of the new record.
@returns {CapIDModel} - The capID object of the newly created record.
@example
createRecord("Building", "Residential", "Electrical", "NA", "Electrical Permit");

*/
declare function createRecord(grp: string, typ: string, stype: string, cat: string, desc: string): CapIDModel;

/**

Creates a new contact address from an address model for a reference contact.
@param {number} rSeqNbr - The reference contact sequence number.
@param {AddressModel} nAddrModel - The address model.
@param {string} addrType - The type of address.
@return {ContactAddressModel | false} Returns the created contact address model or false if the creation was unsuccessful.
*/
declare function createRefContactAddressFromAddress(rSeqNbr: number, nAddrModel: AddressModel, addrType: string): ContactAddressModel | false;

/**

Creates reference contacts from the CAP contacts and links them to the CAP.
@param {CapIDModel} pCapId - The ID of the CAP.
@param {string[]} [contactTypeArray] - An array of contact types to process. If null, all contact types will be processed.
@param {string[]} [ignoreAttributeArray] - An array of attributes to ignore when creating a REF contact. If null, no attributes will be ignored.
@param {boolean} [replaceCapContact] - Not implemented yet.
@param {boolean} [overwriteRefContact] - If true, the linked REF contact will be refreshed with the CAP contact data.
@param {function} refContactExists - A customizable function for REF contact comparisons. If it returns true, it uses that ref contact
*/
declare function createRefContactsFromCapContactsAndLink(pCapId: CapIDModel, contactTypeArray: string[] | null, ignoreAttributeArray: string[] | null, replaceCapContact: boolean, overwriteRefContact: boolean, refContactExists: Function): void;

/**

Creates a reference LP with the specified altID, license type, contact type, and contact address type.
@param {string} newLicIdString - Required. The license altID.
@param {string} newLicenseType - Required. The Ref LP license type.
@param {string} conType - Required. The contact type to use for the reference LP.
@param {string} conAddrType - Required. The contact address type to use for the reference LP.
@returns {undefined}
*/
declare function createRefLP4Lookup(newLicIdString: string, newLicenseType: string, conType: string, conAddrType: string): void;

/**

Creates or updates a reference licensed professional from a contact.
@param {string} rlpId - The state license ID of the reference licensed professional.
@param {string} rlpType - The type of the license.
@param {string} pContactType - The type of the contact to use.
@param {string} [addrTypeToCopy] - (optional) The type of the address to use.
@returns {false | undefined} False only if there is an error. Otherwise, undefined.
*/
declare function createRefLicProf(rlpId: string, rlpType: string, pContactType: string, addrTypeToCopy?: string): false | undefined;

/**

Creates or updates a reference license professional based on the information of the license professional on the global capId.
@return {string} The license number of the reference license professional, if created or updated successfully. Returns false if there are errors in getting the license professional from the application or creating/updating the reference license professional.
*/
declare function createRefLicProfFromLicProf(): string | false;


/**
 * Adds a specified number of days to a given date, with the option to consider working days only.
 * @param {string} td - The input date as a string in "mm/dd/yyyy" format or any string that converts to a JS date.
 * @param {number} amt - The number of days to add, can be positive or negative.
 * @param {boolean} [useWorking] - Optional. If true, only working days are considered while performing the date arithmetic.
 * @returns {string} The resulting date as a string in "mm/dd/yyyy" format.
 */
declare function dateAdd(td: string, amt: number, useWorking?: boolean): string;


/**
 * Adds specified number of months to a given date and returns the new date as a string in the format MM/DD/YYYY.
 * If the input date is on the last day of the month, the new date will also be the end of the month.
 * If the input date is not the last day of the month, the new date will have the same day of the month, unless such a day doesn't exist in the month, in which case the new date will be on the last day of the month.
 *
 * @param {string|null} pDate - The input date as a string, or null to use the current date.
 * @param {number} pMonths - The number of months to add or subtract, as a positive or negative integer.
 * @returns {string} The resulting date as a string in the format MM/DD/YYYY.
 */
declare function dateAddMonths(pDate: string | null, pMonths: number): string;

/**
 * Calculates the difference in days between two dates.
 *
 * @param {Date|string} date1 - The first date or a string in 'yyyy-mm-dd' format.
 * @param {Date|string} date2 - The second date or a string in 'yyyy-mm-dd' format.
 * @return {number} The number of days between date1 and date2.
 */
declare function dateDiff(date1: Date | string, date2: Date | string): number;

/**
 * Formats a given date as a string in either "YYYY-MM-DD" or "MM/DD/YYYY" (default) format.
 *
 * @param {number} pMonth - The month of the date (1-12).
 * @param {number} pDay - The day of the date (1-31).
 * @param {number} pYear - The year of the date.
 * @param {string} [pFormat="MM/DD/YYYY"] - The desired date format, either "YYYY-MM-DD" or "MM/DD/YYYY".
 * @returns {string} The formatted date string.
 */
declare function dateFormatted(pMonth: number, pDay: number, pYear: number, pFormat?: string): string;

/**
 * Returns the date of the next occurrence of a specified date (month and day) after a given date.
 * Optionally, the returned date can be restricted to an odd or even year.
 *
 * @param {string|number} pMonth - The target month (1-12).
 * @param {string|number} pDay - The target day (1-31).
 * @param {string|Date} pDate - The base date to find the next occurrence after, in YYYY-MM-DD format or as a Date object.
 * @param {string} [pOddEven] - Optional. 'ODD' for the next occurrence in an odd year, 'EVEN' for the next occurrence in an even year.
 * @returns {string} The next occurrence date in MM/DD/YYYY format.
 */
declare function dateNextOccur(pMonth: string | number, pDay: string | number, pDate: string | Date, pOddEven?: string): string;

/**
 * Deactivates active tasks in the given process.
 * 
 * @param {string} processName - The name of the process containing tasks to be deactivated.
 * @returns {boolean} - Returns false if failed to get workflow object; otherwise, no return value.
 */
declare function deactivateActiveTasks(processName: string): boolean | void;

/**
 * Deactivates a specified task in the workflow.
 * 
 * @param {string} wfstr - The name of the task to deactivate.
 * @param {string} [processName] - Optional process name for the task. If provided, only tasks with this process name will be deactivated.
 * @returns {boolean} Returns false if an error occurs; otherwise, no return value is provided.
 */
declare function deactivateTask(wfstr: string, processName?: string): boolean | void;  

/**
 * Decodes a base64 encoded string.
 *
 * @param {string} input - The base64 encoded string to decode.
 * @return {string} The decoded string.
 */
declare function decode64(input: string): string;

/**
 * Deletes a licensed professional along with public user associations.
 *
 * @param {LicenseScriptModel} lsm - A licenseScriptModel object.
*/
declare function deleteLicensedProfessional(lsm: LicenseScriptModel): void;

/**
 * Deletes a specified task from the workflow of a given CAP ID.
 *
 * @param {CapIDModel} targetCapId - The target CAP ID to delete the task from.
 * @param {string} deleteTaskName - The name of the task to be deleted.
 * @returns {boolean} Returns true if the task is deleted successfully, otherwise false.
 */
declare function deleteTask(targetCapId: CapIDModel, deleteTaskName: string): boolean;

/**
 * Generates a string representation of an object's properties and methods.
 *
 * @param {Object} obj - The object to describe.
 * @returns {string} The string representation of the object's properties and methods.
 */
declare function describe(obj: Object): string;

/**
 * Describes an object by logging its class, functions, and properties.
 *
 * @param {Object} obj2describe - The object to be described.
 */
declare function describeObject(obj2describe: Object): void;

/**
 * Includes multiple scripts based on the appTypeArray global object and a global prefix.
 * The function assumes that appTypeArray is an array with at least 4 elements, and
 * includes scripts following specific patterns.
 *
 * @global
 * @see appTypeArray - an array containing information about the application type.
 * @see prefix - a string that represents a common prefix for included scripts.
 */
declare function doScriptActions(): void;

/**
 * Executes or documents the standard choice actions specified by the given entry.
 *
 * @param {string} stdChoiceEntry - The standard choice entry to be executed or documented.
 * @param {boolean} doExecution - If true, execute the standard choice actions; if false, document the standard choice actions.
 * @param {number} docIndent - The indentation level for documentation purposes.
 */
declare function doStandardChoiceActions(stdChoiceEntry: string, doExecution: boolean, docIndent: number): void;

/**
 * Writes a formatted string to the output with optional header and indentation.
 *
 * @param {string} dstr - The string to be written to the output.
 * @param {boolean} [header=false] - If true, horizontal lines will be added before and after the string.
 * @param {number} [indent=0] - The number of indentation levels to add before the string.
 */
declare function docWrite(dstr: string, header?: boolean, indent?: number): void;

/**
 * Checks if an ASI (Application Specific Information) field exists on a record.
 * @param {string} asiFieldName - The name of the ASI field to check for existence.
 * @param {CapIDModel} [itemCap=capId] - Optional cap ID to check against. Defaults to the global capId if not provided.
 * @returns {boolean} - Returns true if the ASI field exists on the record, otherwise returns false.
 */
declare function doesASIFieldExistOnRecord(asiFieldName: string, itemCap: CapIDModel)


/**
 * Edits the application name of a record
 * @param {string} newname - The new name of the application
 * @param {CapIDModel} [itemCap] - Optional capId to edit the application name of
 * @returns {boolean} - True if the application name was successfully edited, false otherwise
 */
declare function editAppName(newname: string, itemCap?: CapIDModel): boolean

/**
 * Edits an app specific field
 * @param {string} itemName - The name of the app specific field
 * @param {string} itemValue - The value of the app specific field
 * @param {CapIDModel} [itemCap] - The capId of the record to update (optional)
 * @returns {boolean} - True if the update was successful, false otherwise
 */
declare function editAppSpecific(itemName: string, itemValue: string, itemCap?: CapIDModel): boolean
/**
 * Edits an app specific field in the record
 * @param {string} itemName - The name of the app specific field to edit
 * @param {string} itemValue - The value to set the app specific field to
 * @param {boolean} [useAppSpecificGroupName=false] - Whether or not to use the app specific group name when editing the field
 * @returns {void}
 */
declare function editAppSpecific4ACA(itemName: string, itemValue: string, useAppSpecificGroupName?: boolean): void


/**
 * Updates the building count for a given Cap ID
 * @param {number} numBuild - The number of buildings to set
 * @param {CapIDModel} [itemCap] - Optional Cap ID to update. Defaults to the global capId
 * @returns {boolean} - True if the update was successful, false otherwise
 */
declare function editBuildingCount(numBuild: number, itemCap?: CapIDModel): boolean


/**

 * Updates a condition with the pType and pDesc to pStatus and pStatusType, returns true if updates, false if not. Will not update if status is already pStatus && pStatusType. All parameters are required except for pType.

 * @param {string | null} [pType] - The type of the condition. 
 * @param {string} pDesc - The description of the condition.
 * @param {string} pStatus - The status of the condition.
 * @param {string} pStatusType - The status type of the condition.
 * @returns {boolean} - Returns true if updates, false if not. 
 */

declare function editCapConditionStatus($pType$: string | null, $pDesc$: string, $pStatus$: string, $pStatusType$: string): boolean

/**
 * Updates the attribute of a contact on a record
 * @param {number} contactSeq - The sequence number of the contact to update
 * @param {string} pAttributeName - The name of the attribute to update
 * @param {string} pNewAttributeValue - The new value of the attribute
 * @param {CapIDModel} [itemCap] - The capId of the record to update (optional)
 * @return {void}
 */
declare function editCapContactAttribute(contactSeq: number, pAttributeName: string, pNewAttributeValue: string, itemCap?: CapIDModel): void


/**
 * Updates the reported channel for a given CapId
 * @param {string} channel - The channel to update
 * @param {CapIDModel} [itemCap] - Optional CapId to update, defaults to current CapId
 * @returns {boolean} - True if successful, false if not
 */
declare function editChannelReported(channel: string, itemCap?: CapIDModel): boolean

/**
 * Updates the Construction Type Code for a given record
 * @param {string} constTypeCode - The Construction Type Code to be set
 * @param {CapIDModel} [itemCap] - Optional CapId to be used instead of the global capId
 * @returns {boolean} - True if the update was successful, false otherwise
 */
declare function editConstTypeCode(constTypeCode: string, itemCap?: CapIDModel): boolean
/**
 * Changes contact types from existingType to newType.
 * @param {string} existingType - The existing contact type.
 * @param {string} newType - The new contact type.
 * @param {CapIDModel} [capID] - Optional parameter for the cap ID.
 */
declare function editContactType(existingType: string, newType: string, capID?: CapIDModel): void


/**
 * Edits the Created By field of a record
 * @param {string} nCreatedBy - The name of the user to set as the Created By
 * @param {CapIDModel} [itemCap] - Optional capId to edit. If not provided, the current capId will be used
 * @returns {boolean} - True if successful, false if not
 */
declare function editCreatedBy(nCreatedBy: string, itemCap?: CapIDModel): boolean

/**
 * Updates the estimated job value in additional information
 * @param {number} jobValue - The estimated job value to be set
 * @param {CapIDModel} [itemCap] - The capId to update the estimated job value for (optional)
 * @returns {boolean} - True if the estimated job value was successfully updated, false otherwise
 */
declare function editEstimatedJobValue(jobValue: number, itemCap?: CapIDModel): boolean

/**
 * Updates the first issued date of a record
 * @param {Date} issuedDate - The new issued date
 * @param {CapIDModel} [itemCap] - Optional CapId to update the first issued date of
 * @returns {boolean} - True if the first issued date was successfully updated, false otherwise
 */
declare function editFirstIssuedDate(issuedDate: Date, itemCap?: CapIDModel): boolean


/**
 * Updates the house count of a given CapId.
 * @param {number} numHouse - The number of houses to set.
 * @param {CapIDModel} [itemCap] - The CapId to update. Defaults to the global capId.
 * @returns {boolean} - True if the house count was successfully updated, false otherwise.
 */
declare function editHouseCount(numHouse: number, itemCap?: CapIDModel): boolean

/**
 * Updates the required flag of an inspection milestone
 * @param {string} inspType - The type of inspection
 * @param {boolean} reqFlag - The required flag of the inspection
 * @param {CapIDModel} [itemCap] - The capId of the record (optional)
 * @returns {boolean} - True if successful, false if not
 */
declare function editInspectionRequiredFlag(inspType: string, reqFlag: boolean, itemCap?: CapIDModel): boolean

/**
 * Edits an existing lookup value in a standard choice
 * @param {string} stdChoice - The standard choice to edit
 * @param {string} stdValue - The value to edit
 * @param {string} stdDesc - The new description for the value
 * @returns {boolean} - Returns false if the value does not exist and is added
 */
declare function editLookup(stdChoice: string, stdValue: string, stdDesc: string): boolean


/**
 * Updates the priority of a record.
 * @param {string} priority - The priority to set the record to.
 * @param {CapIDModel} [itemCap] - The CapId of the record to update. Defaults to the current record.
 * @returns {boolean} - True if the priority was successfully updated, false otherwise.
 */
declare function editPriority(priority: string, itemCap?: CapIDModel): boolean

/**
 * Edits the value of an address attribute for a reference address.
 * 
 * @param {number} refAddressPK - The primary key of the reference address.
 * @param {string} label - The label of the address attribute to be edited.
 * @param {string} newValue - The new value for the address attribute.
 * 
 * @returns {boolean} - Returns true if the attribute was successfully edited, false otherwise.
 */
declare function editRefAddrAttr(refAddressPK: number, label: string, newValue: string): boolean


/**
 * Edits an attribute of a reference license professional
 * @param {string} pLicNum - The license number of the reference license professional
 * @param {string} pAttributeName - The name of the attribute to edit
 * @param {string} pNewAttributeValue - The new value of the attribute
 * @returns {boolean} - True if the attribute was successfully edited, false otherwise
 */
declare function editRefLicProfAttribute(pLicNum: string, pAttributeName: string, pNewAttributeValue: string): boolean


/**
* This function is intended to update reference parcel attributes and refresh the parcel information on the record. 
* If no parcel number is provided, it will update all parcels that contain the attributeName with the supplied attributeValue
*
* Call Example:
* 	editRefParcelAttribute("DELINQUENT TAXES","No","048072002")


/**
 * Updates the reported channel for a given capId
 * @param {string} reportedChannel - The reported channel to update
 * @param {CapIDModel} [itemCap] - Optional CapId to update the reported channel for
 * @returns {boolean} - True if the reported channel was successfully updated, false otherwise
 */
declare function editReportedChannel(reportedChannel: string, itemCap?: CapIDModel): boolean


/**
 * Updates the first issued date of a record
 * @param {Date} issuedDate The new first issued date
 * @param {CapIDModel} [itemCap] Optional CapId to update the first issued date of. Defaults to the current CapId.
 * @returns {boolean} True if the first issued date was successfully updated, false otherwise
 */
declare function editFirstIssuedDate(issuedDate: Date, itemCap?: CapIDModel): boolean


/**
 * Sets the visibility of a task and comment in ACA for a given workflow task
 * @param {string} wfstr - The workflow task to be edited
 * @param {boolean} visibleTask - Whether or not the task should be visible in ACA
 * @param {boolean} visibleComment - Whether or not the comment should be visible in ACA
 * @param {string} restrictRole - A string of five binary digits representing the roles that should have access to the task and comment
 * @param {string} [processName] - The name of the subprocess (optional)
 * @returns {boolean} - True if successful, false if not
 */
declare function editTaskACAVisibility(wfstr: string, visibleTask: boolean, visibleComment: boolean, restrictRole: string, processName?: string): boolean

/**
 * Edits the comment of a task in a workflow
 * @param {string} wfstr - The workflow task to edit
 * @param {string} wfcomment - The comment to set
 * @param {string} [processName] - The name of the subprocess (optional)
 * @returns {boolean} - True if successful, false if not
 */
declare function editTaskComment(wfstr: string, wfcomment: string, processName?: string): boolean

/**
 * Edits the due date of a workflow task
 * @param {string} wfstr - The workflow task to be edited
 * @param {string} wfdate - The new due date for the workflow task
 * @param {string} [processName] - The name of the subprocess (optional)
 * @returns {boolean} - True if successful, false if not
 */
declare function editTaskDueDate(wfstr: string, wfdate: string, processName?: string): boolean

/**
 * Updates a task specific info field for a given workflow task
 * @param {string} wfName - The name of the workflow task
 * @param {string} itemName - The name of the task specific info field
 * @param {string} itemValue - The value to set the task specific info field to
 * @param {CapIDModel} [itemCap] - Optional capId to use for the update (defaults to current capId)
 * @returns {boolean} - True if the update was successful, false otherwise
 */
declare function editTaskSpecific(wfName: string, itemName: string, itemValue: string, itemCap?: CapIDModel): boolean

/**
 * Sends an email to the specified recipient.
 * @param {string} pToEmail - The email address of the recipient.
 * @param {string} pFromEmail - The email address of the sender.
 * @param {string} pSubject - The subject of the email.
 * @param {string} pText - The body of the email.
 * @param {string} [env] - The environment the email is being sent in.
 * @returns {boolean} - True if the email was sent successfully.
 */
declare function email(pToEmail: string, pFromEmail: string, pSubject: string, pText: string, env?: string): boolean


/**
 * Sends an email to the specified contact type
 * @param {string} mSubj - The subject of the email
 * @param {string} mText - The body of the email
 * @param {string} [contactType=Applicant] - The contact type to send the email to
 * @returns {void}
 */
declare function emailContact(mSubj: string, mText: string, contactType?: string): void
/**
 * Encodes a string into base64
 * @param {string} input - The string to be encoded
 * @returns {string} The encoded string in base64
 */
declare function encode64(input: string): string


/**
 * Stops execution of the current std choice
 * 
 * @returns {void}
 */
declare function endBranch(): void

/**
 * Executes an ASI table as if it were script commands
 * @param {any[]} tableArray - An array of objects containing the ASI table data
 * @param {Date} [thisDate] - A Date object (optional)
 * @param {Number} [thisTime] - A time value (optional)
 */
declare function executeASITable(tableArray: any[]): void

/**
 * Checks if a value exists in an array
 * @param {any} eVal - The value to check for
 * @param {any[]} eArray - The array to check in
 * @returns {boolean} - True if the value exists in the array, false otherwise
 */
declare function exists(eVal: any, eArray: any[]): boolean


/**
 * Calculates the total fee amount for a given CapId, excluding any fees with a fee code in the optional parameter array
 * @param {CapIDModel} checkCapId - The CapId to calculate the fee amount for
 * @param {string[]} [exceptArray] - An optional array of fee codes to exclude from the calculation
 * @returns {number} The total fee amount for the given CapId, excluding any fees with a fee code in the optional parameter array
 */
declare function feeAmountExcept(checkCapId: CapIDModel, exceptArray?: string[]): number

/**
 * Searches payment fee items and returns the unpaid balance of a fee item
 * Sums fee items if more than one exists.
 * 
 * @param {string} [feestr] - The fee code to search for
 * @param {string} [feeSch] - Optional fee schedule
 * 
 * @returns {number} The unpaid balance of the fee item
 */
declare function feeBalance(feestr?: string, feeSch?: string): number


/**
 * Searches payment fee items and returns the unpaid balance of a fee item
 * @param {number} searchDays - Days in future or past to search for ex. -120 would search for today -120 days
 * @param {string} [feestr] - Fee Code to search for
 * @param {string} [feeSch] - Optional Fee Schedule
 * @returns {number} - The unpaid balance of a fee item
 */
declare function feeBalanceFromDate(searchDays: number, feestr?: string, feeSch?: string): number

/**
 * Gets total for fees assessed during date range
 * @param {Date} pStartDate - Start date of the date range
 * @param {Date} pEndDate - End date of the date range
 * @param {String[]} [statusArray] - Optional fee statuses to check for
 * @returns {Number} feesTotal - Total of applicable fees
 */
declare function feeCopyByDateRange(pStartDate: Date, pEndDate: Date, statusArray?: string[]): number


/**
 * Checks if a fee exists on the current record
 * @param {string} feestr - The fee code to check for
 * @param {string} [...statuses] - Optional statuses to check for
 * @returns {boolean} - True if the fee exists, false otherwise
 */
declare function feeExists($feestr$: string, ...$statuses$: string[]): boolean

/**
 * Gets total for fees assessed during date range
 * @param {Date} pStartDate - Start date of date range
 * @param {Date} pEndDate - End date of date range
 * @param {String[]} [statusArray] - Optional fee statuses to check for
 * @returns {Number} feesTotal - Total of applicable fees
 */
declare function feeGetTotByDateRange(pStartDate: Date, pEndDate: Date, statusArray?: String[]): Number

/**
 * Calculates the quantity of a fee item
 * @param {string} feestr - The fee code to calculate the quantity of
 * @returns {number} feeQty - The quantity of the fee item
 */
declare function feeQty(feestr: string): number


/**
 * Generates a report file which can be attached to an email.
 * @param {CapIDModel} itemCap - The cap ID of the record.
 * @param {string} reportName - The name of the report.
 * @param {string} module - The module of the report.
 * @param {Object} [parameters] - Optional parameters for the report.
 * @returns {string} The report file.
 */
declare function generateReport(itemCap: CapIDModel, reportName: string, module: string, parameters?: Object): string


/**
 * Generates a report for a given workflow item
 * @param {CapIDModel} itemCap - The capId of the workflow item
 * @param {string} reportName - The name of the report to generate
 * @param {string} module - The module of the report to generate
 * @param {HashMap
 * } parameters - The parameters of the report to generate
 * @return {ReportResultModel} reportOutput - The output of the report
 */
declare function generateReport4Workflow($itemCap$: CapIDModel, $reportName$: string, $module$: string, $parameters$: HashMap): ReportResultModel


/**
 * Creates a generic template object from a given template
 * @param {EntityPKModel} gtmp - The template to create the generic template object from
 * @returns {Object} - The generic template object
 */
declare function genericTemplateObject(gtmp: EntityPKModel): Object
/**
 * Adds additional parameters to a hashtable for document download
 * @param {Object} params - The hashtable to add parameters to
 * @param {String} acaUrl - The URL of the ACA site
 * @param {DocumentModel} docModel - The document model
 * @returns {Object} The updated hashtable
 */
declare function getACADocDownloadParam4Notification(params: Object, acaUrl: String, docModel: DocumentModel): Object
/**
 * Retrieves the ACA URL for the supplied document model
 * @param {string} acaUrl - The base ACA URL
 * @param {DocumentModel} documentModel - The document model
 * @returns {string} acaDocUrl - The ACA URL for the supplied document model
 */
declare function getACADocumentDownloadUrl(acaUrl: string, documentModel: DocumentModel): string
/**
 * Adds additional parameters to a hashtable for use in notifications
 * @param {Object} params - The hashtable to add parameters to
 * @param {String} acaUrl - The URL of the ACA record
 * @returns {Object} The hashtable with additional parameters added
 */
declare function getACARecordParam4Notification(params: Object, acaUrl: String): Object

/**
 * Gets the ACA record URL
 * @param {string} acaUrl - The URL of the ACA site
 * @param {global.CapID} capId - The global CapID object
 * @param {global.Cap} cap - The global Cap object
 * @param {global.AgencyCode} aa - The global AgencyCode object
 * @returns {string} The ACA record URL
 */
declare function getACARecordURL(acaUrl: string): string

/**
 * Returns the path to the record on ACA.
 * @param {CapIDModel} [itemCap] - Optional CapID to use instead of the global capId.
 * @returns {string} The path to the record on ACA.
 */
declare function getACAUrl(itemCap?: CapIDModel): string


/**
 * Retrieves the county of an address of a specified type
 * @param {string} aType - The type of address to retrieve the county of
 * @param {string} [capId] - Optional Cap ID to use for address retrieval
 * @return {string} The county of the address, or false if not found
 */
declare function getAddressCountyByAddressType(aType: string, capId?: string): string


/**
 * Retrieves the address line of a given address type for a given capId
 * @param {string} aType - The address type to retrieve
 * @param {string} [itemCap] - The capId to retrieve the address line from (optional)
 * @returns {string|boolean} The address line or false if not found
 */
declare function getAddressLineByAddressType(aType: string, itemCap?: string): string | boolean
/**
 * Retrieves the conditions for a given capId and adds them to the params object
 * 
 * @param {Object} params - The object to add the conditions to
 * @param {String} [pType] - Optional parameter to filter the conditions by type
 * @param {String} [pStatus] - Optional parameter to filter the conditions by status
 * @param {String} [pDesc] - Optional parameter to filter the conditions by description
 * @param {String} [pImpact] - Optional parameter to filter the conditions by impact
 * @returns {Object} params - The object with the conditions added
 */
declare function getAppConditions(params: Object, pType?: String, pStatus?: String, pDesc?: String, pImpact?: String): Object

/**
 * Returns the cap Id string of an application based on App-Specific Info and applicationtype.  Returns first result only!
 * @param {string} ASIName - The name of the App-Specific Info field
 * @param {string} ASIValue - The value of the App-Specific Info field
 * @param {string} ats - The application type string
 * @returns {string} - The cap Id string of the application
 */
declare function getAppIdByASI(ASIName: string, ASIValue: string, ats: string): string

/**
 * Retrieves the cap Id string of an application that has group, type, and name
 * @param {string} gaGroup - The group of the application
 * @param {string} gaType - The type of the application
 * @param {string} gaName - The name of the application
 * @returns {string} The cap Id string of the application
 */
declare function getAppIdByName(gaGroup: string, gaType: string, gaName: string): string

/**
 * Retrieves the value of an app specific field
 * @param {string} itemName - The name of the app specific field
 * @param {CapIDModel} [itemCap] - The capId of the record to retrieve the app specific field from (optional)
 * @return {string} The value of the app specific field
 */
declare function getAppSpecific(itemName: string, itemCap?: CapIDModel): string

/**
 * Retrieves the capId object of an application
 * @param {string} appNum - The application number
 * @returns {CapIDModel} The capId object of the application
 */
declare function getApplication(appNum: string): CapIDModel

/**
 * Retrieves CSLB information for a given license number and populates the license professional record with the data.
 * @param {boolean} [doPop=false] - Populate the cap lic prof with this data.
 * @param {boolean} [doWarning=false] - Message if license is expired.
 * @requires getNode and getProp functions.
 * @returns {boolean} - Returns true if successful, false if not.
 */
declare function getCSLBInfo(doPop?: boolean, doWarning?: boolean): boolean

/**
 * Returns the capid that matches the current address and app type string.
 * If multiple records will return the first and warning.
 * 
 * @param {string} ats - The application type string.
 * @returns {string} The capid that matches the current address and app type string.
 */
declare function getCapByAddress(ats: string): string

/**
 * Retrieves the capId from the script environment
 * @return {CapIDModel} The capId from the script environment
 */
declare function getCapId(): CapIDModel


/**
 * Retrieves all caps related to a contact by reference number and checks for matching conditions
 * @param {CapIDModel} itemCap - The cap ID to search for related caps
 * @param {String} capType - The type of cap to search for
 * @param {String} [pType] - Optional parameter for the type of condition to search for
 * @param {String} [pStatus] - Optional parameter for the status of the condition to search for
 * @param {String} [pDesc] - Optional parameter for the description of the condition to search for
 * @param {String} [pImpact] - Optional parameter for the impact of the condition to search for
 * @returns {CapIDModel[]} matchingCapArray - An array of CapIDModels that match the conditions
 */
declare function getCapsWithConditionsRelatedByRefContact($itemCap$: CapIDModel, $capType$: string, $pType$?: string, $pStatus$?: string, $pDesc$?: string, $pImpact$?: string): CapIDModel[]

/**
 * Retrieves the child tasks of a given task name
 * @param {string} taskName - The name of the task to retrieve the child tasks of
 * @param {string} [itemCap] - Optional parameter for the cap ID to use (defaults to the global CapIDModel)
 * @returns {any[]} - An array of child tasks
 */
declare function getChildTasks(taskName: string, itemCap?: string): any[]
/**
 * Retrieves an array of children capId objects whose cap type matches pCapType parameter
 * @param {string} pCapType - The cap type to search for. Wildcard * may be used, e.g. Building/Commercial/Permit/*
 * @param {CapIDModel} [pParentCapId] - The capId of the parent to search for children of. If not provided, the current capId will be used.
 * @param {CapIDModel} [pChildCapIdSkip] - Optional capId of child to skip
 * @returns {capId[]} An array of capId objects
 */
declare function getChildren(pCapType: string, pParentCapId?: CapIDModel, pChildCapIdSkip?: CapIDModel): CapIDModel[]

/**
 * Returns an array of associative arrays with contact attributes.  Attributes are UPPER CASE
 * @param {string} [capid] - Optional capid
 * @returns {Array} - An array of associative arrays with contact attributes
 */
declare function getContactArray(capid?: string): any[]
/**
 * Returns an array of associative arrays with contact attributes.  Attributes are UPPER CASE
 * @param {string} [capid] - Optional capid
 * @returns {Array.<Object>} - An array of associative arrays with contact attributes.
 */
declare function getContactArrayBefore(capid?: string): Array<Object>
/**
 * Retrieves a contact from a given capId based on contact type
 * @param {string} conType - The contact type to search for
 * @param {string} capId - The capId to search for the contact in
 * @returns {object} - The contact object if found, false otherwise
 */
declare function getContactByType(conType: string, capId: string): object


/**
 * Retrieves the first contact of a specified type on a record
 * @param {CapIDModel} itemCap - The record to search for the contact
 * @param {String} typeToLoad - The type of contact to search for
 * @returns {contactObj} - The contact object of the specified type
 */
declare function getContactObj(itemCap: CapIDModel, typeToLoad: string): any
/**
 * Retrieves a contact object from the given itemCap and seqNbr
 * @param {CapIDModel} itemCap - The CapID of the record
 * @param {number} seqNbr - The contact sequence number
 * @returns {contactObj} - The contact object associated with the given itemCap and seqNbr 
 */
declare function getContactObjsBySeqNbr(itemCap: CapIDModel, seqNbr: number): any

/**
 * Retrieves contact objects associated with a given cap
 * @param {CapIDModel} itemCap - The cap to retrieve contacts from
 * @param {String[]} [typesToLoad] - Optional array of contact types to retrieve
 * @param {boolean} [returnOnlyOne] - Optional boolean to indicate if only one contact should be returned
 * @returns {contactObj[]} An array of contact objects
 */
declare function getContactObjs(itemCap: CapIDModel, typesToLoad?: String[], returnOnlyOne?: boolean): any[]
/**
 * Retrieves contact objects associated with a given cap.
 * @param {aa.Cap} itemCap - The cap to retrieve contacts from.
 * @param {String[]} [typesToLoad] - Optional array of contact types to filter by.
 * @param {boolean} [returnOnlyOne] - Optional boolean to return only one contact object instead of an array.
 * @returns {contactObj[]|contactObj} - An array of contact objects or a single contact object.
 */
declare function getContactObjsByCap(itemCap: CapIDModel, typesToLoad?: string[], returnOnlyOne?: boolean): any[] | any
/**
 * Adds additional parameters to a hashtable based on contact type
 * 
 * @param {Object} params - The hashtable to add parameters to
 * @param {String} conType - The contact type to retrieve
 * @returns {Object} The hashtable with additional parameters added
 */
declare function getContactParams4Notification(params: Object, conType: String): Object
/**
 * Calculates the difference in days between the current system date and the date provided
 * @param {Date} DatetoComp The date to compare against the system date
 * @returns {Number} The difference in days between the two dates
 */
declare function getDateDiff(DatetoComp: Date): number

/**
 * Retrieves the department name for a given username
 * @param {string} username - The username of the user
 * @returns {string} The department name of the user
 */
declare function getDepartmentName(username: string): string

/**
 * Determines the operation type based on the docModelList
 * @param {Object} docModelList - The list of docModels
 * @returns {String} The operation type
 */
declare function getDocOperation(docModelList: Object): String


/**
 * Retrieves a list of documents associated with the current capId
 * @returns {DocumentModel[]} An array of DocumentModel objects
 */
declare function getDocumentList(): DocumentModel[]

/**
 * Retrieves GIS objects within a given buffer distance of a Cap
 * @param {string} svc - The GIS service name
 * @param {string} layer - The GIS layer name
 * @param {number} numDistance - The buffer distance
 * @param {...string} [attributes] - Optional additional attributes to return
 * @returns {object[]} An array of associative arrays containing the GIS objects
 */
declare function getGISBufferInfo(svc: string, layer: string, numDistance: number, ...attributes: string[]): object[]

/**
 * Retrieves GIS information for a given service, layer, and attribute name
 * @param {string} svc - The GIS service name
 * @param {string} layer - The GIS layer name
 * @param {string} attributename - The GIS attribute name
 * @return {string} retString - The GIS attribute value
 */
declare function getGISInfo(svc: string, layer: string, attributename: string): string

/**
 * Retrieves an array of attribute values from a GIS layer for a given Cap ID
 * 
 * @param {string} svc - The GIS service name
 * @param {string} layer - The GIS layer name
 * @param {string} attributename - The GIS attribute name
 * @returns {string[]} retArray - An array of attribute values
 */
declare function getGISInfoArray(svc: string, layer: string, attributename: string): string[]

/**
 * Retrieves an array of guide sheet objects
 * @param {number} inspId - The ID of the inspection
 * @param {CapIDModel} [itemCap] - Optional parameter to specify the cap ID to load from
 * @requires guideSheetObject definition
 * @returns {any[]} An array of guide sheet objects
 */
declare function getGuideSheetObjects(inspId: number, itemCap?: CapIDModel): any[]

/**
* Add Inspection Result Parameters for use in Notification Templates. 
* This should be called from InspectionResultSubmitAfter Event
*
* @param {HashMap} params 
* @return {HashMap}
*/
declare function getInspectionResultParams4Notification(params)

/**
* Add Inspection Schedule After Parameters for use in Notification Templates. 
* This should be called from InspectionScheduleAfter Event
*
* @param {HashMap} params 
* @param {String} [inspId] 
* @param {String} [inspInspector] 
* @param {String} [InspectorFirstName] 
* @param {String} [InspectorMiddleName] 
* @param {String} [InspectorLastName] 
* @param {String} [inspGroup] 
* @param {String} [inspType] 
* @param {String} [inspSchedDate] 
* @return {HashMap}
*/
declare function getInspectionScheduleParams4Notification($params$: HashMap): HashMap

/**
 * Retrieves the inspector ID (string) of the scheduled inspection. Returns the first result.
 * @param {string} insp2Check - The inspection type to check for.
 * @returns {string} The inspector ID of the scheduled inspection.
 */
declare function getInspector(insp2Check: string): string


/**
 * Returns the inspector ID (string) of the last inspector to result the inspection.
 * @param {string} insp2Check - The inspection type to check.
 * @returns {string} The inspector ID of the last inspector to result the inspection.
 */
declare function getLastInspector(insp2Check: string): string

/**
 * Returns the inspector ID (string) of the last inspector that is assigned to the inspection.
 * @param {string} insp2Check - The inspection type to check.
 * @returns {string} The inspector ID of the last inspector assigned to the inspection.
 */
declare function getLastScheduledInspector(insp2Check: string): string

/**
 * Retrieves the license professionals associated with a given capId
 * @param {CapIDModel} itemcapId - The capId to retrieve license professionals from
 * @returns {LicenseProfessional[]} capLicenseArr - An array of license professionals associated with the given capId
 */
declare function getLicenseProfessional(itemcapId: CapIDModel): LicenseProfessionalModel[]

/**
 * Retrieves the next sequence number for the given mask name.
 * 
 * @param {string} maskName - The name of the mask to retrieve the next sequence number for.
 * @returns {string} The next sequence number for the given mask name.
 */
declare function getNextSequence(maskName: string): string
/**
 * Retrieves the value of a node from a string
 * @param {string} fString - The string to search
 * @param {string} fName - The name of the node to search for
 * @returns {string} The value of the node
 */
declare function getNode(fString: string, fName: string): string


/**
 * Gets the owner(s) of a parcel by capid
 * @param {CapIDModel} capId - The capid of the parcel
 * @returns {any[]} - An array of owners associated with the parcel
 */
declare function GetOwnersByParcel($capId$: CapIDModel): any[]

/**
 * Retrieves parcel conditions based on the given parameters
 * @param {string} [pType] - The type of condition
 * @param {string} [pStatus] - The status of the condition
 * @param {string} [pDesc] - The description of the condition
 * @param {string} [pImpact] - The impact of the condition
 * @param {CapIDModel} [capID] (optional) - The cap ID to use
 * @returns {condMatchObj[]} - An array of condition match objects
 */
declare function getParcelConditions(pType?: string, pStatus?: string, pDesc?: string, pImpact?: string, capID?: CapIDModel): ParcelConditionModel[]

/**
 * Retrieves the capId object of the parent. Assumes only one parent.
 * 
 * @return {CapIDModel} The capId object of the parent.
 */
declare function getParent(): CapIDModel


/**
 * Returns the capId object of the parent. Assumes only one parent!
 * @param {CapIDModel} itemCap - The capId of the record.
 * @returns {CapIDModel} - The capId of the parent record.
 */
declare function getParentByCapId(itemCap: CapIDModel): CapIDModel
/**
 * Retrieves the parent license CAP ID for a renewal record
 * 
 * @global aa
 * @returns {CapIDModel} The parent license CAP ID
 */
declare function getParentCapID4Renewal(): CapIDModel

/**
 * Retrieves the parent license cap ID for a given child cap ID
 * @param {CapIDModel} itemCap - The child cap ID
 * @returns {CapIDModel} The parent license cap ID, or null if not found
 */
declare function getParentLicenseCapID(itemCap: CapIDModel): CapIDModel


/**
 * Returns the capId array of all parent caps
 * 
 * @param {string} [pAppType] - Optional parameter for the application type pattern
 * @returns {CapID[]} - An array of CapID objects
 */
declare function getParents(pAppType?: string): CapIDModel[]
/**
 * Retrieves the partial CAP ID from a given CAP ID
 * @param {CapIDModel} capid - The CAP ID to retrieve the partial CAP ID from
 * @returns {CapIDModel} The partial CAP ID associated with the given CAP ID
 */
declare function getPartialCapID(capid: CapIDModel): CapIDModel
/**
 * Retrieves an array of people associated with a given capId
 * 
 * @param {CapIDModel} capId - The capId to retrieve people from
 * @returns {CapContactScriptModel[]} An array of people associated with the given capId, or null if none are found
 */
declare function getPeople(capId: CapIDModel): CapContactScriptModel[]
/**
 * Adds the primary address line to the params hashtable
 * @param {Hashtable} params - The hashtable to add the primary address line to
 *  @returns {Hashtable} The params hashtable with the primary address line added
 */
declare function getPrimaryAddressLineParam4Notification(params: Hashtable): Hashtable
/**
 * Adds primary owner parameters to a hashtable for use in notifications
 * 
 * @param {Hashtable} params - The hashtable to add parameters to
 * @returns {Object} The hashtable with the added parameters
 */
declare function getPrimaryOwnerParams4Notification(params: Hashtable): Object

/**
 * Retrieves the value of a property from a string
 * @param {string} fString - The string to search
 * @param {string} fName - The name of the property to search for
 * @returns {string} The value of the property
 */
declare function getProp(fString: string, fName: string): string
 /**

 * Adds additional parameters to a hashtable for use in notifications

 * @param {Object} params - The hashtable to add parameters to

 * @param {String} altID - The alternate ID of the record

 * @param {String} capName - The name of the record

 * @param {String} capStatus - The status of the record

 * @param {String} fileDate - The file date of the record

 * @param {String} balanceDue - The balance due of the record

 * @returns {Object} params - The hashtable with additional parameters added

 */

declare function getRecordParams4Notification(params: Object): Object

/**
 * Retrieves a reference license professional based on a state license number
 * 
 * @param {string} refstlic - The state license number
 * @returns {LicenseScriptModel} refLicObj - The reference license professional object
 */
declare function getRefLicenseProf(refstlic: string): LicenseScriptModel

/**
 * Returns an array of capids that share the same address as the current cap
 * @param {string} ats - The Application Type String
 * @returns {any[]} retArr - An array of capids
 */
declare function getRelatedCapsByAddress(ats: string): any[]

/**
 * Returns an array of capids that match parcels on the current app. Includes all parcels.
 * @param {string} ats - App type string to check for
 * @returns {any[]} - An array of capids
 */
declare function getRelatedCapsByParcel(ats: string): any[]
/**
 * Gets the renewal CAP by parent CAPID for review
 * 
 * @param {CapIDModel} parentCapid - The parent CAPID
 * @returns {aa.ProjectScriptModel} The renewal CAP for review, or null if not found 
 */
declare function getRenewalCapByParentCapIDForReview(parentCapid: CapIDModel): any

/**
 * Retrieves the Reported Channel from the Cap Detail Model
 * @param {CapIDModel} [itemCap] - Optional CapId to use instead of the global capId
 * @returns {string} - The Reported Channel
 */
declare function getReportedChannel($itemCap$?: CapIDModel): string
/**
 * Retrieves the root node of a given nodeId.
 * 
 * @param {CapIDModel} nodeId - The CapID of the node to retrieve the root node of.
 * @param {number} [depth=0] - The depth of the node.
 * @returns {CapIDModel} The root node of the given nodeId.
 */
declare function getRootNode(nodeId: CapIDModel, depth?: number): CapIDModel
/**
 * Retrieves the root node of a given project.
 * @param {string} nodeId - The node ID of the project.
 * @returns {CapIDModel[]} An array of CapIDModel objects representing the root nodes of the project.
 */
declare function getRoots(nodeId: string): CapIDModel[]
 /**
 * Retrieves the ID of the first scheduled occurrence of an inspection
 * @param {string} insp2Check - The type of inspection to check for
 * @return {string|boolean} The ID of the first scheduled occurrence of the inspection, or false if none is found
 */
declare function getScheduledInspId(insp2Check: string): string | boolean

/**
 * Gets the standard choices domain for this application type.
 * Uses free-form alphanumeric indexing. All enabled script controls will execute.
 * 
 * @param {string} strControl - The control to get the standard choices domain for.
 * @returns {any[]} An array of pairObj objects.
 */
declare function getScriptAction(strControl: string): any[]

/**
 * Gets the standard choices domain for this application type.
 * @param {string} strControl - The control to get the standard choices domain for.
 * @returns {any[]} An array of pairObj objects.
 */
declare function getScriptAction_v1_6(strControl: string): any[]

/**
 * Retrieves the script text for a given script name
 * @param {string} vScriptName - The name of the script to retrieve
 * @param {string} [servProvCode] - The service provider code (optional)
 * @param {boolean} [useProductScripts] - Whether or not to use product scripts (optional)
 * @returns {string} The script text
 */
declare function getScriptText(vScriptName: string, servProvCode?: string, useProductScripts?: boolean): string

/**
 * Retrieves the short notes from the Cap Detail Model
 * @param {CapIDModel} [itemCap] - Optional CapID to use instead of the global capId
 * @returns {string} - The short notes from the Cap Detail Model
 */
declare function getShortNotes(itemCap?: CapIDModel): string


/**
 * Retrieves the due date of a task
 * @param {string} wfstr - The task description
 * @param {string} [processName] - The name of the process (optional)
 * @returns {Date} The due date of the task
 */
declare function getTaskDueDate(wfstr: string, processName?: string): Date


/**
 * Gets the task status for a given workflow group
 * @param {string} stask - The workflow group to get the task status for
 * @returns {string} - The task statuses for the given workflow group
 */
declare function getTaskStatusForEmail(stask: string): string

/**
 * Retrieves the URL to a new record of the specified type
 * @param {string} ACAURL - The URL of the Accela Citizen Access website
 * @param {string} servProvCode - The service provider code
 * @param {string} group - The group of the record type
 * @param {string} typetype - The type of the record type
 * @param {string} subtype - The subtype of the record type
 * @param {string} category - The category of the record type
 * @returns {string|boolean} The URL to the new record or false if no service was found
 */
declare function getURLToNewRecord(ACAURL: string, servProvCode: string, group: string, typetype: string, subtype: string, category: string): string | boolean

/**
 * Retrieves the email address of a user
 * @param {string} [userId] - Optional parameter for userid
 * @returns {string|boolean} - The email address of the user or false if not found
 */
declare function getUserEmail(userId?: string): string | boolean

/**
 * Retrieves the full name of a user
 * @param {string} [userId] - Optional parameter for userid
 * @returns {string|boolean} - The full name of the user or false if not found
 */
declare function getUserFullName(userId?: string): string | boolean


/**
 * Returns an array of userObj objects for all users in the system
 * 
 * @return {userObj[]} Array of userObj objects
 */
declare function getUserObjs(): SysUserScriptModel[]


/**
 * getUserObjsByDiscipline
 * Description: Returns an array of userObj objects for all users in the system that match userDiscipline
 * 
 * @param userDiscipline {string}
 * @return array {userObj}
 */
declare function getUserObjsByDiscipline(userDiscipline: string): SysUserScriptModel[]


/**
 * getUserObjsByDisciplineAndDistrict
 * Description: Returns an array of userObj objects for all users in the system that match userDiscipline and districtName
 * 
 * @param userDiscipline {string}
 * @param districtName {string} (optional)
 * @return array {userObj}
 */
declare function getUserObjsByDisciplineAndDistrict(userDiscipline: string, districtName?: string): SysUserScriptModel[]


/**
 * getUserObjsByDistrict
 * Description: Returns an array of userObj objects for all users in the system that match districtName
 * 
 * @param districtName {string} - The district name to search for
 * @return array {userObj} - An array of userObj objects
 */
declare function getUserObjsByDistrict(districtName: string): SysUserScriptModel[]


/**
* Add Workflow Task Update After Parameters for use in Notification Templates. 
* This should be called from WorkflowTaskUpdateAfter Event
*
* @param {HashMap} params - The HashMap to add parameters to
* @param {String} [wfTask] - The workflow task
* @param {String} [wfStatus] - The workflow status
* @param {String} [wfDate] - The workflow date
* @param {String} [wfComment] - The workflow comment
* @param {String} [wfStaffUserID] - The workflow staff user ID
* @param {String} [wfHours] - The workflow hours
* @return {HashMap} - The HashMap with added parameters
*/
declare function getWorkflowParams4Notification(params: HashMap, wfTask?: String, wfStatus?: String, wfDate?: String, wfComment?: String, wfStaffUserID?: String, wfHours?: String): HashMap


/**
 * Creates a guideSheetObject object
 * @param {GGuideSheetModel} gguidesheetModel - The GGuidesheetModel object
 * @param {GGuideSheetItemModel} gguidesheetItemModel - The GGuidesheetItemModel object
 * @returns {void}
 */
declare function guideSheetObject(gguidesheetModel: GGuideSheetModel, gguidesheetItemModel: GGuideSheetItemModel): void

/**
 * Handles an error by logging it and optionally rolling back a transaction
 * @param {Error} err - The error object
 * @param {String} context - The context in which the error occurred
 * @param {Boolean} [rollBack=true] - Whether or not to roll back a transaction
 * @param {Boolean} [showError=true] - Whether or not to show the error
 */
declare function handleError(err: Error, context: String, rollBack?: Boolean, showError?: Boolean): void


/**
 * Checks if the target CAP has a primary address
 * @param {CapIDModel} capID - The CAP ID to check
 * @returns {boolean} - True if the target CAP has a primary address, false otherwise
 */
declare function hasPrimaryAddressInCap(capID: CapIDModel): boolean

/**
 * Encodes XML data for use in a web page
 * @param {string} xmlData - The XML data to be encoded
 * @returns {string} The encoded XML data
 */
declare function xmlEscapeXMLToHTML(xmlData: string): string

/**
 * Includes a script in the current environment
 * @param {string} s - The script to include
 * @param {Date} thisDate - The current date
 * @param {number} thisTime - The current time
 * @param {string} st - The script text
 * @returns {void}
 */
declare function include(s: string): void


/**
 * Attaches a subprocess to a task
 * @param {string} taskName - The name of the task to attach the subprocess to
 * @param {string} process - The name of the subprocess to attach
 * @param {boolean} completeReqd - Indicates if the task must be completed before the subprocess can be started
 * @param {string} [itemCap] - Optional capId to use instead of the global capId (global)
 * @returns {boolean} - True if the subprocess was successfully attached, false otherwise
 */
declare function insertSubProcess(taskName: string, process: string, completeReqd: boolean, itemCap?: string): boolean


/**
 * Inserts a new task into the workflow
 * @param {string} sourceTaskName - The name of the source task
 * @param {string} newTaskName - The name of the new task
 * @param {string} insertTaskType - The type of task to insert (N or P)
 * @param {CapIDModel} [itemCap] - The CapID to use (optional)
 * @returns {Task} The new task item
 */
declare function insertTask(sourceTaskName: string, newTaskName: string, insertTaskType: string, itemCap?: CapIDModel): any

/**
 * Cancels all inspections on the given record
 * @param {CapIDModel} capId - The record ID
 * @returns {boolean} isCancelled - True if all inspections were cancelled, false otherwise
 */
declare function inspCancelAll(capId: CapIDModel): boolean


/**
 * Invoices all assessed fees having fcode and fperiod
 * 
 * @param {string} fcode - The fee code
 * @param {string} fperiod - The fee period
 * @returns {boolean} feeFound - Indicates if the fee was found
 */
declare function invoiceFee($fcode$: string, $fperiod$: string): boolean
/**
 * Checks if a string is blank
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is blank, false otherwise
 */
declare function isBlank(str: string): boolean
/**
 * Retrieves the root node of a given nodeId
 * @param {CapIDModel} nodeId - The CapID of the node to retrieve the root node of
 * @param {number} [depth=1] - The depth of the root node to retrieve
 * @returns {CapIDModel} - The CapID of the root node 
 */
declare function getRootNode(nodeId: CapIDModel, depth?: number): CapIDModel
/**
 * Compares two CapContactScriptModel objects to determine if they are a match.
 * 
 * @param {CapContactScriptModel} capContactScriptModel - The first CapContactScriptModel object to compare.
 * @param {CapContactScriptModel} capContactScriptModel2 - The second CapContactScriptModel object to compare.
 * 
 * @returns {boolean} - True if the two CapContactScriptModel objects are a match, false otherwise.
 */
declare function isMatchPeople(capContactScriptModel: CapContactScriptModel, capContactScriptModel2: CapContactScriptModel): boolean

/**
 * Checks if a license is ready to be renewed
 * @param {CapIDModelModel} capid - The CAP ID to check
 * @returns {boolean} - True if the license is ready to be renewed, false otherwise
 */
declare function isReadyRenew(capid: CapIDModel): boolean

/**
 * Checks to see if the renewal process can be initiated
 * 
 * @param {CapIDModel} parentCapID - The parent CAP ID
 * @param {CapIDModel} partialCapID - The partial CAP ID
 * @returns {boolean} - True if the renewal process can be initiated, false otherwise
 */
declare function isRenewProcess(parentCapID: CapIDModel, partialCapID: CapIDModel): boolean
/**
 * Checks if two nodes are the same
 * @param {Object} node1 - The first node to compare
 * @param {Object} node2 - The second node to compare
 * @returns {boolean} - True if the nodes are the same, false otherwise
 */
declare function isSameNode(node1: Object, node2: Object): boolean

/**
 * Checks if an inspection type is scheduled for the current record
 * @param {string} inspType - The inspection type to check for
 * @returns {boolean} - True if the inspection type is scheduled, false otherwise
 */
declare function isScheduled(inspType: string): boolean

/**
 * Checks if a task is active
 * @param {string} wfstr - The task name
 * @param {string} [processName] - The process name (optional)
 * @returns {boolean} - True if the task is active, false otherwise
 */
declare function isTaskActive(wfstr: string, processName?: string): boolean

/**
 * Checks if a task is complete
 * @param {string} wfstr - The task name
 * @param {string} [processName] - The subprocess name (optional)
 * @returns {boolean} - True if the task is complete, false otherwise
 */
declare function isTaskComplete(wfstr: string, processName?: string): boolean

/**
 * Checks if the task status of a workflow task matches the given status
 * @param {string} wfstr - The workflow task to check
 * @param {string} wfstat - The status to check against
 * @param {string} [processName] - The name of the subprocess (optional)
 * @returns {boolean} - True if the task status matches the given status, false otherwise
 */
declare function isTaskStatus(wfstr: string, wfstat: string, processName?: string): boolean

/**
 * Converts a Javascript Date to an ASI 0 pad MM/DD/YYYY
 * @param {Date} dateValue - The date to be converted
 * @returns {string} - The converted date in MM/DD/YYYY format
 */
declare function jsDateToASIDate(dateValue: Date): string

/**
 * Converts a JavaScript Date object to a string in MM/DD/YYYY format
 * @param {Date} pJavaScriptDate - The JavaScript Date object to convert
 * @returns {string} - The date in MM/DD/YYYY format
 */
declare function jsDateToMMDDYYYY(pJavaScriptDate: Date): string
/**
 * Edits expiration status and/or date
 * @param {string} pExpStatus - The new expiration status
 * @param {date} pExpDate - The new expiration date
 * @requires licenseObject
 */
declare function licEditExpInfo(pExpStatus: string, pExpDate: Date): void

/**
 * Creates a licenseObject object
 * @param {string} licnumber - The license number
 * @param {CapIDModel} [itemCap] - Optional renewal Cap ID -- uses the expiration on the renewal CAP.
 * @returns {any}
 */
declare function licenseObject(licnumber: string, itemCap?: CapIDModel): any
/**
 * Links a public user to a contact type.
 * @param {string} [contactType='Applicant'] - The contact type to link the public user to.
 * @returns {PublicUserModel} The public user model.
 */
declare function linkPublicUserToContact(contactType?: string): PublicUserModel

/**
 * Loads an ASI Table from the specified Cap ID
 * @param {string} tname - The name of the ASI Table to load
 * @param {string} [itemCap] - Optional Cap ID to load from
 * @returns {any[]} - An array of objects containing the ASI Table values
 */
declare function loadASITable(tname: string, itemCap?: string): any[]

/**
 * Loads App Specific tables into their own array of arrays.  Creates global array objects
 * 
 * @param {CapIDModel} [itemCap] - Optional parameter, cap ID to load from
 * @returns {void}
 */
declare function loadASITables(itemCap?: CapIDModel): void

/**
 * Loads App Specific tables into their own array of arrays.  Creates global array objects
 * 
 * @param {CapIDModel} [itemCap] - Optional parameter, cap ID to load from.  If no CAP Id specified, use the capModel
 * @returns {void} 
 */
declare function loadASITables4ACA(itemCap?: CapIDModel): void


/**
 * Loads App Specific tables into their own array of arrays.  Creates global array objects
 */
declare function loadASITablesBefore(): void

/**
 * Loads an associative array of Address Attributes.
 * 
 * @param {Object} thisArr - The associative array to be populated with address attributes.
 * @param {CapIDModel} [itemCap] - Optional cap ID to load from.
 * @returns {void}
 */
declare function loadAddressAttributes(thisArr: Object, itemCap?: CapIDModel): void

/**
 * Loads address attributes from the ACA cap model into an associative array
 * 
 * @param {Object} thisArr - Associative array to store address attributes
 * @requires cap - Global object
 */
declare function loadAddressAttributes4ACA(thisArr: Object): void

/**
 * Loads App Specific Info into an associative array
 * @param {Object} thisArr - Associative array to load App Specific Info into
 * @param {String} [itemCap] - Optional cap ID to load from
 */
declare function loadAppSpecific(thisArr: Object, itemCap?: String): void


/**
 * Loads App Specific Info into an associative array
 * @param {Object} thisArr - Associative array to load App Specific Info into
 * @param {String} [itemCap] - Optional Cap ID to load from
 * @param {Boolean} [useAppSpecificGroupName] - Optional boolean to indicate whether to use the App Specific Group Name
 */
declare function loadAppSpecific4ACA(thisArr: Object, itemCap?: String, useAppSpecificGroupName?: Boolean): void


/**
 * Loads the App Specific information for a contact
 * @param {Object} thisArr - An object to store the App Specific information
 * @param {Number} contactSeqNbr - The sequence number of the contact
 * @param {CapIDModel} [itemCap] - Optional parameter for the CapID to use (defaults to the current CapIDModel)
 * @returns {void}
 */
declare function loadAppSpecific4Contact(thisArr: Object, contactSeqNbr: number, itemCap?: CapIDModel): void

/**
 * Loads the fees into an array of objects.
 * @param {CapIDModel} [capId] - Optional Cap ID to use.
 * @returns {any[]} An array of Fee objects.
 */
declare function loadFees(capId?: CapIDModel): any[]

/**
 * Loads the guide sheet items for a given inspection
 * @param {string} inspId - The ID of the inspection
 * @param {string} [itemCap] - Optional cap ID to load from
 * @returns {Object} - An associative array of Guide Sheet Items
 */
declare function loadGuideSheetItems(inspId: string, itemCap?: string): Object

/**
 * Loads parcel attributes into an associative array
 * @param {Object} thisArr - Associative array to store parcel attributes
 * @param {CapIDModel} [itemCap] - Optional cap ID to load from
 * @returns {void}
 */
declare function loadParcelAttributes(thisArr: Object, itemCap?: CapIDModel): void

/**
 * Loads task specific information into an array
 * @param {Object[]} thisArr - Array to store task specific information
 * @param {CapIDModel} [itemCap] - Optional cap ID to load from
 * @returns {boolean} - True if successful, false if not
 */
declare function loadTaskSpecific(thisArr: Object[], itemCap?: CapIDModel): boolean
/**
 * Loads tasks for a given cap ID
 * @param {string} ltcapidstr - The cap ID to load tasks for
 * @returns {Task[]} An array of Task objects
 */
declare function loadTasks($ltcapidstr$: string): Task[]

/**
 * Logs a debug message to the system log.
 * @param {string} dstr - The debug message to log.
 * @param {number} [vLevel=1] - The debug level to log the message at.
 */
declare function logDebug(dstr: string, vLevel?: number): void

/**
 * Logs the values of global variables
 * @param {any[]} globArray - An array of global variables
 * @returns {void}
 */
declare function logGlobals(globArray: any[]): void

/**
 * Logs a message to the console
 * @param {string} dstr - The message to log
 * @requires console
 */
declare function logMessage(dstr: string): void

/**
 * Looks up a standard choice value based on the supplied parameters
 * @param {string} stdChoice - The standard choice to look up
 * @param {string} stdValue - The value to look up
 * @return {string} strControl - The description of the standard choice value
 */
declare function lookup(stdChoice: string, stdValue: string): string

/**
 * Looks up a date range from a standard choice
 * @param {string} stdChoiceEntry - The standard choice entry to look up
 * @param {Date} dateValue - The date to compare against
 * @param {number} [valNumber] - Optional parameter to return a specific value from the standard choice
 * @return {string} The value from the standard choice
 */
declare function lookupDateRange(stdChoiceEntry: string, dateValue: Date, valNumber?: number): string
/**
 * Looks up fees based on a given valuation
 * @param {string} stdChoiceEntry - The standard choice entry to use for the lookup
 * @param {string} stdChoiceValue - The standard choice value to use for the lookup
 * @param {number} capval - The cap value to use for the lookup
 * @param {number} [valNumber] - Optional parameter to indicate which value to return
 * @returns {number} The fee associated with the given valuation
 */
declare function lookupFeesByValuation(stdChoiceEntry: string, stdChoiceValue: string, capval: number, valNumber?: number): number

/**
 * Looks up fees based on a sliding scale
 * @param {string} stdChoiceEntry - The standard choice entry to lookup
 * @param {string} stdChoiceValue - The standard choice value to lookup
 * @param {number} capval - The cap value to use for the lookup
 * @param {number} [valNumber] - Optional parameter to specify the value number to return (defaults to 2)
 * @returns {number} The fee value
 */
declare function lookupFeesByValuationSlidingScale(stdChoiceEntry: string, stdChoiceValue: string, capval: number, valNumber?: number): number


/**
 * Loops through a workflow task and closes it with the given status
 * @param {string} wfstr - The workflow task to loop through
 * @param {string} wfstat - The status to close the workflow task with
 * @param {string} wfcomment - The comment to add to the workflow task
 * @param {string} wfnote - The note to add to the workflow task
 * @param {string} [processName] - The name of the subprocess (optional)
 * @returns {boolean} - Returns true if successful, false if not
 */
declare function loopTask(wfstr: string, wfstat: string, wfcomment: string, wfnote: string, processName?: string): boolean

/**
 * Creates a new set of license professionals
 * @param {string} desiredSetId - The desired set ID
 * @param {string} [name] - The name of the set (optional)
 * @param {string} [type] - The type of the set (optional)
 * @param {string} [comment] - The comment of the set (optional)
 */
declare function lpSet(desiredSetId: string, name?: string, type?: string, comment?: string): void


/**
 * Checks if a value matches any of the following arguments
 * @param {any} eVal - The value to check
 * @param {any} argList - The list of arguments to check against
 * @returns {boolean} - Returns true if value matches any of the arguments
 */
declare function matches(eVal: any, argList: any): boolean
/**
 * Returns the next work day
 * @param {Date} [td] - The date to start from (optional)
 * @returns {Date} The next work day
 */
declare function nextWorkDay(td?: Date): Date
 /**
  * Opens a new window with the given URL
  * @param {string} myurl - The URL to open in the new window
  * @requires showDebug or showMessage must be true for this to work
  */
 declare function openUrlInNewWindow(myurl: string): void


/**
 * Creates a pairObj object with the given activity ID
 * @param {string} actID - The activity ID
 */
declare function pairObj(actID: string): void

/**
 * Checks if a parcel condition exists for a given condition type
 * @param {string} condtype - The condition type to check for
 * @returns {boolean} - True if the condition exists, false otherwise
 */
declare function parcelConditionExists(condtype: string): boolean

/**
 * Checks if a parcel exists on the current or specified cap
 * @param {string} [itemCap] - Optional cap ID to load from
 * @returns {boolean} - True if parcel exists, false if not
 */
declare function parcelExistsOnCap(itemCap?: string): boolean


/**
 * Performs the following:
 * Retrieves primary trust account on capId 
 * Initiates payment from identified trust account for the ammount of the fee associated with fseqNbr
 * If payment successful applies payment in full to fee associated with fseqNbr
 * Generates receipt for payment for fee associated with fseqNbr
 * 
 * @param {number} fSeqNbr - The fee sequence number associated with the fee to be paid
 * @param {CapIDModel} [itemCap] - Optional parameter to specify the capId to use for the payment. If not specified, the current capId will be used.
 * @returns {boolean} - Returns true if payment was successful, false otherwise
 */
declare function paymentByTrustAccount(fSeqNbr: number, itemCap?: CapIDModel): boolean


/**
 * This function performs the following:
 * Retrieve primary trust account on capId 
 * Initiates payment from identified trust account for the ammount of the fee associated with fseqNbr
 * If payment successful applies payment in full to fee associated with fseqNbr
 * Generates receipt for payment for fee associated with fseqNbr
 * If any of the above fails returns false, otherwise will return true.
 * Fee must be invoiced for function to work, use optional capId parameter with addFee() call to ensure fee is invoiced prior to this function being called.
 * 
 * @param {number} fSeqNbr - The fee sequence number associated with the fee to be paid.
 * @param {CapIDModel} [itemCap] - Optional parameter to specify the capId to use for the payment.
 * @returns {boolean} - Returns true if payment is successful, false otherwise.
 */
declare function paymentByTrustAccount(fSeqNbr: number, itemCap?: CapIDModel): boolean
 /**
  * Gets the total amount not applied on the current CAP
  * @param {CapIDModel} capId - The CAP ID to get the total amount not applied for
  * @return {number} The total amount not applied on the current CAP
  */
declare function paymentGetNotAppliedTot(capId: CapIDModel): number

/**
 * Prepares a renewal record for a parent record
 * @param {CapIDModel} parentCapId - The CapIDModel of the parent record
 * @param {CapIDModel} capId - The CapIDModel of the renewal record
 * @returns {boolean} - True if the renewal record was successfully prepared, false otherwise
 */
declare function prepareRenewal(parentCapId: CapIDModel, capId: CapIDModel): boolean

/**
 * Checks if the application has a GIS object in proximity
 * @param {string} svc - The GIS service name
 * @param {string} layer - The GIS layer name
 * @param {number} numDistance - The distance to check
 * @param {string} [distanceType="feet"] - The type of distance to check (optional, defaults to "feet")
 * @returns {boolean} - True if the application has a GIS object in proximity
 */
declare function proximity(svc: string, layer: string, numDistance: number, distanceType?: string): boolean

/**
 * Checks if the application has a GIS object in proximity that contains the attributeName = attributeValue
 * @param {string} svc - The GIS service name
 * @param {string} layer - The GIS layer name
 * @param {number} numDistance - The distance to check
 * @param {string} distanceType - The type of distance to check (e.g. feet, meters, etc.)
 * @param {string} attributeName - The name of the attribute to check
 * @param {string} attributeValue - The value of the attribute to check
 * @returns {boolean} - True if the application has a GIS object in proximity that contains the attributeName = attributeValue
 */
declare function proximityToAttribute(svc: string, layer: string, numDistance: number, distanceType: string, attributeName: string, attributeValue: string): boolean

/**
 * Recalcs fees
 * @param {capIdModel} itemCap - The capIdModel of the record
 * @returns {boolean} - The success of the recalculation
 */
declare function recalcFees(itemCap: CapIDModel): boolean

/**
 * Retrieves the value of a custom attribute from a reference license professional record
 * @param {string} pLicNum - The state license number of the reference license professional
 * @param {string} pAttributeName - The name of the custom attribute
 * @return {string} The value of the custom attribute, or "INVALID PARAMETER" if the parameters are invalid, "NO LICENSE FOUND" if the reference license professional record is not found, or "ATTRIBUTE NOT FOUND" if the custom attribute is not found
 */
declare function refLicProfGetAttribute(pLicNum: string, pAttributeName: string): string

/**
 * Returns expiration date from reference licensed professional record. Skips disabled reference licensed professionals.
 * @param {string} pLicNum - The license number.
 * @param {string} [pDateType] - The date type. Options: "EXPIRE" (default), "RENEW","ISSUE","BUSINESS","INSURANCE".
 * @return {Date} The expiration date.
 */
declare function refLicProfGetDate(pLicNum: string, pDateType?: string): Date

/**
 * Removes all rows from an ASI table
 * @param {string} tableName - The name of the ASI table
 * @param {string} [itemCap] - The capId to remove the ASI table from (optional)
 * @returns {boolean} - True if the ASI table was successfully removed, false otherwise
 */
declare function removeASITable(tableName: string, itemCap?: string): boolean


/**
 * Removes all non-invoiced fee items for a CAP ID
 * @param {CapIDModel} itemCap - The CAP ID to remove fees from
 */
declare function removeAllFees(itemCap: CapIDModel): void

/**
 * Removes a condition from a CAP
 * @param {string} cType - The type of condition to remove
 * @param {string} cDesc - The description of the condition to remove
 * @param {string} [itemCap] - Optional CAP ID to remove the condition from. If not provided, the condition will be removed from the current CAP.
 * @returns {boolean} - True if the condition was successfully removed, false otherwise
 */
declare function removeCapCondition(cType: string, cDesc: string, itemCap?: string): boolean


/**
 * Removes all fee items for a fee code and period
 * @param {string} fcode - The fee code to remove
 * @param {string} fperiod - The fee period to remove
 * @param {aa.finance.getFeeItemsByFeeCodeAndPeriod} [getFeeResult] - Global object used to get fee items
 * @param {aa.finance.removeFeeItem} [editResult] - Global object used to remove fee items
 * @returns {void}
 */
declare function removeFee(fcode: string, fperiod: string): void

/**
 * Removes a condition from a parcel
 * @param {string | null} [parcelNum] - The parcel number. If not provided, the condition will be removed from all parcels on the CAP
 * @param {string} cType - The condition type
 * @param {string} cDesc - The condition description
 * @return {void}
 */
declare function removeParcelCondition(parcelNum: string | null, cType: string, cDesc: string): void


/**
 * Removes a reference contact address from a record contact
 * @param {CapIDModel} itemCap - The cap ID of the record
 * @param {Number} cSeqNumber - The sequence number of the record contact
 * @param {ContactAddressModel} rConAddrModel - The contact address model of the reference contact
 * @returns {Boolean} - True if the reference contact address was successfully removed, false otherwise
 */
declare function removeRefContactAddressFromRecordContact(itemCap: CapIDModel, cSeqNumber: Number, rConAddrModel: ContactAddressModel): Boolean

/**
 * Removes a task from a given record
 * @param {CapIDModel} targetCapId - The record to remove the task from
 * @param {string} removeTaskName - The name of the task to remove
 * @param {string} [processName] - The name of the process the task belongs to (optional)
 * @returns {boolean} - True if the task was removed, false otherwise
 */
declare function removeTask(targetCapId: CapIDModel, removeTaskName: string, processName?: string): boolean

/**
 * Replaces tokens in a message with values from script variables or AInfo
 * @param {string} m - The message to be replaced
 * @returns {string} The message with tokens replaced
 */
declare function replaceMessageTokens(m: string): string

/**
 * Replaces a node in a string with new contents
 * @param {string} fString - The string to be modified
 * @param {string} fName - The name of the node to be replaced
 * @param {string} fContents - The new contents of the node
 * @returns {string} The modified string
 */
declare function replaceNode(fString: string, fName: string, fContents: string): string

/**
 * This function will result an inspection based on the inspection type, status, result date, and result comment.
 * @param {string} inspType - The type of inspection to result.
 * @param {string} inspStatus - The status of the inspection to result.
 * @param {date} resultDate - The date of the inspection result.
 * @param {string} resultComment - The comment of the inspection result.
 * @param {CapIDModel} [capId] - The capId of the record (optional).
 * @return {void}
 */
declare function resultInspection(inspType: string, inspStatus: string, resultDate: Date, resultComment: string, capId?: CapIDModel): void


/**
 * results workflow task and sets the status and performs next step based on configured status
 * @param {String} wfstr - The workflow task to be set
 * @param {String} wfstat - The status to set the workflow task to
 * @param {String} [wfcomment] - The comment to be associated with the workflow task
 * @param {String} [wfnote] - The note to be associated with the workflow task
 * @param {String} [processName] - The name of the process (optional)
 * @returns {Boolean}
 */
declare function resultWorkflowTask(wfstr: string, wfstat: string, wfcomment: string, wfnote: string, processName: string): boolean

/**
 * Executes the scripts and standard choices associated with an event
 * @param {string} eventName - The name of the event
 * @param {string} [controlString] - Optional control string to execute standard choices
 * @throws {Error} If an error occurs
 */
declare function runEvent(eventName: string, controlString?: string): void

/**
 * Runs a report and emails it to the contact associated with the record.
 * @param {CapIDModel} itemCap - The record to run the report for.
 * @param {String} reportName - The name of the report to run.
 * @param {CapContactModel} conObj - The contact associated with the record.
 * @param {Array} rParams - An array of parameters to pass to the report.
 * @param {Array} eParams - An array of parameters to pass to the email.
 * @param {String} emailTemplate - The name of the email template to use.
 * @param {String} module - The name of the module to run the report from.
 * @param {String} mailFrom - The email address to send the report from.
 * @returns {Boolean} - True if the report was sent, false otherwise.
 */
declare function runReport4Email(itemCap: CapIDModel, reportName: String, conObj: CapContactModel, rParams: any[], eParams: any[], emailTemplate: String, module: String, mailFrom: String): Boolean


/**
 * Generates a report and either emails it or pops it up on the screen
 * @param {CapIDModel} itemCap - The record to generate the report for
 * @param {String} reportName - The name of the report to generate
 * @param {String} module - The name of the module to generate the report for
 * @param {HashMap} rParams - The parameters to pass to the report
 * @param {HashMap} [eParams] - The parameters to pass to the email template (optional)
 * @param {String} [emailTemplate] - The name of the email template to use (optional)
 */
declare function runReport4EmailOrPrint(itemCap: CapIDModel, reportName: string, module: string, rParams: HashMap, eParams?: HashMap, emailTemplate?: string): void

/**
 * Runs a report and attaches it to the specified record
 * @param {CapIDModel} itemCapId - The record to attach the report to
 * @param {string} aaReportName - The name of the report to run
 * @param {string} [parameters] - Optional report parameter pairs
 * @returns {boolean} - True if the report was successfully run and attached, false otherwise
 */
declare function runReportAttach(itemCapId: CapIDModel, aaReportName: string, ...parameters: string[]): boolean

/**
 * Schedule Inspection
 * @param {capIDModel} itemCap 
 * @param {string} iType 
 * @param {number} DaysAhead 
 * @param {string} [inspTime] 
 * @param {string} [inspComm] 
 * @returns {void}
 */
declare function scheduleInspect(itemCap: CapIDModel, iType: string, DaysAhead: number, inspTime?: string, inspComm?: string): void

/**
 * Schedules an inspection of the specified type for the given date
 * @param {string} iType - The type of inspection to be scheduled
 * @param {string} DateToSched - The date to schedule the inspection
 * @param {string} [inspectorID] - The ID of the inspector to assign to the inspection (optional)
 * @param {string} [inspTime] - The time of the inspection (optional)
 * @param {string} [inspComm] - The comment for the inspection (optional)
 * @returns {void}
 */
declare function scheduleInspectDate(iType: string, DateToSched: string, inspectorID?: string, inspTime?: string, inspComm?: string): void

/**
 * Schedules an inspection of the specified type for the specified number of days ahead.
 * @param {string} iType - The type of inspection to be scheduled.
 * @param {number} DaysAhead - The number of days ahead to schedule the inspection.
 * @param {string} [inspectorID] - Optional inspector ID.
 * @param {string} [inspTime] - Optional time of inspection in HH12:MIAM or AM format.
 * @param {string} [inspComm] - Optional comment for the inspection.
 * @returns {void}
 */
declare function scheduleInspection(iType: string, DaysAhead: number, inspectorID?: string, inspTime?: string, inspComm?: string): void

/**
 * Searches Related Caps
 * @param {string} pProjType - Application type marking highest point to search.  Ex. Building/Project/NA/NA
 * @param {string} pSearchType - Application type to search for. Ex. Building/Permit/NA/NA 
 * @returns {CapID[]} - CapID array of all unique matching SearchTypes
 */
declare function searchProject(pProjType: string, pSearchType: string): CapIDModel[]

/**
 * Sends an email and saves it as a document
 * @param {string} emailFrom - The email address of the sender
 * @param {string} emailTo - The email address of the recipient
 * @param {string} emailCC - The email address of the carbon copy recipient
 * @param {string} templateName - The name of the email template
 * @param {object} params - The parameters to be used in the email template
 * @param {object} capIDScriptModel - The cap ID script model
 * @param {string} [reportFile] - The report file (optional)
 * @returns {boolean} - True if the email was sent successfully, false otherwise
 */
declare function sendNotification(emailFrom: string, emailTo: string, emailCC: string, templateName: string, params: object, reportFile?: string): boolean

/**
 * Sets the contact type flag for all contacts associated with the given itemCap.
 * @param {CapIDModel} itemCap - The capId of the item to set the contact type flag for.
 * @param {Lookup} CONTACT TYPE FLAG - The lookup used to determine the contact type flag.
 * @returns {void}
 */
declare function setContactTypeFlagByType(itemCap: CapIDModel): void
/**
 * Sets the IVR tracking number for a given record
 * @param {number} ivrnum - The IVR tracking number to set
 * @param {Environment} aa.env - Global Environment object
 * @param {CapScriptModel} aa.cap.newCapScriptModel - Global CapScriptModel object
 * @param {CapModel} aa.cap.editCapByPK - Global CapModel object
 * @returns {void}
 */
declare function setIVR(ivrnum: number): void

/**
 * Sets the expiration date and status of a license.
 * @param {CapIDModel} itemCap - The license capId.
 * @param {Date} [calcDateFrom] - The from date to use in the date calculation (optional).
 * @param {Date} [dateOverride] - Override the calculation, this date will be used (optional).
 * @param {String} [renewalStatus] - If other than active override the status (optional).
 * @returns {Boolean} - True if successful, false otherwise.
 */
declare function setLicExpirationDate($itemCap$: CapIDModel, $calcDateFrom$?: Date, $dateOverride$?: Date, $renewalStatus$?: String): Boolean

/**
 * Sets a workflow task to open or complete
 * @param {string} wfstr - The workflow task to set
 * @param {string} isOpen - 'Y' or 'N' to set the task to open or closed
 * @param {string} isComplete - 'Y' or 'N' to set the task to complete or incomplete
 * @param {string} [processName] - Optional subprocess name
 * @returns {boolean} - True if successful, false if not
 */
declare function setTask(wfstr: string, isOpen: string, isComplete: string, processName?: string): boolean


/**
 * Trims whitespace from the beginning and end of a string.
 * @param {String} this - The string to trim.
 * @returns {String} The trimmed string.
 */
declare function trim(this: String): String

/**
 * Removes all non-numeric characters from a string
 * @param {string} fullStr - The string to be stripped of non-numeric characters
 * @returns {string} The stripped string
 */
declare function stripNN(fullStr: string): string

/**
 * Closes all tasks in CAP with specified status and comment.
 * @param {string} pStatus - The status to set the tasks to.
 * @param {string} pComment - The comment to set the tasks to.
 * @param {string} excludeName - Optional task names to exclude. Extra parameters may be added to add more exclusions.
 * @return {void}
 */
declare function taskCloseAllExcept(pStatus: string, pComment: string, excludeName?): void


/**
 * Retrieves the status of a workflow task
 * @param {string} wfstr - The workflow task to check
 * @param {string} [processName] - Optional subprocess name
 * @param {CapIDModel} [itemCap] - Optional capId to check
 * @returns {string} The status of the workflow task
 */
declare function taskStatus(wfstr: string, processName?: string, itemCap?: CapIDModel): string

/**
 * Checks to ensure the task status date is not null prior to getting the status date.
 * @param {string} wfstr - The task description.
 * @param {string} [processName] - The subprocess name.
 * @param {CapIDModel} [itemCap] - The cap ID.
 * @returns {string|boolean} - The status date in the format MM/DD/YYYY or false on fail.
 */
declare function taskStatusDate(wfstr: string, processName?: string, itemCap?: CapIDModel): string | boolean

/**
 * Replaces tokens in a string with values from the AInfo global object
 * @param {string} tstr - The string to replace tokens in
 * @returns {string} The string with tokens replaced
 */
declare function token(tstr: string): string

/**
 * Transfers fees and payments from one record to another
 * @param {CapIDModel} sourceCapId - The source record CapIDModel
 * @param {CapIDModel} targetCapId - The target record CapIDModel
 * @returns {void}
 */
declare function transferFeesAndPayments(sourceCapId: CapIDModel, targetCapId: CapIDModel): void

/**
 * Transfer funds from the current application to the parent application
 * @param {string} parentAppNum - The parent application number
 * @param {number} dollarAmount - The amount of funds to transfer
 * @returns {boolean} - Returns true if the transfer was successful, false otherwise
 */
declare function transferFunds(parentAppNum: string, dollarAmount: number): boolean


/**
 * Transfers funds from one record to another and applies the payment to the target record
 * @param {CapIDModel} receiptCapId - The capIDModel of the record from which funds are being transferred
 * @param {CapIDModel} targetCapId - The capIDModel of the record to which funds are being transferred
 * @return {number} transferAmt - The amount of funds transferred
 */
declare function transferReceiptAndApply(receiptCapId: CapIDModel, targetCapId: CapIDModel): number

/**
 * Updates the application status for a given capId
 * @param {string} stat - The status to update the application to
 * @param {string} cmt - The comment to add to the application status update
 * @param {string} [capId] - The capId to update the application status for (optional)
 * @returns {void}
 */
declare function updateAppStatus(stat: string, cmt: string, capId?: string): void
/**
 * Updates the enforcement officer name for a given CapId.
 * @param {string} enfName - The name of the enforcement officer.
 * @param {CapIDModel} [itemCap] - The CapId to update. Defaults to the current CapId.
 * @returns {boolean} - True if the update was successful, false otherwise.
 */
declare function updateEnfOfficer(enfName: string, itemCap?: CapIDModel): boolean


/**
 * Updates an assessed fee with a new Qty.  If not found, adds it

/**
 * Updates the auto invoice flag of a fee item
 * @param {number} feeSeq - The sequence number of the fee item
 * @param {boolean} finvoice - The auto invoice flag
 * @param {boolean} feeItem - The fee item object from the aa.finance API
 * @returns {void}
 */
declare function updateFeeItemInvoiceFlag(feeSeq: number, finvoice: boolean): void


/**
 * Updates the guidesheet ASI field with a new value
 * @param {number} inspId - The inspection ID
 * @param {string} gName - The guidesheet name
 * @param {string} gItem - The guidesheet item name
 * @param {string} asiGroup - The ASI group code
 * @param {string} asiSubGroup - The ASI subgroup code
 * @param {string} asiLabel - The ASI label
 * @param {string} newValue - The new value for the ASI
 * @param {CapIDModel} [itemCap] - Optional capId
 * @returns {boolean} - True if the update was successful, false otherwise
 */
declare function updateGuidesheetASIField(inspId: number, gName: string, gItem: string, asiGroup: string, asiSubGroup: string, asiLabel: string, newValue: string, itemCap?: CapIDModel): boolean


/**
 * Updates the guidesheet ID to nGuideSheetID if not currently populated
 * @param {string} inspId - The ID of the inspection
 * @param {string} gName - The name of the guidesheet
 * @param {string} nGuideSheetID - The new guidesheet ID
 * @param {CapIDModel} [itemCap] - The capId of the record (optional)
 * @returns {boolean} - True if the guidesheet was successfully updated, false otherwise
 */
declare function updateGuidesheetID(inspId: string, gName: string, nGuideSheetID: string, itemCap?: CapIDModel): boolean

/**
 * Updates the plan review workflow or inspection based on the updateIndicator value
 * @param {string} wfTask - The workflow task to update
 * @param {string} status - The status to update the workflow task to
 * @param {string} wfComments - The comments to update the workflow task with
 * @param {string} updateIndicator - The indicator to determine if to update workflow or inspection (W = workflow, I = inspection)
 * @returns {boolean} - Returns true if the workflow or inspection was updated, false otherwise
 */
declare function updatePlanReviewWorkflow(wfTask: string, status: string, wfComments: string, updateIndicator: string): boolean


/**
 * Updates the reference parcel number for the parcels associated with the given CapId.
 * @param {CapIDModel} [capId] - The CapId to update the reference parcel number for. If not provided, the current CapId will be used.
 * @returns {void}
 */
declare function updateRefParcelToCap(capId?: CapIDModel): void

/**
 * Updates the short notes of a record
 * @param {string} newSN - The new short notes
 * @param {CapIDModel} [itemCap] - The capId of the record to update. Defaults to the current capId.
 */
declare function updateShortNotes(newSN: string, itemCap?: CapIDModel): void

/**
 * Updates a workflow task with the given parameters
 * @param {string} wfstr - The workflow task to update
 * @param {string} wfstat - The status to update the workflow task to
 * @param {string} wfcomment - The comment to add to the workflow task
 * @param {string} wfnote - The note to add to the workflow task
 * @param {string} [processName] - The name of the subprocess (optional)
 * @param {CapIDModel} [capId] - The capId to use (optional)
 * @returns {boolean} - True if the workflow task was updated, false otherwise
 */
declare function updateTask(wfstr: string, wfstat: string, wfcomment: string, wfnote: string, processName?: string, capId?: CapIDModel): boolean


/**
 * Updates the task assignment date for a given workflow task
 * @param {string} wfstr - The workflow task to update
 * @param {date} wfAssignDate - The new assignment date
 * @param {string} [processName] - The subprocess name (optional)
 * @returns {boolean} - True if successful, false otherwise
 */
declare function updateTaskAssignedDate(wfstr: string, wfAssignDate: Date, processName?: string): boolean

/**
 * Updates the task assignment department
 * @param {string} wfstr - The task description
 * @param {string} wfDepartment - The department to assign the task to
 * @param {string} [processName] - The optional subprocess name
 * @returns {boolean} - True if successful, false if not
 */
declare function updateTaskDepartment(wfstr: string, wfDepartment: string, processName?: string): boolean

/**
 * Updates the work description of a given CapId
 * @param {string} newWorkDes - The new work description
 * @param {CapIDModel} [itemCap] - The CapId to update the work description of. Defaults to the global capId if not provided.
 * @returns {boolean} - True if the work description was successfully updated, false otherwise.
 */
declare function updateWorkDesc(newWorkDes: string, itemCap?: CapIDModel): boolean


/**
 * Constructs a user object
 * @param {string} vUserId - User ID
 * @return {boolean}
 */
declare function userObj($vUserId$: string): boolean

/**
 * Validates GIS objects on the cap
 * @returns {boolean} true if the app has GIS objects that validate in GIS
 */
declare function validateGisObjects(): boolean


/**
 * Computes and checks a Verhoeff algorithm check digit
 * @param {string} num - The number to compute the check digit for
 * @returns {string|boolean} - The number with the check digit appended if computing, or a boolean if checking
 */
declare function verhoeff($num: string): string|boolean

/**
 * Gets the work description for a given capId
 * @param {CapIDModel} pCapId - The capId to get the work description for
 * @return {string} The work description
 */
declare function workDescGet(pCapId: CapIDModel): string


/**
 * Adds leading zeros to a number until it reaches the desired length
 * @param {number} num - The number to be padded
 * @param {number} count - The desired length of the number
 * @returns {string} - The number with leading zeros
 */
declare function zeroPad(num: number, count: number): string
