let FlagCheckEvent = Java.loadClass("de.z0rdak.yawp.api.events.region.FlagCheckEvent");
let FlagEvaluator = Java.loadClass("de.z0rdak.yawp.api.FlagEvaluator");

BlockEvents.broken(event => {
    try {
      // Ensure we are on the server and that a player is present.
      let player = event.getPlayer();
      if (!player) return;
      let checkEvent = new FlagCheckEvent(
        event.block.getPos(), // block position
        "BREAK_BLOCKS", // this you can change for any flag you want to check
        player.level.getDimensionKey(), // dimension
        player // its just the player the epic steve the legend and the best one of the best the strongest and the more musculine of all the steves
      );
      let can = FlagEvaluator.processCheck(checkEvent)
      // returns ALLOWED, DENIED, or DISABLED
      
    } catch (err) {
      console.error("Error in block break check: " + err);
    }
  });