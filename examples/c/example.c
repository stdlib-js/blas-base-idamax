/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/blas/base/idamax.h"
#include <stdio.h>

int main( void ) {
	// Create strided array:
	const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

	// Specify the number of element:
	const int N = 8;

	// Specify stride:
	const int strideX = 1;

	// Compute the index of the maximum absolute value:
	int idx = c_idamax( N, x, strideX );

	// Print the result:
	printf( "index value: %d\n", idx );

	// Compute the index of the maximum absolute value:
	idx = c_idamax_ndarray( N, x, -strideX, N-1 );

	// Print the result:
	printf( "index value: %d\n", idx );
}
