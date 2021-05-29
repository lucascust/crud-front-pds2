import DataInput from './DataInput'

// interface DataFormProps{
//     name: string,
//     email: string,
//     password: string,
//     birthdate: string,
//     gender: string,
// }

export function DataForm(){
    return (
        <form>
            <label>First name:</label>
            <DataInput /><br />
            <input type="submit" value="Submit"/>
        </form> 
    )    
}