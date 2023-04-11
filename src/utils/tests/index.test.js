import { buildUserKey, buildUserOptionsKey } from '../';

describe('buildUserKey', () => {
  it('works correctly', () => {
    const username = 'username';
    const userKey = buildUserKey(username);
    expect(userKey).toBe(`user#${username}`);
  });
});

describe('buildUserOptionsKey', () => {
  it('works correctly', () => {
    const username = 'username';
    const userOptionsKey = buildUserOptionsKey(username);
    expect(userOptionsKey).toBe(`userOptions#${username}`);
  });
});