for i in range(len(split_index) - 2, 1, -1):
    subset = split_index[i-2:i+1]
    addChildren2Parent(col_info, [subset[0], subset[1]], [
        subset[1], subset[2]])
for i in range(split_index[0], split_index[1]):
    col_info_tree.append(col_info[i])
print(col_info_tree)