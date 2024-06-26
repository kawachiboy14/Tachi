// stolen straight from server/src/utils/git.ts
export interface GitCommit {
	sha: string;
	commit: {
		author: {
			name: string;
			email: string;
			date: string;
		};
		committer: {
			name: string;
			email: string;
			date: string;
		};
		message: string;
	};
	parents: Array<{ sha: string }>;
}

export type Revision = { c: GitCommit; repo: string };

export type Branch = { name: string; sha: string };
