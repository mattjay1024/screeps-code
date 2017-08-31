var creeps_data = {
    "tier_0": [
        {
            "name": "simple_worker",
            "role": "worker",
            "parts": [WORK, MOVE, CARRY]
        },
        
        {
            "name": "simple_fighter",
            "role": "fighter",
            "parts": [ATTACK, MOVE]
        },
        {
            "name": "simple_ranged",
            "role": "ranger",
            "parts": [RANGED_ATTACK, MOVE]
        },
        {
            "name": "simple_cleric",
            "role": "cleric",
            "parts": [HEAL, MOVE]
        },
        {
            "name": "simple_cart",
            "role": "transfer",
            "parts": [CARRY, MOVE, MOVE]
        }
    ],
    
	"tier_1": [
        {
            "name": "worker",
            "role": "worker",
            "parts": [WORK, WORK, CARRY, MOVE, MOVE, MOVE]
        },
        {
            "name": "fighter",
            "role": "fighter",
            "parts": [ATTACK, ATTACK, TOUGH, MOVE, MOVE, MOVE]
        },
        {
            "name": "ranger",
            "role": "ranger",
            "parts": [RANGED_ATTACK, RANGED_ATTACK, ATTACK, MOVE, MOVE, MOVE]
        },
        {
            "name": "cleric",
            "role": "cleric",
            "parts": [HEAL, ATTACK, TOUGH, MOVE, MOVE, MOVE]
        },
        {
            "name": "cart",
            "role": "transfer",
            "parts": [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
        },
        {
            "name": "fast_fighter",
            "role": "fighter-sp-fast",
            "parts": [ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
        },
        {
            "name": "armed_worker",
            "role": "worker-sp-fight",
            "parts": [WORK, WORK, CARRY, ATTACK, MOVE, MOVE, MOVE, MOVE]
        }
	],
    "tier_2": [
        {
            "name": "claimant",
            "role": "claimant",
            "parts": [ATTACK, CLAIM, MOVE, MOVE]
        },
        {
            "name": "tank",
            "role": "tank",
            "parts": [ATTACK, ATTACK, ATTACK, RANGED_ATTACK, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
        },
        {
            "name": "fast_claimant",
            "role": "claimant-sp-fast",
            "parts": [ATTACK, CLAIM, MOVE, MOVE, MOVE, MOVE]
        },
        {
            "name": "sniper",
            "role": "ranger-sp-dmg",
            "parts": [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE]
        },
        {
            "name": "berserker",
            "role": "fighter-sp-dmg",
            "parts": [ATTACK, ATTACK, ATTACK, ATTACK, ]
        }
    ]
}

function creep_cost(template) {
    var total_cost = 0;
    for (var part in template["parts"]) {
        total_cost += BODYPART_COST[part];
    }
    
    return total_cost;
}

module.exports.loop = function () {

}