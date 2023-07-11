
class ClassBuilder {
    private declaredData: { } = { };

    constructor(data: { }) {
        if(!this.declaredData || this.declaredData == undefined || this.declaredData == null) return;

        this.declaredData = data;
        return;
    }

    private useDataCheck = ( ) => {
        if(!this.declaredData || this.declaredData == undefined || this.declaredData == null) return { code: 1, message: 'No data was parsed or type of parsed data is not an object.', state: true };
    }

    private useDataCallback = async ( callback: ( ) => {} ) => {
        const checkedData = this.useDataCheck();
        if(checkedData?.code) return checkedData;

        await callback();        

        return {
            code: 0,
            message: '"this.declaredData" is ready to use.'
        };
    }

    public use: { } = () => {
        return this.useDataCallback(async ( ) => {});
    }

    public getValueByField = ( fieldName: string ) => {
        const checkedData = this.useDataCheck();
        if(checkedData?.code) return {
            data: {},

            found  : false,
            state  : false,
            code   : 2,
            message: 'Could not parse the entered data.'
        }

        const receivedData: any = this.declaredData;
        if(!receivedData || typeof(receivedData) != 'object') return {
            data: {},

            found  : false,
            state  : false,
            code   : 2,
            message: 'Did not find the entered field.'
        }

        return {
            data: receivedData[fieldName] || 'nil_code',

            found  : true,
            state  : true,
            code   : 0,
            message: 'Found the entered field.'
        }
    }
}

namespace ClassBuilder {
    export interface DataStructureInterface {
        data   : {},
        found  : boolean,
        state  : boolean
        code   : number,
        message: string
    };
}

export default ClassBuilder;