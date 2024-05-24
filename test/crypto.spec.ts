const { convertToAES, convertFromAES } = require("@harshiyer/json-crypto");
import { describe, it, expect } from "vitest";

describe("Test JSON Crypto library", () => {
  it("Should convert to AES", async () => {
    const data = { name: "Harsh" };
    const key = "1234567890";
    const encrypted = convertToAES(data, key);
    expect(encrypted).not.toEqual(data);
  });
  it("Should convert from AES", async () => {
    const data = { name: "Harsh" };
    const key = "1234567890";
    const encrypted = convertToAES(data, key);
    const salt = encrypted.salt;
    const aesString = encrypted.aesString;
    const decrypted = convertFromAES(aesString, key, salt);
    expect(decrypted).toEqual(data);
  });
});

