# DeFi Real Estate - Take-Home Assessment

## Candidate Information

**Name:** Divahar NS  
**Assessment:** Backend & Smart Contract Review  
**Technology Stack:** Node.js, MongoDB, Solidity, Hardhat, TypeScript  
**Date:** 13- June-2026

---

# Implementation Summary

The assessment involved reviewing the backend application, smart contracts, testing framework, and project build setup. The focus was on identifying high-impact issues affecting reliability, transaction correctness, and developer experience.

---

# File-Wise Changes

## 1. Backend Changes

### File: `server/controllers/auth.controller.js`

#### Problem Identified
- Authentication initialization contained a brittle dependency that executed during module loading.
- Registration flow could result in incorrect user initialization.
- User profile field handling was inconsistent.

#### Changes Implemented
- Removed startup dependency executed during module import.
- Fixed user registration flow to properly initialize user objects.
- Improved handling of user profile fields.
- Added safer validation and initialization logic.

#### Business Impact
- Improved authentication reliability.
- Reduced startup-related failures.
- Consistent user registration behavior.

---

### File: `server/app.js`

#### Problem Identified
- MongoDB connection handling was fragile.
- Application startup could fail unexpectedly.
- Request body parsing was incomplete.

#### Changes Implemented
- Added MongoDB connection initialization and error handling.
- Added request parsing middleware for JSON and URL-encoded payloads.
- Improved application startup sequence and logging.

#### Business Impact
- Reliable application startup.
- Improved API request processing.
- Better operational stability.

---

# 2. Smart Contract Changes

### File: `contracts/HomeTransaction.sol`

#### Problem Identified
- Withdrawal functionality had incorrect refund behavior.
- Buyer deposits were not refunded correctly during transaction withdrawal.

#### Changes Implemented
- Fixed withdrawal logic.
- Ensured buyer deposits are refunded correctly.
- Added `DepositRefunded` event for transaction tracking.
- Verified transaction state updates after withdrawal.

#### Business Impact
- Correct handling of buyer funds.
- Improved contract accuracy.
- Better transparency and auditability.

---

# 3. Testing Enhancements

### File: `test/HomeTransaction.test.js`

#### Problem Identified
- No automated test existed for withdrawal/refund functionality.

#### Changes Implemented
- Added regression test covering withdrawal flow.
- Validated refund execution.
- Verified refund event emission.

#### Business Impact
- Prevents future regressions.
- Improves confidence in contract behavior.

---

### File: `hardhat.config.js`

#### Changes Implemented
- Added Hardhat configuration.
- Enabled local smart contract compilation and testing.

#### Business Impact
- Easier contract validation.
- Improved developer productivity.

---

# 4. Build & Dependency Fixes

### File: `package.json`

#### Changes Implemented
- Added `test:contracts` script.
- Added Hardhat testing dependencies.
- Added TypeScript dependency updates.
- Fixed build compatibility requirements.

#### Business Impact
- Simplified testing process.
- Stable project dependencies.

---

### File: `tsconfig.json`

#### Problem Identified
- TypeScript compatibility issues causing build failures.

#### Changes Implemented
- Updated TypeScript compiler configuration.
- Added compatibility settings required by project dependencies.

#### Business Impact
- Successful compilation.
- Improved developer experience.

---

### File: `package-lock.json`

#### Changes Implemented
- Updated lock file to reflect dependency changes.

#### Business Impact
- Reproducible installations across environments.

---

# Validation Performed

## Smart Contract Validation

```bash
npm run test:contracts
```

**Result:** ✅ Contract tests passed successfully.

---

## Backend Validation

```bash
node -e "require('./server/controllers/auth.controller')"
```

**Result:** ✅ Authentication controller loaded successfully.

---

## Build Validation

```bash
npm run build
```

**Result:** ✅ Project compiled successfully.

---

# Summary of Deliverables

| File | Change |
|--------|---------|
| `contracts/HomeTransaction.sol` | Fixed withdrawal refund logic and added refund event |
| `test/HomeTransaction.test.js` | Added regression test for refund workflow |
| `hardhat.config.js` | Added Hardhat testing configuration |
| `server/controllers/auth.controller.js` | Fixed authentication and registration issues |
| `server/app.js` | Improved MongoDB startup and request handling |
| `package.json` | Added testing scripts and dependencies |
| `tsconfig.json` | Fixed TypeScript compatibility issues |
| `package-lock.json` | Updated dependency lock versions |

---

# Conclusion

The implementation focused on resolving critical backend and smart contract issues while improving project stability and test coverage. The major fixes included correcting buyer refund handling within the smart contract, strengthening backend startup and authentication flows, introducing automated regression testing, and resolving dependency/build compatibility issues.

All changes were validated through contract testing, backend verification, and successful project compilation.

---

## Submitted By

**Divahar NS**  
Senior Full Stack Engineer | MERN Stack | Blockchain Development