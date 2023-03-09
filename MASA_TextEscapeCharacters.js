//=============================================================================
// MASA_TextEscapeCharacters.js
//=============================================================================

var Imported = Imported || {};
Imported.Masa_TextEscapeCharacters = true;

var Masa = Masa || {};
Masa.TextEscapeCharacters = Masa.TextEscapeCharacters || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Allow you to use more control characters in text messages
 * @author Masajatsu
 *
 * @param Text Color Array Variable
 * @desc The RPG Maker Variable used as Text color array
 * (Array has to be initialized by yourself)
 * @default 0
 *
 * @param Font Size Array Variable
 * @desc The RPG Maker Variable used as Font size array
 * (Array has to be initialized by yourself)
 * @default 0
 *
 * @param Suggestions or wishes?
 * @desc Write to me: Masajatsu.GameDev＠web.de
 * @default Masajatsu.GameDev＠web.de
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This plugin has to be placed above all other plugins.
 * Tested compatibility with other plugins:
 * YEP_CoreEngine
 * YEP_MessageCore
 * YEP_QuestJournal
 *
 *
 * This plugin adds more control characters in text messages.
 *
 * ============================================================================
 * What can you do with this plugin?
 * ============================================================================
 *
 * -Display Arrays
 * -Display Item/Weapon/Armor Amount/Name/Icons via variables, arrays or direct
 *  input
 * -Change Text color and Font size via variables and arrays
 *
 * ============================================================================
 * Control characters
 * ============================================================================
 *
 *======================================
 * Control characters for arrays
 *======================================
 *
 * \A(x)[y]
 * Displays the index value "y" of the array "x"
 * Example: 
 * $gameVariables.setValue(1,[5,6,7,8]);
 * \A(1)[3] --> 8
 *
 * \AA(x)[y]
 * Displays the index value "y" of the array "x" where "x" is stored in 
 * an other variable
 * Example: 
 * $gameVariables.setValue(1,[5,6,7,8]);
 * $gameVariables.setvalue(2,1);
 * \AA(2)[2] --> 7
 *
 * \AB(x)[y]
 * Displays the index value "y" of the array "x" where "y" is stored in 
 * an other variable
 * Example: 
 * $gameVariables.setValue(1,[5,6,7,8]);
 * $gameVariables.setValue(2,1);
 * \AB(1)[2] --> 6
 *
 * \AC(x)[y]
 * Displays the index value "y" of the array "x" where "x" and "y" are stored in 
 * an other variables
 * Example: 
 * $gameVariables.setValue(1,[5,6,7,8]);
 * $gameVariables.setValue(2,1);
 * $gameVariables.setValue(3,0);
 * \AC(2)[3] --> 5
 *
 *======================================
 * Control characters for items
 *======================================
 *
 *===================
 *Item amount
 *===================
 *
 * \ItemA[x]
 * Displays the amount of items you have from the item with the ID "x"
 * Example:
 * \ItemA[32] --> Displays the amount of items you have from the item with 
 * the ID 32
 *
 * \ItemAV[x]
 * Displays the amount of items you have from the item with the ID "x" where 
 * "x" is stored in an other variable
 * Example:
 * $gameVariables.setValue(1,12);
 * \ItemAV[1] --> Displays the amount of items you have from the item 
 * with the ID 12
 *
 *===================
 *Item name
 *===================
 *
 * \ItemN[x]
 * Displays the name of the item with the ID "x"
 * Example:
 * \ItemN[32] --> e.g. Mucus
 *
 * \ItemNV[x]
 * Displays the name of the item with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \ItemNV[1] --> e.g. Mucus
 *
 *===================
 *Item icon
 *===================
 *
 * \ItemI[x]
 * Displays the icon of the item with the ID "x"
 * Example:
 * \ItemI[32] --> Displays icon of item with ID 32
 *
 * \ItemIV[x]
 * Displays the icon of the item with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \ItemIV[1] --> Displays icon of item with ID 32
 *
 *======================================
 * Control characters for Weapons
 *======================================
 *
 *===================
 *Weapon amount
 *===================
 *
 * \WeaponA[x]
 * Displays the amount of Weapons you have from the Weapon with the ID "x"
 * Example:
 * \WeaponA[32] --> Displays the amount of Weapons you have from the Weapon with 
 * the ID 32
 *
 * \WeaponAV[x]
 * Displays the amount of Weapons you have from the Weapon with the ID "x" where 
 * "x" is stored in an other variable
 * Example:
 * $gameVariables.setValue(1,12);
 * \WeaponAV[1] --> Displays the amount of Weapons you have from the Weapon 
 * with the ID 12
 *
 *===================
 *Weapon name
 *===================
 *
 * \WeaponN[x]
 * Displays the name of the Weapon with the ID "x"
 * Example:
 * \WeaponN[32] --> e.g. Copper Sword
 *
 * \WeaponNV[x]
 * Displays the name of the Weapon with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \WeaponNV[1] --> e.g. Copper Sword
 *
 *===================
 *Weapon icon
 *===================
 *
 * \WeaponI[x]
 * Displays the icon of the Weapon with the ID "x"
 * Example:
 * \WeaponI[32] --> Displays icon of Weapon with ID 32
 *
 * \WeaponIV[x]
 * Displays the icon of the Weapon with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \WeaponIV[1] --> Displays icon of Weapon with ID 32
 *
 *======================================
 * Control characters for Armors
 *======================================
 *
 *===================
 *Armor amount
 *===================
 *
 * \ArmorA[x]
 * Displays the amount of Armors you have from the Armor with the ID "x"
 * Example:
 * \ArmorA[32] --> Displays the amount of Armors you have from the Armor with 
 * the ID 32
 *
 * \ArmorAV[x]
 * Displays the amount of Armors you have from the Armor with the ID "x" where 
 * "x" is stored in an other variable
 * Example:
 * $gameVariables.setValue(1,12);
 * \ArmorAV[1] --> Displays the amount of Armors you have from the Armor 
 * with the ID 12
 *
 *===================
 *Armor name
 *===================
 *
 * \ArmorN[x]
 * Displays the name of the Armor with the ID "x"
 * Example:
 * \ArmorN[32] --> e.g. Copper Helmet
 *
 * \ArmorNV[x]
 * Displays the name of the Armor with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \ArmorNV[1] --> e.g. Copper Helmet
 *
 *===================
 *Armor icon
 *===================
 *
 * \ArmorI[x]
 * Displays the icon of the Armor with the ID "x"
 * Example:
 * \ArmorI[32] --> Displays icon of Armor with ID 32
 *
 * \ArmorIV[x]
 * Displays the icon of the Armor with the ID "x" where "x" is stored in 
 * an other variable
 * Example:
 * $gameVariables.setValue(1,32);
 * \ArmorIV[1] --> Displays icon of Armor with ID 32
 *
 *======================================
 * Control characters for simple calculations
 *======================================
 *
 *===================
 *Addition
 *===================
 *
 * \Calc(x)+(y)
 * Displays the sum of variable "x" and "y"
 * Example:
 * $gameVariables.setValue(1,2);
 * $gameVariables.setValue(2,5);
 * \Calc(1)+(2) --> 7
 *
 *===================
 *Substraction
 *===================
 *
 * \Calc(x)-(y)
 * Displays the difference of variable "x" and "y"
 * Example:
 * $gameVariables.setValue(1,2);
 * $gameVariables.setValue(2,5);
 * \Calc(1)-(2) --> -3
 *
 *===================
 *Multiplication
 *===================
 *
 * \Calc(x)*(y)
 * Displays the product of variable "x" and "y"
 * Example:
 * $gameVariables.setValue(1,2);
 * $gameVariables.setValue(2,5);
 * \Calc(1)*(2) --> 10
 *
 *===================
 *Division
 *===================
 *
 * \Calc(x)+(y)
 * Displays the quotient of variable "x" and "y"
 * Example:
 * $gameVariables.setValue(1,2);
 * $gameVariables.setValue(2,5);
 * \Calc(1)/(2) --> 0.4
 *
 *======================================
 * Control characters for fonts
 *======================================
 *
 *===================
 *Color change
 *===================
 *
 * \CV[x]
 * Change the font color to "x" where "x" is stored in an other variable
 * Example:
 * $gameVariables.setValue(1,5);
 * \CV[1] --> Change text color to "light purple"
 *
 * \CA[x]
 * Change the font color to "x" where "x" is the index of the
 * "Text Color Array Variable"
 * Example:
 * "Text Color Array Variable" set to "1" in parameters
 * $gameVariables.setValue(1,[4,8,15,16,23,42]);
 * \CV[3] --> Change text color to "light blue"
 *
 *===================
 *Font size change
 *===================
 *
 * \FS[x]
 * Change the font size to "x"
 * Example:
 * \FS[14] --> Change font size to 14
 *
 * \FSV
 * Change the font size to "x" where "x" is stored in an other variable
 * Example:
 * $gameVariables.setValue(1,18);
 * \FSV[1] --> Change font size to 18
 *
 * \FSA
 * Change the font size to "x" where "x" is the index of the
 * "Font Size Array Variable"
 * Example:
 * "Font Size Array Variable" set to "1" in parameters
 * $gameVariables.setValue(1,[1,1,2,3,5,8,13,21]);
 * \FSA[7] --> Change font size to 21
 *
 * \FR
 * Resets the font size to the standard font size 
 * (RPG Maker MV standard font size is 28)
 *
 *======================================
 * Epilogue
 *======================================
 *
 * If you have suggestions or wishes let me know it.
 * You can contact me via Masajatsu.GameDev＠web.de
 * Have fun!
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Masa.Parameters = PluginManager.parameters('Masa_TextEscapeCharacters');
Masa.Param = Masa.Param || {};

Masa.Param.TextColorArray = Masa.Parameters['Text Color Array Variable']
Masa.Param.FontSizeArray = Masa.Parameters['Font Size Array Variable']

Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\x1bG/gi, TextManager.currencyUnit);

//=====Linebreak=====

//Linebreak \N
    text = text.replace(/\x1bN/gi, function() {
        return "\n";
    }.bind(this));

//=====Array=====

//Array \A(varID)[index]
    text = text.replace(/\x1bA\((\d+)\)\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]))[parseInt(arguments[2])];
    }.bind(this));
//Array with Variables \AA(varID of the Variables containing the integer)[index]
    text = text.replace(/\x1bAA\((\d+)\)\[(\d+)\]/gi, function() {
        return $gameVariables.value($gameVariables.value(parseInt(arguments[1])))[parseInt(arguments[2])];
    }.bind(this));
//Array with Variables \AB(varID)[varID of the Variables containing the integer for the index]
    text = text.replace(/\x1bAB\((\d+)\)\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]))[$gameVariables.value(parseInt(arguments[2]))];
    }.bind(this));
//Array with Variables \AC(varID of the Variables containing the integer)[varID of the Variables containing the integer for the index]
    text = text.replace(/\x1bAC\((\d+)\)\[(\d+)\]/gi, function() {
        return $gameVariables.value($gameVariables.value(parseInt(arguments[1])))[$gameVariables.value(parseInt(arguments[2]))];
    }.bind(this));

//=====Item=====

//Item amount \ItemA[itemID]
    text = text.replace(/\x1bItemA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataItems[parseInt(arguments[1])]);
    }.bind(this));
//Item amount with Variable \ItemAA[itemID]
    text = text.replace(/\x1bItemAA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataItems[$gameVariables.value(parseInt(arguments[1]))]);
    }.bind(this));
//Item name \ItemN[itemID]
    text = text.replace(/\x1bItemN\[(\d+)\]/gi, function() {
        return $dataItems[parseInt(arguments[1])].name;
    }.bind(this));
//Item name with Variable\ItemNA[itemID]
    text = text.replace(/\x1bItemNA\[(\d+)\]/gi, function() {
        return $dataItems[$gameVariables.value(parseInt(arguments[1]))].name;
    }.bind(this));

//=====Weapon=====

//Weapon amount \WeaponA[WeaponID]
    text = text.replace(/\x1bWeaponA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataWeapons[parseInt(arguments[1])]);
    }.bind(this));
//Weapon amount with Variable \WeaponAA[itemID]
    text = text.replace(/\x1bWeaponAA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataWeapons[$gameVariables.value(parseInt(arguments[1]))]);
    }.bind(this));
//Weapon name \WeaponN[itemID]
    text = text.replace(/\x1bWeaponN\[(\d+)\]/gi, function() {
        return $dataWeapons[parseInt(arguments[1])].name;
    }.bind(this));
//Weapon name with Variable\WeaponNA[itemID]
    text = text.replace(/\x1bWeaponNA\[(\d+)\]/gi, function() {
        return $dataWeapons[$gameVariables.value(parseInt(arguments[1]))].name;
    }.bind(this));

//=====Weapon=====

//Armor amount \ArmorA[WeaponID]
    text = text.replace(/\x1bArmorA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataArmors[parseInt(arguments[1])]);
    }.bind(this));
//Armor amount with Variable \ArmorAA[itemID]
    text = text.replace(/\x1bArmorAA\[(\d+)\]/gi, function() {
        return $gameParty.numItems($dataArmors[$gameVariables.value(parseInt(arguments[1]))]);
    }.bind(this));
//Armor name \ArmornN[itemID]
    text = text.replace(/\x1bArmorN\[(\d+)\]/gi, function() {
        return $dataArmors[parseInt(arguments[1])].name;
    }.bind(this));
//Armor name with Variable\ArmorNA[itemID]
    text = text.replace(/\x1bArmorNA\[(\d+)\]/gi, function() {
        return $dataArmors[$gameVariables.value(parseInt(arguments[1]))].name;
    }.bind(this));

//=====Calculations=====

//add up 2 variables
    text = text.replace(/\x1bCalc\((\d+)\)\+\((\d+)\)/gi, function() {
        return $gameVariables.value(parseInt(arguments[1])) + $gameVariables.value(parseInt(arguments[2]));
    }.bind(this));

//substract 2 variables
    text = text.replace(/\x1bCalc\((\d+)\)\-\((\d+)\)/gi, function() {
        return $gameVariables.value(parseInt(arguments[1])) - $gameVariables.value(parseInt(arguments[2]));
    }.bind(this));

//multiplicate 2 variables
    text = text.replace(/\x1bCalc\((\d+)\)\*\((\d+)\)/gi, function() {
        return $gameVariables.value(parseInt(arguments[1])) * $gameVariables.value(parseInt(arguments[2]));
    }.bind(this));

//divide 2 variables
    text = text.replace(/\x1bCalc\((\d+)\)\/\((\d+)\)/gi, function() {
        return $gameVariables.value(parseInt(arguments[1])) / $gameVariables.value(parseInt(arguments[2]));
    }.bind(this));

    return text;
};

Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case 'C':
        this.changeTextColor(this.textColor(this.obtainEscapeParam(textState)));
        break;
    case 'CV':
        this.changeTextColor(this.textColor($gameVariables.value(this.obtainEscapeParam(textState))));
        break;
    case 'CA':
        this.changeTextColor(this.textColor($gameVariables.value(Masa.Param.TextColorArray)[this.obtainEscapeParam(textState)]));
        break;
    case 'FS':
        this.contents.fontSize = this.obtainEscapeParam(textState);
        break;
    case 'FSV':
        this.contents.fontSize = $gameVariables.value(this.obtainEscapeParam(textState));
        break;
    case 'FSA':
        this.contents.fontSize = $gameVariables.value(Masa.Param.FontSizeArray)[this.obtainEscapeParam(textState)];
        break;
    case 'FR':
        this.contents.fontSize = this.standardFontSize();
        break;
    case 'I':
        this.processDrawIcon(this.obtainEscapeParam(textState), textState);
        break;
    case '{':
        this.makeFontBigger();
        break;
    case '}':
        this.makeFontSmaller();
        break;
    case 'ITEMI':
	this.processDrawIcon($dataItems[this.obtainEscapeParam(textState)].iconIndex, textState);
	break;
    case 'ITEMIA':
	this.processDrawIcon($dataItems[$gameVariables.value(this.obtainEscapeParam(textState))].iconIndex, textState);
	break;
    case 'WEAPONI':
	this.processDrawIcon($dataWeapons[this.obtainEscapeParam(textState)].iconIndex, textState);
	break;
    case 'WEAPONIA':
	this.processDrawIcon($dataWeapons[$gameVariables.value(this.obtainEscapeParam(textState))].iconIndex, textState);
	break;
    case 'ARMORI':
	this.processDrawIcon($dataArmors[this.obtainEscapeParam(textState)].iconIndex, textState);
	break;
    case 'ARMORIA':
	this.processDrawIcon($dataArmors[$gameVariables.value(this.obtainEscapeParam(textState))].iconIndex, textState);
	break;
    }
};

