/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	fromName:{
		type:"string",
		required:true
	},
	fromEmail:{
		type:"string",
		email:true,
		required:true
	},
	subject:{
		type:"string",
		required:true
	},
	body:{
		type:"string",
		required:true
	},
	created:{
		type:"datetime",
		defaultsTo: function(){
			return new Date();
		},
		datetime:true
	}
  }
};

