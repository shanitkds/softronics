a = [1, 2, 2, 3, 4, 5]

def delete_duplicates_list(arr):
    result = []
    for i in range(len(arr)):
        if i == 0 or arr[i] != arr[i - 1]:
            result.append(arr[i])
    return result

print(delete_duplicates_list(a))  # Output: [1, 2, 3, 4, 5]
