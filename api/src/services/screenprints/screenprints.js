import { db } from 'src/lib/db'

export const screenprints = () => {
  return db.screenprint.findMany()
}

export const screenprint = ({ id }) => {
  return db.screenprint.findUnique({
    where: { id },
  })
}

export const createScreenprint = ({ input }) => {
  return db.screenprint.create({
    data: input,
  })
}

export const updateScreenprint = ({ id, input }) => {
  return db.screenprint.update({
    data: input,
    where: { id },
  })
}

export const deleteScreenprint = ({ id }) => {
  return db.screenprint.delete({
    where: { id },
  })
}
