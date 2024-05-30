const { convertFromAES } = require("@harshiyer/json-crypto");
export default function decodeVault(vault: any) {
  const { aes256Bit, salt, password } = vault;
  const decryptedData: object = new convertFromAES(aes256Bit, password, salt);
  return decryptedData;
}
