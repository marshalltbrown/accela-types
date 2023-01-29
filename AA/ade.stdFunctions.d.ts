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