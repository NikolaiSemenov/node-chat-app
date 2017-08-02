const expect = require('expect');

const {Users} = require('./users');

describe('class Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Kirill',
			room: 'The Office Funs'
		}, {
			id: '2',
			name: 'Nikolai',
			room: 'The Office Funs'
		}, {
			id: '3',
			name: 'Oleg',
			room: 'Other room'
		}];
	});
	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '1234',
			name: 'Kirill',
			room: 'The Office Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '3';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var userId = '99';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '3';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = 7;
		var user = users.getUser('userId');

		expect(user).toNotExist();
	});

	it('should return names for the office funs room', () => {
		var userList = users.getUserList('The Office Funs');

		expect(userList).toEqual(['Kirill','Nikolai'])
	});

	it('should return names for other room', () => {
		var userList = users.getUserList('Other room');

		expect(userList).toEqual(['Oleg'])
	});
});