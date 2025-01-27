## Development

This project uses:
- ESLint for linting
- Prettier for code formatting
- Husky for Git hooks
- lint-staged for running checks on staged files
- Conventional Commits for commit messages

### Available Scripts

- `yarn lint`: Check for linting issues
- `yarn lint:fix`: Fix linting issues
- `yarn format`: Format all files
- `yarn format:check`: Check if files are formatted

### Git Hooks

- **pre-commit**: Runs linting and formatting on staged files
- **pre-push**: Runs build to ensure everything compiles
- **commit-msg**: Ensures commit messages follow Conventional Commits

### Commit Message Format

This project follows Conventional Commits. Each commit message should have a type:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `revert`: Revert previous commits
- `wip`: Work in progress

Example:
```bash
feat: add new button component
fix: resolve navigation bug
docs: update installation instructions
