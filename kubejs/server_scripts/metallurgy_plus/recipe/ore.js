ServerEvents.recipes(event => {

// Quartz

    event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_quartz", 100), "minecraft:quartz")
    .processingTime(80)
    .heated();

        event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_quartz", 400), "minecraft:quartz_block")
    .processingTime(80)
    .heated();

            event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_quartz", 50), "minecraft:quartz_slab")
    .processingTime(80)
    .heated();

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:comparator' }],
    results: [
        { id: 'metallurgy_plus:molten_quartz', amount: 100 },
        { id: 'metallurgy_plus:molten_redstone', amount: 300 }
    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:observer' }],
    results: [
        { id: 'metallurgy_plus:molten_quartz', amount: 100 },
        { id: 'metallurgy_plus:molten_redstone', amount: 200 }
    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

//

event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 50, fluid: 'metallurgy_plus:molten_quartz' },
        { tag: 'c:cobblestones' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:andesite'
        }
    }
})


event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 50, fluid: 'metallurgy_plus:molten_quartz' },
        { item: 'minecraft:andesite' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:diorite'
        }
    }
})

event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 50, fluid: 'metallurgy_plus:molten_quartz' },
        { item: 'minecraft:diorite' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:granite'
        }
    }
})

event.recipes.createmetallurgy.casting_in_basin('minecraft:quartz_block',
    Fluid.of('metallurgy_plus:molten_quartz', 400)
    , 180, true)
    
// Diamond

        event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_diamond", 100), "minecraft:diamond")
    .processingTime(80)
    .heated();

            event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_diamond", 900), "minecraft:diamond_block")
    .processingTime(80)
    .heated();

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:enchanting_table' }],
    results: [
        { id: 'metallurgy_plus:molten_diamond', amount: 200 },
        { id: 'metallurgy_plus:molten_obsidian', amount: 400 }
    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'minecraft:trim_templates' }],
    results: [
        { id: 'metallurgy_plus:molten_diamond', amount: 500 }
    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

//

event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 100, fluid: 'metallurgy_plus:molten_diamond' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:diamond'
        }
    }
})

event.recipes.createmetallurgy.casting_in_basin('minecraft:diamond_block',
    Fluid.of('metallurgy_plus:molten_diamond', 900)
    , 220, true)

// Emerald

        event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_emerald", 100), "minecraft:emerald")
    .processingTime(80)
    .heated();

            event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_emerald", 900), "minecraft:emerald_block")
    .processingTime(80)
    .heated()

//

event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 100, fluid: 'metallurgy_plus:molten_emerald' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:emerald'
        }
    }
})

event.recipes.createmetallurgy.casting_in_basin('minecraft:emerald_block',
    Fluid.of('metallurgy_plus:molten_emerald', 900)
    , 220, true)

// redstone

        event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_redstone", 100), "minecraft:redstone")
    .processingTime(80)
    .heated();

            event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_redstone", 900), "minecraft:redstone_block")
    .processingTime(80)
    .heated()

//

event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 100, fluid: 'metallurgy_plus:molten_redstone' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:redstone'
        }
    }
})

event.recipes.createmetallurgy.casting_in_basin('minecraft:redstone_block',
    Fluid.of('metallurgy_plus:molten_redstone', 900)
    , 220, true)

event.recipes.createmetallurgy.alloying(
    ("create:rose_quartz"),
    [
      Fluid.of("metallurgy_plus:molten_redstone", 800),
      Fluid.of("metallurgy_plus:molten_quartz", 100)
    ],
  );

  // Amethyst

          event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_amethyst", 100), "minecraft:amethyst_shard")
    .processingTime(80)
    .heated();

            event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_amethyst", 400), "minecraft:amethyst_block")
    .processingTime(80)
    .heated()

    event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:spyglass' }],
    results: [
        { id: 'metallurgy_plus:molten_amethyst', amount: 100 },
        { id: 'createmetallurgy:molten_copper', amount: 180 }
    ],
    processing_time: 60,
    heat_requirement: 'heated' 
    })

        event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:tinted_glass' }],
    results: [
        { id: 'metallurgy_plus:molten_glass', amount: 50 },
        { id: 'metallurgy_plus:molten_amethyst', amount: 200 }
    ],
    processing_time: 60,
    heat_requirement: 'heated' 
    })
    //

    event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
        { type: 'neoforge:single', amount: 100, fluid: 'metallurgy_plus:molten_amethyst' }
    ],processing_time: 80,
    result: {
        item: { count: 1,id: 'minecraft:amethyst_shard'
        }
    }
})
    event.recipes.createmetallurgy.casting_in_basin('minecraft:amethyst_block',
    Fluid.of('metallurgy_plus:molten_amethyst', 900)
    , 220, true)

})
