const { ROLE } = require('../data')

function canViewProject(user, project) {
  if (
    user.role === ROLE.ADMIN ||
    project.userId === user.id
  )
  return (
    user.role === ROLE.ADMIN ||
    project.userId === user.id
  )
  if (
    user.role === ROLE.Teacher ||
    project.userId === user.id
  )
  return (
    user.role === ROLE.Teacher ||
    project.userId === user.id
  )
}

function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects
  return projects.filter(project => project.userId === user.id)
  
}

function canDeleteProject(user, project) {
  if (
    user.role === ROLE.ADMIN 
  )
  return (
    user.role === ROLE.ADMIN 
  )
  if (
    user.role === ROLE.Teacher 
  )
  return (
    user.role === ROLE.Teacher 
  )
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}