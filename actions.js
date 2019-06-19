export const types = {
  UPDATE_TIMESTAMPS: "UPDATE TIMESTAMPS",
  UPDATE_VERTICAL: "UPDATE VERTICAL POS AND/OR BODY",
  APPROPRIATE: "APPROPRIATE"
};

// Actions
const updateTimestamps = (entry, exit) => ({
  type: types.UPDATE_TIMESTAMPS,
  entry,
  exit
});

const updateVertical = (floorY, completeBody) => ({
  type: types.UPDATE_VERTICAL,
  floorY,
  completeBody
});

const appropriate = appropriate => ({
  type: types.APPROPRIATE,
  appropriate
});

export const actions = {
  updateTimestamps,
  updateVertical,
  appropriate
};
