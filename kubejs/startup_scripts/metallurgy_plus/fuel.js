ItemEvents.modification(event => {
    event.modify('metallurgy_plus:molten_magma_bucket', item => {
        item.burnTime = 16000
    })
    event.modify('metallurgy_plus:molten_blaze_bucket', item => {
        item.burnTime = 20000
    })
})