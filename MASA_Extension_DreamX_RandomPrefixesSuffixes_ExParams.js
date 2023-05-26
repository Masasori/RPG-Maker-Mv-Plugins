//=============================================================================
// MASA_Extension_DreamX_RandomPrefixesSuffixes_ExParams.js
//=============================================================================

var Imported = Imported || {};
Imported.Masa_MASA_Extension_DreamX_RandomPrefixesSuffixes_ExParams = true;

var Masa = Masa || {};
Masa.MASA_Extension_DreamX_RandomPrefixesSuffixes_ExParams = Masa.MASA_Extension_DreamX_RandomPrefixesSuffixes_ExParams || {};

//=============================================================================
 /*:
 * @param Suggestions or wishes?
 * @desc Write to me: Masajatsu.GameDev＠web.de
 * @default Masajatsu.GameDev＠web.de
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin expands DreamX_RandomPrefixSuffix Plugin
 * with the function to randomly add Ex-Paramters.
 *
 * ============================================================================
 * How to setup?
 * =============
 * Just place it under "DreamX_RandomPrefixSuffix".
 * =============
 * =============
 * How to use it?
 * =============
 * Simply use the <prefixSuffixParameters: par X|Y> as described in
 * DreamXs plugin.
 * Use following "par" to add Ex-Parameters
 *
 * HR = Hit rate
 * ER = Evasion Rate
 * CR = Critical Rate
 * CE = Critical Evasion
 * ME = Magic Evasion
 * MR = Magic Reflection
 * CA = Counter Attack
 * HPR = HP Regeneration
 * MPR = MP Regeneration
 * TPR = TP Regeneration
 *
 *
 * Example: Adds 3%-5% Hit rate
 * <prefixSuffixParameters: HR 3|5>
 *
 * Example: Adds 3%-5% HP Regeneration
 * <prefixSuffixParameters: HPR 3|5>
 *
 */
//=============================================================================

if (Imported.DreamX_RandomPrefixSuffix) {

//=============================================================================
DreamX.RandomPrefixSuffix.randomizeBonusParameters = function (notetag, newItem) {
        var parameterSplit = notetag.trim().split(new RegExp("\\s"));
        var i = 0;
        while (i < parameterSplit.length) {
            var parameterID = DreamX.RandomPrefixSuffix.interpretParamNote(parameterSplit[i]);
            i++;
            var min = parseInt(parameterSplit[i].split("|")[0]) || 0;
            var max = parseInt(parameterSplit[i].split("|")[1]) || 0;
            if (parameterID !== undefined) {
                var paramRoll = Math.floor((Math.random() * (max - min + 1)) + min);
                if (parameterID >= 0 && parameterID < newItem.params.length) {
                    newItem.params[parameterID] += paramRoll;
                    newItem.price += paramRoll * paramMultiplier;
                    if (!newItem._DXHighestParamBonus
                            || (newItem._DXHighestParamBonus
                                    && newItem._DXHighestParamBonus < paramRoll)) {
                        newItem._DXHighestParamBonus = paramRoll;
                        newItem._DXHighestParamID = parameterID;
                    }
                }
		if (parameterID >= 8 && parameterID <= 17) {
                    newItem.traits.push({code: 22, dataId: parameterID-8, value: paramRoll/100});
                    newItem.price += paramRoll * paramMultiplier;
                    if (!newItem._DXHighestParamBonus
                            || (newItem._DXHighestParamBonus
                                    && newItem._DXHighestParamBonus < paramRoll)) {
                        newItem._DXHighestParamBonus = paramRoll;
                        newItem._DXHighestParamID = parameterID;
                    }
                }
            }
            i++;
        }
    };

DreamX.RandomPrefixSuffix.paramStringIDArray = function () {
    return ["MHP", "MMP", "ATK", "DEF", "MAT", "MDF", "AGI", "LUK", "HR", "ER", "CR", "CE", "ME", "MR", "CA", "HPR", "MPR","TPR"];
};

DreamX.RandomPrefixSuffix.interpretParamNote = function (string) {
    var paramID = parseInt(string);
    if (paramID)
        return paramID;
    paramID = this.paramStringIDArray().indexOf(string);
    return paramID;
};

};
