import { githubActivityRepository } from '$/repository/githubActivityRepository';
import { githubActivityUseCase } from '$/usecase/githubActivityUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await githubActivityRepository.getLatest(query.userId),
  }),
  post: async ({ body }) => ({
    status: 200,
    body: await githubActivityUseCase.fetchActivity(body.userId),
  }),
}));
