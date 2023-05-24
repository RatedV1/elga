import axios from 'axios';

// Coach APIs
export function getAllCoaches() {
  return axios.get('/api/coaches');
}

export function getCoachById(coachId) {
  return axios.get(`/api/coaches/${coachId}`);
}

export function createCoach(coachData) {
  return axios.post('/api/coaches', coachData);
}

export function updateCoach(coachId, coachData) {
  return axios.put(`/api/coaches/${coachId}`, coachData);
}

export function getCoachIdByEmail(email) {
  return axios.get(`/api/coaches/email/${email}`);
}
export function getCoachLevel(coachId) {
  return axios.get(`/api/coaches/${coachId}/level`);
}
export function getCoachAverageRating(coachId) {
  return axios.get(`/api/coaches/${coachId}/average-rating`);
}
// Game APIs
export function createGame(gameData) {
  return axios.post('/api/games', gameData);
}

export function getAllGames() {
  return axios.get('/api/games');
}

export function getGameById(gameId) {
  return axios.get(`/api/games/${gameId}`);
}

export function updateGame(gameId, gameData) {
  return axios.put(`/api/games/${gameId}`, gameData);
}

export function deleteGame(gameId) {
  return axios.delete(`/api/games/${gameId}`);
}

// Message APIs
export function sendMessage(orderId, messageData) {
  return axios.post(`/api/messages/${orderId}`, messageData);
}

export function getMessages(orderId) {
  return axios.get(`/api/messages/${orderId}`);
}

export function deleteMessagesByOrderId(orderId) {
  return axios.delete(`/api/messages/${orderId}`);
}

export function deleteMessageById(messageId) {
  return axios.delete(`/api/messages/message/${messageId}`);
}

// Order APIs
export function createOrder(orderData) {
  return axios.post('/api/orders', orderData);
}

export function getOrders() {
  return axios.get('/api/orders');
}

export function getOrder(orderId) {
  return axios.get(`/api/orders/${orderId}`);
}

export function updateOrder(orderId, orderData) {
  return axios.put(`/api/orders/${orderId}`, orderData);
}

export function deleteOrder(orderId) {
  return axios.delete(`/api/orders/${orderId}`);
}

// Service APIs
export function createService(coachId, serviceData) {
  return axios.post(`/api/coaches/${coachId}/services`, serviceData);
}

export function updateService(coachId, serviceId, serviceData) {
  return axios.put(`/api/coaches/${coachId}/services/${serviceId}`, serviceData);
}

export function getService(coachId, serviceId) {
  return axios.get(`/api/coaches/${coachId}/services/${serviceId}`);
}

export function deleteService(coachId, serviceId) {
  return axios.delete(`/api/coaches/${coachId}/services/${serviceId}`);
}

// User APIs
export function registerUser(userData) {
  return axios.post('/api/users/register', userData);
}

export function loginUser(userData) {
  return axios.post('/api/users/login', userData);
}

export function getUserProfile() {
  return axios.get('/api/users/profile');
}

export function updateUserProfile(userData) {
  return axios.put('/api/users/profile', userData);
}

export function deleteUser() {
  return axios.delete('/api/users/user');
}

export function generateAffiliateLink() {
  return axios.get('/api/users/affiliate/link');
}

export function getAffiliateDashboard() {
  return axios.get('/api/users/affiliate/dashboard');
}

// Review APIs
export function createReview(reviewData) {
  return axios.post('/api/reviews', reviewData);
}
export function getReviews() {
  return axios.get('/api/reviews');
}
export function getReviewById(reviewId) {
  return axios.get(`/api/reviews/${reviewId}`);
}
export function updateReview(reviewId, reviewData) {
  return axios.put(`/api/reviews/${reviewId}`, reviewData);
}
export function getReviewsByCoachId(coachId) {
  return axios.get(`/api/reviews/coach/${coachId}`);
}

//Task APIs
export function createTask(taskData) {  // New function to create a task
  return axios.post('/api/tasks', taskData);
}
export function updateTask(taskId, taskData) {  // New function to update a task
  return axios.put(`/api/tasks/${taskId}`, taskData);
}
export function getTasksByCustomer(customerId) {  // New function to get tasks by customer ID
  return axios.get(`/api/tasks/customer/${customerId}`);
}
export function getTaskById(taskId) {  // New function to get a task by its ID
  return axios.get(`/api/tasks/${taskId}`);
}
export function deleteTask(taskId) {  // New function to delete a task by its ID
  return axios.delete(`/api/tasks/${taskId}`);
}