const axios = require('axios');
const fs = require('fs');

const fetchEnergy = async (token) => {
  try {
    const response = await axios.get(
      'https://www.mintchain.io/api/tree/energy-list',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.7',
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Priority: 'u=1, i',
          Referer: 'https://www.mintchain.io/mint-forest',
          'Sec-Ch-Ua':
            '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"macOS"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Gpc': '1',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get(
      'https://www.mintchain.io/api/tree/user-info',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.7',
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Priority: 'u=1, i',
          Referer: 'https://www.mintchain.io/mint-forest',
          'Sec-Ch-Ua':
            '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"macOS"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Gpc': '1',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const claimEnergy = async (token, uid, amount, includes, type, id) => {
  try {
    const response = await axios.post(
      'https://www.mintchain.io/api/tree/claim',
      {
        uid: uid,
        amount: amount,
        includes: includes,
        type: type,
        freeze: false,
        id: id,
      },
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.7',
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Priority: 'u=1, i',
          Referer: 'https://www.mintchain.io/mint-forest',
          'Sec-Ch-Ua':
            '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"macOS"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Gpc': '1',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          Authorization: token,
        },
      }
    );
    return response.data.msg;
  } catch (error) {
    throw error;
  }
};

const injectEnergy = async (token, energy, address) => {
  try {
    const response = await axios.post(
      'https://www.mintchain.io/api/tree/inject',
      {
        energy: energy,
        address: address,
      },
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'en-US,en;q=0.7',
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Priority: 'u=1, i',
          Referer: 'https://www.mintchain.io/mint-forest',
          'Sec-Ch-Ua':
            '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"macOS"',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Gpc': '1',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTokenList = () => {
  const jsonFileContent = fs.readFileSync('accounts.json');
  return JSON.parse(jsonFileContent);
};

module.exports = {
  fetchEnergy,
  fetchUserInfo,
  claimEnergy,
  injectEnergy,
  getTokenList,
};
