const verifiesPostOwnership = (ownerId, userId) => {
if (ownerId !== userId) {
  return { type: 401, message: 'Unauthorized user' }; 
}
  return { type: null, message: '' };
};
module.exports = {
  verifiesPostOwnership,
};