ServerEvents.recipes(event => {

    // Obsidian

event.recipes.createmetallurgy.alloying(
    Fluid.of("metallurgy_plus:molten_obsidian", 90),
    [
      Fluid.of("minecraft:lava", 90),
      Fluid.of("minecraft:water", 90)
    ],
  );
event.recipes.createmetallurgy.casting_in_basin('obsidian', Fluid.of('metallurgy_plus:molten_obsidian', 810), 480)

event.recipes.createmetallurgy.casting_in_table('minecraft:ender_chest', [Fluid.of('metallurgy_plus:molten_obsidian', 810), 'minecraft:ender_eye'], 90, true)

    // Magma

  event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_magma", 30), "minecraft:magma_cream")
    .processingTime(80)
    .heated();

  event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_magma", 110), "minecraft:magma_block")
    .processingTime(80)
    .heated();


//

event.recipes.createmetallurgy.casting_in_basin('minecraft:magma_block',
    Fluid.of('metallurgy_plus:molten_magma', 110)
    , 280, true)

event.recipes.createmetallurgy.casting_in_table('minecraft:magma_cream', 
    Fluid.of('metallurgy_plus:molten_magma', 30)
    , 90, true)

    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:iron_ingot',
        Fluid.of('createmetallurgy:molten_iron', 144),
        80,
        false
    )

// Blaze

    event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_blaze", 90), "minecraft:blaze_rod")
    .processingTime(80)
    .heated();

event.recipes.createmetallurgy.casting_in_table('minecraft:magma_cream', 
    [Fluid.of('metallurgy_plus:molten_blaze', 30), ' minecraft:slime_ball']
    , 80, true)

event.recipes.createmetallurgy.casting_in_table('minecraft:blaze_rod', 
    [Fluid.of('metallurgy_plus:molten_blaze', 90), 'createmetallurgy:graphite_rod_mold']
    , 80, false)



// Glass

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'minecraft:sand' }],
    results: [{ id: 'metallurgy_plus:molten_glass', amount: 1000 }],
    processing_time: 80,
    heat_requirement: 'heated'
})

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'c:glass_blocks/cheap' }],
    results: [{ id: 'metallurgy_plus:molten_glass', amount: 1000 }],
    processing_time: 80,
    heat_requirement: 'heated'
})

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'c:glass_panes' }],
    results: [{ id: 'metallurgy_plus:molten_glass', amount: 250 }],
    processing_time: 80,
    heat_requirement: 'heated'
})

event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ item: 'minecraft:glass_bottle' }],
    results: [{ id: 'metallurgy_plus:molten_glass', amount: 1000 }],
    processing_time: 80,
    heat_requirement: 'heated'
})

//

event.recipes.createmetallurgy.casting_in_basin('minecraft:glass',
    Fluid.of('metallurgy_plus:molten_glass', 1000)
    , 140, true)

event.recipes.createmetallurgy.casting_in_table('minecraft:glass_pane', 
    [Fluid.of('metallurgy_plus:molten_glass', 250)]
    , 80, false)


// Clay

    event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_clay", 250), "minecraft:clay_ball")
    .processingTime(80)
    .heated();

        event.recipes.createmetallurgy
    .melting(Fluid.of("metallurgy_plus:molten_clay", 1000), "minecraft:clay")
    .processingTime(80)
    .heated();

    event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'minecraft:decorated_pot_ingredients' }],
    results: [
        { id: 'metallurgy_plus:molten_clay', amount: 250 },

    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

    event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'minecraft:terracotta' }],
    results: [
        { id: 'metallurgy_plus:molten_clay', amount: 1000 },

    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

    event.custom({
    type: 'createmetallurgy:melting',
    ingredients: [{ tag: 'c:glazed_terracotta' }],
    results: [
        { id: 'metallurgy_plus:molten_clay', amount: 1000 },

    ],
    processing_time: 60,
    heat_requirement: 'heated'
})

// 

event.recipes.createmetallurgy.casting_in_basin('minecraft:terracotta',
    Fluid.of('metallurgy_plus:molten_clay', 1000)
    , 140, true)

event.recipes.createmetallurgy.casting_in_table('minecraft:brick', 
    [Fluid.of('metallurgy_plus:molten_clay', 250), 'createmetallurgy:graphite_ingot_mold']
    , 80, false)


    })
