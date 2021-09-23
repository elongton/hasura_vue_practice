import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
};

export type RegisterArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.users" */
export type Auth_Users = {
  __typename?: 'auth_users';
  email: Scalars['String'];
  encrypted_password: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: Maybe<Array<Auth_Users_Bool_Exp>>;
  _not?: Maybe<Auth_Users_Bool_Exp>;
  _or?: Maybe<Array<Auth_Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  encrypted_password?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersEncryptedPasswordKey = 'users_encrypted_password_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  email?: Maybe<Order_By>;
  encrypted_password?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  login?: Maybe<LoginResult>;
  register?: Maybe<RegisterResult>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  args: LoginArgs;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  args: RegisterArgs;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  id: Scalars['Int'];
  image_url: Scalars['String'];
  text: Scalars['String'];
  /** An object relationship */
  user: Auth_Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Posts_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Auth_Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<Auth_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  args: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: Maybe<{ __typename?: 'LoginResult', token: string }> };

export type RegisterMutationVariables = Exact<{
  args: RegisterArgs;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: Maybe<{ __typename?: 'RegisterResult', token: string }> };

export type PostsFragmentFragment = { __typename?: 'posts', id: number, image_url: string, text: string, user: { __typename?: 'auth_users', first_name: string, last_name: string, id: number } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: number, image_url: string, text: string, user_id: number }> };

export type PostsStreamSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type PostsStreamSubscription = { __typename?: 'subscription_root', posts: Array<{ __typename?: 'posts', id: number, image_url: string, user_id: number, text: string }> };

export type InsertPostMutationVariables = Exact<{
  object?: Maybe<Posts_Insert_Input>;
}>;


export type InsertPostMutation = { __typename?: 'mutation_root', insert_posts_one?: Maybe<{ __typename?: 'posts', id: number, image_url: string, text: string, user: { __typename?: 'auth_users', first_name: string, last_name: string, id: number } }> };

export type UpdatePostMutationVariables = Exact<{
  where?: Maybe<Posts_Bool_Exp>;
  _set?: Maybe<Posts_Set_Input>;
}>;


export type UpdatePostMutation = { __typename?: 'mutation_root', update_posts?: Maybe<{ __typename?: 'posts_mutation_response', returning: Array<{ __typename?: 'posts', id: number, image_url: string, text: string, user: { __typename?: 'auth_users', first_name: string, last_name: string, id: number } }> }> };

export type DeletePostMutationVariables = Exact<{
  where?: Maybe<Posts_Bool_Exp>;
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', delete_posts?: Maybe<{ __typename?: 'posts_mutation_response', returning: Array<{ __typename?: 'posts', id: number, image_url: string, text: string, user: { __typename?: 'auth_users', first_name: string, last_name: string, id: number } }> }> };

export type UserFieldsFragment = { __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string };

export type UsersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersQuery = { __typename?: 'query_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export type UsersStreamSubscriptionVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersStreamSubscription = { __typename?: 'subscription_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export const PostsFragmentFragmentDoc = gql`
    fragment postsFragment on posts {
  id
  image_url
  text
  user {
    first_name
    last_name
    id
  }
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on auth_users {
  id
  first_name
  last_name
  email
}
    `;
export const LoginDocument = gql`
    mutation Login($args: LoginArgs!) {
  login(args: $args) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($args: RegisterArgs!) {
  register(args: $args) {
    token
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    image_url
    text
    user_id
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<never, PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const PostsStreamDocument = gql`
    subscription PostsStream {
  posts {
    id
    image_url
    user_id
    text
  }
}
    `;

export function usePostsStreamSubscription<R = PostsStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, PostsStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<PostsStreamSubscription, R>) {
  return Urql.useSubscription<PostsStreamSubscription, R, PostsStreamSubscriptionVariables>({ query: PostsStreamDocument, ...options }, handler);
};
export const InsertPostDocument = gql`
    mutation InsertPost($object: posts_insert_input = {}) {
  insert_posts_one(object: $object) {
    ...postsFragment
  }
}
    ${PostsFragmentFragmentDoc}`;

export function useInsertPostMutation() {
  return Urql.useMutation<InsertPostMutation, InsertPostMutationVariables>(InsertPostDocument);
};
export const UpdatePostDocument = gql`
    mutation UpdatePost($where: posts_bool_exp = {}, $_set: posts_set_input = {}) {
  update_posts(where: $where, _set: $_set) {
    returning {
      ...postsFragment
    }
  }
}
    ${PostsFragmentFragmentDoc}`;

export function useUpdatePostMutation() {
  return Urql.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument);
};
export const DeletePostDocument = gql`
    mutation DeletePost($where: posts_bool_exp = {}) {
  delete_posts(where: $where) {
    returning {
      ...postsFragment
    }
  }
}
    ${PostsFragmentFragmentDoc}`;

export function useDeletePostMutation() {
  return Urql.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument);
};
export const UsersDocument = gql`
    query Users($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};
export const UsersStreamDocument = gql`
    subscription UsersStream($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersStreamSubscription<R = UsersStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, UsersStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<UsersStreamSubscription, R>) {
  return Urql.useSubscription<UsersStreamSubscription, R, UsersStreamSubscriptionVariables>({ query: UsersStreamDocument, ...options }, handler);
};