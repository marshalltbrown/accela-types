/// <reference path="ade.objects.d.ts" />

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

Adds a standard condition to the ApplicationSubmitBefore and PaymentReceiveBefore events.
@param {string} cType - The type of the condition (ex. "Building").
@param {string} cDesc - The description of the condition (ex. "Fire Safety").
@param {CapIDModel} itemCap(Optional) - The capId of the record to recieve the condition.
@return {void}
*/
declare function addStdCondition(cType: string, cDesc: string, itemCap?: CapIDModel): void;

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

This function adds a reference contact to the current CAP by searching for a user with the provided first, middle, and last name.
@param {string} vFirst - The first name of the reference contact to add.
@param {string} vMiddle - The middle name of the reference contact to add.
@param {string} vLast - The last name of the reference contact to add.
@returns {number | null} - Returns the contact sequence number of the added reference contact if successful, or null if not successful.
*/
declare function addReferenceContactByName(vFirst: string, vMiddle: string, vLast: string): number | null;

/**
 * Checks if an address exists on the CAP.
 * @param itemCapId (Optional) - If provided, uses the provided capId, otherwise uses the global capId.
 * @returns {boolean} - Returns true if an address exists on the CAP, false if not.
 */
declare function addressExistsOnCap(itemCapId?): boolean;

/**
 * Adds a standard condition to a record. If no cap ID is provided, the function will use the global cap ID.
 * @param cType - The type of condition to add.
 * @param cDesc - The description of the condition to add.
 * @param itemcap - (Optional) The cap ID to add the condition to. If not provided, the function will use the global cap ID.
 */
declare function addStdCondition(cType: string, cDesc: string, itemcap?: CapIDModel) // optional cap ID

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

