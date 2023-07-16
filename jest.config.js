module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        }
    }
};