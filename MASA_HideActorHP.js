//=============================================================================
// Masa_HideActorHP.js
//=============================================================================

var Imported = Imported || {};
Imported.Masa_HideActorHP = true;

var Masa = Masa || {};
Masa.HideActorHP = Masa.HideActorHP || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Allow you to Hide Actor HP (???/??? instead)
 * @author Masajatsu
 *
 * @param Game Variable
 * @desc Engine variable to store the switches
 * Default: 0
 * @default 0
 *
 * @param ID Actor 1
 * @desc Actor ID to hide HP
 * Default: 0
 * @default 0
 *
 * @param ID Actor 2
 * @desc Actor ID to hide HP
 * Default: 0
 * @default 0
 *
 * @param ID Actor 3
 * @desc Actor ID to hide HP
 * Default: 0
 * @default 0
 *
 * @param ID Actor 4
 * @desc Actor ID to hide HP
 * Default: 0
 * @default 0
 *
 * @param ID Actor 5
 * @desc Actor ID to hide HP
 * Default: 0
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
 * This plugin allows you to hide actors HP.
 * Instead it will be "????/????" shown.
 *
 * ============================================================================
 * How to setup this plugin?
 * =============
 * Simply fill the plugin variables on your right.
 * The first variable declares the engine variable that will be used.
 * (Don't use it anywhere else in your project!!!)
 * The following variables will set the actors which HP will be hidden.
 * (Actor ID) 
 *
 * To show the HP again normally, you have to clean the index of the
 * set variable.
 *
 * Example: 
 * Variables used: 100
 * Plugin actor number: "ID Actor  3" = 4
 *
 * Now make a Script (3 tab in Event Editor)
 * To show HP again: $gameVariables.value(100)[3] = 0;
 * To hide Actors 5 HP: $gameVariables.value(100)[3] = 5;
 */
//=============================================================================

Masa.Parameters = PluginManager.parameters('Masa_HideActorHP');
Masa.Param = Masa.Param || {};

Masa.Param.Switch = String(Masa.Parameters['Game Variable']);
Masa.Param.ActorIDs = [];
//Masa.Param.ActorIDs = eval(Masa.Parameters['ID Actor 1']);
for (i = 1; i < 6 ; i++) {
     Masa.Param.ActorIDs[i] = String(Masa.Parameters['ID Actor ' + (i)]);
    }

Masa.HideActorHP.Window_Base_drawActorHP = Window_Base.prototype.drawActorHp;
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    //$gameVariables.setValue(100, Masa.Param.Switch);
    $gameVariables.setValue(Masa.Param.Switch, Masa.Param.ActorIDs);
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    for (i = 1; i <6 ; i++) {
        if ($gameVariables.value(Masa.Param.Switch)[i] == actor.actorId()){
            this.drawCurrentAndMax('????', '????', x, y, width,
                           this.hpColor(actor), this.normalColor());
            i = 6;
        }else if (i == 5){        
            this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
                           this.hpColor(actor), this.normalColor());
        }
    }
};















