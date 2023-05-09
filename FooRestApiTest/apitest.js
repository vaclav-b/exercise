import { group, check } from 'k6'
import http from 'k6/http'


export function testsApi() {
    let response;
    let checkStatus;
    
    group('Foo Rest API', () => {

        response = http.get('localhost:10000/Foo');
        
        checkStatus = check(response, {
            'request succeeded': (res) => res.status == 200,
        });

        logStatus('request succeeded', checkStatus, response);

        checkStatus = check(response, {
            'bar': (res) => res.body.includes("bar"),
        });
        
        logStatus('request contains bar', checkStatus, response);
    }
}