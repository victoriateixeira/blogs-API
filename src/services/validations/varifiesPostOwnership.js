const verifiesPostOwnership = (ownerId, userId) => {
  console.log(typeof ownerId, typeof userId, 'VERIFIESOWNERSHIP');
if (ownerId !== userId) {
  return { type: 401, message: { message: 'Unauthorized user' } }; 
}
  return { type: null, message: '' };
};
module.exports = {
  verifiesPostOwnership,
};