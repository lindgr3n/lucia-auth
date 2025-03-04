# CHANGELOG

## 0.5.3

- Update peer dependency

## 0.5.2

- Update peer dependency

## 0.5.1

- Add `expiresIn`, `refreshToken` to `validateCallback` (Twitch)

## 0.5.0

- [Breaking] Require `lucia-auth` 0.5.0
- [Breaking] Update `createUser` parameter
- `createKey` method in `validateCallback` result

## 0.4.0

- [Breaking] Require `lucia-auth` 0.4.3
- Log request errors on dev mode

## 0.3.2

- [Fix] Fix runtime errors

## 0.3.1

- Add `User-Agent` header to all requests

## 0.3.0

- [Breaking] Rename type `GetUserType` to `LuciaUser`; remove `GetCreateUserAttributesType`
- `userAttributes` params for `createUser` is optional if `Lucia.UserAttributes` is empty
- Make `Buffer` dependency optional

## 0.2.7

- Fix type issues with `existingUser` and `createUser` for `validateCallback`

## 0.2.6

- Update peer dependency

## 0.2.5

- Add Reddit provider

## 0.2.4

- Update peer dependency

## 0.2.3

- Add Patreon provider

## 0.2.2

- Update dependency

## 0.2.1

- Remove crypto dependency [#236](https://github.com/pilcrowOnPaper/lucia-auth/issues/236)

## 0.2.0

- [Breaking] `getAuthorizationUrl` generates and adds `state` params to the authorization url
- [Breaking] `getAuthorizationUrl` returns a tuple

## 0.1.4

- Add Twitch provider

## 0.1.3

- Add support for `lucia-auth` 0.2.x

## 0.1.2

- Fix imports

## 0.1.1

- Update peer dependency
