const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                DB_NAME: 'next-blog',
                DB_USERNAME: 'testAdmin',
                DB_PASSWORD: 'ZNVbPfYH2qksUayF',
            },
        };
    }

    return {
        env: {
            DB_NAME: 'next-blog',
            DB_USERNAME: 'testAdmin',
            DB_PASSWORD: 'ZNVbPfYH2qksUayF',
        },
    };
};
