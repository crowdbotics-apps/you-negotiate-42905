import axios from "axios"
const royalsnowAPI = axios.create({
  baseURL: "https://bestlifepay-42905.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return royalsnowAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_billingdetails_list(payload) {
  return royalsnowAPI.get(`/api/v1/billingdetails/`)
}
function api_v1_billingdetails_create(payload) {
  return royalsnowAPI.post(`/api/v1/billingdetails/`, payload.data)
}
function api_v1_billingdetails_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/billingdetails/${payload.id}/`)
}
function api_v1_billingdetails_update(payload) {
  return royalsnowAPI.put(`/api/v1/billingdetails/${payload.id}/`, payload.data)
}
function api_v1_billingdetails_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/billingdetails/${payload.id}/`,
    payload.data
  )
}
function api_v1_billingdetails_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/billingdetails/${payload.id}/`)
}
function api_v1_businessownerdata_list(payload) {
  return royalsnowAPI.get(`/api/v1/businessownerdata/`)
}
function api_v1_businessownerdata_create(payload) {
  return royalsnowAPI.post(`/api/v1/businessownerdata/`, payload.data)
}
function api_v1_businessownerdata_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/businessownerdata/${payload.id}/`)
}
function api_v1_businessownerdata_update(payload) {
  return royalsnowAPI.put(
    `/api/v1/businessownerdata/${payload.id}/`,
    payload.data
  )
}
function api_v1_businessownerdata_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/businessownerdata/${payload.id}/`,
    payload.data
  )
}
function api_v1_businessownerdata_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/businessownerdata/${payload.id}/`)
}
function api_v1_city_list(payload) {
  return royalsnowAPI.get(`/api/v1/city/`)
}
function api_v1_city_create(payload) {
  return royalsnowAPI.post(`/api/v1/city/`, payload.data)
}
function api_v1_city_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/city/${payload.id}/`)
}
function api_v1_city_update(payload) {
  return royalsnowAPI.put(`/api/v1/city/${payload.id}/`, payload.data)
}
function api_v1_city_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/city/${payload.id}/`, payload.data)
}
function api_v1_city_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/city/${payload.id}/`)
}
function api_v1_consumeroffer_list(payload) {
  return royalsnowAPI.get(`/api/v1/consumeroffer/`)
}
function api_v1_consumeroffer_create(payload) {
  return royalsnowAPI.post(`/api/v1/consumeroffer/`, payload.data)
}
function api_v1_consumeroffer_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/consumeroffer/${payload.id}/`)
}
function api_v1_consumeroffer_update(payload) {
  return royalsnowAPI.put(`/api/v1/consumeroffer/${payload.id}/`, payload.data)
}
function api_v1_consumeroffer_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/consumeroffer/${payload.id}/`,
    payload.data
  )
}
function api_v1_consumeroffer_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/consumeroffer/${payload.id}/`)
}
function api_v1_country_list(payload) {
  return royalsnowAPI.get(`/api/v1/country/`)
}
function api_v1_country_create(payload) {
  return royalsnowAPI.post(`/api/v1/country/`, payload.data)
}
function api_v1_country_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/country/${payload.id}/`)
}
function api_v1_country_update(payload) {
  return royalsnowAPI.put(`/api/v1/country/${payload.id}/`, payload.data)
}
function api_v1_country_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/country/${payload.id}/`, payload.data)
}
function api_v1_country_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/country/${payload.id}/`)
}
function api_v1_creditorbusinessdata_list(payload) {
  return royalsnowAPI.get(`/api/v1/creditorbusinessdata/`)
}
function api_v1_creditorbusinessdata_create(payload) {
  return royalsnowAPI.post(`/api/v1/creditorbusinessdata/`, payload.data)
}
function api_v1_creditorbusinessdata_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/creditorbusinessdata/${payload.id}/`)
}
function api_v1_creditorbusinessdata_update(payload) {
  return royalsnowAPI.put(
    `/api/v1/creditorbusinessdata/${payload.id}/`,
    payload.data
  )
}
function api_v1_creditorbusinessdata_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/creditorbusinessdata/${payload.id}/`,
    payload.data
  )
}
function api_v1_creditorbusinessdata_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/creditorbusinessdata/${payload.id}/`)
}
function api_v1_importedfile_list(payload) {
  return royalsnowAPI.get(`/api/v1/importedfile/`)
}
function api_v1_importedfile_create(payload) {
  return royalsnowAPI.post(`/api/v1/importedfile/`, payload.data)
}
function api_v1_importedfile_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/importedfile/${payload.id}/`)
}
function api_v1_importedfile_update(payload) {
  return royalsnowAPI.put(`/api/v1/importedfile/${payload.id}/`, payload.data)
}
function api_v1_importedfile_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/importedfile/${payload.id}/`, payload.data)
}
function api_v1_importedfile_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/importedfile/${payload.id}/`)
}
function api_v1_loanaccount_list(payload) {
  return royalsnowAPI.get(`/api/v1/loanaccount/`)
}
function api_v1_loanaccount_create(payload) {
  return royalsnowAPI.post(`/api/v1/loanaccount/`, payload.data)
}
function api_v1_loanaccount_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/loanaccount/${payload.id}/`)
}
function api_v1_loanaccount_update(payload) {
  return royalsnowAPI.put(`/api/v1/loanaccount/${payload.id}/`, payload.data)
}
function api_v1_loanaccount_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/loanaccount/${payload.id}/`, payload.data)
}
function api_v1_loanaccount_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/loanaccount/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return royalsnowAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_membershipplan_list(payload) {
  return royalsnowAPI.get(`/api/v1/membershipplan/`)
}
function api_v1_membershipplan_create(payload) {
  return royalsnowAPI.post(`/api/v1/membershipplan/`, payload.data)
}
function api_v1_membershipplan_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/membershipplan/${payload.id}/`)
}
function api_v1_membershipplan_update(payload) {
  return royalsnowAPI.put(`/api/v1/membershipplan/${payload.id}/`, payload.data)
}
function api_v1_membershipplan_partial_update(payload) {
  return royalsnowAPI.patch(
    `/api/v1/membershipplan/${payload.id}/`,
    payload.data
  )
}
function api_v1_membershipplan_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/membershipplan/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return royalsnowAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return royalsnowAPI.post(`/api/v1/payment/`, payload.data)
}
function api_v1_payment_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return royalsnowAPI.put(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return royalsnowAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_state_list(payload) {
  return royalsnowAPI.get(`/api/v1/state/`)
}
function api_v1_state_create(payload) {
  return royalsnowAPI.post(`/api/v1/state/`, payload.data)
}
function api_v1_state_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/state/${payload.id}/`)
}
function api_v1_state_update(payload) {
  return royalsnowAPI.put(`/api/v1/state/${payload.id}/`, payload.data)
}
function api_v1_state_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/state/${payload.id}/`, payload.data)
}
function api_v1_state_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/state/${payload.id}/`)
}
function api_v1_subscription_list(payload) {
  return royalsnowAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(payload) {
  return royalsnowAPI.post(`/api/v1/subscription/`, payload.data)
}
function api_v1_subscription_retrieve(payload) {
  return royalsnowAPI.get(`/api/v1/subscription/${payload.id}/`)
}
function api_v1_subscription_update(payload) {
  return royalsnowAPI.put(`/api/v1/subscription/${payload.id}/`, payload.data)
}
function api_v1_subscription_partial_update(payload) {
  return royalsnowAPI.patch(`/api/v1/subscription/${payload.id}/`, payload.data)
}
function api_v1_subscription_destroy(payload) {
  return royalsnowAPI.delete(`/api/v1/subscription/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return royalsnowAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return royalsnowAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return royalsnowAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return royalsnowAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return royalsnowAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return royalsnowAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return royalsnowAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return royalsnowAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return royalsnowAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_billingdetails_list,
  api_v1_billingdetails_create,
  api_v1_billingdetails_retrieve,
  api_v1_billingdetails_update,
  api_v1_billingdetails_partial_update,
  api_v1_billingdetails_destroy,
  api_v1_businessownerdata_list,
  api_v1_businessownerdata_create,
  api_v1_businessownerdata_retrieve,
  api_v1_businessownerdata_update,
  api_v1_businessownerdata_partial_update,
  api_v1_businessownerdata_destroy,
  api_v1_city_list,
  api_v1_city_create,
  api_v1_city_retrieve,
  api_v1_city_update,
  api_v1_city_partial_update,
  api_v1_city_destroy,
  api_v1_consumeroffer_list,
  api_v1_consumeroffer_create,
  api_v1_consumeroffer_retrieve,
  api_v1_consumeroffer_update,
  api_v1_consumeroffer_partial_update,
  api_v1_consumeroffer_destroy,
  api_v1_country_list,
  api_v1_country_create,
  api_v1_country_retrieve,
  api_v1_country_update,
  api_v1_country_partial_update,
  api_v1_country_destroy,
  api_v1_creditorbusinessdata_list,
  api_v1_creditorbusinessdata_create,
  api_v1_creditorbusinessdata_retrieve,
  api_v1_creditorbusinessdata_update,
  api_v1_creditorbusinessdata_partial_update,
  api_v1_creditorbusinessdata_destroy,
  api_v1_importedfile_list,
  api_v1_importedfile_create,
  api_v1_importedfile_retrieve,
  api_v1_importedfile_update,
  api_v1_importedfile_partial_update,
  api_v1_importedfile_destroy,
  api_v1_loanaccount_list,
  api_v1_loanaccount_create,
  api_v1_loanaccount_retrieve,
  api_v1_loanaccount_update,
  api_v1_loanaccount_partial_update,
  api_v1_loanaccount_destroy,
  api_v1_login_create,
  api_v1_membershipplan_list,
  api_v1_membershipplan_create,
  api_v1_membershipplan_retrieve,
  api_v1_membershipplan_update,
  api_v1_membershipplan_partial_update,
  api_v1_membershipplan_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_signup_create,
  api_v1_state_list,
  api_v1_state_create,
  api_v1_state_retrieve,
  api_v1_state_update,
  api_v1_state_partial_update,
  api_v1_state_destroy,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_retrieve,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
