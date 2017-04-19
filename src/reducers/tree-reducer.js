import * as types from '../actions/action-types';

var data = {
            tree: [
                {
                    "node": {
                        "id": "1",
                        "description": "test1",
                        "children": [
                            {
                                "node": {
                                    "id": "1_1",
                                    "description": "test1_1",
                                    "children": [

                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }

export default (state = data, action) => {

  switch (action.type) {
                    case types.ADD_PERSON:
                      return state;
                    default:
                      return state;
  }
  
};
