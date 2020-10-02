import axios from 'axios'

/**
 * axios instance for polling search
 */
const AxiosInstance = axios.create({
	baseURL: 'https://napi.busbud.com/',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
		'X-Busbud-Token': 'PARTNER_BaASYYHxTxuOINEOMWq5GA'
	}
})

export default AxiosInstance
