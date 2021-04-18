const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


// This setes the mock adapter on the defualt instance
const mock = new MockAdapter(axios);

// data endpoints
mock.onGet('/api/data/repo_hierarchy').reply(200, require('./fixtures/repo_hierarchy.json'))
mock.onGet('/api/data/amount_of_repos').reply(200, require('./fixtures/open_source_vs_ep_repos.json'))
mock.onGet('/api/data/device_percentage').reply(200, require('./fixtures/device_percentage.json'))


// congiguration endpoints
mock.onGet('/api/dashboard/repo_dash_config').reply(200, require('./fixtures/repo_dash_config.json'))

// dashboard list endpoint
mock.onGet('/api/dashboard-list').reply(200, [
    {
       path: "repo_dash_config",
       title: "Org Repository Insights",
       description: "we are off to see the wizard, the wonderful wizard of oz"
    }
 ])

