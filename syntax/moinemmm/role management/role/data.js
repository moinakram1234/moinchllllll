const ROLE = {
  ADMIN: 'admin',
  Teacher: 'teacher',
  Student:'student'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Kyle', role: ROLE.ADMIN },
    { id: 2, name: 'Sally', role: ROLE.Teacher },
    { id: 3, name: 'moin', role: ROLE.Student },
    { id: 4, name: 'ali', role: ROLE.Student },
    { id: 5, name: 'arslan', role: ROLE.Student },
    { id: 6, name: 'akmal', role: ROLE.Student },
    { id: 7, name: 'zeshan', role: ROLE.Student }
  ],
  projects: [
    { id: 3, name: "P", userId: 3 },
    { id: 4, name: "P", userId: 4 },
    { id: 5, name: "A", userId: 5 },
    { id: 6, name: "P", userId: 6 },
    { id: 7, name: "A", userId: 7 }
  
  ]
}