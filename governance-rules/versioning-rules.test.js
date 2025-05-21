  
// Jest test cases for API versioning rules

const { pattern } = require('@stoplight/spectral-functions');

function validatePath(path) {
  const regex = /^\/v\d+\//;
  return regex.test(path);
}

function validateVersion(version) {
  // Semantic versioning x.y.z where x,y,z are numbers
  const semverRegex = /^\d+\.\d+\.\d+$/;
  return semverRegex.test(version);
}

test('Valid path: /v1/users', () => {
  expect(validatePath('/v1/users')).toBe(true);
});

test('Invalid path: /users', () => {
  expect(validatePath('/users')).toBe(false);
});

test('Invalid path: /api/users', () => {
  expect(validatePath('/api/users')).toBe(false);
});

test('Valid version: 1.0.0', () => {
  expect(validateVersion('1.0.0')).toBe(true);
});

test('Invalid version: v1', () => {
  expect(validateVersion('v1')).toBe(false);
});

test('Invalid version: version1', () => {
  expect(validateVersion('version1')).toBe(false);
});

test('Invalid version: 1.0', () => {
  expect(validateVersion('1.0')).toBe(false);
});

// Additional thorough tests

test('Valid path with extra slash: /v2//users', () => {
  expect(validatePath('/v2//users')).toBe(true);
});

test('Valid path with trailing slash: /v3/users/', () => {
  expect(validatePath('/v3/users/')).toBe(true);
});

test('Invalid path with no version number: /v/users', () => {
  expect(validatePath('/v/users')).toBe(false);
});

test('Invalid path empty string', () => {
  expect(validatePath('')).toBe(false);
});

test('Invalid path null', () => {
  expect(validatePath(null)).toBe(false);
});

test('Valid version with pre-release: 1.0.0-alpha', () => {
  expect(validateVersion('1.0.0-alpha')).toBe(false);
});

test('Valid version with build metadata: 1.0.0+20130313144700', () => {
  expect(validateVersion('1.0.0+20130313144700')).toBe(false);
});

test('Invalid version with letters in numeric parts: 1.a.0', () => {
  expect(validateVersion('1.a.0')).toBe(false);
});

test('Invalid version with missing parts: 1', () => {
  expect(validateVersion('1')).toBe(false);
});

test('Invalid version empty string', () => {
  expect(validateVersion('')).toBe(false);
});

test('Invalid version null', () => {
  expect(validateVersion(null)).toBe(false);
});
