namespace UserUtils{
	export class Users{ //need to export
		getName(){
			return 'abc';
		}
	}
}
let userObject = new UserUtils.Users();
console.log(userObject.getName());

//tsc fileName --outfile outFileName(extension js) to run namespace else we use tsc fileName --watch
//example : tsc nameSpace.ts --outfile nameSpaceOut.js
//it will create js file 