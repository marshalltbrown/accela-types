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

// D

/**

Appends a string to the global debug variable and outputs to the log if debugging is enabled
@param {string} dstr - The string to append to the debug variable and potentially log
@param {number} [vLevel=1] - The level of debugging for the string (optional)
*/
declare function logDebug(dstr: string, vLevel?: number): void;