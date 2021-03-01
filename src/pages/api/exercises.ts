import challenges from '../../../challenges.json'

export default async (request, response) => {
  return response.status(201).json(challenges);
}