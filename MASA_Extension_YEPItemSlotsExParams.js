//=============================================================================
// Masa_Extension_YEPItemSlotsExParams.js
//=============================================================================

var Imported = Imported || {};
Imported.Masa_Extension_YEPItemSlotsExParams = true;

var Masa = Masa || {};
Masa.Extension_YEPItemSlotsExParams = Masa.Extension_YEPItemSlotsExParams || {};

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
 * This plugin expands YEP_X_ItemUpgradeSlots Plugin
 * with the function to add Ex-Paramters.
 *
 * ============================================================================
 * How to setup?
 * =============
 * Just place it under "Yep_X_ItemUpgradeSlots".
 * =============
 * =============
 * How to use it?
 * =============
 * Simply use notetags as described in YEPs plugin.
 * To add Ex-Paramters use "EX" following the number
 * of the index (starting from 1) from the list of 
 * the editor:
 *
 * e.g: Hit Rate + 20%
 *   <Upgrade Effect>
 *    EX1: +20%
 *   </Upgrade Effect>
 *
 * e.g: Evasion Rate - 5%
 *   <Upgrade Effect>
 *    EX2: -5%
 *   </Upgrade Effect>
 *
 */
//=============================================================================

if (Imported.YEP_X_ItemUpgrades) {

//=============================================================================
Masa.ItemManager_effectIUSParamRateChange = ItemManager.effectIUSParamRateChange;
ItemManager.effectIUSParamRateChange = function(item, stat, value) {
    Masa.ItemManager_effectIUSParamRateChange.call(this);
    algSign = "";
    if (value > 0){
        algSign = "+";
    }
    switch (stat) {
      case 'EX1':
        item.traits.push({code: 22, dataId: 0, value: value/100});
        item.description += " (Hit Rate " + algSign + value + "%)";
        break;
      case 'EX2':
        item.traits.push({code: 22, dataId: 1, value: value/100});
        item.description += " (Evasion Rate " + algSign + value + "%)";
        break;
      case 'EX3':
        item.traits.push({code: 22, dataId: 2, value: value/100});
        item.description += " (Critical Rate " + algSign + value + "%)";
        break;
      case 'EX4':
        item.traits.push({code: 22, dataId: 3, value: value/100});
        item.description += " (Critical Evasion " + algSign + value + "%)";
        break;
      case 'EX5':
        item.traits.push({code: 22, dataId: 4, value: value/100});
        item.description += " (Magic Evasion " + algSign + value + "%)";
        break;
      case 'EX6':
        item.traits.push({code: 22, dataId: 5, value: value/100});
        item.description += " (Magic Reflection " + algSign + value + "%)";
        break;
      case 'EX7':
        item.traits.push({code: 22, dataId: 6, value: value/100});
        item.description += " (Counter Attack " + algSign + value + "%)";
        break;
      case 'EX8':
        item.traits.push({code: 22, dataId: 7, value: value/100});
        item.description += " (HP Regeneration " + algSign + value + "%)";
        break;
      case 'EX9':
        item.traits.push({code: 22, dataId: 8, value: value/100});
        item.description += " (MP Regeneration " + algSign + value + "%)";
        break;
      case 'EX10':
        item.traits.push({code: 22, dataId: 9, value: value/100});
        item.description += " (TP Regeneration " + algSign + value + "%)";
        break;
    }
};

};