import { expect, Page } from '@playwright/test';
import { AuthPage } from '../page-object/sign-up';
import { test } from '../fixture/base-test';
import { login } from '../fixture/helpers';

test('Login with Email', async ({ page, context }) => {
  await login(page,context)
});